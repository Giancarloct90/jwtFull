import view from "./formSignInV.html";
import {
    usersClass
} from "../../model/User";


export default async () => {
    window.localStorage.removeItem('token');
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
        try {
            let userSignIned = await usersClass.singIn(txtUserName.value, txtPass.value);
            if (!userSignIned.ok) {
                Notify(lblNotify, 'Usuario o Contrasenia Incorrecta', 'red');
                txtUserName.value = '';
                txtPass.value = '';
            } else {
                window.localStorage.setItem('token', userSignIned.token);
                Notify(lblNotify, 'Usuario Correcto', 'green');
                window.location.hash = '#/home'
            }
        } catch (e) {
            lblNotify.style.display = '';
            lblNotify.style.color = 'red';
            lblNotify.innerHTML = 'Error';
        }

    } else {
        lblNotify.style.display = '';
        lblNotify.style.color = 'red';
        lblNotify.innerHTML = 'Todos los cammpos son obligarotios';
    }
}


const Notify = (lblNotify, msj, color) => {
    lblNotify.style.display = '';
    lblNotify.style.color = color;
    lblNotify.innerHTML = msj;
    setTimeout(() => {
        lblNotify.style.display = 'none';
    }, 3000);
}