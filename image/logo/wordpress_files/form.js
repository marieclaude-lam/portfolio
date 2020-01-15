'use strict';function formControl(evt){inputs=[nom,email,sujet,message,robot];errorList=[];for(var i=0;i<inputs.length;i++){inputs[i].classList.remove("wrong")}
for(var i=0;i<inputs.length;i++){if(!inputs[i].value){errorList.push('Veuillez renseigner le champ "'+inputs[i].placeholder.toLowerCase()+'".');inputs[i].classList.add("wrong")}}
for(var i=0;i<=2;i++){if(inputs[i].value.length>=50){errorList.push('Le champ "'+inputs[i].placeholder.toLowerCase()+'" ne doit pas excéder 50 caractères.');inputs[i].classList.add("wrong")}}
if(inputs[3].value.length>=1500){errorList.push('Le champ "'+inputs[3].placeholder.toLowerCase()+'" ne doit pas excéder 1500 caractères.');inputs[i].classList.add("wrong")}
var regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(!regexEmail.test(email.value.trim())){errorList.push("Veuillez saisir une adresse mail valide.");email.classList.add("wrong")}
if(!robot.checked){errorList.push("Êtes-vous un robot ?")}
if(errorList.length>0){evt.preventDefault();displayErrors()}}
function displayErrors(){errorsDiv.innerHTML="";for(var i=0;i<errorList.length;i++){var p=document.createElement("p");p.innerHTML=errorList[i];errorsDiv.appendChild(p)}
for(var i=0;i<inputs.length;i++){inputs[i].addEventListener("click",function(){this.classList.remove("wrong")})}}