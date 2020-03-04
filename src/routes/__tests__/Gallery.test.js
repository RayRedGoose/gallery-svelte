import { render, mount, asSvelteComponent } from "@testing-library/svelte";
import Gallery from '../Gallery';
import { getArts } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe("Gallery component", () => {
  beforeEach(() => {
    getArts.mockImplementation(() => (
      Promise.resolve({
        data: [{
          id: 1,
          primaryimageurl: 'some.image.jpg',
          colors: [{css3: '#ffffff'}],
          people: [{
            displayname: 'Author'
          }],
          title: 'Art'
        }],
        pages: 3
      })
    ));
  });

  it("should render component correctly", () => {
    const { container, getByText } = render(Gallery, {params: {culture: 'german'}});

    expect(getByText("Previous")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();
  });

  it("makes a GET request after remdering", () => {
    const { container, getByText } = render(Gallery, {params: {culture: 'german'}});

    expect(getArts).toHaveBeenCalledWith(1, 'German');
  });
});
