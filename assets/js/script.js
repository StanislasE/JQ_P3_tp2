$(document).ready(function(){

   $('#button').click(function(event){
      var moyenne = (parseInt($('#maths').val()) + parseInt($('#english').val()) + parseInt($('#french').val()) + parseInt($('#physic').val()) + parseInt($('#economy').val())) / 5;

      if ((moyenne >= 0) && (moyenne < 10)){
         alert('Votre moyenne est de ' + moyenne + '. Vous êtes en dessous de la moyenne !')
      }
      else if ((moyenne >= 10) && (moyenne < 13)){
         alert('Votre moyenne est de ' + moyenne + '. C\'est moyen')
      }
      else if ((moyenne >= 13) && (moyenne < 16)){
         alert('Votre moyenne est de ' + moyenne + '. C\'est bien')
      }
      else if ((moyenne >= 16) && (moyenne < 20)){
         alert('Votre moyenne est de ' + moyenne + '. C\'est très bien')
      }
      else if (moyenne == 20){
         alert('Votre moyenne est de ' + moyenne + '. C\'est excellent')
      }
      event.preventDefault();
   })
});
