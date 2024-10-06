// Fonction pour mettre à jour le total du panier
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.dataset.price);
        total += quantity * price;
    });
    document.getElementById('total').textContent = total + '€';
}

// Écouteurs pour ajuster la quantité des articles
document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotal();
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = --quantity;
        }
        updateTotal();
    });
});

// Écouteurs pour supprimer les articles du panier
document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
        updateTotal();
    });
});

// Écouteurs pour aimer les articles
document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

// Initialisation du total
updateTotal();
