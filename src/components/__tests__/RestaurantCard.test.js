import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";
import { PromotedRestaurant } from "../Body";

describe("RestaurantCard component test cases", () => {

  it("should render RestaurantCard ", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const restaurantName = screen.getByText("Chai Point");

    // expect(restaurantName.info.name).toBe("Little Italy")
    expect(restaurantName).toBeInTheDocument();
  });

  it("should render RestaurantCard with Promoted label", () => {
    render(<PromotedRestaurant resData={MOCK_DATA} />);

    const restaurantName = screen.getByText("Promoted");

    expect(restaurantName).toBeInTheDocument();
  });
});
