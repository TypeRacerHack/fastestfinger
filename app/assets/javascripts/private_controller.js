$(document).ready(function(){
  
  //Creo una variable con cada uno de los tres parrafos predefinidos
  var random = ["En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.", /*Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino*/
  "Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera.", /*Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosímiles, se deja entender que se llamaba Quejana.*/
  "Puesto nombre, y tan a su gusto, a su caballo, quiso ponérsele a sí mismo, y en este pensamiento duró otros ocho días, y al cabo se vino a llamar don Quijote;" /*de donde -como queda dicho- tomaron ocasión los autores desta tan verdadera historia que, sin duda, se debía de llamar Quijada, y no Quesada, como otros quisieron decir. Pero, acordándose que el valeroso Amadís no sólo se había contentado con llamarse Amadís a secas, sino que añadió el nombre de su reino y patria, por Hepila famosa, y se llamó Amadís de Gaula, así quiso, como buen caballero*/];

  //Variable que contiene el texto random que vamos a desplegar después de la caja de texto



  var i
  var randomWord
  var correct
  var seconds
  var contador
  var tpm
  var ztring
  var maxScore
  $("#current-score").text(correct)
  
  $("#start").click(function(){
    randomWord = Math.floor(Math.random()*3);
    i = 1
    correct = 0
    seconds = 0
    $("span.word:nth-child(" + i + ")").addClass("current")
    $(".texttotype").remove();
    ztring = random[randomWord].split(" ")
    $("#typer").before(generateText());
    $("#start").hide();
    $("#timer").text("");
    $("#current-score").text("");
    $("#aciertos").text("");
    var countdown = 4;
    function cuentaRegresiva(){
      countdown--; 
      $("#countdown").text("").append(countdown)
      if(countdown == 0){
          clearInterval(cuentaAtras);
          $("#countdown").text("").append("¡Ya!");
          $("#typer").removeAttr("disabled");
          contador = setInterval(function(){seconds ++; $("#timer").text("").append(seconds); return seconds}, 1000);
        }
      }
    var cuentaAtras = setInterval(cuentaRegresiva, 1000);    
  })

  function generateText(){
    var $randomText = $("<p/>")
    .addClass("texttotype")
    for(var i = 0; i < ztring.length - 1; i++){
          $randomText.append("<span class='word'>" + ztring[i] + " </span>");
        }
      $randomText.append("<span class='word'>" + ztring[ztring.length - 1] + " </span>")
      return $randomText
    };


  $("#typer").keyup(function(event){
    if(event.which==32){
      if($("#typer").val() != ztring[i-1] + " "){
        $("span.word:nth-child(" + i + ")").removeClass("current").addClass("bad");
        $("#typer").addClass("bad")
      }else{
        $("span.word:nth-child(" + i + ")").removeClass("current").removeClass("bad").addClass("okay");
        $("#typer").val("").removeAttr("class");
        i++
        correct++
        tpm = Math.round(correct/(seconds/60))
        $("#current-score").text(tpm);
        $("#aciertos").text("").append(correct)
        if(i==ztring.length + 1){
          $("#typer").attr("disabled", true);
          clearInterval(contador);
          $("#start").show();
          for (var k=1; k<=10; k++){
            var currentScoreTable = parseInt($("#score"+k).html());
            if(tpm>currentScoreTable){
              $("#score"+(k+1)).text(currentScoreTable);
              $("#score"+k).text(tpm);
              k = 11;
            }
          maxScore = parseInt($("#score1").text())
          }  
        }
        $("span:nth-child(" + i + ")").addClass("current");
      }   
   }
})
})