/* Function that allows hover drop down menu options to be clickable and replace the button.
 * 
 * By: Max Clark
 */
function dropdownFunc() {
    /* External Source:
    * Title: Changing the text of a button when clicking an attribute in the dropdown of it?
    * Author: Ivan Karaman
    * Date: 3 August 2016
    * Availability: https://stackoverflow.com/questions/38744963/changing-the-text-of-a-button-when-clicking-an-attribute-in-the-dropdown-of-it
    */
    /*Adds buttons to the list of text in dropdown */
    var month = $('.dropdown-hover');
    var monthButtons = month.find($('.dropdown-button'));
    var months = month.find($('.dropdown-content').children());
      
    /*Checks text of clicked month and changes text of hovered button to that */
    $(months).on('click', function(e) {
        var newMonth = e.target;
        monthButtons.text(newMonth.text).val(newMonth.text);
    });
}