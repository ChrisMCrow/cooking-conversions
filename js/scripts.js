// back-end

var gramsToOunces = function(grams) {
  return grams * 0.03527396;
};

var ouncesToGrams = function(ounces) {
  return ounces * 28.34952313;
};

var gallonsToLiters = function(gallons) {
  return gallons * 3.785411784;
};

var litersToGallons = function(liters) {
  return liters / 3.785411784;
};

// front-end

$(document).ready(function(){
  $("#one").submit(function(event){
    event.preventDefault();
    var gto = gramsToOunces($("input#gramstoounces").val());
    $(".output").text(gto);
  });

  $("#two").submit(function(event){
    event.preventDefault();
    var otg = ouncesToGrams($("input#ouncestograms").val());
    $(".output").text(otg);
  });

  $("#three").submit(function(event){
    event.preventDefault();
    var gtl = gallonsToLiters($("input#gramstoounces").val());
    $(".output").text(gtl);
  });

  $("#four").submit(function(event){
    event.preventDefault();
    var ltg = litersToGallons($("input#literstogallons").val());
    $(".output").text(ltg);
  });


});
