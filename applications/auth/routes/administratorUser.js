import express from 'express';
import administratorUserModel from '../models/administratorUser';
import WHUVerification from '../../../utils/vertification/WHU';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/login', function (req, res) {
    let username = req.body.username,
        password = req.body.password;

    if(!username) {
        return res.status(400).send('username required')
    }

    if(!password) {
        return res.status(400).send('password required')
    }

    administratorUserModel.findOne({username: username}).exec()
        .then(data => {
            if(!data) {
                return res.status(400).json({result:false, msg:"用户名不存在"})
            }
            if(data.password === password) {
                let authToken = jwt.sign({
                    userId: data._id,
                    username: username,
                }, jwtKey);
                res.status(200).json({
                    status: 'ok',
                    token: authToken,
                    currentAuthority: 'admin'
                })
            } else {
                res.status(200).json({
                    status: 'error',
                    msg:"密码错误",
                    currentAuthority: 'guest',
                })
            }
        })
});

router.post('/signUp', function (req, res) {
    let modelData = {};

    modelData.sid = req.body.sid;
    modelData.spwd = req.body.spwd;
    modelData.username = req.body.username;
    modelData.password = req.body.password;
    modelData.org = req.body.org;
    modelData.phone = req.body.phone;
    modelData.email = req.body.email;

    let verification = WHUVerification(modelData.sid, modelData.spwd);

    if (!verification.result) {
        return res.status(400).json({
            result: false,
            msg: "身份验证失败"
        })
    } else {
        modelData.name = verification.data.name;

        administratorUserModel.create(modelData)
            .then(data => {
                let authToken = jwt.sign({
                    id:data._id,
                    username: modelData.username
                }, jwtKey);
                res.status(201).json({status: 'ok', token: authToken})
            })
            .catch(err => {
                return res.status(400).json(err)
            })
    }
});

export default router;

