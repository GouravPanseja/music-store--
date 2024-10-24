// import nodemailer from "nodemailer";
// require("dotenv").config();


// let transporter = nodemailer.createTransport({
//     service:"gmail",
//     host:"smtp.gmail.com",
//     port:587,
//     secure:false,
//     auth:{
//         user: "gouravpanseja25@gmail.com",
//         pass: "kubrwaqgdivqzdlq"
//     }
// });

//  const mailSender = async (email,title, body)=>{
    
//     try{

//         let info = await transporter.sendMail({

//             from:{
//                 name: 'Gourav Panseja',
//                 address:process.env.MAIL_USER,
//             },
//             to: `${email}`,
//             subject:`${title}`,
//             text:`${body}`,
//         })        

//     }
//     catch(err){
//         console.log("error is ", err);
//         console.log(err.message);
//     }
// }
// const sendVerificationEmail =  async(email)=>{
//     try{
//         console.log('email is -------->', email);
//         const emailResponse = await mailSender(email, "Email from SyncMusic", "You have successfully logged in to Sync Fusion");
//         console.log("Email sent succesfully");
//     }       

//     catch(err){
//         console.log("error occured while sending mail");
//         console.log("error" ,err.message);
//         throw err;
//     }
// }
// export default sendVerificationEmail;

