import { render, mount, asSvelteComponent } from "@testing-library/svelte";
import Nav from '../Nav';

describe("Nav component", () => {
  it("should render component correctly", () => {
    const { container, getByText } = render(Nav, {active: 'german'});
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('British')).toBeInTheDocument();
    expect(getByText('German')).toBeInTheDocument();
    expect(getByText('French')).toBeInTheDocument();
    expect(getByText('Spanish')).toBeInTheDocument();
    expect(getByText('Italian')).toBeInTheDocument();
    expect(getByText('Norwegian')).toBeInTheDocument();
    expect(getByText('Dutch')).toBeInTheDocument();
    expect(getByText('Gallery Palette')).toBeInTheDocument();
  });
});
