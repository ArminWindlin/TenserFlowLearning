"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANT: This controller won't work without adding local or cloud credentials!
// Add a local oauth_data.ts file, where you export clientCredentials:
//import * as oa_data from "../test/oauth_data";
// Remove comment tags after adding credentials
exports.checkToken = (req, res, next) => {
    oauth(req.get('Authorization').slice(7), res, body => {
        let user = JSON.parse(body);
        console.log(user.user_name + ' made a request ☺');
        if ('user_id' in user)
            next();
        else
            res.status(401).send({
                status: "unauthorized",
                code: 401,
                messages: 'Invalid Token',
                result: {}
            });
    });
};
function oauth(token, response, callback) {
    /*
    let data = process.env.VCAP_SERVICES ?
        JSON.parse(process.env.VCAP_SERVICES).corpid[0].credentials :
        oa_data;
    let options = {
        method: "POST",
        url: data.checkTokenEndpoint,
        auth: {
            user: data.clientId,
            password: data.clientSecret,
        },
        form: {
            token: token
        }
    };
    request(options, function (err, res, body) {
        if (err) {
            console.dir(err);
            return;
        }
        callback(body);
    });
    */
}
exports.oauth = oauth;
//# sourceMappingURL=oauthC.js.map