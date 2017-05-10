import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
   //회원가입 구현 예정
    res.json({
        success: true
    });
});

router.post('/signin', (req, res) => {
   // 로그인 구현 예정
    res.json({
        success: true
    });
});

router.get('/getinfo', (req, res) => {
   //회원정보 구현예정
    res.json({ info: null });
});

router.post('/logout', (req, res) => {
    return res.json({ success: true });
});

export default router;