
const carNameInput = document.getElementById("car-name");
const carModelInput = document.getElementById("car-model");
const carYearInput = document.getElementById("car-year");
const carPriceInput = document.getElementById("car-price");
const carPositionInput = document.getElementById("car-position");
const addCarButton = document.getElementById("add-car-btn");
const carListContainer = document.getElementById("car-list");

const cars = [];


addCarButton.addEventListener("click", () => {
 
  const carName = carNameInput.value.trim();
  const carModel = carModelInput.value.trim();
  const carYear = carYearInput.value.trim();
  const carPrice = carPriceInput.value.trim();
  const carPosition = carPositionInput.value.trim();

 
  if (!carName || !carModel || !carYear || !carPrice || !carPosition) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  
  const newCar = {
    name: carName,
    model: carModel,
    year: carYear,
    price: carPrice,
    position: carPosition
  };

 
  cars.push(newCar);


  carNameInput.value = "";
  carModelInput.value = "";
  carYearInput.value = "";
  carPriceInput.value = "";
  carPositionInput.value = "";

  renderCarList();
});


function renderCarList() {

  carListContainer.innerHTML = "";


  cars.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    const carInfo = `
      <h3>Автомобиль №${index + 1}</h3>
      <p><strong>Название:</strong> ${car.name}</p>
      <p><strong>Модель:</strong> ${car.model}</p>
      <p><strong>Год выпуска:</strong> ${car.year}</p>
      <p><strong>Цена:</strong> ${car.price} руб.</p>
      <p><strong>Позиция:</strong> ${car.position}</p>
    `;

    carCard.innerHTML = carInfo;

 
    carListContainer.appendChild(carCard);
  });
}
