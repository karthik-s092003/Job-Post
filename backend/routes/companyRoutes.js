const express = require("express")
const { login, register,decodeToken } = require("../controllers/companyLoginController")
const {createJobPost,deleteJobPost,updateJobPost,getALLJobPost,getJobPost,applied_Jobs,acceptApplicant,rejectApplicant,search,getAllApplications} = require("../controllers/companyPage")
const router = express.Router()
const authenticationMiddleware = require("../middleware/auth")

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/decode").get(authenticationMiddleware,decodeToken);
router.route("/add").post(authenticationMiddleware,createJobPost);
router.route("/delete").delete(authenticationMiddleware,deleteJobPost);
router.route("/update").patch(authenticationMiddleware,updateJobPost);
router.route("/allposts").get(authenticationMiddleware,getALLJobPost);
router.route("/post/:id").get(authenticationMiddleware,getJobPost);
router.route("/applications").get(authenticationMiddleware,applied_Jobs);
router.route("/accept").patch(authenticationMiddleware,acceptApplicant);
router.route("/reject").delete(authenticationMiddleware,rejectApplicant);
router.route("/search").get(authenticationMiddleware,search)
router.route("/jobapplications").get(authenticationMiddleware,getAllApplications);


module.exports = router