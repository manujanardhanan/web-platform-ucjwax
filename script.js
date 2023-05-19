function renderPage() {
  const template = document.getElementById('template').innerHTML;
  getData()
    .then((response) => response.json())
    .then((response) => {
      const templateData = {
        main: response[0],
        sub: response[1],
      };
      const rendered = Mustache.render(template, templateData);
      document.getElementById('target').innerHTML = rendered;
    });
}

function getData() {
  return fetch('https://mocki.io/v1/e8156042-692d-4c14-80d3-df0a9bbaff97', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
}
