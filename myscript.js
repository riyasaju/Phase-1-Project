function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function moreBlogs()
{
    alert("More Blogs will be shown");
}
function editBlog()
{
    alert("Edit Blog will be opened");
}

function openReading()
{
    alert("Opens the complete blog");
}

function deleteBlog()
{
    if(confirm("Do you want to delete the blog?")){
        alert("Blog is deleted.")
    }
    else{
        alert("You have selected to keep the blog!")
    }
}
function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
   var message=document.contactForm.message.value;
   

    var nameErr = emailErr =messageErr= true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //validate message
    if(message.length <20)
    {
        printError("messageErr", "Minimum 20 characters needed.");
    }
    else{
        messageErr=false;
    }


    if (nameErr || emailErr ||messageErr == true) {
        return false;
    } else {
        alert('You have submitted the form..')
    }
}