$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var dadBibs = ["day", "person1", "person2", "noun1", "noun2", "noun3", "pluralNoun", "adjective1", "adjective2", "thing1", "thing2"];
    dadBibs.forEach(function(bib){
      var userInput = $("input#" + bib).val();
      $("." + bib).text(userInput);
    });

    $(".story").show();

    event.preventDefault();
  });
});
