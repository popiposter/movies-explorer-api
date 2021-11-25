module.exports.URL_REGEX = /^((https?):\/\/)?(www.)?[a-z0-9-.]+\.[a-z]+(\/[a-zA-Z0-9#-._~:/?#[\]@!$'()*+,;=]+\/?)*$/;

module.exports.SERVER_ERR_STATUS = 500;
module.exports.SERVER_ERR_MSG = 'На сервере произошла ошибка.';
module.exports.ROUTE_NOT_FOUND_MSG = 'Обращение к несуществующему пути.';
module.exports.AUTH_REQ_MSG = 'Необходима авторизация.';
module.exports.UNAUTHORIZED_MSG = 'Неправильные почта или пароль.';
module.exports.NOT_FOUND_MSG = 'Пользователь с указанным _id не найден.';
module.exports.CONFLICT_MSG = 'Пользователь с таким email уже существует.';
module.exports.CREATED_MSG = 'Пользователь создан.';
module.exports.LOGOUT_MSG = 'Выход успешен.';
module.exports.EMPTY_STR_MSG = 'Поле {#label} не должно быть пустым.';
module.exports.MIN_STR = 'Минимальная длина поля {#label} - {#limit} символа(ов).';
module.exports.MAX_STR = 'Максимальная длина поля {#label} - {#limit} символа(ов).';
module.exports.REQ_MSG = 'Поле {#label} является обязательным.';
module.exports.URI_MSG = 'Поле {#label} должно быть валидной ссылкой.';
module.exports.EMAIL_MSG = 'Поле {#label} должно быть валидным email.';
module.exports.HEX_MSG = 'Поле {#label} может содержать только цифры и латинские буквы.';
module.exports.VALIDATION_ERR_MSG = 'Ошибка валидации.';
module.exports.NUM_BASE_MSG = 'Поле {#label} должно быть десятичным числом.';
module.exports.MOVIE_NOT_FOUND = 'Фильм с указанным _id не найден.';
module.exports.OWNER_ERR_MSG = 'Нельзя удалять чужие фильмы.';
