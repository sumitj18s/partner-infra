import React from "react";
import { shallow } from "enzyme";
import Filter from '.';

describe("<Filter component />", () => {
  let wrapper;

  const props = { data: ['foo', 'bar'], update: jest.fn(), setBlank: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(<Filter {...props} />)
  });

  it("should render correctly", () => {
    expect(wrapper).toBeDefined();
  });

  it("should count number of children", () => {
    const actual = wrapper.render().children().length;
    
    expect(actual).toEqual(3);
  });
});
