module.exports = {
    login: require('./user/login'),
    logout : require('./user/logout'),
    signout: require('./user/signout'),
    signup: require('./user/signup'),
    changeinfo: require('./user/changeinfo'),
    userinfo : require('./user/userinfo'),
    data : require('./match/data'),
    record : require('./match/record'),
    showmatchlist : require('./match/showmatchlist'),
    existedid : require('./user/existedid'),
    sendresult : require('./match/sendresult'),
    joinmatch : require('./match/joinmatch')
    
}