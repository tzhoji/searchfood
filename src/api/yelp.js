import axios from 'axios'
const API_TOKEN="7kiXa_ooRr_wmr1oTkPSSsMhxWQr2StmgPWgyDV7qgUkwqsuhCXEvu3-1Xf7YYXgqOeI_dOv2qpTAtAIKFtkJcBONw68zp478Y0oC9IdKFvAHWHeC1aTgPSTqiObZnYx"
export default axios.create({
    
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:`Bearer ${API_TOKEN}`
    }
})