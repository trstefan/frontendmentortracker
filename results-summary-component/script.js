const li = document.getElementsByTagName("ul")[0];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const item = document.createElement("li");
      const div = document.createElement("div");
      const p = document.createElement("p");
      const p2 = document.createElement("p");
      const img = document.createElement("img");

      img.src = data[i].icon;
      img.src = data[i].icon;
      img.alt = data[i].category;
      p.innerHTML = data[i].category;
      p2.innerHTML = `${data[i].score} / 100`;

      div.append(img);
      div.append(p);

      item.append(div);
      item.append(p2);
      li.append(item);

      console.log(p2);
    }
  })
  .catch((error) => console.error(error));
