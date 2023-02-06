/* Function that uses built-in hide function to hide all elements regarding purchasing a cheesecake and
 * replaces them with elements regarding order details.
 *
 * By: Max Clark
 */
function hidePage() {
    $("button").hide();
    $("p").hide();
    $("#instructions").hide();
    $("h3").hide();
    $("td").hide();
    $("li").hide();
    $("div").hide();


    $("body").append("Thank you! Your order has been placed." + "<br>");

    /* Variables */
    var topping='Plain';
    var txt = $("#instructions").val();
    var amount= $('#quantities').find(":selected").val();

         

    /*Checks radio buttons for selected option */
    if(document.getElementById('plain').checked) {
        /*Do nothing - plain is default */
    }
    else if(document.getElementById('cherry').checked) {
        topping='Cherry';
    }
    else if(document.getElementById('chocolate').checked) {
        topping='Chocolate';
    }

    $("body").append("Topping: " + topping + "<br>" + 
    "Quantity: " + amount + "<br>" + "Notes: " + txt);
   
    /*Displays pop-up window to tell user vegan is not possible. */
    if($('#instructions').val().includes('vegan')) {
        alert("This product contains dairy!");
    } 
}
