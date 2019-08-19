export default function openCart() {
    const cards = document.querySelectorAll('.goods .card');
    const cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        counterGoods = document.querySelectorAll('.counter')[0];

    cards.forEach((card) => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            // cartEmpty.style.display = 'none';

            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();



            });


        });
    });
    // start red number
    function showData() {
        const numberCards = cartWrapper.querySelectorAll('.card'),
            cartTotal = document.querySelector('.cart-total span'),
            cardPrice = cartWrapper.querySelectorAll('.card-price');
            counterGoods.textContent = numberCards.length;
        let sum = 0;

        cardPrice.forEach((elem) => {
            let price = parseFloat(elem.textContent);
            sum += price;

            console.log(sum);

        });

        cartTotal.textContent = sum;


        if (numberCards.length !== 0) {
            cartEmpty.remove();

        } else {

            cartWrapper.appendChild(cartEmpty);

        }
    }

}