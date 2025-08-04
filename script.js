const scrollBtn = document.getElementById("scrollBtn");
const kopi = document.getElementById("kopi")

    
    window.onscroll = function () {
        scrollBtn.style.display = window.scrollY > 50 ? "block" : "none";
    };
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

const pesan = () => {
    alert("Pesanan sudah dipesan!")
}