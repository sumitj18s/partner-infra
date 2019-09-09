import SORTING from '../Components/SortIcon/constants';

const R = require('ramda');

const handleSort = sortOrder => {
  return sortOrder === SORTING.DESC ? SORTING.ASC : SORTING.DESC;
};

function Sort(dataSource, column, sortOrder) {

  const sortColumn =
    sortOrder === SORTING.ASC
      ? R.sortWith([R.ascend(R.prop(column))])
      : R.sortWith([R.descend(R.prop(column))]);
  return sortColumn(dataSource);
}

function applyFilter(dataSource, query) {
  if (!query) return false;
  const regEx = new RegExp(query, 'g');
  const columns = ['firstName', 'lastName', 'country'];
  const output = [];
  dataSource.forEach(row => {
    columns.forEach(column => {
      if (row[column].match(regEx)) {
        output.push(row);
      }
    });
  });

  return output;
}

function findColumnsData(dataSource, column) {
  const output = [];

  dataSource.forEach(row => {
    output.push(row[column]);
  });

  return output;
}

export { applyFilter, findColumnsData, handleSort, Sort };
