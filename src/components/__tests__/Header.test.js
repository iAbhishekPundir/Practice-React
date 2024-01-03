import Header from "../Header";
const { render, screen, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header test cases", () => {
  it("should render Header Component with Login button successfully", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const button = screen.getByRole("button");
    // const button = screen.getByText("Login");
    // const button = screen.getByRole("button", {name:"Login"});
    expect(button).toBeInTheDocument();
  });

  it("should render Header Component with Cart items button successfully", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //usin regex
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("should change Login button to Logout button inside Header successfully", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //usin regex
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
