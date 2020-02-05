const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const p = urlParams.get('id');
console.log(p);