exports.after_create_booking_trigger = (data, callback) => {
    // TODO implement
    // Do some awesome stuff
    console.log("After creating the booking", data)
    console.log("some logging", {a: "b"})

    // to return errors from this script, return anything other than a 200
    callback(null, {richard: "Awesome", status: 303});
};
