import { render } from "@testing-library/react";
import Button, {
  ButtonSize,
  ButtonSizeMap,
  ButtonVariant,
  ButtonVariantMap,
} from ".";

describe("@/components/shared/Button", () => {
  it("should render the button correctly", () => {
    const { getByTestId } = render(<Button />);

    const element = getByTestId("button-component");
    expect(element).toBeTruthy();
  });

  it("should display the button text correctly", () => {
    const { getByText } = render(<Button>Click to do something</Button>);

    expect(getByText("Click to do something")).toBeTruthy();
  });

  it("should render the button with primary variant if no variant prop is passed", () => {
    const { getByTestId } = render(<Button />);

    const element = getByTestId("button-component");
    const classNames = element.className;
    expect(classNames.includes(ButtonVariantMap.primary)).toBeTruthy();
  });

  it("should render the button with large size if no size prop is passed", () => {
    const { getByTestId } = render(<Button />);

    const element = getByTestId("button-component");
    const classNames = element.className;
    expect(classNames.includes(ButtonSizeMap.large)).toBeTruthy();
  });

  it("should render the button with a different variant correctly", () => {
    const { getByTestId } = render(
      <Button variant={ButtonVariant.SECONDARY} />
    );

    const element = getByTestId("button-component");
    const classNames = element.className;
    expect(classNames.includes(ButtonVariantMap.secondary)).toBeTruthy();
  });

  it("should render the button with a different size correctly", () => {
    const { getByTestId } = render(<Button size={ButtonSize.SMALL} />);

    const element = getByTestId("button-component");
    const classNames = element.className;
    expect(classNames.includes(ButtonSizeMap.small)).toBeTruthy();
  });
});
