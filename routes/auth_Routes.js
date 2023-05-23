import express from "express";
import { signin, signUp } from "../controller/auth_controller.js";
import {
  isRequestValidated,
  validateSignInRequest,
  validateSignUpRequest,
} from "../validators/auth.js";

const router = express.Router();

router.post("/signup", validateSignUpRequest, isRequestValidated, signUp);
router.post("/signin", validateSignInRequest, isRequestValidated, signin);

// router.post('/profile',requireSignIn,(req,res)=>{
//     res.status(200).json({user: 'profile'})
// });

export default router;
