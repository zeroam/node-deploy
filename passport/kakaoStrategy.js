const kakaoStrategy = require('passport-kakao').Strategy;

const { User } = require('../models');

module.exports = (passport) => {
  passport.use(new kakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/auth/kakao/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    console.log(profile); // 카카오톡 사용자 정보
    try {
      const exUser = await User.find({where: { snsId: profile.id, provider: 'kakao'}});
      if(exUser) {
        done(null, exUser);
      } else {
        const newUser = await User.create({
          email: profile._json && profile._json.kaccount_email,
          nick: profile.displayName,
          snsId: profile.id,
          provider: 'kakao',
        });
        done(null, newUser);
      }
    } catch(error) {
      console.error(error);
      done(error);
    }
  }));
};