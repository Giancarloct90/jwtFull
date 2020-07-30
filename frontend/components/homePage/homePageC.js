import view from "./homePageV.html";
import "./homePageS.css";

export default async () => {

    let div = document.createElement('div');
    div.innerHTML = view;

    try {
        let data = await fetch('http://192.10.10.2:3000/users/me', {
            method: 'GET',
            headers: {
                'x-access-token': window.localStorage.getItem('token') || false
            }
        });
        let data2 = await data.json();
        if (data2.ok) {
            let div = document.createElement('div');
            div.innerHTML = view;
        } else {
            window.location.hash = '#/signup'
        }
    } catch (e) {
        console.log(e);
    }
    // let data2 = await data.json();
    // console.log(data2);
    // if (!data2.ok) {
    //     window.location.hash = '#/signup';
    // }
    return div;
}