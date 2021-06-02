const Race = ({ count }: { count: number }): void => {
  const render = (JSX: string): void => {
    const sectionElement = document.getElementById('app');
    if (sectionElement) {
      sectionElement.innerHTML += JSX;
    }
  };

  const init = (count: number): void => {
    console.log(count);
    // render('');
  };

  init(count);
};

export default Race;
