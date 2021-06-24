const http = require('../http.js')

const callIssuerDigitization = (body, response) => {

    const request = {
    "messageReasonCode": "TOKEN_CREATED",
    "dateTimeOfEvent": "2019-11-23T00:01:01",
    "panReferenceID": "12345098761234509876123450987622",
    "walletAccountEmailAddressHash": "1234509876123450987612345098762212345098761234509876123450987622",
    "clientWalletAccountId": "43215098761234509876123450987699",
    "panSource": "TOKEN",
    "addressVerificationResultCode": "1",
    "cvv2ResultsCode": "M",
    "consumerEntryMode": "KEY_ENTERED",
    "locale": "en_US",
    "actionCode": "A",
    "deviceInfo": {
        "deviceID": "DEVICE_ID",
        "deviceLanguageCode": "eng",
        "deviceType": "MOBILE_PHONE",
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
    "encryptedData": "ENCRYPTED_DATA",
    "tokenProviderCode": "VISA",
    "tokenRequestorID": "4005447873",
    "tokenReferenceID": "DNI4577871",
    "eventType": "TOKEN_CREATED"
}

    const host = "http://ar-tknsrvcd-01.veritran.net"
    const port = 9090
    const path = "vtis/v1/tokenRequestors/4005447873/tokens/DNI4577871/tokenChanged?eventType=TOKEN_CREATED"

    return http.invokePost(request, host, port, path).then(res => res)

}

 module.exports = {
     callIssuerDigitization
 }