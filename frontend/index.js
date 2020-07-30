import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {
    router
} from "./routes/indexRouter";

import {
    usersClass
} from "./model/User";



router(window.location.hash);
window.addEventListener('hashchange', () => {
    router(window.location.hash);
})