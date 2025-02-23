// 商品数据
const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: 'images/product3.jpg' }
];

// 购物车数据
let cart = [];

// 获取 DOM 元素
const productList = document.getElementById('product-list');
const cartTable = document.getElementById('cart-table').getElementsByTagName('tbody')[0];
const cartTotal = document.getElementById('cart-total');

// 渲染商品列表
function renderProducts() {
    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        productDiv.appendChild(img);

        const name = document.createElement('p');
        name.textContent = product.name;
        productDiv.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;
        productDiv.appendChild(price);

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', () => addToCart(product));
        productDiv.appendChild(addButton);

        productList.appendChild(productDiv);
    });
}

// 添加商品到购物车
function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

// 渲染购物车
function renderCart() {
    cartTable.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const row = cartTable.insertRow();

        const nameCell = row.insertCell();
        nameCell.textContent = item.name;

        const priceCell = row.insertCell();
        priceCell.textContent = `$${item.price}`;

        const quantityCell = row.insertCell();
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.addEventListener('change', (event) => updateQuantity(item, event.target.value));
        quantityCell.appendChild(quantityInput);

        const subtotalCell = row.insertCell();
        const subtotal = item.price * item.quantity;
        subtotalCell.textContent = `$${subtotal}`;
        total += subtotal;

        const actionCell = row.insertCell();
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(item));
        actionCell.appendChild(removeButton);
    });

    cartTotal.textContent = `$${total}`;
}

// 更新商品数量
function updateQuantity(item, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if (isNaN(newQuantity) || newQuantity < 1) {
        newQuantity = 1;
    }
    item.quantity = newQuantity;
    renderCart();
}

// 从购物车中移除商品
function removeFromCart(item) {
    cart = cart.filter((cartItem) => cartItem.id !== item.id);
    renderCart();
}

// 初始化页面
renderProducts();
renderCart();