const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const renderData = (data) => {
  let list = "";
  data.forEach(({ title, body }) => {
    if (title.length > 20) title = title.slice(0, 20);
    list += `
    <li class="card">
    <h2 class="card-title">
      ${title}
    </h2>
    <p class="card-body">
      ${body}
    </p>
  </li>
    `;
  });
  document.getElementById("card-list").innerHTML = list;
};

fetchData("https://jsonplaceholder.typicode.com/posts").then((data) => {
  renderData(data);
});
