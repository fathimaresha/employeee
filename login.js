function login(){
    var username = document.getElementById('uname').value
    console.log(username);
    localStorage.setItem('Username',username)
    window.location='./home.html'
}