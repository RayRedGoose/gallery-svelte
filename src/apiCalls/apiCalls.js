export const getCulture = async (page) => {
  const apiKey = '64161230-5a6b-11ea-b877-8f943796feb8';
  const url = `https://api.harvardartmuseums.org/culture?apikey=${apiKey}&page=${page}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`There was an error getting culture.`);
  }

  const result = await response.json();
  return {
    pages: result.info.pages,
    data: result.records,
  };
}

export const getArts = async (page, culture) => {
  const apiKey = '64161230-5a6b-11ea-b877-8f943796feb8';
  const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&classification=Paintings&culture=${culture}&page=${page}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`There was an error getting arts.`);
  }

  const result = await response.json();
  return {
    pages: result.info.pages,
    data: result.records,
  };
}
