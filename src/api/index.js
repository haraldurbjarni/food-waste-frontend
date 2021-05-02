
const API_URL = 'https://food-waste-:backend-yovba.ondigitalocean.app/api';
//https://food-waste-:backend-yovba.ondigitalocean.app/api';

export const appFetch = async (url, options={}) => {
  const res = await fetch(url, { credentials: 'include', ...options })
  if (!res.ok) {
    throw new Error('result not ok');
  } 
  return await res.json();
}

export const uploadDataFile = async file => {
  const body = new FormData();
  body.append('file', file, file.name);
  const options = {
    method: 'POST',
    body,
  };
  return await appFetch(`${API_URL}/upload_data`, options);
}

export const uploadPriceFile = async file => {
  const body = new FormData();
  body.append('file', file, file.name);
  const options = {
    method: 'POST',
    body,
  };
  return await appFetch(`${API_URL}/upload_prices`, options);
}


export const trainModel = async (dataKey,priceKey,profitMargin, modelType) => {
  return await appFetch(`${API_URL}/train_model?dataKey=${dataKey}&priceKey=${priceKey}&profitMargin=${profitMargin}&modelType=${modelType}`);
}

export const getTrainingStatus = async (dataKey) => {
  return await appFetch(`${API_URL}/trainingstatus/${dataKey}`);
}

export const testModel = async (dataKey) => {
  return await appFetch(`${API_URL}/make_prediction?dataKey=${dataKey}`);
}


export const testEndpoint = async key => {
  console.log('HALLO', key);
  return await appFetch(`${API_URL}/test?key=${key}`);
} 