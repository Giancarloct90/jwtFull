import view from "./homePageV.html";
import "./homePageS.css";
import {
    Users
} from "../../model/User";
const user = new Users();

export default async () => {
    // console.log(window.localStorage.getItem('token'));
    let div = document.createElement('div');
    div.innerHTML = view;
    let data = await fetch('http://192.10.10.2:3000/users/me', {
        method: 'GET',
        headers: {
            'x-access-token': window.localStorage.getItem('token')
        }
    });
    let data2 = await data.json();
    console.log(data2);
    if (!data2.ok) {
        window.location.hash = '#/signup';
    }
    return div;
}