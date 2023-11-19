const gallery = document.querySelector('.gallery');
const big = document.querySelector('.big');
gallery.addEventListener('click', function(e) {
if(e.target.className == 'thumb') {
big.src = e.target.src;
}
});
