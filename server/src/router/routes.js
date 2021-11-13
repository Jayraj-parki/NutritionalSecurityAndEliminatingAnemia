const express = require('express')
const bcrypt = require('bcryptjs')
const validator = require("validator")
const router = express.Router()
const NutritionalFood = require("../model/NutritionalFood")
const AnaemiaType = require("../model/AnaemiaType")
const Hospital = require("../model/Hospital")
const Doctor = require("../model/Doctor")
const Message = require("../model/Messages")
const User = require("../model/User")
const authentication = require('../auth/authentication')

router.get("/data", authentication, (req, res) => {
    res.send(req.rootUser)
})

router.post("/register", async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body
        if (!fname || !lname || !email || !password) {
            return res.status(422).json({ err: "PLz fill all the field properties " })
        }
        else if (!validator.isEmail(email)) {
            return res.status(422).json({ err: "Enter a valid email" })

        }
        else {
            const userExist = await User.findOne({ email: email })
            if (userExist) {
                return res.status(422).json({ err: "Email already exists" })

            }
            else {
                const user = new User({ fname, lname, email, password })
                await user.save()
                return res.status(201).json({ msg: "Registered Successfully" })
            }
        }

    } catch (err) {
        return res.status(422).json({ err: err })
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ err: "PLz fill all the field properties" })
        }
        else {
            const userLogin = await User.findOne({ email: email })
            if (userLogin) {
                const isMatch = await bcrypt.compare(password, userLogin.password)
                if (!isMatch) {
                    return res.status(400).json({ err: "InValid credential" })
                }
                const token = await userLogin.generateToken();
                res.cookie("jwttoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                return res.status(201).json({ msg: "User login successfully" })
            }
            else {
                return res.status(400).json({ err: "InValid credential" })
            }
        }
    }
    catch (err) {
        console.log("Error in login" + err)
    }
})


router.post("/getNutrients", async (req, res) => {
    try {
        const nutrient = await NutritionalFood.find({ nutrient: req.body.nutrient })
        res.status(201).send(nutrient)
    }
    catch (err) {
        res.status(404).json({ err: "No user Found" })
    }
})

router.post("/setNutrientsData", async (req, res) => {
    try {
        const user = new NutritionalFood(req.body)
        await user.save()
        return res.status(201).send(user)

    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
})
router.post("/addAnaemiaType", async (req, res) => {
    try {

        const anaemia = new AnaemiaType(req.body)
        await anaemia.save()
        return res.status(201).send(anaemia)

    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
})
router.get("/getAnaemiaType", async (req, res) => {
    try {
        const anaemia = await AnaemiaType.find({},{type:1,_id:0})
        res.status(201).send(anaemia)
    }
    catch (err) {
        res.status(404).json({ err: "No anaemia Found" })
    }
})
router.post("/getAnaemiaData", async (req, res) => {
    try {
        const anaemia = await AnaemiaType.find({ type: req.body.type })
        res.status(201).send(anaemia)
    }
    catch (err) {
        res.status(404).json({ err: "No anaemia Found" })
    }
})
router.get("/getHospital", async (req, res) => {
    try {
        const hospital = await Hospital.find()
        res.status(201).send(hospital)
    }
    catch (err) {
        res.status(404).json({ err: "No anaemia Found" })
    }
})
router.post("/addHospital", async (req, res) => {
    try {

        const hospital = await Hospital.insertMany(req.body)
        // await hospital.save()
        return res.status(201).send(hospital)

    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
}) 
router.post("/addAllDoctor", async (req, res) => {
    try {

        const doctor = await Doctor.insertMany(req.body)
        // await doctor.save()
        return res.status(201).send(doctor)

    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
})
router.get("/getDoctor", async (req, res) => {
    try {
        const doctor = await Doctor.find({})
        // console.log(doctor)
        res.status(201).send(doctor)
    }
    catch (err) {
        res.status(404).json({ err: "No anaemia Found" })
    }
})
router.post("/addMessage", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body
        if (!name || !email || !phone || !message) {
            return res.status(422).json({ err: "PLz fill all the field properties " })
        }
        else if (!validator.isEmail(email)) {
            return res.status(422).json({ err: "Enter a valid email" })
        }
        else if (phone.length != 10) {
            return res.status(422).json({ err: "PLz Enter Valid phone Number " })
        }
        else {
            const user = await User.findOne({ email: email })
            if (user) {
                const msg = new Message(req.body)
                await msg.save()
                return res.status(201).json({ msg: "Messsage Send Successfully" })
            }  
            return res.status(404).json({ err: "Invalid Credential" })

        }
    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
})
router.get("/getComment", async (req, res) => {
    try {
        const msg = await Message.find({})
        // console.log(doctor)
        res.status(201).send(msg)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ err: "No comment Found" })
    } 
})
router.post("/getReplies", async (req, res) => {
    try {
        if(!req.body.id){
            res.status(404).json({ err: "No comment Found1" })
        }
        else{
            const user = await Message.find({_id:req.body.id})
            res.status(201).send(user)
        }
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ err: "No comment Found2" })
    }
})
// router.delete("/deleteAccount", authentication, async (req, res) => {
//     try {
//         const { acno, email, password, message } = req.body
//         if (!acno || !email || !password || !message) {
//             return res.status(422).json({ err: "PLz fill all the field properties " })
//         }
//         else if (acno.length != 10) {
//             return res.status(422).json({ err: "PLz Enter 10 digit Ac/No " })
//         }
//         else if (!validator.isEmail(email)) {
//             return res.status(422).json({ err: "Enter a valid email" })
//         }
//         else {
//             const userVerify = await User.findOne({ _id: req.userID })
//             const isMatch = await bcrypt.compare(password, userVerify.password)
//             if (isMatch) {
//                 const userExist = await User.deleteOne({ acno, email })
//                 if (userExist.n > 0) {
//                     const deleted = new deletedUser({ acno, email, message })
//                     await deleted.save()
//                     return res.status(201).json({ msg: "Deleted Successfully" })
//                 }
//                 return res.status(422).json({ err: "User Not exists" })
//                 // return res.status(201).json({ msg: "Added Successfully" })
//             }
//             else {
//                 return res.status(422).json({ err: "Invalid Credential " })
//             }
//         }

//     } catch (err) {
//         console.log(err)
//         return res.status(422).json({ err: "plz fill data correclty" })
//     }
// })


// router.patch("/updateUser", authentication, async (req, res) => {
//     try {
//         const { name, acno, email, phone, password } = req.body
//         if (!acno || !email || !password || !name || !phone) {
//             return res.status(422).json({ err: "PLz fill all the field properties " })
//         }
//         else if (acno.length != 10) {
//             return res.status(422).json({ err: "PLz Enter 10 digit Ac/No " })
//         }
//         else if (!validator.isEmail(email)) {
//             return res.status(422).json({ err: "Enter a valid email" })
//         }
//         else {
//             const userVerify = await User.findOne({ _id: req.userID })
//             const isMatch = await bcrypt.compare(password, userVerify.password)
//             if (isMatch) {
//                 const userExist = await User.findOne({ acno })

//                 if (userExist) {
//                     const update = await User.findOneAndUpdate({ acno }, { $set: { name, email, phone } })

//                     return res.status(201).json({ msg: "Updated Successfully" })
//                 }
//                 return res.status(422).json({ err: "User Not exists" })

//             }
//             else {
//                 return res.status(422).json({ err: "Invalid Credential " })
//             }
//         }

//     } catch (err) {
//         console.log(err)
//         return res.status(422).json({ err: "plz fill data correclty" })
//     }
// })

router.patch("/addItem", async (req, res) => {
    try {
        const update = await NutritionalFood.updateOne({ nutrient: "Vitamin jayraj" }, { $push: { items: req.body } })
        // console.log(update)
        return res.status(201).json({ msg: "done" })
    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
})
router.patch("/addReply", async (req, res) => {
    try {
        const {id,email,reply}=req.body
        const user = await Message.findById({_id: id})
        const setReply = await Message.updateOne({ _id: id }, { $push: { replies: {email:email,msg:reply} } })
        // console.log(user)
        return res.status(201).json({ msg: "done" })
    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
})
// router.patch("/payBill",authentication, async (req, res) => {
//     try {
//         const { status ,date} = req.body
//         const userVerify = await User.findOne({ _id: req.userID })
//         const update = await User.updateOne({ _id: req.userID,"bill.status":"notpaid"} , { $set: { "bill.$.status": status,"bill.$.date":date} })
//         console.log(update)
//         return res.status(201).json({ msg: "Payment Done Successfully" })
//     } catch (err) {
//         console.log(err)
//         return res.status(422).json({ err: "Payment failed" })
//     }
// })

// router.patch("/messageConsumer", authentication, async (req, res) => {
//     try {
//         const { acno, email, message, password, type } = req.body
//         if (!acno || !email || !message || !password) {
//             return res.status(422).json({ err: "PLz fill all the field properties " })
//         }
//         else if (acno.length != 10) {
//             return res.status(422).json({ err: "PLz Enter 10 digit Ac/No " })
//         }
//         else {
//             const userVerify = await User.findOne({ _id: req.userID })
//             const isMatch = await bcrypt.compare(password, userVerify.password)
//             if (isMatch) {
//                 const userExist = await User.findOne({ $and: [{ acno }, { email }] })
//                 if (userExist && type == "admin") {
//                     const update = await User.updateOne({ acno }, { $push: { messages: { message } } })
//                     return res.status(201).json({ msg: "Message Send Successfully" })
//                 }
//                 else if (userExist && type == "user") {
//                     const update = await User.updateOne({ email: process.env.admin }, { $push: { messages: { message, email, acno } } })
//                     return res.status(201).json({ msg: "Message Send Successfully" })
//                 }
//                 return res.status(422).json({ err: "User Not exists" })
//             } else {
//                 return res.status(422).json({ err: "Invalid Credential " })
//             }

//         }

//     } catch (err) {
//         console.log(err)
//         return res.status(422).json({ err: "plz fill data correclty" })
//     }
// })

// // router.patch("/saveTask", authentication, async (req, res) => {
// //     try {
// //         const user = await User.findOne({ _id: req.userID })
// //         const { taskid, title, finalDate, task } = req.body
// //         const rootUser = req.rootUser.todoList
// //         const result = await user.addTodo(taskid,title, finalDate, task)
// //         res.status(201).json({ msg: "Saved Successfully" })
// //     } 
// //     catch (err) {
// //         res.status(401).json({ err: "Something happed wrong" })
// //     }


// // }) 



// router.delete("/delete", authentication, async (req, res) => {
//     try {
//         const { id } = req.body
//         const rootUser = req.rootUser.todoList
//         const newTodoList = rootUser.filter((value) => {
//             return value._id != id
//         })
//         const user = await User.findOne({ _id: req.userID })
//         const deleted = await User.updateOne({ "todoList._id": id }, { $set: { todoList: newTodoList } })
//         res.status(201).json({ msg: "Deleted Successfully" })
//     }
//     catch (err) {
//         res.status(401).json({ err: "Error in Deleting Todo" })
//     }
// })

module.exports = router
