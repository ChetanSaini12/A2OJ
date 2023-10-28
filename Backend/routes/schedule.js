const express=require('express')

const { atcoderContest, codechefContest, codeforcesContest, leetCodeContest, fastforcesContest  } = require('../ApiCalls/contestapi')
const contestRouter = express.Router()


contestRouter.get('/atcoder', atcoderContest)
contestRouter.get('/codechef', codechefContest)
contestRouter.get('/codeforces', codeforcesContest)
contestRouter.get('/leetcode', leetCodeContest)
contestRouter.get('/fastforces', fastforcesContest)



module.exports=contestRouter