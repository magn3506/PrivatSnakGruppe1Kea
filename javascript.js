var valg = 0;

$(window).on("load", forside);

function forside () {
    console.log("Start side");

    //off

    //remove class.

    //add class:



    // start bg lyd:

    $("#bg_musik")[0].play();
    $("#bg_musik")[0].volume = 0.5;



    //videre animationend, click, timer, etc.

    $("#start_knap").on("click",startSide);


}



function startSide () {
    console.log("Start side");

    //off
 $("#start_knap").off("click",startSide);
    //remove class.

    //add class:

    $("#bg_sprite").addClass("bg_sprite_ani_panorama_in");
       $("#logo_container").addClass("logo_container_ani_out");

    // start bg lyd:

    //videre animationend, click, timer, etc.

    $("#bg_sprite").on("animationend", sms_right_01);
}


function sms_right_01() {
    console.log("sms_right_01");

   //off
 $("#bg_sprite").off("animationend", sms_right_01);
    //remove class.

    //add class:


    $("#sms_right_container").addClass("sms_right_container_ani_in");

     //text
    $("#sms_right_content").text("Hej!");


    // start bg lyd:
    $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.

    setTimeout(sms_left_01, 3000);

}

function sms_left_01 () {
    console.log("sms_left_01");

    //off

    //remove class.

    //add class:

    $("#sms_left_container").addClass("sms_left_container_ani_in");


     //text
       $("#sms_left_content").text("Hey, hvad så?!");

    // start bg lyd:

    $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.

    setTimeout(remove_sms_right_01, 3000);
}

function remove_sms_right_01 () {
    console.log("remove_sms_right_1");

    //off

    //remove class.

    $("#sms_right_container").removeClass("sms_right_container_ani_in");

    //add class:
    $("#sms_right_container").addClass("sms_right_container_ani_out");

    // start bg lyd:

        $("#sms_lyd")[0].pause();
    //videre animationend, click, timer, etc.

      setTimeout(sms_right_02, 2001);
}

function sms_right_02() {
    console.log("sms_right_02");

   //off

    //remove class.
     $("#sms_right_container").removeClass("sms_right_container_ani_out");

    //add class:

     $("#sms_right_container").addClass("sms_right_container_ani_in");
     //text
     $("#sms_right_content").text("Ikke så meget… Går det godt? <3");


    // start bg lyd:

    $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //text:

    //videre animationend, click, timer, etc.

     setTimeout(remove_sms_left_01, 3000);

}

function remove_sms_left_01 () {
    console.log("remove_sms_left_1");

    //off

    //remove class.

  $("#sms_left_container").removeClass("sms_left_container_ani_in");
  $("#sms_left_container").addClass("sms_left_container_ani_out");


    //add class:

    //text:


    // start bg lyd:

        $("#sms_lyd")[0].pause();
    //videre animationend, click, timer, etc.

    setTimeout(sms_left_02, 2001);


}

function sms_left_02 () {
    console.log("sms_left_02");

    //off

    //remove class.
     $("#sms_left_container").removeClass("sms_left_container_ani_out");



    //add class:

    $("#sms_left_container").addClass("sms_left_container_ani_in");

    //text
    $("#sms_left_content").text("Det går sku ikke så godt...");

    // start bg lyd:

    $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.

    setTimeout(remove_sms_right_02, 2001);

}

function remove_sms_right_02 () {
    console.log("remove_sms_right_2");

    //off

    //remove class.
  $("#sms_right_container").removeClass("sms_right_container_ani_in");

    //add class:
  $("#sms_right_container").addClass("sms_right_container_ani_out");
    // lyd:
        $("#sms_lyd")[0].pause();
    //text:

    //videre animationend, click, timer, etc.
     setTimeout(sms_right_03, 2001);

}

function sms_right_03() {
    console.log("sms_right_03");

   //off

    //remove class.
     $("#sms_right_container").removeClass("sms_right_container_ani_out");

    //add class:

     $("#sms_right_container").addClass("sms_right_container_ani_in");
     //text
     $("#sms_right_content").text("Hvorfor dog det?");


    // start bg lyd:

    $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;



    //text:

    //videre animationend, click, timer, etc.

     setTimeout(remove_sms_left_02, 3000);

}

function remove_sms_left_02 () {
    console.log("remove_sms_left_2");

    //off

    //remove class.

  $("#sms_left_container").removeClass("sms_left_container_ani_in");
  $("#sms_left_container").addClass("sms_left_container_ani_out");


    //add class:

    //text:


    // start bg lyd:

          $("#sms_lyd")[0].pause();


    //videre animationend, click, timer, etc.

    setTimeout(sms_left_03, 2001);


}

function sms_left_03 () {
    console.log("sms_left_03");

    //off

    //remove class.
     $("#sms_left_container").removeClass("sms_left_container_ani_out");



    //add class:

    $("#sms_left_container").addClass("sms_left_container_ani_in");

    //text
    $("#sms_left_content").text("Fordi jeg er sur på dig!");

    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.

   setTimeout(remove_sms_right_03, 2001);
}

function remove_sms_right_03 () {
    console.log("remove_sms_right_3");

    //off

    //remove class.
  $("#sms_right_container").removeClass("sms_right_container_ani_in");

    //add class:
  $("#sms_right_container").addClass("sms_right_container_ani_out");
    // lyd:
            $("#sms_lyd")[0].pause();
    //text:

    //videre animationend, click, timer, etc.
     setTimeout(sms_right_04, 2001);

}

function sms_right_04() {
    console.log("sms_right_04");

   //off

    //remove class.
     $("#sms_right_container").removeClass("sms_right_container_ani_out");

    //add class:

     $("#sms_right_container").addClass("sms_right_container_ani_in");
     //text
     $("#sms_right_content").text("Hvorfor er du dog det?");


    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //text:

    //videre animationend, click, timer, etc.

     setTimeout(remove_sms_left_03, 3000);

}
function remove_sms_left_03 () {
    console.log("remove_sms_left_3");

    //off

    //remove class.

  $("#sms_left_container").removeClass("sms_left_container_ani_in");
  $("#sms_left_container").addClass("sms_left_container_ani_out");


    //add class:

    //text:


    // start bg lyd:
            $("#sms_lyd")[0].pause();

    //videre animationend, click, timer, etc.

    setTimeout(sms_left_04, 2001);


}
function sms_left_04 () {
    console.log("sms_left_04");

    //off

    //remove class.
     $("#sms_left_container").removeClass("sms_left_container_ani_out");



    //add class:

    $("#sms_left_container").addClass("sms_left_container_ani_in");

    //text
    $("#sms_left_content").text("Fordi du flirter med andre end mig, og det kan jeg bare ikke klare");

    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.

   setTimeout(remove_sms_right_04, 2001);
}

function remove_sms_right_04 () {
    console.log("remove_sms_right_4");

    //off

    //remove class.
  $("#sms_right_container").removeClass("sms_right_container_ani_in");

    //add class:
  $("#sms_right_container").addClass("sms_right_container_ani_out");
    // lyd:
            $("#sms_lyd")[0].pause();
    //text:

    //videre animationend, click, timer, etc.
     setTimeout(sms_right_05, 2001);

}

function sms_right_05() {
    console.log("sms_right_05");

   //off

    //remove class.
     $("#sms_right_container").removeClass("sms_right_container_ani_out");

    //add class:

     $("#sms_right_container").addClass("sms_right_container_ani_in");
     //text
     $("#sms_right_content").text("Det gør jeg da ikke >:(");


    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //text:

    //videre animationend, click, timer, etc.

     setTimeout(remove_sms_left_04, 3000);

}

function remove_sms_left_04 () {
    console.log("remove_sms_left_4");

    //off

    //remove class.

  $("#sms_left_container").removeClass("sms_left_container_ani_in");
  $("#sms_left_container").addClass("sms_left_container_ani_out");


    //add class:

    //text:


    // start bg lyd:
            $("#sms_lyd")[0].pause();

    //videre animationend, click, timer, etc.

    setTimeout(sms_left_05, 2001);


}

function sms_left_05 () {
    console.log("sms_left_05");

    //off

    //remove class.
     $("#sms_left_container").removeClass("sms_left_container_ani_out");



    //add class:

    $("#sms_left_container").addClass("sms_left_container_ani_in");

    //text
    $("#sms_left_content").text("Jo du gør og jeg gider det ikke mere!");

    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.

   setTimeout(remove_sms_right_05, 2001);
}

function remove_sms_right_05 () {
    console.log("remove_sms_right_5");

    //off

    //remove class.
  $("#sms_right_container").removeClass("sms_right_container_ani_in");

    //add class:
  $("#sms_right_container").addClass("sms_right_container_ani_out");
    // lyd:
            $("#sms_lyd")[0].pause();
    //text:

    //videre animationend, click, timer, etc.
     setTimeout(sms_right_06, 2001);

}

function sms_right_06() {
    console.log("sms_right_06");

   //off

    //remove class.
     $("#sms_right_container").removeClass("sms_right_container_ani_out");

    //add class:

     $("#sms_right_container").addClass("sms_right_container_ani_in");
     //text
     $("#sms_right_content").text("Slår du op med mig? :´(");


    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //text:

    //videre animationend, click, timer, etc.

     setTimeout(remove_sms_left_06, 3000);
}


function remove_sms_left_06 () {
    console.log("remove_sms_left_6");

    //off

    //remove class.

  $("#sms_left_container").removeClass("sms_left_container_ani_in");
  $("#sms_left_container").addClass("sms_left_container_ani_out");


    //add class:

    //text:


    // start bg lyd:

            $("#sms_lyd")[0].pause();
    //videre animationend, click, timer, etc.

    setTimeout(sms_left_07, 2001);


}

function sms_left_07 () {
    console.log("sms_left_07");

    //off

    //remove class.
     $("#sms_left_container").removeClass("sms_left_container_ani_out");



    //add class:

    $("#sms_left_container").addClass("sms_left_container_ani_in");

    //text
    $("#sms_left_content").text("Ja...");

    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.

   setTimeout(remove_sms_right_06, 2001);
}

function remove_sms_right_06 () {
    console.log("remove_sms_right_6");

    //off

    //remove class.
  $("#sms_right_container").removeClass("sms_right_container_ani_in");

    //add class:
  $("#sms_right_container").addClass("sms_right_container_ani_out");
    // lyd:
            $("#sms_lyd")[0].pause();
    //text:

    //videre animationend, click, timer, etc.
     setTimeout(sms_right_07, 2001);

}

function sms_right_07() {
    console.log("sms_right_07");

   //off

    //remove class.
     $("#sms_right_container").removeClass("sms_right_container_ani_out");

    //add class:

     $("#sms_right_container").addClass("sms_right_container_ani_in");
     //text
     $("#sms_right_content").text("WHAT?! Så skal du slette de billeder du har af mig!!!");


    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //text:

    //videre animationend, click, timer, etc.

     setTimeout(remove_sms_left_07, 3000);

}

function remove_sms_left_07 () {
    console.log("remove_sms_left_7");

    //off

    //remove class.

  $("#sms_left_container").removeClass("sms_left_container_ani_in");
  $("#sms_left_container").addClass("sms_left_container_ani_out");


    //add class:

    //text:


    // start bg lyd:

            $("#sms_lyd")[0].pause();
    //videre animationend, click, timer, etc.

    setTimeout(sms_left_08, 2000);


}

function sms_left_08 () {
    console.log("sms_left_07");

    //off

    //remove class.
     $("#sms_left_container").removeClass("sms_left_container_ani_out");



    //add class:

    $("#sms_left_container").addClass("sms_left_container_ani_in");

    //text
    $("#sms_left_content").text("hmmm....!");

    // start bg lyd:


      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.


       setTimeout(telefon_in, 2000);

}

function telefon_in () {
    console.log("telefon__in");

    //off

    //remove class.




    //add class:


   $("#telefon_container").addClass("telefon_ani_in");
     $("#sms_right_container").addClass("sms_right_container_ani_to_tlf");

    $("#sms_left_container").addClass("sms_left_container_ani_to_tlf");

    //text


    // start bg lyd:

    //videre animationend, click, timer, etc.
           setTimeout(valg_in, 2000);


}

function valg_in () {
    console.log("valg_in");

    //off


    //remove class.




    //add class:

     $("#valg_1_container").addClass("valg_1_container_ani_in");
      $("#valg_1_content").text("Nej jeg gemmer dem!");


    $("#valg_2_container").addClass("valg_2_container_ani_in");
     $("#valg_2_content").text("Haha aldrig i livet, jeg deler dem med alle jeg kender!");

    $("#valg_3_container").addClass("valg_3_container_ani_in");

    $("#info_box_container").addClass("info_box_container_ani_in");


     $("#valg_3_content").text("Det skal jeg selvfølgelig nok gøre");



//add valg

    //text


    // start bg lyd:

    //videre animationend, click, timer, etc.

   // click på valg

    $("#valg_1_container").on("click", valg1);
    $("#valg_2_container").on("click", valg2);
    $("#valg_3_container").on("click", valg3);
}



function valg1 () {
    console.log("valg1");

    //off
       $("#valg_1_container").off("click", valg1);

    //remove class.

      $("#valg_1_container").removeClass("valg_1_container_ani_in");
      $("#valg_2_container").removeClass("valg_2_container_ani_in");
      $("#valg_3_container").removeClass("valg_3_container_ani_in");

    //add class:

    $("#valg_1_container").addClass("valg_1_container_ani_out");
      $("#valg_2_container").addClass("valg_2_container_ani_out");
      $("#valg_3_container").addClass("valg_3_container_ani_out");

    //text


    // if

    // VAR

    valg = 1;



    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.
      if_1();


}

function valg2 () {
    console.log("valg2");

    //off
       $("#valg_2_container").off("click", valg2);

    //remove class.

      $("#valg_1_container").removeClass("valg_1_container_ani_in");
      $("#valg_2_container").removeClass("valg_2_container_ani_in");
      $("#valg_3_container").removeClass("valg_3_container_ani_in");

    //add class:

    $("#valg_1_container").addClass("valg_1_container_ani_out");
      $("#valg_2_container").addClass("valg_2_container_ani_out");
      $("#valg_3_container").addClass("valg_3_container_ani_out");

    //text


    // if

    // VAR

    valg = 2;



    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.
      if_1();


}

function valg3 () {
    console.log("valg3");

    //off
       $("#valg_3_container").off("click", valg3);

    //remove class.

      $("#valg_1_container").removeClass("valg_1_container_ani_in");
      $("#valg_2_container").removeClass("valg_2_container_ani_in");
      $("#valg_3_container").removeClass("valg_3_container_ani_in");

    //add class:

    $("#valg_1_container").addClass("valg_1_container_ani_out");
      $("#valg_2_container").addClass("valg_2_container_ani_out");
      $("#valg_3_container").addClass("valg_3_container_ani_out");

    //text


    // if

    // VAR

    valg = 3;



    // start bg lyd:

      $("#sms_lyd")[0].play();
    $("#sms_lyd")[0].volume = 0.5;

    //videre animationend, click, timer, etc.
    if_1();


}

function if_1  (){

    console.log("valgget er" + valg);


    if (valg == 1){

        console.log("valg 1 er valgt");
            $("#valgt_sms_content").text("Nej jeg gemmer dem!");

        $("#slut_box_item_1").text("Man må ikke gemme intime billeder af andre uden deres samtykke, det er både ulovligt og unfair overfor den person det går ud over.");

        valgt_sms_in();

    }


    else {

         if_2();

    }

}

function if_2 (){

      if(valg == 2){
           console.log("valg 2 er valgt");

               $("#valgt_sms_content").text("Haha aldrig i livet, jeg deler dem med alle jeg kender!");

           $("#slut_box_item_1").text("Du må ikke dele intime billeder af andre, og det kan straffes med fængsel, da det anses som deling af børneporno!");

        valgt_sms_in();

    }

     else{

         if_3();

    }


}

function if_3(){


      if( valg == 3){
           console.log("valg 3 er valgt");

             $("#valgt_sms_content").text("Det skal jeg selvfølgelig nok gøre");

           $("#slut_box_item_1").text("Klogt valg! Det ville nemlig have været ulovligt at dele, eller gemme billederne");

        valgt_sms_in();

    }


}

function valgt_sms_in (){
        console.log("valgt_sms_in");



    //off

    //remove class.




    //add class:
    $("#valgt_sms_container").addClass("valgt_sms_container_ani_in");



    //text


    // start bg lyd:

    //videre animationend, click, timer, etc.

 setTimeout(tlf_til_left_side, 2000);

}

function tlf_til_left_side () {
    console.log("tlf_til_left_side");

    //off

    //remove class.




    //add class:

      $("#telefon_container").addClass("telfon_ani_left");

    $("#sms_right_container").addClass("sms_right_container_ani_move_left_side");

    $("#sms_left_container").addClass("sms_left_container_ani_move_left_side");

     $("#valgt_sms_container").addClass("valgt_sms_container_ani_move_left_side");

    $("#bg_afslutning").addClass("bg_afslutning_ani_in");

 $("#info_box_container").addClass("info_box_container_ani_out");

    $("#slut_box_con").addClass("slut_box_con_ani_in");


//add valg

    //text


    // start bg lyd:

    //videre animationend, click, timer, etc.

   // click på valg
}



