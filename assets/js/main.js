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
    var nombres = ['','Fiorella Quispe','Lourdes Vilchez','Leydi Maldonado','Yessenia Huamán',
                    'Miriam Mendoza', 'Elizabeth Condori', 'Arantza Burga', 'Grecia Rayme',
                    'Janine Vega', 'Rosario Félix', 'Daguiana Revolledo', 'Jenny Velasquez',
                    'Nadia Cuadros', 'Michelle More', 'Marilu Llamoca', 'Mariel García',
                    'Fiorella Cisneros', 'Geraldine Chauca', 'Yelitza Choque',
                    'Stephanie Hiyagon', 'Rocio Tapia', 'Dana Franco', 'Flor Retamozo',
                    'Nathaly Pacheco', 'Ericka Vidal', 'Katherine Ortega', 'Brilly Majuan',
                    'Flor de Cantuta', 'Leslie Avendaño', 'Cindy Mendoza', 'Annia Flores',
                    'Betsi Loayza', 'Ayda Sulca', 'Milagros Gutierrez', 'Nakarid Jave',
                    'Angie Condor', 'Maricarmen Rojas', 'Ariana Cabana', 'Flor Tello',
                    'Mitchell Rodríguez', 'Naomi Villanueva', 'Mary Castillo', 'Miriam Peralta',
                    'Karin Alejo', 'Liliana Peña', 'Ruth Salvador', 'Marilu Llamoca', 'Wendy Reyes',
                    'Cinthya Quispe','Maria Grecia Cutipa', 'Ana Durand', 'Glisse Jorge', 'Neiza Nuñez',
                    'Sandra Solorzano'];
 var contenedor=document.getElementById("contenedor");
for (var i = 1; i <= 54; i++) {
var div=document.createElement("div");
var span=document.createElement("span");
var image=document.createElement("img");
div.setAttribute("class","caja-foto");
image.setAttribute("class","coders");
image.setAttribute("src","assets/images/students/"+i+".png");
span.innerHTML=nombres[i]
div.appendChild(image);
div.appendChild(span);
contenedor.appendChild(div)

}



});
