const fetch = require("node-fetch")

const invokePost = async (request, host, port, resource) => {

    let url = `${host}:${port}/${resource}`

    console.log(url)

    let headers = {
        'Content-Type' : 'application/json'
    }

    let optionalOptions = {
        method : 'POST',
        headers,
        body: JSON.stringify(request)
    }

    console.log(optionalOptions)

    const issuerResponse = await fetch(url, optionalOptions)
    console.log(issuerResponse)
    return await issuerResponse.json()

}

module.exports = {
    invokePost
}