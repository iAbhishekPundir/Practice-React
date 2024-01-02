import Contact from "../Contact";
const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";

describe("Contact Component it cases ", () => {
  it("Should load Contact Component successfully", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load the button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load the button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load the input box inside Contact Component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Enter you name");
    //   console.log("Yaha par check karo", input);

    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("Should load the input box inside Contact Component", () => {
    render(<Contact />);

    const inputbox = screen.getAllByRole("textbox");

    //Assertion
    expect(inputbox.length).toBe(2);
  });
});
