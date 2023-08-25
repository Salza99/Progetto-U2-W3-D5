const URL = "https://striveschool-api.herokuapp.com/api/product/";

window.addEventListener("DOMContentLoaded", async () => {
  creaPagina();
});

const eliminaProdotto = async (id) => {
  console.log(id);
  //   let idProd = resp._id;
  let elimina = await fetch(URL + id, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE4OWMwMzRmZjAwMTQwM2Y1MzgiLCJpYXQiOjE2OTI5NTA5MjEsImV4cCI6MTY5NDE2MDUyMX0.bpCEkrdfG0n-89OwzBbwGaJ08Iz-dckSDvCItcx-uV0",
      "content-type": "application/JSON",
    },
  }).then((res) => creaPagina()); // or res.json()
};
const creaPagina = async () => {
  const getProduct = await fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE4OWMwMzRmZjAwMTQwM2Y1MzgiLCJpYXQiOjE2OTI5NTA5MjEsImV4cCI6MTY5NDE2MDUyMX0.bpCEkrdfG0n-89OwzBbwGaJ08Iz-dckSDvCItcx-uV0",
      "content-type": "application/JSON",
    },
  });
  const resp = await getProduct.json();
  console.log(resp[1]._id);
  let main = document.getElementById("main");
  main.innerHTML = "";
  for (let i = 0; i < resp.length; i++) {
    let respString = JSON.stringify(resp[i]._id);
    console.log(respString);

    main.innerHTML += `
        
        <div class="card col-4 mb-3 ">
          <img src="${resp[i].imageUrl}" class="card-img-top">
          <div id="corpo" class="card-body">
            <h5 class="card-title">${resp[i].name}</h5>
            <p class="card-text">${resp[i].description}</p>
            <p class="card-text"><small class="text-muted">${resp[i].price}€</small></p>
            <button onclick="modificaProdotto('${resp[i]._id}')" class="btn btn-primary">Modifica</button>
            <button onclick="eliminaProdotto('${resp[i]._id}')" id="btn-remove${i}" class="btn btn-danger">Rimuovi</button>
          </div>
        `;
  }
};
const modificaProdotto = async (id) => {
  window.location.href = "./backoffice.html?id=" + id;
};
