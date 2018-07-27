exports.public_test = (data, callback) => {
    // TODO implement


    console.log("Public Test from Khufu", data)

    callback(null, 'Hello from Lambda');


};


exports.admin_test = (data, callback) => {
    // TODO implement


    console.log("Admin Test from Khufu", data)

    callback(null, 'Hello from Lambda');


};

exports.after_create_client_trigger = (data, callback) => {
    // TODO implement


    console.log("trying to create the client", data)

    callback(null, {success:false, connection_down: true});


};

exports.after_update_client_trigger = (data, callback) => {
    // TODO implement


    console.log("trying to create the client", data)

    callback(null, {success:true, connection_down: false});


};