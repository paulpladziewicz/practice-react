// declares a protocol and domain through API_BASE_URL
const API_BASE_URL = 'http://paulpladziewicz.s3-website.us-east-2.amazonaws.com/';

// creates and exports API_ENDPOINTS object with a TODO_ITEMS property.
export const API_ENDPOINTS = {
    // has value of protocal and domain with data.json path.
    TODO_ITEMS: API_BASE_URL + 'data.json'
    // the object makes it simple to change paths via conditional statements
}
