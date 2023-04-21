var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn11");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];
var span8 = document.getElementsByClassName("close")[8];
var span9 = document.getElementsByClassName("close")[9];
var span10 = document.getElementsByClassName("close")[10];
var span11 = document.getElementsByClassName("close")[11];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal1.style.display = "block";
}
btn1.onclick = function() {
    modal2.style.display = "block";
  }
  btn2.onclick = function() {
    modal3.style.display = "block";
  }
  btn3.onclick = function() {
    modal4.style.display = "block";
  }
  btn4.onclick = function() {
    modal5.style.display = "block";
  }
  btn5.onclick = function() {
    modal6.style.display = "block";
  }
  btn6.onclick = function() {
      modal7.style.display = "block";
    }
    btn7.onclick = function() {
      modal8.style.display = "block";
    }
    btn8.onclick = function() {
      modal9.style.display = "block";
    }
    btn9.onclick = function() {
      modal.style.display = "block";
    }
    btn10.onclick = function() {
        modal10.style.display = "block";
      }
      btn11.onclick = function() {
        modal11.style.display = "block";
      }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
  }
  span2.onclick = function() {
      modal2.style.display = "none";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
      }
      span4.onclick = function() {
          modal4.style.display = "none";
        }
        span5.onclick = function() {
            modal5.style.display = "none";
          }
          span6.onclick = function() {
              modal6.style.display = "none";
            }
            span7.onclick = function() {
                modal7.style.display = "none";
              }
              span8.onclick = function() {
                  modal8.style.display = "none";
                }
                span9.onclick = function() {
                    modal9.style.display = "none";
                  }
                  span10.onclick = function() {
                      modal10.style.display = "none";
                    }
                    span11.onclick = function() {
                        modal11.style.display = "none";
                      }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == moda5l) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
}