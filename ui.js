
/**
 * Добавляет строку транзакции в таблицу.
 * @param {Object} transaction - Объект транзакции.
 * @returns {void}
 */
function renderTransaction(transaction) {
  const tableBody = document.querySelector("#transactions-body");

  const row = document.createElement("tr");

  row.id = transaction.id;

  if (transaction.amount > 0) {
    row.className = "income";
  } else {
    row.className = "expense";
  }

  row.innerHTML = `
    <td>${formatDate(transaction.date)}</td>
    <td>${transaction.category}</td>
    <td>${transaction.amount}</td>
    <td>${getShortDescription(transaction.description)}</td>
    <td><button class="delete-btn" id="${transaction.id}">Удалить</button></td>
  `;

  tableBody.appendChild(row);
}

/**
 * Удаляет строку таблицы.
 * @param {string} id - Идентификатор транзакции.
 * @returns {void}
 */
function removeTransactionRow(id) {
  const row = document.getElementById(id);

  if (row) {
    row.remove();
  }
}

/**
 * Обновляет общую сумму на странице.
 * @returns {void}
 */
function updateTotal() {
  const totalAmount = document.querySelector("#total-amount");
  totalAmount.textContent = calculateTotal().toFixed(2);
}

/**
 * Показывает полное описание транзакции.
 * @param {string} text - Полное описание.
 * @returns {void}
 */
function showFullDescription(text) {
  const fullDescription = document.querySelector("#full-description");
  fullDescription.textContent = text;
}

/**
 * Очищает форму.
 * @returns {void}
 */
function clearForm() {
  document.querySelector("#transaction-form").reset();
}