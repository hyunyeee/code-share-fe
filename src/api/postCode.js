import axios from 'axios';

export const postCode = async (code) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_JUDGE_URL}/submissions?base64_encoded=true&wait=true`,
      {
        source_code: code,
        language_id: 63,
      },
      { withCredentials: false },
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
