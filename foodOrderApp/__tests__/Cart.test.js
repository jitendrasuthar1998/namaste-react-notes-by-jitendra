import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../src/components/Cart.js";
import { Provider } from "react-redux";
import appStore from "../src/redux/appStore.js";
import RestaurantMenu from "../src/components/RestaurantMenu.js";
import Header from "../src/components/Header/Header.js";
import { act } from "react-dom/test-utils";
import MOCK_RESTAURANT_DATA from "../mocks/oneRestaurantData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANT_DATA);
    },
  });
});

describe("Test cart functionality", () => {
  it("Should add product to cart", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordianHeader = screen.getByText("Biscuit (11)");
    fireEvent.click(accordianHeader);

    const categoryItems = screen.getAllByTestId("fooditems");
    // console.log("categoryItems length is == ", categoryItems.length);
    expect(categoryItems.length).toBe(11);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  });
});
