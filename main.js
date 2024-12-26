// Ссылки на элементы DOM
const carNameInput = document.getElementById("car-name");
const carModelInput = document.getElementById("car-model");
const carYearInput = document.getElementById("car-year");
const carPriceInput = document.getElementById("car-price");
const carPositionInput = document.getElementById("car-position");
const addCarButton = document.getElementById("add-car-btn");
const carListContainer = document.getElementById("car-list");

// Массив для хранения списка автомобилей
const cars = [];

// Обработчик события для добавления автомобиля
addCarButton.addEventListener("click", () => {
  // Получаем значения из формы
  const carName = carNameInput.value.trim();
  const carModel = carModelInput.value.trim();
  const carYear = carYearInput.value.trim();
  const carPrice = carPriceInput.value.trim();
  const carPosition = carPositionInput.value.trim();

  // Проверка на пустые значения
  if (!carName || !carModel || !carYear || !carPrice || !carPosition) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  // Создаем объект для нового автомобиля
  const newCar = {
    name: carName,
    model: carModel,
    year: carYear,
    price: carPrice,
    position: carPosition
  };

  // Добавляем автомобиль в массив
  cars.push(newCar);

  // Очищаем поля формы
  carNameInput.value = "";
  carModelInput.value = "";
  carYearInput.value = "";
  carPriceInput.value = "";
  carPositionInput.value = "";

  // Отображаем обновленный список автомобилей
  renderCarList();
});

// Функция для отображения списка автомобилей
function renderCarList() {
  // Очищаем контейнер списка
  carListContainer.innerHTML = "";

  // Перебираем массив автомобилей и выводим каждый
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

    // Добавляем карточку автомобиля в список
    carListContainer.appendChild(carCard);
  });
}
