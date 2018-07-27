exports.public_test = (event, context, callback) => {
    // TODO implement


    console.log("Public Test from Khufu", event, context)

    callback(null, 'Hello from Lambda');


};


exports.admin_test = (event, context, callback) => {
    // TODO implement


    console.log("Admin Test from Khufu", event, context)

    callback(null, 'Hello from Lambda');


};

exports.after_create_client_trigger = (client, callback) => {
    // TODO implement


    console.log("trying to create the client", event, context)

    callback(null, {success:false, connection_down: true});


};

exports.after_update_client_trigger = (client, callback) => {
    // TODO implement


    console.log("trying to create the client", event, context)

    callback(null, {success:true, connection_down: false});


};