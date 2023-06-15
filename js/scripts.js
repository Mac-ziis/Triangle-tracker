// Business logic
function isEqual(numA, numB){
  return numA === numB;
}


function getTriangleType (event) {
  event.preventDefault();

  //read user input, convert to integer
  const input1 = parseInt(document.querySelector("input#input1").value);
  const input2 = parseInt(document.querySelector("input#input2").value);
  const input3 = parseInt(document.querySelector("input#input3").value);

  const sumAB = input1 + input2;
  const sumBC = input2 + input3;
  const sumAC = input1 + input3;

  
  if ((sumAB<= input3) || (sumBC <= input1) || (sumAC <= input2)){
    document.getElementById('type').innerText = "This is not a triangle!";
    return;
  }
  //isosceles if two sides equal
  if((isEqual(input1, input3)&& sumAC <= input2) || (isEqual(input2, input3) && (sumBC <= input1)))
  {
    document.getElementById('type').innerText = "Isososloes";
  }
  else if ((input1 !== input2 && input2 !== input3)){
    document.getElementById('type').innerText = "Scalene";
  }

  else if (input1 === input2 && input2===input3){
    document.getElementById('type').innerText = "Equilateral";
  }

  document.getElementById('result').removeAttribute('class');
 
}

window.addEventListener('load', function(){
  const form = document.getElementById('tracker');
  form.addEventListener('submit', getTriangleType);
});