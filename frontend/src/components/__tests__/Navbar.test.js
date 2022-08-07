import Navbar from "../Navbar";
import { render, screen, cleanup } from "@testing-library/react";

test("should render navbar", () => {
  render(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument;
});
