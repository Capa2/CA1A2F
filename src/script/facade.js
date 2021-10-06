import httpUtil from "./httpUtil.js"
import getUrl from "./getUrl.js"

function getPersons() {
    return fetch(getUrl("person", "all"))
        .then(res => httpUtil.handleHttpErrors(res))
        .catch(httpUtil.errCatch);
}
/*
function getUser(id) {
    return fetch(url + "/" + id)
        .then(res => httpUtil.handleHttpErrors(res))
        .catch(httpUtil.errCatch);
}

function addUser(user) {
    return fetch(url, httpUtil.makeOptions("POST", user))
        .then(res => httpUtil.handleHttpErrors(res))
        .catch(httpUtil.errCatch);
}

function editUser(user) {
    return fetch(url + "/" + user.id, httpUtil.makeOptions("PUT", user))
        .then(res => httpUtil.handleHttpErrors(res))
        .catch(httpUtil.errCatch);
}

function deleteUser(id) {
    return fetch(url + "/" + id, httpUtil.makeOptions("DELETE"))
        .then(res => httpUtil.handleHttpErrors(res))
        .catch(httpUtil.errCatch);
}
*/
const facade = {
    getPersons,
    /*getUsers,
    addUser,
    editUser,
    deleteUser,*/
}

export default facade;