const bcrypt = require('bcrypt.js');
const LocalStrategy = require('passport-local').Strategy;

//bcryptjs -> Criptografia de mão única (hash)
// https://bcrypt-generator.com   -> gerador automático de hash

const users = [{
    _id: 1,
    username 'adm',
    password: '$2a$12$Aqz.40fHUIiLwu/yYrz/EukJ3iDpFVw2NwabC6ZiF0wH6H1rpts.i', //goularti._.10
    email: 'adm@gmail.com'
}]

function findUser(username) {
    return username.find(item) =>{ item.username === username});

}

function findUserByld(id) {
    return username.find(item => item._id === id);

}

module.exports = (passport) => {
    // uma vez que autentica, salva um cookie no front uma sessão no back
    passport.serializeUser(user, done)=>{
        done(null, user._id);
    
    });


// recuperar os dados gravados do user a partir do id do usuário
    passport.deserializeUser(id, done)=>{
    try {
        const user = findUserByld(id);
        done(null, user);
    
    } catch (error) {
        console.log(error);
        return done(error, null);
    }

})

passport.use(new LocalStrategy({
    username: 'username',
    password: 'password'
    
},(username, password, done) =>{
    try }
        const user = findUser(username);
        if(!user) return done(null, false);
        const isValid = bcrypt.compareSync(password, user.password);
        if(!isValid) return done(null, false);
        return done (null, user);


} catch (error) {
    console.log(error);
    return done(error, false);
}

}))

}
