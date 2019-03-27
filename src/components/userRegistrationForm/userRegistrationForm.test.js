import React from 'react'
import { mount, shallow } from "enzyme"
import { Provider } from 'react-redux'
import UserRegistrationForm from './userRegistrationForm'
import configureMockStore from "redux-mock-store"

const mockStore = configureMockStore();
const store = mockStore({});

describe("User Registration Form", () => {
  let props;
  let mountedForm;
  const form = () => {
    if (!mountedForm) {
      mountedForm = mount(
        <Provider store={store}>
          <UserRegistrationForm {...props} />
        </Provider>
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
    const wrapper = form();
    expect(
      wrapper.find('button').text()
    ).toEqual('Next')
  });
});
