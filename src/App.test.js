import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link1", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link2", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn/i);
  expect(linkElement).toBeInTheDocument();
});
