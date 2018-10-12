exports.sso_script = (data, callback) => {
    console.log("Running SSO script with token:", data.token)

    if(data.token == 1234){
        callback(null, {'status': 'success', 'data': {'first_name': 'Charles', 'last_name': 'Mumby', 'email': 'cmumby+1@bookingbug.com', 'mobile': '6175106267', 'member_id': '1'}});
    }else{
        callback(null, {'status': 'failure', 'data': {'error': 'invalid token'}});
    }
};
