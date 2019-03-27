import React from 'react';
import { mount } from "enzyme";
import UserRegistrationForm from './userRegistrationForm';

describe("User Registration Form", () => {
  let props;
  let mountedForm;
  const form = () => {
    if (!mountedForm) {
      mountedForm = mount(
        <UserRegistrationForm {...props} />
      );
    }
    return mountedForm;
  }

  beforeEach(() => {
    mountedForm = undefined;
  });

  // All tests will go here
  it("Form always renders a div", () => {
    const divs = form().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Form has a title", () => {
    const wrapper = card();
    expect(
      wrapper.find('div').text()
    ).toEqual('Introduction')
  });
});
