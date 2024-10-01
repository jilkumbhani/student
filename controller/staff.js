const storage = require('node-persist');
storage.init();
var student = require('../model/studentmodel');
var staff = require('../model/staffmodel');


exports.staff_login = async (req, res) => {
    var data = await staff.find({ "email": req.body.email });
    var staff_id = await storage.getItem('staff_id');
    console.log(staff_id)
    if (staff_id == undefined) {
            if (data.length == 1) {
                    if (data[0].password == req.body.password) {
                        await storage.setItem('staff_id', data[0].id)
                        res.status(200).json({
                            status: "login staff success",
                            data
                        })
                    } else {
                        res.status(200).json({
                            status: "check password of staff"
                        })
                    }
            } else {
                res.status(200).json({
                    status: "check email of staff"
                })
            }
    } else {
        res.status(200).json({
            status: "already staff login"
        })
    }
}

exports.staff_login_data = async (req, res) => {
    var staff_id = await storage.getItem('staff_id');
    console.log(staff_id)
    var data = await staff.findById(staff_id);
    res.status(200).json({
        status: "staff login details",
        data
    })
}

exports.staff_logout = async (req, res) => {
    await storage.removeItem('staff_id');
    res.status(200).json({
        status: "staff logout"
    })
}

exports.view_student = async (req, res) => {
    var id = await storage.getItem('staff_id');
    if(id == undefined){
        res.status(200).json({
            status: "plz staff login"
        })
}
    else
    {
        var data = await student.find();
        res.status(200).json({
            status: " students ",
            data
        })
     }
}