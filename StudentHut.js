
function checkPasswordStrength(){
    let password = document.getElementById("password").value;
    let strength = document.getElementById("strength");
    var msg = document.getElementById("message");

    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");

    if(strongRegex.test(password)){
        strength.innerHTML = "Strong password";
        msg.style.color="#26d730"
    }
    else{
        strength.innerHTML = "Weak password";
        msg.style.color="#ff5925"
    }
    if (password.value.length == 0){
        msg.style.display="none";
    }
    else if(password.value.length >=9){
        strength.innerHTML = "Strong Password";
    }
};

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

/*eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "icon2.webp";
    }
    else{
        password.type = "password";
        eyeicon.src = "icon1.jpg";
        
    }
};*/
function changeEyeIcon(){
    if(password.type == "password"){
        password.type ="text";
        eyeicon.src = "icon2.webp";
    }
    else{
        password.type = "password";
        eyeicon.src = "icon1.jpg";
    }
}
document.getElementById('confirmPassword').addEventListener('input', function(){
    /*checkPasswordStrength();*/
    const newPassword = document.getElementById('password').value;
    const confirmPassword = this.value;
    const checkmark = document.getElementById('checkmark');
    const strengthText = document.getElementById("strength").innerText;

    if(strengthText ==="Strong password" && newPassword && confirmPassword && newPassword === confirmPassword ){
        checkmark.classList.remove('hidden');
    }
    else{
        checkmark.classList.add('hidden');
    }
    /*if(strengthText === "Strong password"){
        checkmark.classList.remove('hidden');
    }*/
});
document.getElementById("password").addEventListener('input',checkPasswordStrength);

function confirmLogout(){
    if(confirm("Are you sure you want to logout?")){
        //alert("You have successfully logged out!");
        window.location.href = "StudentHUTLogin.html";
    }
    else{
        //alert("Logout canceled.");
    }
}
function passwordChanged(){
    var newPassword = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(newPassword === "" || confirmPassword === ""){
        alert("Please enter a new password in both fields");
    }
    else if(newPassword === confirmPassword){
        alert("Your password has successfully been changed");
    }
    else{
        alert("Passwords do not match. Please confirm new password!");
    }
}
function getStarted(){
    window.location.href="SignUp.html";
}
function Login(){
    window.location.href="index.html";
}
function Reserve(){
    window.location.href = "listings.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const roomInput = document.getElementById('room');
    const budgetInput = document.getElementById('budget');
    const facilitySelect = document.getElementById('select');
    
    const filterContent = () => {
        const roomValue = roomInput.value.toLowerCase();
        const budgetValue = parseInt(budgetInput.value);
        const facilityValue = facilitySelect.value.toLowerCase();

        console.log('Room Value:', roomValue);
        console.log('Budget Value:', budgetValue);
        console.log('Facility Value', facilityValue);
        
        const allListings = document.querySelectorAll('.image-card');
        
        allListings.forEach(listing => {
            const roomType = listing.querySelector('p').textContent.toLowerCase();
            const price = parseInt(listing.dataset.price);
            const facilities = listing.dataset.facilities.toLowerCase().split(',');

            console.log('Room Type:', roomType);
            console.log('Price:', price);
            console.log('Facilities', facilities);
            
            const matchesRoom = roomType.includes(roomValue);
            const matchesBudget = isNaN(budgetValue) || price <= budgetValue;
            const matchesFacility = !facilityValue || facilities.includes(facilityValue);
            
            if (matchesRoom && matchesBudget && matchesFacility) {
                listing.style.display = 'block';
            } else {
                listing.style.display = 'none';
            }
        });
    };
    
    roomInput.addEventListener('input', filterContent);
    budgetInput.addEventListener('input', filterContent);
    facilitySelect.addEventListener('change', filterContent);
});

