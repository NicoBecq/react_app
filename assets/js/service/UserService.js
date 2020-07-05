let user = {};

const setUser = (data) => {
    user = data;
}

const getUser = () => {
    return user;
}

module.exports = {
    getUser,
    setUser
}