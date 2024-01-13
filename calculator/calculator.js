let input = document.querySelector("#text");
let arr = [];
  let str = '';

function num(v)
{
  input.value +=  v;
  str+=v;
  
  if(parseInt(v) == v)
  {
    if(str.length < 2)
    {
      arr.push(v)
    }
    else
    {
      arr[arr.length-1] += v;
    }

  }
  else
  {
    arr.push(v)
    str=''
  }
 console.log(arr);
}






let All_clear=document.getElementById("clear")
All_clear.addEventListener("click",Clear_Fun)

function Clear_Fun()
{
  input.value ="";
  arr = [];
  str='';
  console.log(arr)
}

function del()
{
  let str1 = arr.pop().toString();
  
  // console.log(str1);
console.log(str1.length);
  input.value = input.value.slice(0, -1);

  // console.log(input.value);
  if(str1.length >= 2)
  {
    str1 = str1.slice(0, -1);
    arr.push(str1);
    console.log(arr);
  }
  else
  {
    arr.push();
    str='';
    console.log(arr);
  }

  
}




function equal()
{
  let result = 0;
  for(let i = 0; i < arr.length; i++)
  {
    
    if((arr[i] == "/") || (arr[i] == "*") || (arr[i] == "%"))
    {
      if(arr[i] == "%")
      {
        result = arr[i-1] %  arr[i+1];
        arr.splice(i-1, 3, result)
        i--
        console.log(arr)
      }
      else if(arr[i] == "/")
      {
        result = arr[i-1] / arr[i+1];
        arr.splice(i-1, 3, result)
        i--
        console.log(arr)
      }
      else if(arr[i] == "*")
      {
        result = arr[i-1] * arr[i+1];
        arr.splice(i-1, 3, result);
        i--
        console.log(arr)
      }

      
    }
    
  }
for(let j = 0; j < arr.length; j++)
{
  if(arr[j] == "+" || arr[j] == "-")
 if(arr[j] == "-")
  {
    result = arr[j-1] - arr[j+1];
    arr.splice(j-1, 3, result);
    j--
    console.log(arr)
  }
  else if(arr[j] == "+")
  {
    result = parseInt((arr[j-1]) )+ parseInt(arr[j+1]);
    arr.splice(j-1, 3, result);
    j--
    console.log(arr)
  }
}
input.value = result;
}