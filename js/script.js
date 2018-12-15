var navSwitcher = document.querySelector('.head__nav-switcher'),
    
    navBody = document.querySelector('.head__nav-body');

navSwitcher.addEventListener('click', function() {
  navBody.classList.toggle('head__nav-body--open');
});