import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantListMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Test cases for Search functionality", () => {
  it("should test filtering Restaurant with Search ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardBeforeSearch = screen.getAllByTestId("resCard");

    // console.log(cardBeforeSearch.length);
    expect(cardBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    //screen should load 1 card

    const cardAfterSearch = screen.getAllByTestId("resCard");

    expect(cardAfterSearch.length).toBe(1);
  });

  it("should show top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    expect(topRatedBtn).toBeInTheDocument();

    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(9);

    fireEvent.click(topRatedBtn);

    const topRatedResCard = screen.getAllByTestId("resCard");
    expect(topRatedResCard.length).toBe(4);
  });
});
