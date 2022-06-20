// const buyBtns = document.querySelectorAll('.js-buy-ticket');
// const modal = document.querySelector('.modal')
// function showBuyTickets() {modal.classList.add(open)}
// for (const buyBtn of buyBtns) {buyBtn.addEventListener('click',showBuyTickets)}

const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
function showBuyTickets() {modal.classList.add('open')}
for (const buyBtn of buyBtns) {buyBtn.addEventListener('click',showBuyTickets)}

const closeBtn = document.querySelector('.js-modal-close');
function cloesBuyTicket() {
    modal.classList.remove('open')
}
closeBtn.addEventListener('click',cloesBuyTicket);
modal.addEventListener('click',cloesBuyTicket)
const modalconatainer = document.querySelector('.js-modal-container')
modalconatainer.addEventListener('click',function(event) {
    event.stopPropagation()
})



