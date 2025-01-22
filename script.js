function handleLogin(event) {
    event.preventDefault();
    // Redirect to application form page
    window.location.href = "application.html";
  }
  
  function handleApplication(event) {
    event.preventDefault();
    // Redirect to company selection page
    window.location.href = "company.html";
  }
  
  function handleCompanySubmit(event) {
    event.preventDefault();
  
    // Show the popup
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  