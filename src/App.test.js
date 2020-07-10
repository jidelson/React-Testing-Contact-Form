import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("App renders the header", () => {
  render(<App />);
  const header = screen.getByText(/The Form of Joe/i)
  expect(header).toBeInTheDocument()
})