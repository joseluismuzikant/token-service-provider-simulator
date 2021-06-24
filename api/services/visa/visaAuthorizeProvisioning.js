const http = require('../http.js')

const callIssuerDigitization = (body, response) => {

    const request = {
        "tokenInfo": {
            "token": "6558 5885 5855 4535",
            "tokenType": "SECURE_ELEMENT",
            "tokenStatus": "ACTIVE",
            "tokenExpirationDate": {
                "month": "9",
                "year": "2024"
            },
            "tokenAssuranceLevel": "ab",
            "numberOfActiveTokensForPAN": 2020,
            "numberOfInactiveTokensForPAN": 2020,
            "numberOfSuspendedTokensForPAN": 2020,
            "tokenActivationDate": "1985-04-12",
            "lastTokenStatusUpdatedTime": "1985-04-12",
            "tokenDeactivationDate": "1985-04-12",
            "originalToken": "5852 2585 2588 5254",
            "originalTokenRequestorID": 40000000052,
            "originalTokenReferenceID": "DNITHE301616178439057312",
            "originalTokenAssuranceLevel": "ab"
        },
        "panReferenceID": "VGY66666",
        "lifeCycleTraceID": 5757575,
        "walletAccountEmailAddressHash": "SFSFS",
        "clientWalletAccountID": "ASFSDASDASD33244",
        "panSource": "KEY_ENTERED",
        "addressVerificationResultCode": "A",
        "cvv2ResultsCode": "N",
        "consumerEntryMode": "UNKNOWN",
        "locale": "en_US",
        "deviceInfo": {
            "deviceID": "t65653hdjjeueryu",
            "deviceLanguageCode": "eng",
            "deviceType": "TABLET",
            "deviceName": "My Work Phone",
            "deviceNumber": "1234567890123",
            "osType": "ANDROID",
            "osVersion": "4.4.4",
            "osBuildID": "KTU84M",
            "deviceIDType": "SecureElement",
            "deviceManufacturer": "Apple",
            "deviceBrand": "Galaxy",
            "deviceModel": "SGH-T999",
            "deviceLocation": "+37/-121",
            "deviceIndex": 90,
            "deviceIPAddressV4": "192.168.1.22",
            "locationSource": "WIFI",
            "tokenProtectionMethod": "SOFTWARE"
        },
        "encryptedData": "encryptedDataExample",
        "tokenProviderCode": "VISA",
        "tokenRequestorID": "4005447873",
        "tokenReferenceID": "DNI4577871",
        "hashId": "BANK0001"
    }

    const host = "http://ar-tknsrvcd-01.veritran.net"
    const port = 9090
    const path = "/vtis/v1/tokenRequestors/4005447873/tokens/DNI4577871/approveProvisioning?hashId=BANK0001"

    return http.invokePost(request, host, port, path).then(res => res)
    
}

 module.exports = {
     callIssuerDigitization
 }