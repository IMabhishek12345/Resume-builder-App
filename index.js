console.log("welcome to resume builder app");
function addNewWefield(){
    console.log("I m clicked");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder","Enter here");

    let WexpField=document.getElementById("WexpField");
    let WexpAddBtn=document.getElementById("WexpAddBtn");

    WexpField.insertBefore(newNode, WexpAddBtn);
}

function addpsfield(){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("psField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder","Enter here" );

  let projectskills=document.getElementById("projectskills");
  let psAddBtn=document.getElementById("psAddBtn");
  projectskills.insertBefore(newNode, psAddBtn);  
  
}

function addCerti(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("certField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here" );
    newNode.setAttribute("rows", 1);
    let Certificates=document.getElementById("Certificates");
    let certiAddBtn=document.getElementById("certiAddBtn");

  Certificates.insertBefore(newNode,certiAddBtn);
}
function addaq(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here" );
    newNode.setAttribute("rows", 1);
    let aq=document.getElementById("aq");
    let aqAddBtn=document.getElementById("aqAddBtn");

    aq.insertBefore(newNode,aqAddBtn);
}

function generateCV(){
  console.log("I am in generate cv");
  // name
  let namefield=document.getElementById("namefield").value;
  document.getElementById("nameT").innerHTML=namefield;
  document.getElementById("nameT2").innerHTML=namefield;

  //contact
  document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
  //address
  document.getElementById("addrT").innerHTML=document.getElementById("addressfield").value;
  
  //Important links
  document.getElementById("linkT").innerHTML=document.getElementById("gmailId").value;
  document.getElementById("mailT").innerHTML=document.getElementById("Linkidin").value;

  //objective
  document.getElementById("objT").innerHTML=document.getElementById("objective").value;
  
  //work exp
  let wexs=document.getElementsByClassName("weField");
  let str="";
  for (e of wexs){
    str+=`<li>${e.value}</li>`;
  }
  document.getElementById("peT").innerHTML=str;  

  //Pojects and skills
  let pas=document.getElementsByClassName("psField");
  let st="";
  for (e of pas){
    st+=`<li>${e.value}</li>`;
  }
  document.getElementById("psT").innerHTML=st;  

  //Certifications
  let cert=document.getElementsByClassName("certField");
  let newst="";
  for (e of cert){
    newst+=`<li>${e.value}</li>`;
  }
  document.getElementById("certT").innerHTML=newst;  

  //Academic qualifications
  let aqs=document.getElementsByClassName("aqField");
  let newstr="";
  for (e of aqs){
    newstr+=`<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML=newstr;  
  
  // code for setting profile picture
  let file=document.getElementById("imgProfile").files[0];
  console.log(file);
  let reader=new FileReader();
  reader.readAsDataURL(file)
  console.log(reader.result);
  //set the img in template
  reader.onloadend=function(){
  document.getElementById("imgT").src=reader.result;
  }

  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";

}

//print your cv
function printCV(){
  document.getElementById("print").style.display="none";
  window.print();
}