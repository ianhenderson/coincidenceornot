(function(window){
  // Element refs
  var voteSection = document.getElementById('vote');
  var voteResults = document.getElementById('vote-results');
  var queryBox = document.getElementById('queryBox');
  var queryInput = document.getElementById('queryInput');
  var results = document.getElementById('results');

  // Helpers
  function handleVote(e){
    var voteValue = +e.target.dataset.value;
  }

  function handleSubmit(e){
    e.preventDefault();
    clearTable();
    toggleLoading();
    var n = +queryInput.value;
    getWords(n)
      .then(function(data){
        clearTable();
        buildTable(data);
      });
  }

  // Attaching listeners
  function listenForVote(){
    voteSection.addEventListener('click', handleVote);
  }

  function listenForSubmit(){
    queryBox.addEventListener('submit', handleSubmit);
  }

  // Build results
  function buildTable(data) {
    var ol = document.createElement('ol');
    attachItems(ol, data);
    results.appendChild(ol);
  }

  function attachItems(el, data) {
    return data.reduce(function(el, datum){
      var li = document.createElement('li');
      addText(li, datum);
      el.appendChild(li);
      return el;
    }, el);
  }

  function clearTable() {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }
  }

  // Loading spinner
  function toggleLoading(){
    var img = document.createElement('img');
    img.src = 'assets/ellipsis.svg';
    results.appendChild(img);
  }

  // crossbrowser stuff
  function addText(el, content){
    el.innerText = el.textContent = content;
  }

  // AJAX stuff
  function getWords(n){
    return reqwest('/api/words/' + n)
  }

  // Initialize app
  function init(){
    listenForVote();
    listenForSubmit();
    // window.getWords = getWords;
  }

  // start app on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})(window)
