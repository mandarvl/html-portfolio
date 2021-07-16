var skills = document.getElementsByClassName("skill-item") ;

for(var skill of skills){
    var percent = skill.getAttribute("data-percent") ;
    var value = percent+"%" ;
    skill.querySelector(".skill-bar-foreground").style.setProperty("width", value);
    skill.querySelector(".skill-percentage").innerText = value ;
}