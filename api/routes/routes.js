const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
var uuid = require('uuid');

const visaCheckEligibility = require("../services/visa/visaCheckEligibility.js")
const visaAuthorizeProvisioning = require("../services/visa/visaAuthorizeProvisioning.js")
const visaCreateNotification = require("../services/visa/visaCreateNotification.js")
const masterAuthorizeService = require("../services/mastercard/masterAuthorizeService.js")

function getFileAsJsonObject(provider, file){
    const responseFilePath = path.join(__dirname ,'/responses/',provider, file);
    let rawData = fs.readFileSync(responseFilePath);
    let responseBody = JSON.parse(rawData);
    return responseBody;
}

// Handle incoming GET requests
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Welcome to Token Provider Simulator!'
    });
});

//Master routes
router.post('/checkEligibility', function(req, res){
   let  jsonFromFile = getFileAsJsonObject('/master', 'checkEligibility.json');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonFromFile));

});

router.post('/digitize', async function(req, res){
    await masterAuthorizeService.callIssuerDigitization(req,res)
    let  jsonFromFile = getFileAsJsonObject('/master', 'digitize.json');
    jsonFromFile.tokenInfo.tokenUniqueReference = uuid.v1();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonFromFile));
});


//Visa routes
router.post('/panData', async (req, res) => {
    await visaCheckEligibility.callIssuerDigitization(req, res);
    let  jsonFromFile = getFileAsJsonObject('/visa', 'panData.json');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonFromFile));
});

router.post('/enrollPan', async (req, res) => {
    await visaAuthorizeProvisioning.callIssuerDigitization(req, res)
    let  jsonFromFile = getFileAsJsonObject('/visa', 'enrollPan.json');
    jsonFromFile.vPanEnrollmentID = uuid.v1();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonFromFile));
});

router.post('/confirmProvisioning', async function(req, res){
    await visaCreateNotification.callIssuerDigitization(req, res)
    let  jsonFromFile = getFileAsJsonObject('/visa', 'confirmProvisioning.json');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonFromFile));
});


// Visa | Token Provider - Issuer Digitization - Issuer

router.post("/visa/checkEligibility", (req, res) => {
    visaCheckEligibility.callIssuerDigitization(req, res)
})

router.post("/visa/authorizeProvisioning", (req, res) => {
    visaAuthorizeProvisioning.callIssuerDigitization(req, res)
})

module.exports = router;