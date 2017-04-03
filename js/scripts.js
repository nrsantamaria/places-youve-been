//business logic
function Location (cityName, countryName, year, notes){
  this.cityName = cityName;
  this.countryName = countryName;
  this.year = year;
  this.notes = notes;
  this.landmarks = [];
};

function Landmark (landmark) {
  this.landmark = landmark;
};

Location.prototype.locationName = function() {
  return `${this.cityName}, ${this.countryName}`;
};

Landmark.prototype.landmarkName = function (){
  return this.landmark;
};

function resetFields() {
  $("#city-name-input").val("");
  $("#country-name-input").val("");
  $("#year-input").val("");
  $("#notes-input").val("");
  $("input.new-landmark").val("");
};

//user interface logic
$(document).ready(function(){

  $("#add-landmark").click(function(){
    $("#landmarks").append(`<div class="landmark-group">
                              <div class="form-group">
                                <label for="landmarks">Landmark</label>
                                <input class="form-control new-landmark" type="text">
                              </div>
                            </div>`)
  });

  $("form#location-input").submit(function(event){
    event.preventDefault();
    var cityName = $("#city-name-input").val();
    var countryName = $("#country-name-input").val();
    var year = $("#year-input").val();
    var notes = $("#notes-input").val();
    let location = new Location (cityName, countryName, year, notes);
//reference the landmark-group class for the each function because there are many landmarks that will be created in the div #landmarks
    $(".landmark-group").each(function(){
      var landmark = $(this).find("input.new-landmark").val();
      var newLandmark = new Landmark (landmark);
      location.landmarks.push(newLandmark)
    });
    $("#location-list").append("<li><span class='city-country'>" + location.cityName + " " + location.countryName + "</span></li>")
//create span class above and reference class below on click function to show each objects information
    $(".city-country").last().click(function(){
      $(".location-info").show();
      $("#locationNameDisplay").text(location.locationName());
      $("#cityDisplay").text(location.cityName);
      $("#countryDisplay").text(location.countryName);
      $("#landmarksDisplay").empty();
      location.landmarks.forEach(function(landmark){
        $("#landmarksDisplay").append(`<li>${landmark.landmarkName()}</li>`)
      });
    });
    resetFields();
  });
});
