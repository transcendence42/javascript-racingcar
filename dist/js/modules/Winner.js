const winnerSection = (winner) => {
    return `<section class="d-flex justify-center mt-5">
                <div>
                  <h2>🏆 최종 우승자: ${winner} 🏆</h2>
                  <div class="d-flex justify-center">
                    <button type="button" class="btn btn-cyan">다시 시작하기</button>
                  </div>
                </div>
            </section>`;
};
const Winner = ({ $app, cars }) => {
    const findWinners = (cars) => {
        const totalDistances = cars.map((car) => car.distance);
        const maxDistance = Math.max(...totalDistances);
        return cars
            .filter((car) => {
            return car.distance === maxDistance;
        })
            .map((winner) => winner.name);
    };
    const render = ({ result }) => {
        const sectionElement = $app;
        if (sectionElement) {
            sectionElement.insertAdjacentHTML('beforeend', result);
        }
        return;
    };
    const init = ({ cars }) => {
        const result = winnerSection(findWinners(cars).join(', '));
        render({ result });
    };
    return init({ cars });
};
export default Winner;
