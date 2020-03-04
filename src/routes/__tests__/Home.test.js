import { render, mount, asSvelteComponent } from "@testing-library/svelte";
import Home from '../Home';
import { getArts } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe("Home component", () => {
  beforeEach(() => {
    getArts.mockImplementation(() => (
      Promise.resolve({
        data: [{
          id: 1,
          primaryimageurl: 'some.image.jpg',
          colors: [{css3: '#ffffff'}],
          people: [{
            displayname: 'Author'
          }]
        }],
        pages: 1
      })
    ));
  });

  it("should render component correctly", () => {
    const { container, getByText } = render(Home);
    const h3 = 'Find your color inspiration';
    const h4 = 'in European culture\'s Arts';
    expect(getByText(h3)).toBeInTheDocument();
    expect(getByText(h4)).toBeInTheDocument();
  });

  it("makes a GET request after remdering", () => {
    const { container, getByText } = render(Home);
    expect(getArts).toHaveBeenCalledWith(1, 'Belgian');
  });
});
