const R = require('ramda')


function getUniqueColumnValues(dataSource, column) {
  const output = [];
  dataSource.length > 0 && dataSource.map((e) => {
    if (e[column])
      output.push(e[column])
  });
  const uniq = output.length > 0 && R.uniq(output);
  return uniq || undefined;
}

function getAverageScore(dataSource, column, score) {
  let dataSet = [], output = [], avg = 0, columnGroup = [];

  columnGroup = getUniqueColumnValues(dataSource, column)
  columnGroup.length > 0 && columnGroup.map(element => {
    const result = dataSource.filter(filter => filter[column] == element)
    const scoreValues = getUniqueColumnValues(result, score)
    dataSet.push({ uniqueColumn: element, score: scoreValues })
  })
  dataSet.length > 0 && dataSet.map(element => {
    const score = element.score;
    let sum = 0;
    if (score) {
      for (let i = 0; i < score.length; i++) {
        sum += parseInt(score[i], 10);
      }

      avg = sum / score.length;
      output.push({ uniqueColumn: element.uniqueColumn, avg })
    }
    else{
      output.push({ uniqueColumn: element.uniqueColumn, avg:''})
    }
  })
  return output || undefined;
}
// console.log(getAverageScore(data, 'country', 'score'));
// console.log(getAverageScore(data,'gender', 'score'));
export default getAverageScore
