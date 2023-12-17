function CheckCreds() // Defines the function of CheckCreds
{
    var FName = document.getElementById("FName").value; //gets the vlaue of input with the ID "_____"
    var LName = document.getElementById("LName").value;
    var ZipCode = document.getElementById("ZipCode").value;

    // Combine first name and last name
    var fullName = FName + ' ' + LName;

    if (fullName.length <20) //Checks if first and last name are under 20 charaters
    {
        if (ZipCode.length == 5) //checks if the zip has 5 numbers
        {
            location.replace("Test.html"); //if all requirements are ment then it will replace current page with the page you told it too
        }
        else
         {
        alert("Please Enter a 5 Didgit Zip") //if zip is not 5 numbers then shows alert
    }
}
else
    {
     alert("Name too long. Please Re-eneter"); //is first and last are 20 or more charaters then it will give an alert message
    }

}
