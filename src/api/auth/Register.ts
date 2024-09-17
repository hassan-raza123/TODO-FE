import { baseURL } from '@/utils/config';
import { IUser } from '@/interfaces/auth/user.interface';
import { IApiResponse } from '@/interfaces/api-response.interface';

export const RegisterApi = async (formData: {
  username: string;
  email: string;
  password: string;
}): Promise<IApiResponse<IUser> | any> => {
  try {
    const url = `${baseURL}/users/register`;
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
