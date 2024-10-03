function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//aggiungi ordine
function addOrder(order) {
    const orderDiv = document.createElement('div');
    orderDiv.classList.add('orderDiv');
    orderDiv.dataset.orderId = order.id;

    updateOrderDiv(order, orderDiv);
    registeredOrders.appendChild(orderDiv);
};

//cancella ordine
function deleteOrder(orderId, orderDiv) {
    fetch(`/orizon/api/orders/${orderId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        orderDiv.remove(data);
    })
    .catch(error => {
        console.error('Error deleting order:', error);
    });
};

//modifica ordine
function editOrder(order) {
    const orderIdInput = document.createElement('input');
    const nameInput = document.getElementById('name');
    const destinationInput = document.getElementById('destination');

    orderForm.appendChild(orderIdInput);
    orderForm.scrollIntoView();
};


function updateOrderDiv(order, orderDiv){
    orderDiv.innerHTML = `
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <h3>Order #${order.id}</h3>

            <div class="containerBtn" style="align-items: flex-end;">
                <div class="containerBtn" style="width: 60px;">
                    <button class='delete iconBtn' style='margin:0'><img alt='Delete' src='./delete.png'/></button>
                    <button class='edit iconBtn' style='margin:0'><img alt='Edit' src='./edit.png'/></button>
                </div>
            </div>
        </div>

        <div class="orderInfo">
            <span>Date ${order.createdAt}</span>
            <span>User: ${order.User.firstname} ${order.User.lastname}</span>
        </div>
    `;

    const productList = document.createElement('div');
    productList.classList.add('productList');

    order.Products.forEach(product => {
        const productName = document.createElement('p');
        productName.textContent = product.name;
        productList.appendChild(productName);
    });
    orderDiv.appendChild(productList);

    const deleteBtn = orderDiv.querySelector('.delete');
    const editBtn = orderDiv.querySelector('.edit');
    
    deleteBtn.addEventListener('click', function() {
        deleteOrder(order.id, orderDiv);
    });
    editBtn.addEventListener('click', function() {
        editOrder(order);
    });
}


export {addOrder, deleteOrder, updateOrderDiv};