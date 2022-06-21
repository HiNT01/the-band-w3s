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


// menu
var header = document.getElementById('header');

var mobileMenu = document.getElementById('menu-mobile-btn');

var headerheight = header.clientHeight;
 mobileMenu.onclick = function () {
     var isClosed = header.clientHeight === headerheight;
    if(isClosed) {
        header.style.height = "auto";
     }
     else {
        header.style.height = null;
     }
    }


    // an menu khi dieu huong

    var menuItems = document.querySelectorAll('#header .nav .item-nav a[href*="#"]');
    console.log(menuItems);
    for (var i = 0;i < menuItems.length; i++)
    {
        var menuItem = menuItems[i];
        
       
         
        menuItem.onclick = function(event) {
        var isParentmenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (isParentmenu) {
            event.preventDefault();
        }
        else {  
            header.style.height = null;
        }
         
     }
    }
    



