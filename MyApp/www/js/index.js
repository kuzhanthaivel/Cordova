function saveInfo() {
    var name = document.getElementById("name").value;
    var regNo = document.getElementById("regNo").value;
    var phone = document.getElementById("phone").value;
    var collegeNo = document.getElementById("collegeNo").value;

    var info = "Name: " + name + "<br>" +
               "Registration Number: " + regNo + "<br>" +
               "Phone Number: " + phone + "<br>" +
               "College Number: " + collegeNo;

    document.getElementById("displayInfo").innerHTML = info;
}



