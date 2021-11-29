const URL_REGEX = /^((https?):\/\/)?(www.)?[a-z0-9-.]+\.[a-z]+(\/[a-zA-Z0-9#-._~:/?#[\]@!$'()*+,;=]+\/?)*$/;

const SERVER_ERR_STATUS = 500;
const SERVER_ERR_MSG = 'На сервере произошла ошибка.';
const ROUTE_NOT_FOUND_MSG = 'Обращение к несуществующему пути.';
const AUTH_REQ_MSG = 'Необходима авторизация.';
const UNAUTHORIZED_MSG = 'Неправильные почта или пароль.';
const NOT_FOUND_MSG = 'Пользователь с указанным _id не найден.';
const CONFLICT_MSG = 'Пользователь с таким email уже существует.';
const CREATED_MSG = 'Пользователь создан.';
const LOGOUT_MSG = 'Выход успешен.';
const EMPTY_STR_MSG = 'Поле {#label} не должно быть пустым.';
const MIN_STR = 'Минимальная длина поля {#label} - {#limit} символа(ов).';
const MAX_STR = 'Максимальная длина поля {#label} - {#limit} символа(ов).';
const REQ_MSG = 'Поле {#label} является обязательным.';
const URI_MSG = 'Поле {#label} должно быть валидной ссылкой.';
const EMAIL_MSG = 'Поле {#label} должно быть валидным email.';
const HEX_MSG = 'Поле {#label} может содержать только цифры и латинские буквы.';
const VALIDATION_ERR_MSG = 'Ошибка валидации.';
const NUM_BASE_MSG = 'Поле {#label} должно быть десятичным числом.';
const MOVIE_NOT_FOUND = 'Фильм с указанным _id не найден.';
const OWNER_ERR_MSG = 'Нельзя удалять чужие фильмы.';

module.exports = {
  URL_REGEX,
  SERVER_ERR_STATUS,
  SERVER_ERR_MSG,
  ROUTE_NOT_FOUND_MSG,
  AUTH_REQ_MSG,
  UNAUTHORIZED_MSG,
  NOT_FOUND_MSG,
  CONFLICT_MSG,
  CREATED_MSG,
  LOGOUT_MSG,
  EMPTY_STR_MSG,
  MIN_STR,
  MAX_STR,
  REQ_MSG,
  URI_MSG,
  EMAIL_MSG,
  HEX_MSG,
  VALIDATION_ERR_MSG,
  NUM_BASE_MSG,
  MOVIE_NOT_FOUND,
  OWNER_ERR_MSG,
};
