const myCont = document.getElementById("cont-product");

const prodList = [
  {
    id: 1,
    src: "assets/images/Prod01.jpg",
    rating: "4.4",
    numberOfPeople: "232",
  },
  {
    id: 2,
    src: "assets/images/Prod02.jpg",
    rating: "4.3",
    numberOfPeople: "191",
  },
  {
    id: 3,
    src: "assets/images/Prod03.jpg",
    rating: "4.8",
    numberOfPeople: "92",
  },
  {
    id: 4,
    src: "assets/images/Prod04.jpg",
    rating: "3.9",
    numberOfPeople: "446",
  },
  {
    id: 5,
    src: "assets/images/Prod05.jpg",
    rating: "4.6",
    numberOfPeople: "23",
  },
  {
    id: 6,
    src: "assets/images/Prod06.jpg",
    rating: "4.4",
    numberOfPeople: "251",
  },
  {
    id: 7,
    src: "assets/images/Prod07.jpg",
    rating: "4.5",
    numberOfPeople: "301",
  },
  {
    id: 8,
    src: "assets/images/Prod08.jpg",
    rating: "4.6",
    numberOfPeople: "293",
  },
  {
    id: 9,
    src: "assets/images/Prod09.jpg",
    rating: "4.4",
    numberOfPeople: "128",
  },
  {
    id: 10,
    src: "assets/images/Prod10.jpg",
    rating: "4.5",
    numberOfPeople: "317",
  },
];

// let price = function () {
//   let randN = Math.floor(Math.random() * 6 + 1);
//   console.log(randN);
//   randN > 10 ? 10 : randN;
//   price = randN * 50 + 500;
//   return price;
// };

// console.log(price);

for (let item = 0; item < prodList.length; item++) {
  const boxdiv = document.createElement("div");
  boxdiv.className = "box";

  boxdiv.innerHTML = `<div class='card'>
          <div class="img-cont">
            <img class="prod-img" src="${prodList[item].src}" >
                <div class="rate-box">
                    <p>${prodList[item].rating}</p>
                    <p>⭐</p>
                     |
                    <p>${prodList[item].numberOfPeople}</p>
                </div>
              </div>
            <p class="bold">INVICTUS</p>
            <p class="grey">Formal Slim Fit Shirt</p>
            <p class="price-offer">
              <span class="bold">Rs. 649</span>
              <span class="grey strike">Rs. 1299</span>
              <span class="red">(50% OFF)</span>
            </p>
          </div>`;

  myCont.appendChild(boxdiv);
}

// const productList = [
//   {
//     id: 1,
//     name: "iPhone",
//     brand: "Apple",
//   },
//   {
//     id: 2,
//     name: "Samsung S22",
//     brand: "Samsung",
//   },
//   {
//     id: 3,
//     name: "MI Redmi",
//     brand: "Xiaomi",
//   },
//   {
//     id: 1,
//     name: "iPhone",
//     brand: "Apple",
//   },
//   {
//     id: 2,
//     name: "Samsung S22",
//     brand: "Samsung",
//   },
//   {
//     id: 3,
//     name: "MI Redmi",
//     brand: "Xiaomi",
//   },
//   {
//     id: 1,
//     name: "iPhone",
//     brand: "Apple",
//   },
//   {
//     id: 2,
//     name: "Samsung S22",
//     brand: "Samsung",
//   },
//   {
//     id: 3,
//     name: "MI Redmi",
//     brand: "Xiaomi",
//   },
// ];

// for (let i = 0; i < productList.length; i++) {
//   const innerelem = document.createElement("div");
//   innerelem.className = "box";
//   innerelem.innerHTML = `<div class="card">
//                             <p>${productList[i].name}</p>
//                             <p>${productList[i].brand}</p>
//                           </div>`;
//   myCont.appendChild(innerelem);
// }

//
// for (let item = 0; item < productList.length; item++) {
//   const element = document.createElement("div");

//   element.innerHTML = `<div class='card'>
//       <p>INVICTUS</p>
//       <p>Slim Fit Formal Shirt</p>
//       </div>`;

//   myContainer.appendChild(element);
// }
