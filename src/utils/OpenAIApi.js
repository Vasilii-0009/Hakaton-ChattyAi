import axios from "axios";
const AUDIO_URL = "https://api.openai.com/v1/audio/transcriptions";
const CHAT_URL = "https://api.openai.com/v1/chat/completions";
// const API_KEY = process.env.REACT_APP_APISECRET.split(',').reverse().join('');
const API_KEY = "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";

export const sendAudio = async (formData) => {
  try {
    const response = await axios.post(AUDIO_URL, formData, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.data.text) {
      throw new Error("Ошибка при отправке аудио");
    }

    return response.data.text;
  } catch (error) {
    console.error("Ошибка отправке:", error.message);
    throw new Error("Произошла ошибка при отправке аудио");
  }
};

export const sendText = async (text) => {
  try {
    const response = await axios.post(
      CHAT_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Сделай текст лучше: '${text}'. В своем ответе не забудь вставить знаки перевода строки`,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (!response.data.choices[0].message.content) {
      throw new Error("Ошибка при отправке текста");
    }

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Ошибка при отправке текста:", error.message);
    throw new Error("Произошла ошибка при отправке текста");
  }
};
