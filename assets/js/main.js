document.getElementById("toggle").addEventListener("click",function(event){
  event.preventDefault()
document.getElementById("nav-header").classList.toggle("open");
document.getElementById("body").classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementsByClassName("nav-background")[0].style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementsByClassName("nav-background")[0].style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);

window.addEventListener("load", function(e){
    e.preventDefault
    var nombres = ["Marilu Llamocca","Ruth Cardenas","Maria Lourdes","Glisse Jorge","Ana De Los Angeles Durand Calle",
"Ruth Abigail Salvador Zorrilla","Leslie Avendaño","Flor De Cantuta Tello Sarmiento",
"Miriam Peralta","Fiorella Quispe","Annia Flores","Leidy Maldonado","Rosario Felix Tasayco",
"Liliana Cueva",
"Miriam Gisella Mendoza Pilco",
"Flor Marina Condori Huamani",
"Naomi Villanueva Ajito",
"Luz Milagros Gutierrez Malca",
"Karin Alejo Campos",
"Ingrid Michelle More Flores",
"Monica Fiorella Cisneros Romero",
"Betsi Ana",
"Mariel Del ",
"Ruth Eliana ",
"Erika Diana ",
"Angie Gesenia ",
"Stephanie Hiyagon",
"Grecia Leticia Rayme Pumacayo",
"Cindy Deisy Mendoza Ibarra",
"Mitchell Rodra ",
"Maria Grecia Cutipa GonzáLes",
"Geraldine Chauca Escobar",
"Mary Katherine",
"Nadia Cuadros Prieto",
"Elizabeth Condori Gonzales",
"Rocio Emma Tapia Alva",
"Neiza Luz",
"Arantza Burga Valderrama",
"Schelsen Brilly Majuan Lopez",
"Sandra Vargas",
"Yelitza Choque Rivera",
"Katherine Cecilia Ortega Ramos",
"Maricarmen Rojas Tinco",
"Aslheys Ariana Nicholle Cabana Cahuana",
"Nathaly Grace Pacheco Asto",
"Janine Vega Uribe",
"Wendy Shirley Reyes Santana",
"Milagros Gonzales Ore",
"Jenny Mishel Velasquez Mamani",
"Dana Lissete Franco Pittman",
"Maria Nakarid Jave Sagastegui",
"Ayda Sulca Urpay",
"Magali Zambrano Neri",
"Flor Retamozo Marengo","Shirley Gonia Perez"];
 var contenedor=document.getElementById("contenedor");
for (var i = 1; i <= 54; i++) {
var div=document.createElement("div");
var span=document.createElement("span");
var image=document.createElement("img");
div.setAttribute("class","caja-foto");
image.setAttribute("class","coders");
image.setAttribute("src","assets/images/students/"+i+".png");
nombres[i]
div.appendChild(image);
div.appendChild(span);
contenedor.appendChild(div)

}



});
