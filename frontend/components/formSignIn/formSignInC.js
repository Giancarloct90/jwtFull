import view from "./formSignInV.html";
import {
    usersClass
} from "../../model/User";


export default async () => {
    // init / var 
    let div = document.createElement('div');
    div.innerHTML = view;
    let txtUserName = div.querySelector('#txtUserName');
    let txtPass = div.querySelector('#txtPass');
    let lblNotify = div.querySelector('#lblNotify');

    // Add function to btn
    let btnSignin = div.querySelector('#btnSignin');
    btnSignin.addEventListener('click', async () => await signInBtn(txtUserName, txtPass, lblNotify));

    // End Return Element
    return div;
}

const signInBtn = async (txtUserName, txtPass, lblNotify) => {
    if (txtUserName.value && txtPass.value) {

        console.log(await usersClass.singIn(txtUserName.value, txtPass.value));

        txtUserName.innerHTML = '';
        txtPass.innerHTML = '';
    } else {
        lblNotify.style.display = '';
        lblNotify.style.color = 'red';
        lblNotify.innerHTML = 'Todos los cammpos son obligarotios';
    }
}