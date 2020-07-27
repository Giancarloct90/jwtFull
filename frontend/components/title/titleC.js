import view from "./titleV.html";

export default () => {
    let div = document.createElement('div');
    div.innerHTML = view;
    return div;
}