function getFormvalue() {
    //Write your code here
	var form = document.getElementById("form1");
    var formData = new FormData(form);

    var firstname = formData.get("fname");
    var lastname = formData.get("lname");

    alert(firstname + " " + lastname);
}




