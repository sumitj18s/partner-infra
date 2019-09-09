import React from "react";
import { shallow } from "enzyme";
import { BarChartContainer, PieChartContainer } from '.';

describe("<Chart component />", () => {
  let wrapperBarChart;
  let wrapperPieChart;

  const props = {
    data: [{ "id": "1", "first_name": "foo", "last_name": "bar", "email": "test@test.com", "gender": "Female", "city": "frc", "country": "CZ", "score": 53, "created_at": "2017-01-03T23:13:01Z" }],
    columnFilter: 'country',
    columnAggregate: 'score'
  }
  beforeEach(() => {
    wrapperBarChart = shallow(<BarChartContainer {...props} />)
    wrapperPieChart = shallow(<PieChartContainer {...props} />)
  });

  it("should render BarChart correctly", () => {
    expect(wrapperBarChart).toBeDefined();
  });

  it("should contain Bar Chart", () => {
    const actual = wrapperBarChart.find('BarChart').length;
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  it("should render PieChart correctly", () => {
    expect(wrapperPieChart).toBeDefined();
  });

  it("should contain Pie Chart", () => {
    const actual = wrapperPieChart.find('PieChart').length;
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});
