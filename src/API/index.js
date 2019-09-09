async function getData(url) {
  const result = await fetch(url)
    .then((response) => (response.json()))
    .then((myJson) => {
      return myJson;
    });

  return result;
}

export default getData;