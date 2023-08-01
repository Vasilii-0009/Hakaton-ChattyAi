export const INITIAL_MESSAGE = {
  isOwner: false,
  text: 'Отправь аудиозапись длительностью не более 10 минут, чтобы получить рекомендации по улучшению твоей речи 🦜',
};

export const MICROPHONE_ERROR = {
  isOwner: false,
  text: 'Ошибка доступа к микрофону, предоставь доступ',
  type: 'Error'
};

export const RESPONSE_ERROR = {
  isOwner: false,
  text: 'Что-то пошло не так, попробуй позже',
  type: 'Error'
};