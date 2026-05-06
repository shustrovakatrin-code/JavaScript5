
const form = document.querySelector("#transaction-form");
const amountInput = document.querySelector("#amount");
const categoryInput = document.querySelector("#category");
const descriptionInput = document.querySelector("#description");
const table = document.querySelector("#transactions-table");

/**
 * Добавляет новую транзакцию.
 * @returns {void}
 */
function addTransaction() {
  const amount = Number(amountInput.value);
  const category = categoryInput.value;
  const description = descriptionInput.value;

  if (amountInput.value === "" || category === "" || description === "") {
    alert("Заполните все поля.");
    return;
  }

  if (isNaN(amount)) {
    alert("Сумма должна быть числом.");
    return;
  }

  const transaction = {
    id: generateId(),
    date: new Date().toISOString(),
    amount: amount,
    category: category,
    description: description
  };

  addTransactionToArray(transaction);
  renderTransaction(transaction);
  updateTotal();
  clearForm();
  showFullDescription("Нажмите на строку таблицы.");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTransaction();
});

table.addEventListener("click", function (event) {
  if (event.target.className === "delete-btn") {
    const id = event.target.id;

    removeTransactionFromArray(id);
    removeTransactionRow(id);
    updateTotal();
    showFullDescription("Нажмите на строку таблицы.");

    return;
  }

  const row = event.target.closest("tr");

  if (row && row.id !== "") {
    const transaction = findTransactionById(row.id);

    if (transaction) {
      showFullDescription(transaction.description);
    }
  }
});