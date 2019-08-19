import filter from "./filter";



export default function actionPage() {
    // filter sale
    const cards = document.querySelectorAll('.goods .card'),
        discountCheackbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');


    //   discountCheackbox.addEventListener('click', () => {
    //     cards.forEach((card) => {
    //         if (discountCheackbox.checked) {
    //             if (!card.querySelector('.card-sale')) {
    //                 card.parentNode.style.display = 'none';
    //             }

    //         } else {

    //             card.parentNode.style.display = '';
    //         }
    //     });


    //   });
    //   filterPrice
    //   function filterPrice() {
    //       cards.forEach((card) => {
    //           const cardPrice = card.querySelector('.card-price');
    //           const price = parseFloat(cardPrice.textContent);

    //           if ((min.value && price < min.value) || (max.value && price > max.value)) {
    //                 card.parentNode.style.display = 'none';
    //           } else{

    //             card.parentNode.style.display = '';
    //           }



    //       });

    //   }
    discountCheackbox.addEventListener('click', filter);

    min.addEventListener('change', filter);


    max.addEventListener('change', filter);



   



    //   search
    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
            search.value = '';
        });
        console.log(searchText);
    });

}