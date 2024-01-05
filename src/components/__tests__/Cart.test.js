import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/RestaurantMenuMockData.json";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const recommendedMenuBtn = screen.getByText("Recommended (20)");
  //   console.log(recommendedMenuBtn);
  fireEvent.click(recommendedMenuBtn);

  // const menuItem = screen.getByAltText("Primavera Gourmet-Pizza");

  const addBtn = screen.getByRole("button", { name: "Add +" });
  console.log(addBtn);
});