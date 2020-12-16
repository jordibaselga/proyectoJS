export { dibujarNoticias };
function dibujarNoticias() {
  document.querySelector('#main').innerHTML = '';
  let noticias = document.createElement('div');
  noticias.innerHTML += `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7COXXgiHE2o" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
     encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  noticias.innerHTML += `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u-vrdPtZVXc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  noticias.classList.add('container');
  document.querySelector('#main').appendChild(noticias);
}