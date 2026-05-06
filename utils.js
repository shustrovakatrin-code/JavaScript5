
/**
 * Генерирует уникальный id для транзакции.
 * @returns {string} Уникальный идентификатор.
 */
function generateId() {
  return Date.now().toString();
}

/**
 * Форматирует дату.
 * @param {string} dateString - Дата в виде строки.
 * @returns {string} Отформатированная дата.
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("ru-RU");
}

/**
 * Возвращает первые 4 слова описания.
 * @param {string} text - Полное описание.
 * @returns {string} Краткое описание.
 */
function getShortDescription(text) {
  return text.split(" ").slice(0, 4).join(" ");
}