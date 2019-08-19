export default function getData() {
    const goodsWraper = document.querySelector('.goods');
    return fetch('./db/db.json')
        .then((responce) => {
            if (responce.ok) {
                return responce.json();
            } else {
                throw new Error('Данные не были получины: ' + responce.status);
            }



        })

        .then((data) => {

            return data;
        })

        .catch((err) => {
            console.warn(err);
            goodsWraper.innerHTML = '<div style="font-size:15px; color:red;"> Упис что не так </div>';

        });


}
