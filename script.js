document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.querySelector('.scroller');
  const scrollerInner = document.querySelector('.tag-list');

  // Duplica el contenido para el desplazamiento infinito
  scrollerInner.innerHTML += scrollerInner.innerHTML;

  // Activa la animación
  scroller.setAttribute('data-animated', 'true');
});
