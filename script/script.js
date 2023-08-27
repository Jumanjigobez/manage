//function to ease retrieval of DOM elements
const elem = (x) =>{
  return document.querySelector(x)
}


//Email Validation functionality
var sub_form = elem("form.sub_form"),
    email_input = elem("input.email_input"),
    error_text = elem("span.error_text");

sub_form.onsubmit = (e) =>{
  e.preventDefault();

}
const handleSubmit = (btn) =>{
  let email_regex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

  if(email_input.value.match(email_regex)){
    error_text.style.display = "none";
    email_input.value = "";
    
    email_input.placeholder = "Thank you!";
    email_input.disabled = true;
    email_input.classList.remove("active");

    btn.disabled = true;

  }else{
    error_text.style.display = "block";

    email_input.placeholder = "Updates in your inbox...";
    email_input.classList.add("active");

  }
}

//Mobile Menu functionality
var menu = elem(".menu_part");

const toggleMenu = (btn) =>{
    menu.classList.toggle("active");

    btn.innerHTML = btn.innerHTML == `<i class="fa fa-bars"></i>` ? btn.innerHTML = `<i class="fa fa-times"></i>` : btn.innerHTML = `<i class="fa fa-bars"></i>`;
}





//Carousel functionality
const carousel_section = elem('#carousel');
let isDown = false,
    startX,
    scrollLeft;

carousel_section.onmousedown = (e) => {
  isDown = true;
  startX = e.pageX - carousel_section.offsetLeft;
  scrollLeft = carousel_section.scrollLeft;
  carousel_section.style = "cursor: grab"
 
};

carousel_section.onmouseleave = () => {
  isDown = false;
  carousel_section.style = "cursor: normal"
};

carousel_section.onmouseup = () => {
  isDown = false;
  carousel_section.style = "cursor: normal"

};

carousel_section.onmousemove = (e) => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - carousel_section.offsetLeft;
  const walk = (x - startX) * 1; // scroll speed
  carousel_section.scrollLeft = scrollLeft - walk;
 
};
