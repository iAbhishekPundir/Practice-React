import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import Header from "../Header";
import MOCK_DATA from "../mocks/RestaurantMenuMockData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
      </BrowserRouter>
    )
  );
 
  const recommendedMenuBtn = screen.getByText("Recommended (20)");
  // console.log(recommendedMenuBtn);
  fireEvent.click(recommendedMenuBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  // console.log(addBtn);
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();


  const cartBtn = screen.getByText("Cart (1)");
  fireEvent.click(cartBtn);

  const cartItem = screen.getAllByText("Primavera Gourmet-Pizza");

  expect(cartItem).toBeInTheDocument();

});
