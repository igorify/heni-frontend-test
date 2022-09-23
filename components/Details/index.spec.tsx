import { Details } from ".";
import { render, screen } from "@testing-library/react";

const props = {
  alt: 'AMERICANCHAMPION',
  name: "American Champion",
  model: null,
  image: "https://i.imgur.com/woCxpkj.jpg",
  classValue: 7604342,
  imo: 7434016,
  mmsi: 367020820,
  roles: [
    "Support Ship",
    "Barge Tug"
  ],
  type: "Tug",
  weight_kg: 266712,
  weight_lbs: 588000,
  year_built: 1976,
  home_port: "Port of Los Angeles",
};

describe("Given a Details Component", () => {
  describe("When it is not loading", () => {
    describe("When it is rendered with props", () => {
      beforeEach(() => {
        render(<Details {...props} />);
      });

      test("Then the image alt value should be rendered correctly", () => {
        expect(screen.getByAltText(props.alt)).toBeInTheDocument();
      });
      test("Then the model value should be rendered correctly", () => {
        expect(screen.getByText(`Model: ${props.model}`)).toBeInTheDocument();
      });
      test("Then the class value should be rendered correctly", () => {
        expect(screen.getByText(`Class: ${props.classValue}`)).toBeInTheDocument();
      });
      test("Then the imo value should be rendered correctly", () => {
        expect(screen.getByText(`Imo: ${props.imo}`)).toBeInTheDocument();
      });
      test("Then the mmsi value should be rendered correctly", () => {
        expect(screen.getByText(`Mmsi: ${props.mmsi}`)).toBeInTheDocument();
      });
      test("Then the roles value should be rendered correctly", () => {
        expect(screen.getByText(`Roles: ${props.roles?.join(', ')}`)).toBeInTheDocument();
      });
      test("Then the type value should be rendered correctly", () => {
        expect(screen.getByText(`Type: ${props.type}`)).toBeInTheDocument();
      });
      test("Then the weight_kg value should be rendered correctly", () => {
        expect(screen.getByText(`Weight (kg): ${props.weight_kg}`)).toBeInTheDocument();
      });
      test("Then the weight_lbs value should be rendered correctly", () => {
        expect(screen.getByText(`Weight (lbs): ${props.weight_lbs}`)).toBeInTheDocument();
      });
      test("Then the year_built value should be rendered correctly", () => {
        expect(screen.getByText(`Year built: ${props.year_built}`)).toBeInTheDocument();
      });
      test("Then the year_built value should be rendered correctly", () => {
        expect(screen.getByText(`Home port: ${props.home_port}`)).toBeInTheDocument();
      });
    });
  });

  describe("When it is loading", () => {
    beforeEach(() => {
      render(<Details {...props} loading={true} />);
    });

    test("Then the loading placeholders should be rendered correctly", () => {
      expect(screen.getAllByTestId('loading-placeholder')).toHaveLength(13);
    });
  });
});
