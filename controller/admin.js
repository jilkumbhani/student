const storage = require('node-persist');
storage.init();
var admin = require('../model/adminmodel');
var student = require('../model/studentmodel');
var staff = require('../model/staffmodel');
var course= require('../model/cousremodel');
var content= require('../model/contentmodel');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jilkumbhani@gmail.com',
    pass: 'msdh ghxv vbou jdsf'
  }
});

exports.admin_register = async (req,res) => {
    var mailOptions = {
        from: 'jilkumbhani@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    var data = await admin.create(req.body)
    res.status(200).json({
        status: "admin register succes",
        data
    })
}

exports.admin_data = async (req,res) => {
    var data = await admin.find(req.body)
    res.status(200).json({
        status: "admin data",
        data
    })
}

exports.admin_login = async (req, res) => {
    var data = await admin.find({ "email": req.body.email });
    var admin_id = await storage.getItem('admin_id');
    console.log(admin_id)
    if (admin_id == undefined) {
            if (data.length == 1) {
                    if (data[0].password == req.body.password) {
                        await storage.setItem('admin_id', data[0].id)
                        res.status(200).json({
                            status: "true",
                            data
                        })
                    } else {
                        res.status(200).json({
                            status: "check password of admin"
                        })
                    }
            } else {
                res.status(200).json({
                    status: "check email of admin"
                })
            }
    } else {
        res.status(200).json({
            status: "already admin login"
        })
    }
}

exports.admin_login_data = async (req, res) => {
    var admin_id = await storage.getItem('admin_id');
    console.log(admin_id)
    var data = await admin.findById(admin_id);
    res.status(200).json({
        status: "admin login details",
        data
    })
}

exports.admin_logout = async (req, res) => {
    await storage.removeItem('admin_id');
    res.status(200).json({
        status: "admin logout"
    })
}

exports.add_student = async (req,res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
}
    else
    {
        var data = await student.create(req.body);
        res.status(200).json({
            status: "add students success",
            data
        })
     }
}

exports.view_student = async (req, res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
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

exports.student_update= async (req, res) => {

    var id = req.params.id
   
        var data = await student.findByIdAndUpdate(id,req.body);
        res.status(200).json({
        status: "student updated",
        data
      })
}

exports.student_delete = async (req, res) => {

    var id = req.params.id

    var data = await student.findByIdAndDelete(id,req.body);
    res.status(200).json({
    status: "student deleted"
  })
}

exports.student_id_data= async (req, res) => {

    id = req.params.id
   
        var data = await student.findById(id);
        res.status(200).json({
        status: "student id data",
        data
      })
}

exports.add_staff = async (req,res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
}
    else
    {
        var data = await staff.create(req.body);
        res.status(200).json({
            status: "add staff success",
            data
        })
     }
}

exports.view_staff = async (req, res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
}
    else
    {
        var data = await staff.find();
        res.status(200).json({
            status: " staffs ",
            data
        })
     }
}

exports.delete_staff = async (req,res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
     }
    else
    {
        var id =req.params.id
        var data = await staff.findByIdAndDelete(id);
        res.status(200).json({
            status: "delete staff success",
        })
    }

}

exports.staff_id_data = async (req, res) => {
    id = req.params.id
    var data = await staff.findById(id)
    res.status(200).json({
        stutus: "success",
        data
    })
}

exports.update_staff = async (req, res) => {
    var id = req.params.id
    var data = await staff.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        status: "data update succussfully",
        data
    })
}

exports.add_course = async (req,res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
}
    else
    {
        var data = await course.create(req.body);
        res.status(200).json({
            status: "add course success",
            data
        })
     }
}

exports.view_course = async (req, res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
}
    else
    {
        var data = await course.find();
        res.status(200).json({
            status: " courses ",
            data
        })
     }
}

exports.delete_course = async (req,res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
     }
    else
    {
        var id =req.params.id
        var data = await course.findByIdAndDelete(id);
        res.status(200).json({
            status: "delete course success",
        })
    }

}

exports.course_id_data = async (req, res) => {
    id = req.params.id
    var data = await course.findById(id)
    res.status(200).json({
        stutus: "success",
        data
    })
}

exports.update_course = async (req, res) => {
    var id = req.params.id
    var data = await course.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        status: "data update succussfully",
        data
    })
}

exports.admin_update= async (req, res) => {

    var id = req.params.id
   
        var data = await admin.findByIdAndUpdate(id,req.body);
        res.status(200).json({
        status: "admin updated",
        data
      })
}

exports.admin_delete = async (req, res) => {

    var id = req.params.id

    var data = await admin.findByIdAndDelete(id,req.body);
    res.status(200).json({
    status: "admin deleted"
  })
}

exports.id_data= async (req, res) => {

    id = req.params.id
   
        var data = await admin.findById(id);
        res.status(200).json({
        status: "admin id data",
        data
      })
}

exports.add_content = async (req,res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
}
    else
    {
        var data = await content.create(req.body);
        res.status(200).json({
            status: "add content success",
            data
        })
     }
}

exports.view_content = async (req, res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
}
    else
    {
        var data = await content.find();
        res.status(200).json({
            status: " content ",
            data
        })
     }
}

exports.delete_content = async (req,res) => {
    var id = await storage.getItem('admin_id');
    req.body.admin_id = id;
    if(id == undefined){
        res.status(200).json({
            status: "plz login"
        })
     }
    else
    {
        var id =req.params.id
        var data = await content.findByIdAndDelete(id);
        res.status(200).json({
            status: "delete content success",
        })
    }

}

exports.content_id_data = async (req, res) => {
    id = req.params.id
    var data = await content.findById(id)
    res.status(200).json({
        stutus: "success",
        data
    })
}

exports.update_content = async (req, res) => {
    var id = req.params.id
    var data = await content.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        status: "data update succussfully",
        data
    })
}
