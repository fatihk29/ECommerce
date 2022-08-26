import axiosClient from './api';

const endPoints = {
  products: 'products',
  authControl: 'users/authControl',
};

export const getProducts = async (): Promise<any> => {
  try {
    const response = await axiosClient.get(endPoints.products);
    if (response?.data?.token) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
