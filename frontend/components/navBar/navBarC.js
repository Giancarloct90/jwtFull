import './navBarS.css';
import view from "./navBarV.html";

export default () => {
    let div = document.createElement('div');
    div.innerHTML = view;
    return div;
}