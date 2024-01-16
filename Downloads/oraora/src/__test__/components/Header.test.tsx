/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Header from "../../Components/Common/Header";
import { BrowserRouter as Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../TestCommon";

jest.mock("axios");

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test("Header Component Has Login Text", async () => {

  render(
    <Provider store={store}>
    <Routes>
      <Header />
    </Routes>
    </Provider>
  );

    const checkText = screen.getByText("Login", { exact: true });
    expect(checkText).toBeInTheDocument();
});
