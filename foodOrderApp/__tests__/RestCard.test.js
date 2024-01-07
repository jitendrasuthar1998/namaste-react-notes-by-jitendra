import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCard.json";
import RestaurantCard from "../src/components/RestaurantCard";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  // console.log("resData is == ", MOCK_DATA.info);
  render(<RestaurantCard resdata={MOCK_DATA.info} />);

  const resName = screen.getByText("Pizza Hut");

  expect(resName).toBeInTheDocument();
});
 