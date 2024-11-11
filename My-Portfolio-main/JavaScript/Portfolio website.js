document.querySelector('.contact-form').addEventListener('submit', function(event) {

    alert('Thank you for contacting, Mihlali will get back to you soon!');

document.querySelector('#fname').value = ''
document.querySelector('#surname').value = '';
document.querySelector('#email address').value = '';
document.querySelector('#message').value = '';

});




document.querySelectorAll('.clickable-img').forEach(img => {
  img.addEventListener('click', function () {
    const overlay = document.getElementById('imageOverlay');
    const overlayImg = document.getElementById('overlayImg');
    overlayImg.src = this.src;
    overlay.style.display = 'flex';
  });
});

document.querySelector('.close-overlay').addEventListener('click', function () {
  document.getElementById('imageOverlay').style.display = 'none';
});
