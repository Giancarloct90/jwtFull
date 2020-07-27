export class UI {
    constructor() {
        this.divTitle = document.getElementById('divTitle');
        this.divFormSignUp = document.getElementById('divFormSignUp');
        this.divFormSignIn = document.getElementById('divFormSignIn');
        this.divContent = document.getElementById('divContent');
        this.divNavBar = document.getElementById('divNavBar');
    }

    // To render NavBar
    renderNavBar(element) {
        this.divNavBar.appendChild(element);
    }

    // To render title
    renderTitle(element) {
        this.divTitle.appendChild(element);
    }

    // To render Form for Sign Up
    renderFormSignUp(element) {
        this.divFormSignUp.appendChild(element);
    }

    // To redner form for Sign In
    renderFormSignIn(element) {
        this.divFormSignIn.appendChild(element);
    }

    // To render hom page
    renderHomePage(element) {
        console.log('homepage');
        this.divContent.appendChild(element);
    }

    // To clear all div
    clearAllDivs() {
        this.divTitle.innerHTML = '';
        this.divFormSignUp.innerHTML = '';
        this.divFormSignIn.innerHTML = '';
        this.divContent.innerHTML = '';
        this.divNavBar.innerHTML = '';
    }
}