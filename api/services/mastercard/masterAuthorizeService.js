const http = require('../http.js')

const callIssuerDigitization = (body, response) => {
    const request = {
        "walletId":"123",
        "mobileNumberSuffix":"1234",
        "accountIdHash":"5ae9c9890b326bd23bfa9db9672298ae3b10a9388e56ec17a001e191f24572aa",
        "services":[
            "DIGITIZATION"
        ],
        "tokenRequestorId":"12345678901",
        "deviceInfo":{
            "serialNumber":"2F6D63",
            "isoDeviceType":"09",
            "osVersion":"4.4",
            "formFactor":"PHONE",
            "storageTechnology":"SE",
            "imei":"352099001761481",
            "paymentTypes":[
                "NFC"
            ],
            "osName":"ANDROID",
            "msisdn":"7307406945",
            "cardCaptureTechnology":"CAMERA",
            "deviceName":"My Phone"
        },
        "walletProviderDecisioningInfo":{
            "recommendationStandardVersion":"1.0.0",
            "deviceScore":"3",
            "accountScore":"4",
            "accountLifeTime":"4",
            "recommendedDecision":"REQUIRE_ADDITIONAL_AUTHENTICATION",
            "phoneNumberScore":"",
            "recommendationReasons":[
                "Account_TOO_NEW",
                "DEVICE_RECENTLY_LOST",
                "OUTSIDE_HOME_TERRITORY"
            ]
        },
        "paymentAppInstanceId":"1b24f24a24ba98e27d43e345b532a245e4723d7a9c4f624e93452c",
        "requestId":"123456",
        "fundingAccountInfo":{
            "encryptedPayload":{
                "encryptedData":{
                    "paymentAccountReference":"512381d9f8e0629211e3949a08002",
                    "cardAccountData":{
                        "expiryMonth":"12",
                        "securityCode":"123",
                        "expiryYear":"15",
                        "accountNumber":"5123456789012345"
                    },
                    "tokenData":{
                        "sequenceNumber":"17",
                        "expiryMonth":"10",
                        "expiryYear":"17",
                        "token":"5345678901234521"
                    },
                    "accountHolderData":{
                        "accountHolderAddress":{
                            "country":"USA",
                            "city":"St. Louis",
                            "postalCode":"61000",
                            "line2":"Apt. 4B",
                            "line1":"100 1st Street",
                            "countrySubdivision":"MO"
                        },
                        "consumerIdentifier":"1b24f24a24ba98e27d43e345b532a245e4723d7a9c4f624e93452c1b24f24a24b",
                        "accountHolderMobilePhoneNumber":{
                            "phoneNumber":"4692392391",
                            "countryDialInCode":"1"
                        },
                        "sourceIp":"127.0.0.1",
                        "accountHolderEmailAddress":"abcdef@xyz.com",
                        "accountHolderName":"John Doe",
                        "deviceLocation":"38.63/-90.2"
                    },
                    "source":"ACCOUNT_ON_FILE",
                    "financialAccountData":{
                        "countryCode":"GBR",
                        "interbankCardAssociationId":"1234",
                        "financialAccountId":"5123456789012345"
                    },
                    "dataValidUntilTimestamp":"2015-07-04T12:09:56.123-07:00"
                },
                "publicKeyFingerprint":"4c4ead5927f0df8117f178eea9308daa58e27c2b",
                "encryptedKey":"A1B2C3D4E5F6112233445566",
                "oaepHashingAlgorithm":"SHA512",
                "iv":"31323334353637383930313233343536"
            },
            "panUniqueReference":"FWSPMC000000000159f71f703d2141efaf04dd26803f922b"
        },
        "activeTokenCount":"3",
        "correlationId":"D98765432104",
        "tokenType":"CLOUD"
    };

    const host = "http://ar-tknsrvcd-01.veritran.net"
    const port = 9090
    const path = "/authorizeService"

    return http.invokePost(request, host, port, path).then(res => res)

}

module.exports = {
    callIssuerDigitization
}

 