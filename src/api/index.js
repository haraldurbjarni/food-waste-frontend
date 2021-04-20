
const API_URL = 'http://127.0.0.1:5000/api';

export const appFetch = async (url, options={}) => {
  console.log('HVAP ER I GANGI')
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


export const trainModel = async (dataKey,priceKey,profitMargin) => {
  return await appFetch(`${API_URL}/train_model?dataKey=${dataKey}&priceKey=${priceKey}&profitMargin=${profitMargin}`);
}


export const testEndpoint = async key => {
  console.log('HALLO', key);
  return await appFetch(`${API_URL}/test?key=${key}`);
} 