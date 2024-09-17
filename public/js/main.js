import {addUser, deleteUser, editUser, updateUserDiv} from './users.js';
import {addProduct, deleteProduct, editProduct, updateProductDiv} from './products.js';
import {addOrder, deleteOrder, updateOrderDiv} from './orders.js';
//import { response } from 'express';


document.addEventListener('DOMContentLoaded', function() {
    const usersBtn = document.getElementById('usersBtn');
    const usersContainer = document.getElementById('users');
    const registeredUsers = document.getElementById('registeredUsers');
    const userForm = document.getElementById('userForm');

    const productsBtn = document.getElementById('productsBtn');
    const productsContainer = document.getElementById('products');
    //const toggleFilter = document.getElementById('toggleFilter');
    const registeredProducts = document.getElementById('registeredProducts');
    const productForm = document.getElementById('productForm');
    const filters = document.getElementById('filters');
    const toggleProductForm = document.getElementById('toggleProductForm');
    const toggleIconForm = document.getElementById('toggleIconForm');

    const ordersBtn = document.getElementById('ordersBtn');
    const ordersContainer = document.getElementById('orders');
    const registeredOrders = document.getElementById('registeredOrders');
    const orderForm = document.getElementById('orderForm');
    
    let allProducts = [];

    function showDiv(divToShow) {
        usersContainer.style.display = 'none';
        productsContainer.style.display = 'none';
        ordersContainer.style.display = 'none';

        divToShow.style.display = 'block';
    }

    usersBtn.addEventListener('click', function() {
        showDiv(usersContainer);
    });

    productsBtn.addEventListener('click', function() {
        showDiv(productsContainer);
    });

    ordersBtn.addEventListener('click', function() {
        showDiv(ordersContainer);
    });

    //tutti gli utenti
    usersBtn.addEventListener('click', function() {
        fetch('/orizon/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Response from users api was not ok');
            }
            return response.json();
        })
        .then(data => {
            registeredUsers.innerHTML = '';
            if (data.length > 0) {
                data.forEach(user => {
                    addUser(user);
                });
            } else {
                registeredUsers.textContent = 'No users found';
            }
            usersContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    });

    //tutti i prodotti
    productsBtn.addEventListener('click', function(){
        fetch('/orizon/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Response from products api was not ok');
            }
            return response.json();
        })
        .then(data => {
            /*registeredProducts.innerHTML = '';
            if (data.length > 0) {
                data.forEach(product => {
                    addProduct(product);
                });
            } else {
                registeredProducts.textContent = 'No products found';
            }*/
            allProducts = data;
            displayProducts(allProducts);
            productsContainer.style.display = 'block';
            filters.style.display = 'flex';
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    });

    function displayProducts(products) {
        registeredProducts.innerHTML = '';
        if (products.length > 0) {
            products.forEach(product => {
                addProduct(product);
            });
        } else {
            registeredProducts.textContent = 'No products found';
        }
    };

    //tutti gli ordini
    ordersBtn.addEventListener('click', function(){
        fetch('/orizon/api/orders')
        .then(response => {
            if (!response.ok) {
                throw new Error('Response from orders api was not ok');
            }
            return response.json();
        })
        .then(data => {
            registeredOrders.innerHTML = '';
            if (data.length > 0) {
                data.forEach(order => {
                    addOrder(order);
                });
            } else {
                registeredOrders.textContent = 'No orders found';
            }
            ordersContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching orders:', error);
        });
    });

    //gestione user form
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userId = document.getElementById('userId') ? document.getElementById('userId').value : null;
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;

        if (userId){
            fetch(`/orizon/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, email }),
            })
            .then(response => response.json())
            .then(updatedUser => {
                const userDiv = document.querySelector(`.user-div[data-user-id='${userId}']`);
                updateUserDiv(updatedUser, userDiv);
                document.getElementById('userId').remove();
                userForm.reset();
            })
            .catch(error => console.error('Error updating users:', error));
        }else{
            fetch('/orizon/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, email }),
            })
            .then(response => response.json())
            .then(newUser => {
                addUser(newUser);
                userForm.reset();
            })
            .catch(error => console.error('Error adding user:', error));
        }
    });

    //apertura product form
    toggleProductForm.addEventListener('click', function() {
        if (productForm.style.display === 'none' || productForm.style.display === '') {
            productForm.style.display = 'block';
            toggleIconForm.src = './icons/arrow-up.png';
        } else {
            productForm.style.display = 'none';
            toggleIconForm.src = './icons/arrow-down.png';
        }
    });

    //gestione product form
    productForm.addEventListener('submit', function(event){
        event.preventDefault();

        const productId = document.getElementById('productId') ? document.getElementById('productId').value : null;
        const name = document.getElementById('name').value;
        const destination = document.getElementById('destination').value;
      
        const image = document.getElementById('image').value;
        //const image = document.getElementById('image').files[0] ? document.getElementById('image').files[0].name : null;
        const description = document.getElementById('description').value;

        const price = document.getElementById('price').value;
        const localGuide = document.getElementById('localGuide').checked;
        const scoreNature = document.getElementById('scoreNature').value;
        const scoreRelax = document.getElementById('scoreRelax').value;
        const scoreParty = document.getElementById('scoreParty').value;
        const scoreHistory = document.getElementById('scoreHistory').value;
        const scoreCity = document.getElementById('scoreCity').value;

        const productData = {
            name,
            destination,
            image,
            description,
            price,
            localGuide, 
            scoreNature,
            scoreRelax,
            scoreParty,
            scoreHistory,
            scoreCity
        };

        if(productId){
            fetch(`/orizon/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            })
            .then(response => response.json())
            .then(updatedProduct => {
                const productDiv = document.querySelector(`.productDiv[data-product-id='${productId}']`);
                if (productDiv) {
                    updateProductDiv(updatedProduct, productDiv);
                } else {
                    console.error('Updated product not found');
                }
                document.getElementById('productId').remove();
                productForm.reset();
            })
            .catch(error => console.error('Error updating products:', error));
        }else{
            fetch('/orizon/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            })
            .then(response => response.json())
            .then(newProduct => {
                addProduct(newProduct);
                productForm.reset();
            })
            .catch(error => console.error('Error adding product:', error));
        }
    });

    //filtrare i prodotti
    toggleFilter.addEventListener('click', function() {        
        const destinationFilter = document.getElementById('destinationFilter').value;
        const budgetFilter = document.getElementById('budgetFilter').value;
        const guideFilter = document.getElementById('guideFilter').checked;
        let filteredProducts = allProducts;

        if (destinationFilter) {
            filteredProducts = filteredProducts.filter(product => product.destination === destinationFilter);
        }
        if (budgetFilter) {
            filteredProducts = filteredProducts.filter(product => {
                switch (budgetFilter) {
                    case 'Meno di 500€':
                        return product.price < 500;
                    case '501€ - 1000€':
                        return product.price >= 501 && product.price <= 1000;
                    case '1001€ - 1500€':
                        return product.price >= 1001 && product.price <= 1500;
                    case '1501€ - 2000€':
                        return product.price >= 1501 && product.price <= 2000;
                    case '2001€ - 3000€':
                        return product.price >= 2001 && product.price <= 3000;
                    case 'Più di 3001€':
                        return product.price > 3000;
                    default:
                        return true;
                }
            });
        }
        if (guideFilter) {
            filteredProducts = filteredProducts.filter(product => product.localGuide === true);
        }
        

        displayProducts(filteredProducts);
    });
});