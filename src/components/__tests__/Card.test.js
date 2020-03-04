import { render, mount, asSvelteComponent } from "@testing-library/svelte";
import Card from '../Card';

describe("Card component", () => {
  it("should render component correctly", () => {
    const { container, getByText } = render(Card, {card: {
      id: 1,
      primaryimageurl: 'some.image.jpg',
      colors: [{css3: '#ffffff'}],
      people: [{
        displayname: 'Author'
      }],
      title: 'Title'
    }});
    expect(getByText('Author')).toBeInTheDocument();
    expect(getByText('Title')).toBeInTheDocument();
  });
});
