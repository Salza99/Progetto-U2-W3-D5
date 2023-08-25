const URL = "https://striveschool-api.herokuapp.com/api/product/";

window.addEventListener("DOMContentLoaded", async () => {
  const getProduct = await fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE4OWMwMzRmZjAwMTQwM2Y1MzgiLCJpYXQiOjE2OTI5NTA5MjEsImV4cCI6MTY5NDE2MDUyMX0.bpCEkrdfG0n-89OwzBbwGaJ08Iz-dckSDvCItcx-uV0",
      "content-type": "application/JSON",
    },
  });
  const resp = await getProduct.json();
  console.log(resp);
  let main = document.getElementById("main");
  for (let i = 0; i < resp.length; i++) {
    main.innerHTML += `
    
    <div class="card col-4 mb-3 ">
      <img src="${resp[i].imageUrl}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${resp[i].name}</h5>
        <p class="card-text">${resp[i].description}</p>
        <p class="card-text"><small class="text-muted">${resp[i].price}€</small></p>
        <button class="btn btn-primary">Modifica</button>
      </div>
    `;
  }
});
