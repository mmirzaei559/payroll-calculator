import React from "react";
import {render, screen} from "@testing-library/react";
import DropDown from "./DropDown";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import MockData from "../../mockData/MockData.json";

describe("DropDown component", () => {
 test("search input should exist and onFocus show ordered-lists",  () => {
  const profession = MockData[1];
  const errorValidationProfession = false;
  const {getByRole, getByText} = render(
   <Provider store={store}>
    <DropDown data={profession} error={errorValidationProfession}/>
   </Provider>
  );
  const inputElement = screen.getByTestId('search-input');
  expect(inputElement).toBeInTheDocument();
  inputElement.focus();
  const li = screen.getByTestId('items-ordered-lists');
  expect(li).toBeInTheDocument()
 })
})