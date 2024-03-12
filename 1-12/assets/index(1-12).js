let length = document.getElementById("length");
let width = document.getElementById("width");
let area = document.getElementById("area");
let areabtn = document.getElementById("areabtn");

areabtn.addEventListener("click", function () {
  let l = parseFloat(length.value);
  let w = parseFloat(width.value);
  let a = l * w;
  area.textContent = a;
  if(isNaN(l)||isNaN(w))
  {
    area.textContent = "Provide a Valid Number";
  }
});

let sumeven = document.getElementById("sumeven");
let sevenbtn = document.getElementById("sevenbtn");
let arr = [1, 2, 4, 3, 5, 8, 9, 7, 6];

sevenbtn.addEventListener("click", function () {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }

  sumeven.textContent = sum;
});

let ascend = document.getElementById("ascend");
let ascbtn = document.getElementById("ascbtn");

let sortasc = [...arr];

ascbtn.addEventListener("click", function () {
  let asc = 0;

  for (let i = 0; i < sortasc.length; i++) {

    for (let z = i+1; z < sortasc.length; z++) {
      if (sortasc[i] > sortasc[z]) {
        asc = sortasc[i];
        sortasc[i] = sortasc[z];
        sortasc[z] = asc;
      }
    }
  }

  let a="";
  for (let i = 0; i < sortasc.length; i++) {
     a = a + " " + sortasc[i];
  }

 

  ascend.textContent = a;
});


let fib=document.getElementById('fib');
let fibnum=document.getElementById('fibnum');
let fibbtn=document.getElementById('fibbtn');

fibbtn.addEventListener('click',function()
{

let num= parseInt(fibnum.value);

if(isNaN(num))
{
  num='';
}

let first=0;
let sec=1;
let k;
let b = "0 1";


if (num == 1) {
  b=0;
 
}
else if(num == 2)
{
  b="0 1";
 
}
else if(num == 0 || num== '')
{
  b="Provide valid Number";
 
}
else
{
for(let i=0;i<num-2;i++)
{
  
  k=first+sec;
  b = b + ' ' + k;
  first=sec;
  sec=k;
  
}
}
fib.textContent=b;

});



let greetingbtn=document.getElementById('greetingbtn');

greetingbtn.addEventListener('click', function() {
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;

  if(name=='')
  {
    alert('Name Cannot be blank');
  }

  else if(age=='')
  {
    alert('Age cannot be blank');
  }
else
{
  alert('Hello, ' + name + '! You are ' + age + ' years old.');
}
});


let datein=document.getElementById('datein');
let datebtn=document.getElementById('datebtn');
let dateop=document.getElementById('dateop');


datebtn.addEventListener('click',function()
{
  let dateinp=datein.value;
  let date = new Date(dateinp);

  let dayOfWeekIndex = date.getDay();

  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if(dayOfWeekIndex)
  {
  dateop.textContent = daysOfWeek[dayOfWeekIndex];
  }
  else
  {
    dateop.textContent="Please select a date";
  }

});




document.getElementById('formbtn').addEventListener('click', function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMessages = document.getElementById("errorMessages");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errorMessages.innerHTML = "";

  if (password === '') {
      errorMessages.innerHTML = "Password cannot be blank<br>";
  } else if (password.length < 7) {
      errorMessages.innerHTML = "Password too short<br>";
  } else {
      let hasCapital = /[A-Z]/.test(password);
      let hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      
      if (!hasCapital) {
          errorMessages.innerHTML = "The Password should contain at least one capital letter<br>";
      }
      else if (!hasSpecialSymbol) {
          errorMessages.innerHTML = "The Password should contain at least one special symbol<br>";
      }
  }
  
  if(username=='')
   {
    errorMessages.innerHTML = "Username connot be blank<br>";
   }
   else if(username.length < 7)
   {
    errorMessages.innerHTML = "Username too short<br>";
   }
   else if(!emailPattern.test(username))
   {
    errorMessages.innerHTML = "Invalid email format<br>";
   }



  if (errorMessages.innerHTML === "") {
      alert('Welcome');
      errorMessages.innerHTML = "Provide Details";
  }
});



let prfctbtn = document.getElementById("prfctbtn");

prfctbtn.addEventListener('click',function()
{
  let prft = document.getElementById("prft");
  let prftcnm = document.getElementById("prftcnm").value;


  let dec= parseFloat(prftcnm);

  console.log(dec);
  let decr=Math.sqrt(dec);
  let numr=Math.floor(decr);
if(dec)
{

 
  if(decr == numr)
  {
    prft.textContent='Perfect Square';
  }
  else
  {
    prft.textContent='Not a perfect square';
  }

}
else
{
  prft.textContent='Please Provide a valid Number';
}

});


let sumdescbtn = document.getElementById("sumdescbtn");


sumdescbtn.addEventListener('click',function()
{
  let sumf = document.getElementById("sumf").value;
  let sums = document.getElementById("sums").value;
  let sumdesc = document.getElementById("sumdesc");

  let first=parseFloat(sumf);
  let second=parseFloat(sums);

  let sum;

 
  if(isNaN(first)||isNaN(second))
  {
    sumdesc.textContent = 'Please Provide valid Number';
  }

  

  else
  {
  if(first===second)
  {
    sum=3*first;

  }

  else
  {
    sum= first+second;
  }

  sumdesc.textContent = sum;
}

});


let compbtn = document.getElementById("compbtn");

compbtn.addEventListener('click',function()
{

  let compf = document.getElementById("compf").value;
  let comps = document.getElementById("comps").value;
  let compdesc = document.getElementById("compdesc");

  let first=parseFloat(compf);
  let second=parseFloat(comps);

  if(isNaN(first)||isNaN(second))
  {
    compdesc.textContent = 'Please Provide valid Number';
  }
else
{
  if(first==50|| second==50|| (first+second)==50)
  {
    compdesc.textContent = 'True';

  }
  else
  {
    compdesc.textContent = 'False';

  }

}

});



let pnbtn = document.getElementById("pnbtn");

pnbtn.addEventListener('click',function()
{

  let pnf = document.getElementById("pnf").value;
  let pns = document.getElementById("pns").value;
  let pndesc = document.getElementById("pndesc");

  pndesc.innerHTML='';
  let first=parseFloat(pnf);
  let second=parseFloat(pns);

  if(first>0)
  {
    pndesc.innerHTML = 'First number is Positive <br>';

  }
  else if (first<0)
  {
    pndesc.innerHTML = 'First number is Negative <br>';
  }
  else if (first==0)
  {
    pndesc.innerHTML = 'First number is neither Positive nor Negative <br>';
  }
  else
  {
    pndesc.innerHTML = 'Provide a valid number <br>';
  }

  if(second>0)
  {
    pndesc.innerHTML += 'Second number is Positive <br>';

  }
  else if (second<0)
  {
    pndesc.innerHTML += 'Second number is Negative <br>';
  }
  else if (second==0)
  {
    pndesc.innerHTML = 'Second number is neither Positive nor Negative <br>';
  }
  else
  {
    pndesc.innerHTML = 'Provide a valid number <br>';
  }


});


let difbtn = document.getElementById("difbtn");
difbtn.addEventListener('click',function()
{
  let diff = document.getElementById("diff").value;
  let difdesc = document.getElementById("difdesc");

  let subs;
  let first=parseFloat(diff);

  if(isNaN(first))
  {
    difdesc.textContent = 'Please Provide valid Number';
  }

  else
  {
  if(first>13)
  {
    subs= (first-13)*2;
  }
  else
  {
    subs= first-13;
  }

  difdesc.textContent=subs;
}
});
