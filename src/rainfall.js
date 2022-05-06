const axios = require('axios');

const baseUrl = 'https://environment.data.gov.uk/flood-monitoring/id/stations';

const getAll = (id, filters) => {
  let url = `${baseUrl}/${id}/readings`;
  const request = axios.get(url, { params: filters });

  return request.then((response) => response.data.items);
};

const fetchData = (id, filters) => {
  return getAll(id, filters).then((items) =>
    items.map(({ value, dateTime }) => ({
      value,
      dateTime,
    }))
  );
};

module.exports = fetchData;
