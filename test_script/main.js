exports.after_create_booking_trigger = (data, callback) => {
    // TODO implement
    console.log("After creating the booking", data)

    callback(null, {richard: "Awesome", status: 303});
};
