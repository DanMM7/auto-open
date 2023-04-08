function getKey(url) {
  // Get url from openMap function
  const urlkey = url;
  const lastValue = urlkey.split('&').pop();
  console.log(lastValue); // Output: 123

  // Pass SGKey to the search bar on th ArcGIS page in the child window
  const searchInput = window.document.querySelector('.searchInput');
  searchInput.value = lastValue;

}

function openMap(url, key) {

  // Pass a callback function to window.open() that is executed when the new window is loaded
  window.open(
    url + 'Key=' + key + '',
    function () {
      getSGKey(this.location.href);
    }
  );
}

module.exports = openMap
