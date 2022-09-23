import userEvent from "@testing-library/user-event";
import { Card } from ".";
import { render, screen } from "@testing-library/react";

const onClick = jest.fn();

const baseProps = {
  alt: 'alt',
  image: "https://i.imgur.com/woCxpkj.jpg",
  label: "label",
  description: "description",
};

describe("Given a Card Component", () => {
  describe("When it is not loading", () => {
    describe("When it is rendered with minimal props", () => {
      beforeEach(() => {
        render(<Card {...baseProps} />);
      });

      test("Then the label should be rendered correctly", () => {
        expect(screen.getByText("label")).toBeInTheDocument();
      });
      test("Then the description should be rendered correctly", () => {
        expect(screen.getByText("description")).toBeInTheDocument();
      });
      test("Then the image alt value should be rendered correctly", () => {
        expect(screen.getByAltText('alt')).toBeInTheDocument();
      });
    });

    describe("When the onClick prop is provided", () => {
      beforeEach(() => {
        render(<Card {...baseProps} onClick={onClick} />);
      });

      describe("When clicking the Card componnent", () => {
        beforeEach(async () => {
          jest.clearAllMocks();
          await userEvent.click(screen.getByText("label"));
        });

        test("Then the onClick function should have been called", () => {
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe("When it is loading", () => {
    beforeEach(() => {
      render(<Card {...baseProps} loading={true} />);
    });

    test("Then the loading placeholders should be rendered correctly", () => {
      expect(screen.getAllByTestId('loading-placeholder')).toHaveLength(4);
    });
  });
});
