import { render, screen } from "@testing-library/react";
import Head from "next/head";

import Component from "../index";

jest.mock("next/head");

describe("Home", () => {
  beforeAll(() => {
    Head.mockImplementation(({ children }) => <>{children}</>);
  });

  it("should render without problems", () => {
    render(<Component />);
    expect(screen.getByTestId("Home_Main")).toBeInTheDocument();
  });
});
