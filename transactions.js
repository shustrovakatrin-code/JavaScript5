
let transactions = [];

/**
 * Добавляет транзакцию в массив.
 * @param {Object} transaction - Объект транзакции.
 * @returns {void}
 */
function addTransactionToArray(transaction) {
  let amount = Number(
    document.querySelector("#amount").value
);


if (transaction.category!="Зарплата") {
    transaction.amount = -amount;
}
  transactions.push(transaction);
}

/**
 * Удаляет транзакцию из массива по id.
 * @param {string} id - Идентификатор транзакции.
 * @returns {void}
 */
function removeTransactionFromArray(id) {
  transactions = transactions.filter(function (transaction) {
    return transaction.id !== id;
  });
}

/** 
 * Находит транзакцию по id.
 * @param {string} id - Идентификатор транзакции.
 * @returns {Object|undefined} Найденная транзакция.
 */
function findTransactionById(id) {
  return transactions.find(function (transaction) {
    return transaction.id === id;
  });
}

/**
 * Считает общую сумму транзакций.
 * @returns {number} Общая сумма.
 */
function calculateTotal() {
  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    total = total + transactions[i].amount;
  }

  return total;
}