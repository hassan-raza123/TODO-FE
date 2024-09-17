import { baseURL } from '@/utils/config';
import { ILogin } from '@/interfaces/auth/login.interface';
import { IApiResponse } from '@/interfaces/api-response.interface';

export const login = async (formData: {
  username: string;
  password: string;
}): Promise<IApiResponse<ILogin> | any> => {
  try {
    const url = `${baseURL}/users/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    return error;
  }
};
