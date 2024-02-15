const express = require("express")
const router = express.Router()
const { login, register } = require("../controllers/empLogin")
const {searchJobs,appliedJobsOfEmp,applyJob,decodeToken,getAllJobs} = require("../controllers/empPage")
const authenticationMiddleware = require("../middleware/empAuth")

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/search").get(authenticationMiddleware,searchJobs)
router.route("/appliedjobs").get(authenticationMiddleware,appliedJobsOfEmp)
router.route("/applyjob").post(authenticationMiddleware,applyJob)
router.route("/decode").get(authenticationMiddleware,decodeToken);
router.route("/allJobs").get(authenticationMiddleware,getAllJobs);

module.exports = router;