const ops = require('./ops');
var fs = require('fs');
var path = require('path');
const fetchData = require('./rainfall');

const lengths = ops.getLengths(['Hi', 'how', 'are', 'you', 'today']);
console.log('lengths: ', lengths);

const sum = ops.getSum([1, 2, 3]);
console.log('sum: ', sum);

const sensorID = 3680;

fetchData(sensorID, { date: '2022-05-05', _view: 'full' })
  .then((measurements) => {
    writeToTheFile(measurements);
  })
  .catch((err) => {
    console.log(err);
    console.log('Error has happend: ', err.response.statusText);
  });

const writeToTheFile = (measurements) => {
  const filePath = path.join(__dirname, '..', 'logs', 'measurements.json');
  fs.writeFile(filePath, JSON.stringify(measurements), (err) => {
    if (err) {
      console.log('Problems writing to the file');
    }
    console.log('File written successfully');
  });
}
