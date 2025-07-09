
let page = 0;
let showProduct = 7;
let lengthOfProduct;

function getProduts() {
  let req = fetch("https://dummyjson.com/products");
  req.then((response) => {
    return response.json();
  }).then((product) => {
    lengthOfProduct = product.products.length;
    for (let i = page; i < showProduct; i++) {
      if (i < lengthOfProduct) {
        console.log(product.products[i]);
      }
    }
  });
}

function getNext() {
  if (showProduct < lengthOfProduct) {
    page += 7;
    showProduct += 7;
    getProduts();
  } else {
    console.log("No more products to show.");
  }
}

function getPrevious() {
  if (page > 0) {
    page -= 7;
    showProduct -= 7;
    getProduts();
  } else {
    console.log("You are already at the first page.");
  }
}


getProduts();


