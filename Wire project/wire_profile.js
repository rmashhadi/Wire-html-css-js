//changing colors
var n='red';
function Defaults() {
  document.getElementById('Menu1').style.color=n
  document.getElementById('Icon1').style.color=n
  document.getElementById('div3').style.border='solid red'
  document.getElementById('Account1Pic').style.border='solid red'
}

function changer(x){
    var x, Id, m
    let colors=['none','blue', 'greenyellow', 'red', 'orange', 'palevioletred', 'purple']
    
    Id=x.id.slice(6)
    m='div'+Id
    
    let l,buttonId,divId
    for (l=1; l<7; l++){
      buttonId='div'+l
      divId='button'+l
      document.getElementById(buttonId).style.border='none';
      document.getElementById(divId).style.border='none';
    }
    n=colors[Id].toString()
    document.getElementById('div'+Id).style.border='solid'
    document.getElementById('div'+Id).style.borderColor=n
    document.getElementById('Account1Pic').style.border='solid'
    document.getElementById('Account1Pic').style.borderColor=n
    document.getElementById('Menu1').style.color=n
    document.getElementById('Icon1').style.color=n
    console.log('n',n)
}
function noborder(y){
    document.getElementById(y.id).style.outline='none'
}

//Activating Prefrences Menus
function Action(Pick){
//changing color
  var k, DisplayList=['none','Display1','Display2','Display3','Display4']
  var MenuList=['none', 'Menu1', 'Menu2', 'Menu3', 'Menu4']
  var IconList=['none', 'Icon1', 'Icon2', 'Icon3', 'Icon4']
  let j, IconId
  for (j=1; j<5; j++){
    document.getElementById(DisplayList[j]).style.display='none'  
    document.getElementById(MenuList[j]).style.color='snow'
    document.getElementById(IconList[j]).style.color='snow'
  }
  k=Pick.id.slice(4)
  IconId='Icon'+Pick.id.slice(4)
  k='Display'+ k
  
  document.getElementById(k).style.display='block'
  document.getElementById(Pick.id).style.color=n
  document.getElementById(IconId).style.color=n
  document.getElementById(Pick.id).style.textDecoration='none'
  
//sliding Menu
if (window.innerWidth<800){
  document.getElementById("middle").style.width = "45px";
  document.getElementById('middle').style.overflow='hidden'
  document.querySelector('.prefrences').style.visibility='hidden'; 

 
  
}
}  
 

function slide(){
  

  if (window.innerWidth<800){
    document.getElementById("middle").style.width = "304px";  
    document.querySelector('.prefrences').style.visibility='visible'; 
    
  }  
}
window.onresize = resize;

function resize() {
 if (window.innerWidth>800){
  document.getElementById("middle").style.width = "304px";  
  document.querySelector('.prefrences').style.visibility='visible'; 
 }
 else {
  document.getElementById("middle").style.width = "45px";
  document.getElementById('middle').style.overflow='hidden';
  document.querySelector('.prefrences').style.visibility='hidden'; 

 }
 
}