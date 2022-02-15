const test = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => display(data));
};
test();
const display = (data) => {
  const desh = document.getElementById("travel");
  data.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    const h3 = document.createElement("h3");
    h3.innerText = country.name;
    div.appendChild(h3);
    const p = document.createElement("p");
    p.innerText = country.capital;
    div.appendChild(p);
    const img = document.createElement("img");
    img.src=country.flag;
    img.setAttribute('width','200px');
    div.appendChild(img);
    desh.appendChild(div);
    div.onclick = () => dynamic(country.name);
  });
};
const dynamic = (name) => {
  fetch(`https://restcountries.com/v2/name/${name}`)
    .then((res) => res.json())
    .then((data) => show(data[0]));
};

const show = (country) => {
  alert(`Money Name:${country.currencies[0].name}`);
};
