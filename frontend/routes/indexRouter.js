import {
    UI
} from "../UI";
import {
    pages
} from "../components/indexComponents";
const ui = new UI();

const router = async (route) => {
    ui.clearAllDivs();
    switch (route) {
        case '':
            ui.renderFormSignIn(await pages.signin());
            break;
        case '#/':
            ui.renderFormSignIn(await pages.signin());
            break;
        case '#/home':
            ui.renderNavBar(pages.navbar());
            ui.renderTitle(pages.title());
            ui.renderHomePage(await pages.homePage());
            break;
        case '#/signup':
            ui.renderNavBar(pages.navbar());
            ui.renderTitle(pages.title());
            ui.renderFormSignIn(pages.formSignUp());
            break;
        default:
            console.log('not foudn 404');
            break;
    }
}

export {
    router
}