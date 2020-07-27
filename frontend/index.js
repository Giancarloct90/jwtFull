import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {
    router
} from "./routes/indexRouter";

router(window.location.hash);
window.addEventListener('hashchange', () => {
    router(window.location.hash);
})