import axiosClient from './api';

const endPoints = {
  products: 'products',
  productTimings: 'productTimings',
};

export const getProducts = async (): Promise<any> => {
  try {
    const response = await axiosClient.get(endPoints.products);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductTiming = async (): Promise<any> => {
  try {
    const response = await axiosClient.get(endPoints.productTimings);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};