
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBemL5s6MWx14ryPOUtE_qjfUm19bbUgvA",
    authDomain: "portfolio-frontpage-39764.firebaseapp.com",
    databaseURL: "https://portfolio-frontpage-39764.firebaseio.com",
    projectId: "portfolio-frontpage-39764",
    storageBucket: "portfolio-frontpage-39764.appspot.com",
    messagingSenderId: "352670080689",
    appId: "1:352670080689:web:109b666eb3988e5870cc90",
    measurementId: "G-SKMKGZ9T0D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


/* onboarding screen starts */
const typedTextSpan = document.querySelector(".typed-text");
const textArray = [" a frontend developer", " a student", " a whitespace lover", " your next intern?", " . . ."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1)
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type,typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});
/* loading screen starts */
(function () {
    var loading = document.getElementById("loading"),

        show = function () {
            loading.style.display = "block";
            loading.style.zIndex = 9999;
            setTimeout(hide, 2000); // sæt til 22000 når du er færdig
        },

        hide = function () {
            loading.style.display = "none";
        };

    show();
})();
/* loading screen stops */
/* onboarding screen stops */
/* show current page starts*/
let url = "http://127.0.0.1:5500/index.html".split("/"); //replace string with location.href
let navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
//naturally you could use something other than the <nav> element
let i=0;
let currentPage = url[url.length - 1];
for(i;i<navLinks.length;i++){
  let lb = navLinks[i].href.split("/");
  if(lb[lb.length-1] == currentPage) {
   navLinks[i].className = "current";

  }
  }

  /* to the top button */
//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* to the top button stops */


  /* show current page stops */

  // append workpages to the DOM
 /* 
let _pages = [];

function appendPages(pages) {
    let htmlTemplate = "";
    for (let index = 0; index < 3; index++) {
        let page = _pages[index];
        console.log(page.id);
        console.log(page.overskrift);
        htmlTemplate += `
        
    <article>
      <h2>${page.overskrift}</h2>
      <p>${page.tekst}</p>
      <h3>${page.buildwith}</h3>
      <p>${page.buildwhat}</p>
    </article>
    
    `;

    }
    document.querySelector('#section3').innerHTML = "<img src="images/glr2-kopi.jpg">" + htmlTemplate
}
*/