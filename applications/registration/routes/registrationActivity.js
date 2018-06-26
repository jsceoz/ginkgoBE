import express from 'express';
const router = express.Router();

import registrationActivityModel from '../models/registrationActivity'

//list
router.get('/', (req, res) => {
    let userId = req.user.userId;
    console.log(userId);
    registrationActivityModel.find({owner:userId}).exec()
        .then(data => {
            res.status(200).json(data.reverse())
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

//findOne
router.get('/:_id', (req, res) => {
    let activityId = req.params._id;
    registrationActivityModel.findById(activityId).exec()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

//create
router.post('/', (req, res) => {
    let postData = req.body;

    postData.owner = req.user.userId;
    postData.startTime = req.body.time[0];
    postData.endTime = req.body.time[1];

    registrationActivityModel.create(postData)
        .then(data => {
            return res.status(201).json({status:'ok'})
        })
        .catch(err => {
            return res.status(200).json({status:'error'})
        })

});

//update
router.put('/:_id', (req, res) => {
    let activityId = req.params._id,
        putData = req.body.data;

    registrationActivityModel.findByIdAndUpdate(activityId, {$set: {...putData}}).exec()
        .then(data => {
            registrationActivityModel.findById(data.id).exec()
        })
        .then(data => {
            return res.status(200).json({data})
        })
        .catch(err => {
            return res.status(400).json(err)
        })
});

export default router;

