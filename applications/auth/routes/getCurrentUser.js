import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        name: req.user.username,
        notifyCount: 12,
        userid: req.user.userId
    })
});

export default router