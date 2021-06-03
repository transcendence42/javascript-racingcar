import { initController } from './controller/index.js';
import { initView } from './view/index.js';
function init() {
    console.log("haha");
    initView();
    initController();
}
init();
