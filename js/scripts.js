//business logic
function Contact(firstName, lastName, street, city, state){
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Contact.prototype.fullAddress = function() {
  return `${this.street}, ${this.city}, ${this.state}`;
};

//user interface logic
$(document).ready(function(){

  $("form#contact-input").submit(function(event){
    event.preventDefault();
    var firstName = $("#first-name-input").val();
    var lastName = $("#last-name-input").val();
    var street = $("#street-input").val();
    var city = $("#city-input").val();
    var state = $("#state-input").val();
    let contact = new Contact(firstName, lastName, street, city, state);
    $("#contact-list").append("<li>" + contact.firstName + " " + contact.lastName + "</li>")

    $("#contact-list").last().click(function(){
      $(".contact-info").show();
      $("#fullNameDisplay").text(contact.fullName());
      $("#firstNameDisplay").text(contact.firstName);
      $("#lastNameDisplay").text(contact.lastName);
      $("#addressDisplay").empty();
      $("#addressDisplay").append(`<li>${contact.fullAddress()}</li>`)
    });

  });



});
