const http = require('../http.js')

const callIssuerDigitization = (body, response) => {

    const request = {
        "tokenProviderCode":"VISA",
        "tokenRequestorID":4005447873,
        "tokenReferenceID":"DNI4577871",
        "panReferenceID":"12345666646",
        "lifeCycleTraceID":12345,
        "panSource":"TOKEN",
        "deviceInfo":{
           "deviceID":"DEVICE_ID",
           "deviceLanguageCode":"eng",
           "deviceType":"MOBILE_PHONE",
           "deviceName":"My Work Phone",
           "deviceNumber":"1234567890123",
           "osType":"ANDROID",
           "osVersion":"4.4.4",
           "osBuildID":"KTU84M",
           "deviceIDType":"SecureElement",
           "deviceManufacturer":"Apple",
           "deviceBrand":"Galaxy",
           "deviceModel":"SGH-T999",
           "deviceLocation":"+37/-121",
           "deviceIndex":90,
           "deviceIPAddressV4":"192.168.1.22",
           "locationSource":"WIFI",
           "tokenProtectionMethod":"SOFTWARE"
        },
        "encryptedData":"encryptedDataExample",
        "month":"12",
        "year":"2024"
     }

    const host = "http://ar-tknsrvcd-01.veritran.net"
    const port = 9090
    const path = "vtis/v1/checkEligibility"

    return http.invokePost(request, host, port, path).then(res => res)

}

 module.exports = {
     callIssuerDigitization
 }