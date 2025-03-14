// header

let header = document.querySelector(".header");

// navbar buttons

function home_button(){
let home = document.getElementById("home");
let courses = document.getElementById("courses");
let contact = document.getElementById("contact");
  home.style.display = "block";
  courses.style.display = "none";
  contact.style.display = "none";

  header.classList.remove("header_scroll_and_change");
}

function course_button(){
let home = document.getElementById("home");
let courses = document.getElementById("courses");
let contact = document.getElementById("contact");

  home.style.display = "none";
  courses.style.display = "block";
  contact.style.display = "none";
  
  header.classList.add("header_scroll_and_change");
}

function contact_button(){
  let home = document.getElementById("home");
  let courses = document.getElementById("courses");
  let contact = document.getElementById("contact");
  home.style.display = "none";
  courses.style.display = "none";
  contact.style.display = "block";

  header.classList.add("header_scroll_and_change");
}
// courses image hover
function course_img_web_over(){
  let course_img_title_web = document.getElementById("course_img_title_web");
  course_img_title_web.style.top = "26%";
  course_img_title_web.style.left = "29%";
  course_img_title_web.style.fontSize = "30px";
  course_img_title_web.style.transition = "1s all linear"
  let course_img_para_web = document.getElementById("course_img_para_web");
  course_img_para_web.style.top = "30%"
  course_img_para_web.transition = "0.6s all linear"
}
function course_img_web_out(){
  let course_img_title_web = document.getElementById("course_img_title_web");
  course_img_title_web.style.top = "42%";
  course_img_title_web.style.left = "42%";
  course_img_title_web.style.fontSize = "42px";
  course_img_title_web.style.transition = "1s all linear"
  let course_img_para_web = document.getElementById("course_img_para_web");
  course_img_para_web.style.top = "92%"
  course_img_para_web.transition = "0.6s all linear"
}
function course_img_app_over(){
  let course_img_title_app = document.getElementById("course_img_title_app");
  course_img_title_app.style.top = "26%";
  course_img_title_app.style.left = "29%";
  course_img_title_app.style.fontSize = "30px";
  course_img_title_app.style.transition = "1s all linear";
  let course_img_para_app = document.getElementById("course_img_para_app");
  course_img_para_app.style.top = "30%";
  course_img_para_app.transition = "0.6s all linear";
}
function course_img_app_out(){
  let course_img_title_app = document.getElementById("course_img_title_app");
  course_img_title_app.style.top = "42%";
  course_img_title_app.style.left = "42%";
  course_img_title_app.style.fontSize = "42px";
  course_img_title_app.style.transition = "1s all linear";
  let course_img_para_app = document.getElementById("course_img_para_app");
  course_img_para_app.style.top = "92%";
  course_img_para_app.transition = "0.6s all linear";
}
function course_img_AIML_over(){
  let course_img_title_AIML = document.getElementById("course_img_title_AIML");
  course_img_title_AIML.style.top = "26%";
  course_img_title_AIML.style.left = "29%";
  course_img_title_AIML.style.fontSize = "30px";
  course_img_title_AIML.style.transition = "1s all linear";
  let course_img_para_AIML = document.getElementById("course_img_para_AIML");
  course_img_para_AIML.style.top = "30%";
  course_img_para_AIML.transition = "0.6s all linear";
}
function course_img_AIML_out(){
  let course_img_title_AIML = document.getElementById("course_img_title_AIML");
  course_img_title_AIML.style.top = "42%";
  course_img_title_AIML.style.left = "42%";
  course_img_title_AIML.style.fontSize = "42px";
  course_img_title_AIML.style.transition = "1s all linear";
  let course_img_para_AIML = document.getElementById("course_img_para_AIML");
  course_img_para_AIML.style.top = "92%";
  course_img_para_AIML.transition = "0.6s all linear";
}
function course_img_UIUX_over(){
  let course_img_title_UIUX = document.getElementById("course_img_title_UIUX");
  course_img_title_UIUX.style.top = "26%";
  course_img_title_UIUX.style.left = "29%";
  course_img_title_UIUX.style.fontSize = "30px";
  course_img_title_UIUX.style.transition = "1s all linear";
  let course_img_para_UIUX = document.getElementById("course_img_para_UIUX");
  course_img_para_UIUX.style.top = "30%";
  course_img_para_UIUX.transition = "0.6s all linear";
}
function course_img_UIUX_out(){
  let course_img_title_UIUX = document.getElementById("course_img_title_UIUX");
  course_img_title_UIUX.style.top = "42%";
  course_img_title_UIUX.style.left = "42%";
  course_img_title_UIUX.style.fontSize = "42px";
  course_img_title_UIUX.style.transition = "1s all linear";
  let course_img_para_UIUX = document.getElementById("course_img_para_UIUX");
  course_img_para_UIUX.style.top = "92%";
  course_img_para_UIUX.transition = "0.6s all linear";
}
function course_img_DevOps_over(){
  let course_img_title_DevOps = document.getElementById("course_img_title_DevOps");
  course_img_title_DevOps.style.top = "26%";
  course_img_title_DevOps.style.left = "29%";
  course_img_title_DevOps.style.fontSize = "30px";
  course_img_title_DevOps.style.transition = "1s all linear";
  let course_img_para_DevOps = document.getElementById("course_img_para_DevOps");
  course_img_para_DevOps.style.top = "30%";
  course_img_para_DevOps.transition = "0.6s all linear";
}
function course_img_DevOps_out(){
  let course_img_title_DevOps = document.getElementById("course_img_title_DevOps");
  course_img_title_DevOps.style.top = "42%";
  course_img_title_DevOps.style.left = "42%";
  course_img_title_DevOps.style.fontSize = "42px";
  course_img_title_DevOps.style.transition = "1s all linear";
  let course_img_para_DevOps = document.getElementById("course_img_para_DevOps");
  course_img_para_DevOps.style.top = "92%";
  course_img_para_DevOps.transition = "0.6s all linear";
}

// scroll event 

function view_more(){
  let home = document.getElementById("home");
  home.scrollTop = "550";
  let view_more = document.getElementById("view_more");
  view_more.style.display = "none";
}

function home_scroll(){
  let home = document.getElementById("home");
  let homeScroll = home.scrollTop;
  if(homeScroll >= 300){
    let view_more = document.getElementById("view_more");
    view_more.style.display = "none"
  }

  if(homeScroll >= 300){
    header.classList.add("header_scroll_and_change");

  }
  else{
    header.classList.remove("header_scroll_and_change");

  }
}


