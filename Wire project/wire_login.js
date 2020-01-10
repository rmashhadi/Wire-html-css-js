//bluring a part by cursor
function bluring (x){
    document.getElementById(x.id).placeholder=''
    if (x.id==='userpassword') {
        document.getElementById('click').style.opacity=100
    }
  }
//checking password
function Checking(){
    var a=document.getElementById('userpassword').value
    if (a.length<8) {
        document.getElementById('Invalid').style.visibility='visible'}
        else {
            document.getElementById('Invalid').style.visibility='hidden'
    }
  
    
}