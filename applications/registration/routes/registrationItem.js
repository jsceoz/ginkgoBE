import express from 'express';
const router = express.Router();

import registrationItemModel from '../models/registrationItem';
import registrationActivityModel from '../models/registrationActivity';

router.post('/:_id', (req, res) => {
    let activityId = req.params._id,
        postData = req.body.data;

    registrationActivityModel.findById(activityId).exec()
        .then(data => {
            if (new Date() < data.startTime) {
                res.status(400).json({msg:'活动尚未开始'});
                return Promise.reject(0)
            }
            if (new Date() > data.endTime) {
                res.status(400).json({msg:'活动已经结束'});
                return Promise.reject(0)
            }
            data.fields.forEach(field => {
                if (!postData[field.label]) {
                    res.status(400).json({msg:'字段结构验证失败'});
                    return Promise.reject(0)
                }
            });

            return registrationItemModel.create({
                //owner: userId,
                activityId: activityId,
                content: postData
            })
        })
        .then(data => {
            res.status(201).json({data})
        })
        .catch(err => {
            res.end()
        })
});

export default router;