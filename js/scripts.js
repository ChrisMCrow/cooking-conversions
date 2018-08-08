// back-end

var gramsToOunces = function(grams) {
  return (grams * 0.03527396).toPrecision(2);
};

var ouncesToGrams = function(ounces) {
  return (ounces * 28.34952313).toFixed(2);
};

var gallonsToLiters = function(gallons) {
  return (gallons * 3.785411784).toFixed(2);
};

var litersToGallons = function(liters) {
  return (liters / 3.785411784).toFixed(2);
};

// front-end

$(document).ready(function(){
  $("#one").submit(function(event){
    event.preventDefault();
    var gto = gramsToOunces($("input#gramstoounces").val());
    $(".output").text(gto + " ounces");
  });

  $("#two").submit(function(event){
    event.preventDefault();
    var otg = ouncesToGrams($("input#ouncestograms").val());
    $(".output").text(otg + " grams");
  });

  $("#three").submit(function(event){
    event.preventDefault();
    var gtl = gallonsToLiters($("input#gramstoounces").val());
    $(".output").text(gtl + " liters");
  });

  $("#four").submit(function(event){
    event.preventDefault();
    var ltg = litersToGallons($("input#literstogallons").val());
    $(".output").text(ltg + " gallons");
  });


});
