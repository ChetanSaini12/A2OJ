export const verification = async function (userId) {
  try {
    const url = `https://codeforces.com/api/user.info?handles=${userId.trim()}`;
    const resp = await fetch(url);
    console.log(resp, "resp from verification");
    if (resp.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const postData = async function (userId) {
  try {
    console.log("entered");
    const response = await fetch(
      `https://glamorous-sunglasses-toad.cyclic.app/user/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    // console.log(response, "from here bitch");
    if (!response.ok) {
      return 0;
    }
    const data = await response.json();
    // Handle the response data
    console.log(data);
    return 1;
  } catch (error) {
    // Handle any errors
    return 1;
  }
};
