const express = require("express")
const { login, register,decodeToken,emailVerification } = require("../controllers/companyLoginController")
const {createJobPost,deleteJobPost,updateJobPost,getALLJobPost,getJobPost,applied_Jobs,acceptOrRejectApplicant,rejectApplicant,search,getAllApplications,get_Company_details} = require("../controllers/companyPage")
const router = express.Router()
const authenticationMiddleware = require("../middleware/auth")

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/emailVerification").post(emailVerification);
router.route("/decode").get(authenticationMiddleware,decodeToken);
router.route("/add").post(authenticationMiddleware,createJobPost);
router.route("/delete").delete(authenticationMiddleware,deleteJobPost);
router.route("/update").patch(authenticationMiddleware,updateJobPost);
router.route("/allposts").get(authenticationMiddleware,getALLJobPost);
router.route("/post/:id").get(authenticationMiddleware,getJobPost);
router.route("/applications").get(authenticationMiddleware,applied_Jobs);
router.route("/acceptorreject").post(authenticationMiddleware,acceptOrRejectApplicant);
router.route("/reject").delete(authenticationMiddleware,rejectApplicant);
router.route("/search").get(authenticationMiddleware,search)
router.route("/jobapplications").get(authenticationMiddleware,getAllApplications);
router.route("/details").get(authenticationMiddleware,get_Company_details)


module.exports = router