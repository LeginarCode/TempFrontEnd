
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    // var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="EMAIL"]');
    var message = $('.validate-input textarea[name="MMERGE6"]');


    // $('.validate-form').on('submit',function(){
    //     var check = true;

        // if($(name).val().trim() == ''){
        //     showValidate(name);
        //     check=false;
        // }


        // if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //     showValidate(email);
        //     check=false;
        // }

        // if($(message).val().trim() == ''){
        //     showValidate(message);
        //     check=false;
        // }

    //     return check;
    // });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);


function submitSuccess() {
    console.log("Success Hooray");
    $("#staticBackdrop").modal();
}

// const temp = document.getElementById("form-title");
// temp.addEventListener("click", submitSuccess);

const modal_button = document.getElementById("modal-success");
modal_button.addEventListener("click", e => window.close());
