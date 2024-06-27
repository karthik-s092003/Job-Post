const express = require("express")
const router = express.Router()
const multer = require('multer');
const { login, register } = require("../controllers/empLogin")
const {searchJobs,handleUpload,listFiles,appliedJobsOfEmp,applyJob,decodeToken,getAllJobs,getAllStatus,getLocationList,getCompanyList} = require("../controllers/empPage")
const authenticationMiddleware = require("../middleware/empAuth")
const upload = multer({ storage: multer.memoryStorage() });

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/search").get(authenticationMiddleware,searchJobs)
router.route("/appliedjobs").get(authenticationMiddleware,appliedJobsOfEmp)
router.route("/applyjob").post(authenticationMiddleware,applyJob)
router.route("/decode").get(authenticationMiddleware,decodeToken);
router.route("/allJobs").get(authenticationMiddleware,getAllJobs);
router.route("/status").get(authenticationMiddleware,getAllStatus);
router.route("/loc").get(authenticationMiddleware,getLocationList);
router.route("/cmp").get(authenticationMiddleware,getCompanyList);
router.post('/upload', upload.single('file'), handleUpload);
router.get('/list-files/:empName',listFiles);

module.exports = router;