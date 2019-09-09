const R = require('ramda');

function getUniqueColumnValues(dataSource, column) {
  const output = [];

  if (dataSource.length > 0) {
    dataSource.forEach(e => {
      if (e[column])
        output.push(e[column]);
    });
  }

  const uniq = output.length > 0 && R.uniq(output);
  return uniq || [];
}

function getAverageScore(dataSource, column, score) {
  if (!dataSource) return null;
  const dataSet = [];
  const output = [];
  let average = 0;
  let columnGroup = [];

  columnGroup = getUniqueColumnValues(dataSource, column);

  if (columnGroup.length > 0) {
    columnGroup.forEach(element => {
      const result = dataSource.filter(filter => filter[column] === element);
      const scoreValues = getUniqueColumnValues(result, score);
      dataSet.push({ uniqueColumn: element, score: scoreValues });
    });
  }

  if (dataSet.length > 0) {
    dataSet.forEach(element => {
      const getScore = element.score;
      if (getScore.length) {
        const sum = getScore.reduce((accumulator, currentValue) => accumulator + currentValue);
        average = Math.floor(sum / getScore.length);
        output.push({ uniqueColumn: element.uniqueColumn, average });
      } else {
        output.push({ uniqueColumn: element.uniqueColumn, average: 'n/a' });
      }
    });
  }

  return output || undefined;
}

export default getAverageScore;
