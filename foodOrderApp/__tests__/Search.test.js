import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/components/Body/Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/restaurantList.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
// we are writing this function as identical to fetch() method provided by browser.
//
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// Integration tests
/*
it("Should search resturant list for sweet text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(9);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  // get input box

  const searchInput = screen.getByTestId("searchInput");
  //   console.log("searchInput", searchInput);

  fireEvent.change(searchInput, { target: { value: "sweet" } });

  fireEvent.click(searchBtn);

  //   screen should load 4 res cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);

  // console.log("cards", cards);
});

*/

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(9);
  const filterBtn = screen.getByTestId("filterBtn");

  fireEvent.click(filterBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(1);
});
