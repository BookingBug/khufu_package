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