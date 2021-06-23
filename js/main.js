let nav = document.body.getElementsByClassName('top-nav')[0];

let modal = document.body.getElementsByClassName('modal')[0];

function openMobileMenu(){
    nav.style.left="0";
    modal.style.display="block";
}//Fin funtion

function closeMobileMenu(){
    nav.style.left="-24em";
    modal.style.display="none";
}//Fin funtion

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display="none";
        nav.style.left="-24em";
    }
}

const app = Vue.createApp({
    data(){
        return {
            priceK: 1500,
            priceA: 3000,
            qtyK: 0,
            qtyA: 0,
            total: 0,
            email: '',
            name: '',
        }
    },
    methods: {
        chargeTotal(total) {
            this.total = total;
        }
    }
});