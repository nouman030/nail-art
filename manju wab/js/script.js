// JavaScript for Navigation Bar
function show() {
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hide() {
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


  $(document).ready(function () {
    $('#submit').click(function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const number= $('#num').val();
        const password=$('#password').val();
        const adr=$('#ads').val();
        if (name === '' || email === '' || number === '' || password === '' || adr === '' ) {
            $('#invalid_email').text("Input Fields can not be Empty!!(-_-)");
            $('#invalid_email').css("color", "red");
            return false;
        }
        
        else if (IsEmail(email) === false) {
          $('#invalid_email').text("Entered Email is not Valid!(-_-)");
          $('#invalid_email').css("color", "red");
          return false;
        }
        
        else if (validatePassword(password) === false) {
            $('#invalid_email').text("Entered password is not Valid!(-_-)");
            $('#invalid_email').css("color", "red");
            return false;
        }

        else if (validateContactNumber(number) === false) {
          $('#invalid_email').text("Entered number is not Valid!(-_-)");
          $('#invalid_email').css("color", "red");
          return false;
      }

        else{
            $('#invalid_email').text("Entered Details is Valid!:)");
            $('#invalid_email').css("color", "green");
            return true;
        }
        return false;
    });
});

function IsEmail(email) {
    const regex =
/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }

}

function validatePassword(password) {
  const regex =/^[a-zA-Z0-9@]{8,}$/;
 
      if (!regex.test(password)) {
          return false;
      }
      else {
          return true;
      }
  
  }


  function validateContactNumber(number) {
    const regex =/^[0-9]{10}$/;
 
    if (!regex.test(number)) {
        return false;
    }
    else {
        return true;
    }

}


$(document).ready(function(){
    // Attach a change event to the checkbox
    $("#Checkbox").change(function(){
      // Enable or disable the button based on checkbox state
      $("#submit").prop("disabled", !this.checked);
    });
  });