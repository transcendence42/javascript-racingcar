// 더 나아가면 리터럴 객체에 메서드를 리턴하지 말고 프로토타입이나 클래스로 해서 팩토리 패턴으로....
// 어떻게 해야 프로토타입이나 클래스로 리턴할 수 있을까...
export default function $(selector) {
    const element = document.querySelector(selector);
    return {
        element,
        show() {
            element.style.display = "block";
        },
        hide() {
            element.style.display = "none";
        },
        get innerHTML() {
            return element.innerHTML;
        },
        get innerText() {
            console.log(element.innerText);
            return element.innerText;
        },
        get value() {
            return element.value;
        },
        get parentElement() {
            return element.parentElement;
        },
        set innerHTML(newInnerHTML) {
            element.innerHTML = newInnerHTML;
        },
        set value(str) {
            element.value = str;
        },
        addEventListener(action, f) {
            element.addEventListener(action, f);
        },
        setAttribute(key, value) {
            element.setAttribute(key, value);
        },
        insertAdjacentHTML(position, html) {
            element.insertAdjacentHTML(position, html);
        }
    };
}
