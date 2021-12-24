const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const {
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray
} = require("./helpers");

app.get("/mean", (req, res, next) => {
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
    operation: "mean",
    result: findMean(nums)
    }  

    return res.send(result);
});

app.get("/median", (req, res, next) => {
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);
    
    let result = {
    operation: "median",
    result: findMedian(nums)
    }
    
    return res.send(result)
});

app.get("/mode", (req, res, next) => {
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
    operation: "mode",
    result: findMode(nums)
    }

    return res.send(result);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});