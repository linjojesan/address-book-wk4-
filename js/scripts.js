

//business logic
function Contact(first, last, address, phonenumber) {
  this.firstName = first;
  this.lastName = last
  this.addresses = [];

}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Contact.prototype.address = function() {
  return this.address + " ";
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedPhoneNumber = parseInt($("input#new-phone-number").val());
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedPhoneNumber);
    console.log(inputtedPhoneNumber);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + newContact.phoneNumber() "</span></li>");
    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
});

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
