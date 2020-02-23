function validateForm() {
    var x = document.forms["BBQ_Form"]["fname"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    var x = document.forms["BBQ_Form"]["lname"].value;
    if (x == "") {
      alert("Last name must be filled out");
      return false;
    }
  }