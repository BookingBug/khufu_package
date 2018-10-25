exports.member_sso_script = (data, callback) => {
    console.log("Running SSO script with token:", data.token)

    if(data.token == 1234){
        callback(null, {'status': 'success', 'data': {'first_name': 'gwe', 'last_name': 'Limpalaer', 'email': 'glimpalaer+5@bookingbug.com', 'ref': 'gwe1'}});
    }else{
        callback(null, {'status': 'failure', 'data': {'error': 'invalid token'}});
    }
};

exports.admin_sso_script = (data, callback) => {
    console.log("Running SSO script with token:", data.token)

    if(data.token == 1234){
        callback(null, {'status': 'success', 'data': {'first_name': 'gwe', 'last_name': 'Limpalaer', 'email': 'glimpalaer+5@bookingbug.com', 'company_id': 37000 }});
    }else{
        callback(null, {'status': 'failure', 'data': {'error': 'invalid token'}});
    }
};
