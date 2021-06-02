const Race = ({ count }) => {
    const render = (JSX) => {
        const sectionElement = document.getElementById('app');
        if (sectionElement) {
            sectionElement.innerHTML += JSX;
        }
    };
    const init = (count) => {
        console.log(count);
        // render('');
    };
    init(count);
};
export default Race;
