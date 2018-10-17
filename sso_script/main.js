exports.sso_script = (data, callback) => {
    console.log("Running SSO script with token:", data.token)

    if(data.token == 1234){
        callback(null, {'status': 'success', 'data': {'first_name': 'Gwe', 'last_name': 'Limpalaer', 'email': 'glimpalaer+10@bookingbug.com', 'mobile': '1231231233'}});
    }else{
        callback(null, {'status': 'failure', 'data': {'error': 'invalid token'}});
    }
};
