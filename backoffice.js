const URL = "https://striveschool-api.herokuapp.com/api/product/";

const button = document.getElementById("submit");

const creaProdotto = async () => {
  let nameInput = document.getElementById("name").value;
  let descrizioneInput = document.getElementById("descrizione").value;
  let BrandInput = document.getElementById("brand").value;
  let ImageInput = document.getElementById("image").value;
  let priceInput = document.getElementById("prezzo").value;

  const product = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      name: nameInput,
      description: descrizioneInput,
      brand: BrandInput,
      imageUrl: ImageInput,
      price: priceInput,
    }),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE4OWMwMzRmZjAwMTQwM2Y1MzgiLCJpYXQiOjE2OTI5NTA5MjEsImV4cCI6MTY5NDE2MDUyMX0.bpCEkrdfG0n-89OwzBbwGaJ08Iz-dckSDvCItcx-uV0",
      "content-type": "application/JSON",
    },
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  const getProduct = await fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE4OWMwMzRmZjAwMTQwM2Y1MzgiLCJpYXQiOjE2OTI5NTA5MjEsImV4cCI6MTY5NDE2MDUyMX0.bpCEkrdfG0n-89OwzBbwGaJ08Iz-dckSDvCItcx-uV0",
      "content-type": "application/JSON",
    },
  });
  let listId = 1;
  const resp = await getProduct.json();
  let ul = document.getElementById("lista-prodotti");

  console.log(resp);
  for (let i = 0; i < resp.length; i++) {
    let li = document.createElement("li");
    ul.innerHTML += `<li id="product ${listId}" class= " list-group-item">Id: ${resp[i]._id}, Nome prodotto: ${
      resp[i].name
    }, Prezzo: ${resp[i].price}</li><button onclick="paginaModificaProdotto(${
      (resp[i].name, resp[i].description, resp[i].brand, resp[i].imageUrl, resp[i].price)
    })"   class="btn btn-secondary ">Modifica</button><button  id="btn-delete" class="btn btn-danger mb-4">Rimuovi</button>`;
    listId++;
  }

  console.log(resp);
});

button.onclick = creaProdotto;

const paginaModificaProdotto = (previusName, previusDesc, previusBrand, previusImage, previusPrice) => {
  let nameInput = document.getElementById("name").value;
  let descrizioneInput = document.getElementById("descrizione").value;
  let BrandInput = document.getElementById("brand").value;
  let ImageInput = document.getElementById("image").value;
  let priceInput = document.getElementById("prezzo").value;
  nameInput = previusName;
  descrizioneInput = previusDesc;
  BrandInput = previusBrand;
  ImageInput = previusImage;
  priceInput = previusPrice;
};
// let putProduct = await fetch(URL + listid, {
//     method: "PUT",
//     body: JSON.stringify({
//       id: listid,
//       name: nameInput,
//       ddescription: descrizioneInput,
//       brand: BrandInput,
//       imageUrl: ImageInput,
//       price: priceInput,
//     }),
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE4OWMwMzRmZjAwMTQwM2Y1MzgiLCJpYXQiOjE2OTI5NTA5MjEsImV4cCI6MTY5NDE2MDUyMX0.bpCEkrdfG0n-89OwzBbwGaJ08Iz-dckSDvCItcx-uV0",
//       "content-type": "application/JSON",
//     },
//   });
// let newName = document.getElementById("name").value;
//   let newDescription = document.getElementById("descrizione").value;
//   let newBrand = document.getElementById("brand").value;
//   let newImage = document.getElementById("image").value;
//   let newPrice = document.getElementById("prezzo").value;
