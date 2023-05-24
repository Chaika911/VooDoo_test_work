class ProductCard {
    constructor(imageUrl, title, price, vendor) {
      this.imageUrl = imageUrl;
      this.title = title;
      this.price = price;
      this.vendor = vendor;
    }

    render() {
      const cardElement = document.createElement('div');
      cardElement.classList.add('product-card');

      const imageElement = document.createElement('img');
      imageElement.src = this.imageUrl;
      imageElement.classList.add('cardImg');
      cardElement.appendChild(imageElement);

      const infoBlock = document.createElement('div')
      infoBlock.classList.add('info');


      const titleElement = document.createElement('h3');
      titleElement.textContent = this.title;

      infoBlock.appendChild(titleElement);

      const priceElement = document.createElement('p');
      priceElement.textContent = `Price: ${this.price !== undefined ? this.price : '0.00'}KR.`;
      infoBlock.appendChild(priceElement);

      const vendorElement = document.createElement('p');
      vendorElement.textContent = `Vendor: ${this.vendor}`;
      infoBlock.appendChild(vendorElement);
      cardElement.appendChild(infoBlock);

      const cardBtn = document.createElement('button');
      cardBtn.textContent = 'PICK-UP IN 2200';
      cardBtn.classList.add('cardBtn');
      cardElement.appendChild(cardBtn);


      return cardElement;
    }
  }

  let url = 'https://voodoo-sandbox.myshopify.com/products.json?limit=12';

  let promise = fetch(url);

  promise
    .then(response => response.json())
    .then(data => {
      const products = data.products;
      console.log(products);

      const productList = document.getElementById('productsList');

      products.forEach(product => {
        const { title, price, vendor } = product;
        const imageUrl = product.images[0].src;

        const productCard = new ProductCard(imageUrl, title, price, vendor);
        const cardElement = productCard.render();

        productList.appendChild(cardElement);
      });
    })
    .catch(error => alert('Сталася помилка... :( оновіть сторінку'));