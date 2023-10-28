const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fetch = require("node-fetch");
const ffcontests = require("./fastforcesData");

const atCoderUrl = "https://atcoder.jp/contests";
const codeChefUrl =
  "https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all";
const codeforcesUrl = "https://codeforces.com/api/contest.list?";
const leetCodeUrl =
  "https://leetcode.com/graphql?query={%20allContests%20{%20title%20titleSlug%20startTime%20duration%20__typename%20}%20}";

const atcoderContest = async (req, res) => {
  const data = [];
  const response = await axios.get(atCoderUrl);
  const $ = cheerio.load(response.data);
  const contests = $(".table-default tbody tr");
  contests.each((index, element) => {
    const curr = cheerio.load(element);
    const name = pretty(curr("td:nth-child(2) a").html());
    const slug = "https://atcoder.jp/" + pretty((curr("td:nth-child(2) a").attr('href')))
    const Stime = parseInt(
      Date.parse(pretty(curr("td:nth-child(1) a time").html()))
    ); //from 2023-01-28(Sat) 08:30 to timestamp
    const str = pretty(curr("td:nth-child(3)").html()).toString();
    const hour = parseInt(str.split(":")[0]);
    const minute = parseInt(str.split(":")[1]);
    const duration = hour * 60 * 60 + minute * 60;
    const Etime = Stime + duration * 1000;

    if (!isNaN(Stime) && !isNaN(Etime) && Etime > Date.now()) {
      //avoiding finished contest and practice contest
      const status = Date.now() > Stime ? "ongoing" : "upcoming";
      const obj = {
        slug: slug,
        name: name,
        start_time: Stime,
        end_time: Etime,
        status: status,
        duration: duration,
        remaining_time: Stime - Date.now(),
      };
      if(status == "upcoming")
      data.push(obj);
    }
  });
  res.status(200).send(data);
};

const codechefContest = async (req, res) => {
  const response = await fetch(codeChefUrl, { method: "GET" });
  const data = [];
  if (response.ok) {
    const jsonObject = await response.json();
    if (jsonObject.status != "success") {
      res.status(503).json({
        success: false,
        message: "Sorry! We are not avaiable now",
      });
    } else {
      const presentContest = jsonObject.present_contests;
      const futureContest = jsonObject.future_contests;

      // for (let i = 0; i < presentContest.length; i++) {
      //   const curr = presentContest[i];

      //   if (curr.contest_code != "GAMES") {
      //     const contestStartUTC = Date.parse(curr.contest_start_date_iso);
      //     const contestEndUTC = Date.parse(curr.contest_end_date_iso);

      //     const obj = {
      //       slug: 'https://www.codechef.com/' + curr.contest_code,
      //       name: curr.contest_name,
      //       start_time: contestStartUTC,
      //       end_time: contestEndUTC,
      //       status: "ongoing",
      //       duration: curr.contest_duration,
      //       remaining_time: Date.parse(curr.contest_end_date_iso) - Date.now(),
      //     };
      //     data.push(obj);
      //   }
      // }
      for (let i = 0; i < futureContest.length; i++) {
        const curr = futureContest[i];

        const obj = {
          slug: 'https://www.codechef.com/' + curr.contest_code,
          name: curr.contest_name,
          start_time: Date.parse(curr.contest_start_date_iso),
          end_time: Date.parse(curr.contest_end_date_iso),
          status: "upcoming",
          duration: curr.contest_duration * 60,
          remaining_time: Date.parse(curr.contest_start_date_iso) - Date.now(),
        };
        data.push(obj);
      }
    }
  } else {
    res.status(503).json({
      success: false,
      message: "Sorry! We are not avaiable now",
    });
  }
  // console.log(jsonObject);

  res.status(200).send(data);
};


const codeforcesContest = async (req, res) => {
    
    const response = await fetch(codeforcesUrl, { method: "GET" })
    const data=[]
    if (response.ok)
    {
        const jsonObject = await response.json();
        if (jsonObject.status == "OK")
        {
            const arr = jsonObject.result
            
            for (let i = 0; i < arr.length; i++)
            {
                const curr = arr[i]
                // if (curr.phase == "BEFORE"||curr.phase=="CODING")
                if (curr.phase == "BEFORE")
                {
                    const obj = {
                        slug: 'https://codeforces.com/contests',
                        name: curr.name,
                        start_time: (curr.startTimeSeconds)*1000,
                        end_time: (curr.startTimeSeconds + curr.durationSeconds)*1000 ,
                        status:(curr.phase=="BEFORE")?"upcoming":"ongoing",
                        duration: curr.durationSeconds,
                        remaining_time:(curr.startTimeSeconds)*1000 - Date.now()
                    }
                    data.push(obj)
                }
            }
            
        }
    }
    else {
        res.status(503).json({
            success: false,
            message:"Can not load Contest"
        })
    }

    res.status(200).send(data)

}


const leetCodeContest = async (req, res) => {
  const response = await fetch(leetCodeUrl);
  const data = [];
  if (response.ok) {
    const jsonObject = await response.json();

    const arr = jsonObject.data.allContests;
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      const name = curr.title;
      const Stime = curr.startTime * 1000;
      const Etime = Stime + curr.duration * 1000;
      const slug = 'https://leetcode.com/contest/' + curr.titleSlug
      const duration = curr.duration;
      if (Etime > Date.now() && Stime >= Date.now()) {
        const obj = {
          slug: slug,
          name: name,
          start_time: Stime,
          end_time: Etime,
          status: Stime < Date.now() ? "ongoing" : "upcoming",
          duration: duration,
          remaining_time: Stime - Date.now(),
        };
        data.push(obj);
      }
    }
  } else {
    res.status(503).json({
      success: false,
      message: "Could not load Data",
    });
  }
  res.status(200).send(data);
};

const fastforcesContest = async (req, res) => {
  const data = ffcontests;
  res.status(200).send(data);
};

module.exports = {
  atcoderContest,
  codechefContest,
  codeforcesContest,
  leetCodeContest,
  fastforcesContest,
};
