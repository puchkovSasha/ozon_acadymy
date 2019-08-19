export default function toggleCheakbox() {
    const cheakbox = document.querySelectorAll('.filter-check_checkbox');
    cheakbox.forEach(function (elem) {

        elem.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');

            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}