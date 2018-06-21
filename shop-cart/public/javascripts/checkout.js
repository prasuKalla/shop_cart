var stripe = Stripe('pk_test_g6do5S237ekq10r65BnxO6S0');

var $form = $('#checkout-form');

$form.submit(function(event){
    $('#charge-error').addClass('hidden');

    $form.find('button').prop('disabled',true);
    stripe.createToken({
        number:$('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#address_zip').val()       
    }, stripeResponseHandler);
    return false;
});


function stripeResponseHandler(status, response){
   if(response.error){
       $('#charge-error').text(response.error.message);

       $('#charge-error').removeClass('hidden');
       $form.find('button').prop('disabled',false);
   }
   else{
       //token was created!
       //get the token id
       var token = response.id;

       //insert the token into the form so it gets submitted to the server:
       $form.append($('<input type="hidden" name="stripeToken />').val(token));

       //submit the form
       $form.get(0).submit();
   }
}