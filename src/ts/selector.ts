// 더 나아가면 리터럴 객체에 메서드를 리턴하지 말고 프로토타입이나 클래스로 해서 팩토리 패턴으로....
// 어떻게 해야 프로토타입이나 클래스로 리턴할 수 있을까...

type callBackType = (e: Event) => void;

export default function $(selector: string) {
    const element = document.querySelector(selector) as HTMLElement;

    return {
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
            return element.innerText;
        },
        set innerHTML(newInnerHTML: string) {
            element.innerHTML = newInnerHTML;
        },
        addEventListener(action: string, f: callBackType) {
            element.addEventListener(action, f);
        },
        setAttribute(key: string, value: string) {
            element.setAttribute(key, value);
        },
        insertAdjacentHTML(position: InsertPosition, html: string) {
            element.insertAdjacentHTML(position, html);
        }
    }
}