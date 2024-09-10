const avanca = document.querySelectorA11('.btn-proximo');

avanca.forEach(button=> {
  button.addEventListener('click' , function(){
  const atual = document.querySelector('.ativo');
  const proximopasso = 'passo-' + this.getAttribute('data-proximo');

              atual.classlist.remove('ativo');
              document.getElementById(proximoPasso).classList.add('ativo');
  })
})
