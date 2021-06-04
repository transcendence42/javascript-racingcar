// 더 나아가면 리터럴 객체에 메서드를 리턴하지 말고 프로토타입이나 클래스로 해서 팩토리 패턴으로....
// 어떻게 해야 프로토타입이나 클래스로 리턴할 수 있을까...

type callBackType = (e: Event) => void;

export default function $(selector: string) {
  const element = document.querySelector(selector) as HTMLElement;

  return {
    element,
    show(): void {
      element.style.display = "block";
    },
    hide(): void {
      element.style.display = "none";
    },
    get innerHTML(): string {
      return element.innerHTML;
    },
    get innerText(): string {
      console.log(element.innerText);
      return element.innerText;
    },
    get value(): string {
      return (<HTMLInputElement>element).value;
    },
    get parentElement(): HTMLElement | null{
      return element.parentElement; 
    },
    set innerHTML(newInnerHTML: string) {
      element.innerHTML = newInnerHTML;
    },
    set value(str: string) {
      (<HTMLInputElement>element).value = str;
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
  };
}
