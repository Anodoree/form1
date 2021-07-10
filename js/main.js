let productItem1 = 1;
let productItem2;
let productItem3;
let productItem4;
let productItem5;
let price1 = 'Submit and Pay 24.99 USD';
let price2 = 'Submit and Pay 44 USD';
let price3 = 'Submit and Pay 60 USD';
let price4 = 'Submit and Pay 72 USD';
let price5 = 'Submit and Pay 80 USD';
let numberOfProducts = productItem1;
let array = [productItem1, productItem2, productItem3, productItem4, productItem5];

function pushAddProducts() {
  document.getElementById('addform').classList.add('add-products--active');
};

function howMuchProducts(){
  refreshHtml();
  numberOfProducts = document.querySelector('input[name="radio"]:checked').value;
  document.getElementById('addform').classList.remove('add-products--active');
  createMoreElements();
  return(numberOfProducts);
};

function refreshHtml() {
  productItem2 = document.getElementById('formproduct2');
  if(productItem2){
    productItem3 = document.getElementById('formproduct3');
    if(productItem3){
      productItem4 = document.getElementById('formproduct4');
      if(productItem4){
        productItem5 = document.getElementById('formproduct5');
        if(productItem5){
          productItem5.remove();
        }
        productItem4.remove();
      }
      productItem3.remove()
    }
    formproduct2.remove();
    editPriceButton(price1);
  }
}

function productDeleting() {
  productItem5 = document.getElementById('formproduct5');
  productItem4 = document.getElementById('formproduct4');
  productItem3 = document.getElementById('formproduct3');
  productItem2 = document.getElementById('formproduct2');
  if(productItem5 && productItem4 && productItem3 && productItem2){
    productItem5.remove();
    editPriceButton(price4);
  } else if(!productItem5 && productItem4 && productItem3 && productItem2){
    productItem4.remove();
    editPriceButton(price3);
  } else if(!productItem5 && !productItem4 && productItem3 && productItem2){
    productItem3.remove();
    editPriceButton(price2);
  } else {
    productItem2.remove();
    editPriceButton(price1);
  }
}

function editPriceButton(currentPrice) {
  document.getElementById('submitbtn').innerHTML = currentPrice;
}

function createMoreElements() {
  if(numberOfProducts == 1){
    editPriceButton(price1);
  } else if(numberOfProducts == 2){
    productItem2Gen();
    editPriceButton(price2);
  } else if(numberOfProducts == 3){
    productItem2Gen();
    productItem3Gen();
    editPriceButton(price3);
  } else if(numberOfProducts == 4){
    productItem2Gen();
    productItem3Gen();
    productItem4Gen();
    editPriceButton(price4);
  } else if(numberOfProducts == 5){
    productItem2Gen();
    productItem3Gen();
    productItem4Gen();
    productItem5Gen();
    editPriceButton(price5);
  }
}

function productItem2Gen() {
  formproduct1.insertAdjacentHTML('afterend', '<div class="form__product" id="formproduct2"></div>');
  formproduct2.insertAdjacentHTML('afterbegin', '<h3 class="form__title form__title--product">Product 2<button class="form__product-del" id="delete" onclick="productDeleting()"></button></h3>');
  formproduct2.insertAdjacentHTML('beforeend', '<label class="form__label form__label--product" for="search2">Enter main keyword for the product</label><input class="form__input form__input--product" type="search" name="" id="search2" placeholder="for example, sylicon wine cup"><label class="form__label form__label--product" for="similar2">Enter link to the similar product as a reference</label><input class="form__input form__input--product" type="url" name="" id="similar2" placeholder="https://...">');
}

function productItem3Gen() {
  formproduct2.insertAdjacentHTML('afterend', '<div class="form__product" id="formproduct3"></div>');
  formproduct3.insertAdjacentHTML('afterbegin', '<h3 class="form__title form__title--product">Product 3<button class="form__product-del" id="delete" onclick="productDeleting()"></button></h3>');
  formproduct3.insertAdjacentHTML('beforeend', '<label class="form__label form__label--product" for="search3">Enter main keyword for the product</label><input class="form__input form__input--product" type="search" name="" id="search3" placeholder="for example, sylicon wine cup"><label class="form__label form__label--product" for="similar3">Enter link to the similar product as a reference</label><input class="form__input form__input--product" type="url" name="" id="similar3" placeholder="https://...">');
}

function productItem4Gen() {
  formproduct3.insertAdjacentHTML('afterend', '<div class="form__product" id="formproduct4"></div>');
  formproduct4.insertAdjacentHTML('afterbegin', '<h3 class="form__title form__title--product">Product 4<button class="form__product-del" id="delete" onclick="productDeleting()"></button></h3>');
  formproduct4.insertAdjacentHTML('beforeend', '<label class="form__label form__label--product" for="search4">Enter main keyword for the product</label><input class="form__input form__input--product" type="search" name="" id="search4" placeholder="for example, sylicon wine cup"><label class="form__label form__label--product" for="similar4">Enter link to the similar product as a reference</label><input class="form__input form__input--product" type="url" name="" id="similar4" placeholder="https://...">');
}

function productItem5Gen() {
  formproduct4.insertAdjacentHTML('afterend', '<div class="form__product" id="formproduct5"></div>');
  formproduct5.insertAdjacentHTML('afterbegin', '<h3 class="form__title form__title--product">Product 5<button class="form__product-del" id="delete" onclick="productDeleting()"></button></h3>');
  formproduct5.insertAdjacentHTML('beforeend', '<label class="form__label form__label--product" for="search5">Enter main keyword for the product</label><input class="form__input form__input--product" type="search" name="" id="search5" placeholder="for example, sylicon wine cup"><label class="form__label form__label--product" for="similar5">Enter link to the similar product as a reference</label><input class="form__input form__input--product" type="url" name="" id="similar5" placeholder="https://...">');
}