const url = process.env.REACT_APP_URL_API || 'http://localhost:3001';

export default async function requestApi(endpoint, method) {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url + endpoint, requestOptions);
  const responseData = response.json();
  return responseData;
}
