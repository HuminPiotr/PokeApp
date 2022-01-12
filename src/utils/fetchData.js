const fetchData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results.map((item) => item.name))
    .catch((error) => console.log(error));
};

export default fetchData;
