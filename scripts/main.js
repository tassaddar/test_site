var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.jpg') {
    myImage.setAttribute('src','images/firefox2.jpg');
  } else {
    myImage.setAttribute('src','images/firefox-icon.jpg');
  }
}
