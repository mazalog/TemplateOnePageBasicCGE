
//Efect by down scroll
let animado = document.querySelectorAll(".animado");
function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;

  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 420 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    }
  }
}

(function () {


  // MDB Lightbox Init
  $(document).ready(function(){
  
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");

	});



  

  



$(document).ready(function(){




//menu navegation
	$('#btn-menu').click(function(){

		if( $('.btn-menu span').attr('class') == 'fa fa-bars' ){

			$('.btn-menu span').removeClass('fa fa-bars').addClass('fa fa-close').css({'color':'#fff'});
			$('.full-menu').css({'left':'0'});

		}else{
			$('.btn-menu span').removeClass('fa fa-close').addClass('fa fa-bars').css({'color':'#000'});
			$('.full-menu').css({'left':'-100%'});
		}

	});


});
//call wow mdbootstrap
  $(document).ready(function () {
    new WOW().init();
  });



  window.addEventListener("scroll", mostrarScroll);

  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });




})();
