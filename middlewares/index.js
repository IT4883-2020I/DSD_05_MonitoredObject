const jwt = require('jsonwebtoken');
const axios = require('axios');

exports.auth = async (req, res, next) => {
    try {

        let headers = {
            'api-token' : req.headers["api-token"],
            'project-type' : 'DE_DIEU'
        }
       
        axios.get('https://distributed.de-lalcool.com/api/verify-token', {
            headers: headers
        }).then((res) => {
            if(res.data.result) {
                next();
            }
            else{
                throw Error("unauthorization")
            }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            content: error.message
        })
    }
}