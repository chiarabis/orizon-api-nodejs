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
/*function editOrder(order) {

    orderForm.appendChild(orderIdInput);
    orderForm.scrollIntoView();
};*/


function updateOrderDiv(order, orderDiv){
    orderDiv.innerHTML = `
        <h3>Order number ${order.id}</h3>
        <div>
            <span>date ${order.createdAt}</span>
            <span>user ${order.userId}</span>
        </div>
    `
}


export {addOrder, deleteOrder, updateOrderDiv};