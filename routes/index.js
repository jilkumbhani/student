var express = require('express');
var router = express.Router();
var admin = require('../controller/admin')
var staff = require('../controller/staff')

router.post('/user',admin.admin_register)
router.get('/user',admin.admin_data)

router.post('/user/update/:id',admin.admin_update)
router.get('/user/delete/:id',admin.admin_delete)
router.get('/ad_data/:id',admin.id_data)

router.post('/login',admin.admin_login);
router.get('/login',admin.admin_login_data);
router.get('/logout',admin.admin_logout);

router.post('/student',admin.add_student)
router.get('/student',admin.view_student)

router.post('/student/update/:id',admin.student_update)
router.get('/student/delete/:id',admin.student_delete)
router.get('/st_data/:id',admin.student_id_data)

router.post('/staff',admin.add_staff)
router.get('/staff',admin.view_staff)

router.post('/staff/update/:id',admin.update_staff)
router.get('/staff/delete/:id',admin.delete_staff)
router.get('/stf_data/:id',admin.staff_id_data)

router.post('/course',admin.add_course)
router.get('/course',admin.view_course)

router.post('/course/update/:id',admin.update_course)
router.get('/course/delete/:id',admin.delete_course)
router.get('/c_data/:id',admin.course_id_data)

router.post('/stafflogin',staff.staff_login);
router.get('/stafflogin',staff.staff_login_data);
router.get('/stafflogout',staff.staff_logout);

router.get('/stafflogin/student',staff.view_student);

router.post('/content',admin.add_content)
router.get('/content',admin.view_content)

router.post('/content/update/:id',admin.update_content)
router.get('/content/delete/:id',admin.delete_content)
router.get('/cn_data/:id',admin.content_id_data)


module.exports = router;
