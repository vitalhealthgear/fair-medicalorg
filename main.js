
document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('[data-product-search]');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const q = (form.querySelector('input[name="q"]')?.value || '').trim().toLowerCase();
      const products = document.querySelectorAll('.product-item');
      products.forEach(item => {
        item.classList.toggle('searchable-hidden', q && !item.textContent.toLowerCase().includes(q));
      });
    });
  }
});
