const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

const User = require('../models/user');

module.exports = () => {
    // 카카오 로그인 설정
    passport.use(new KakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',
    }, async(accessToken, refreshToken, profile, done) => {
        //카카오로 회원가입 한 사용자가 맞는 지 확인
        console.log('kakao profile', profile);
        try {
            const exUser = await User.findOne({
                where: {snsId: profile.id, provider: 'kakao'},
            });
            if(exUser) {
                done(null, exUser);
            } else { // 카카오 사용자가 아닐경우 회원가입을 진행
                const newUser = await User.create({
                    email: profile._json && profile._json.kakao_account_email,
                    nick: profile.displayName,
                    snsId: profile.id,
                    provider: 'kakao',
                });
                done(null, newUser);
            }
        } catch (err) {
            console.error(error);
            done(error);
        }
    }));
};