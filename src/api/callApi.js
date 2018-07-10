
export const getPayload = (url, method, caller, body) => {
  return fetch(url, {
    mode: 'cors',
    method: `${method}`,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`${caller} by response was not OK.`);
    }
  }).then((data) => {
    return data;
  });
};
