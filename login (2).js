var username1 = localStorage.getItem('Username')
console.log(username1);
head1.innerHTML = `Welcome ${username1}`

function logout() {
    window.location = './login.html';
 
 }
 function addemployee() {
    const employee = {
       empID: empId.value,
       empName: empName.value,
       empAddress: empAddress.value,
       empDesignation: empDesignation.value,
       empSalary: empSalary.value
    }
    console.log(employee);
    if (employee.empID in localStorage) {
       alert("already exist")
 
    }
    else {
       localStorage.setItem(empId.value, JSON.stringify(employee))
       alert("added successfully")
    }
 }
 function search(){
    key=document.getElementById('search').value;
    if(key in localStorage){
        empId= JSON.parse(localStorage.getItem(key))
        text.innerHTML = empId
    }else {
       txt.innerHTML = "data not found"
    }
    document.getElementById('Saerch Employee Name').reset()
 }