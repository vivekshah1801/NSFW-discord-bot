const axios = require('axios')

const imageLink = "https://images.unsplash.com/photo-1531469535976-c6fc3604014f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80";
const endpoint = "https://centralindia.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessImage/Evaluate"
const AZURE_MODERATION_KEY = "34623dbf348d449f95991cc7c7a8191e"

let headers = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": AZURE_MODERATION_KEY,
}

let body = {
    "DataRepresentation":"URL",
    "Value": imageLink
}

axios.post(endpoint, body, {headers})
    .then(res => {
        console.log(res.data);
    })
    .catch(err=>{
        console.error(res.error)
    })