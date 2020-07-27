import './formSignUpS.css';
import view from "./formSignUpV.html";
import {
    Users
} from "../../model/User";
const users = new Users();
// import {
//     savedUser
// } from "../model/User";

export default () => {

    // INIT ELEMENT
    let div = document.createElement('div');
    div.innerHTML = view;

    // VAR
    let txtNombre = div.querySelector('#txtNombre');
    let txtContrasenia = div.querySelector('#txtContrasenia');
    let txtNumerCelular = div.querySelector('#txtNumerCelular');
    let lblNotify = div.querySelector('#lblNotify');

    // FUNCTIONS
    let btnGuardarUsuario = div.querySelector('#btnGuardarUsuario');
    btnGuardarUsuario.addEventListener('click', async () => await guardarUser(txtNombre, txtContrasenia, txtNumerCelular, lblNotify));

    // END RETURN;
    return div;
}

const guardarUser = async (txtNombre, txtContrasenia, txtNumerCelular, lblNotify) => {
    if (txtNombre.value && txtContrasenia.value && txtNumerCelular.value) {
        lblNotify.style.display = 'none';
        let data = {
            txtNombre: txtNombre.value,
            txtContrasenia: txtContrasenia.value,
            txtNumerCelular: txtNumerCelular.value
        }
        try {
            let user = await users.savedUser(data);
            console.log(user);
            window.localStorage.setItem('token', user.token);
            users.savedToken(user.token);
            console.log(users.getToken());
            if (user.ok) {
                txtNombre.value = '';
                txtContrasenia.value = '';
                txtNumerCelular.value = '';
                Notify(lblNotify, 'Se guardo con exito', 'green');
            } else {
                Notify(lblNotify, 'Se produjo un error', 'red');
            }
        } catch (e) {
            Notify(lblNotify, 'Se produjo un error', 'red');
            console.log('Error tryin to insert a new user');
        }
    } else {
        lblNotify.style.color = 'red';
        lblNotify.innerHTML = 'Todo los Campos son necesarios'
        lblNotify.style.display = ''
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