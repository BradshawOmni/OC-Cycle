  static fetchAcademies()  {
    console.log('Entered fetch Academies');
    let acad = { academies: [{ id: 0, name: 'not found', description: 'it did not work' }] };
    return fetch('http://localhost:3002/api/Demo/1', {
      mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log(response);
      if (response.ok) {
        console.log('Body', response);
        acad = { academies: response.body.getReader };
        return acad;
      }
      return acad;
    }).then(function (json) {
      console.log('parsed json', json);
    }).catch(function (ex) {
      console.log('parse failed', ex);
    });
  }
