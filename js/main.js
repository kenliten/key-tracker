function generateFunction(e, addition){
  let event;
  if (document.querySelector('#keydown').checked){
    event = 'keydown';
  }else if (document.querySelector('#keyup').checked){
    event = 'keyup';
  }else{
    event = 'keypress';
  }
  document.getElementById('function-1').textContent = `const foo = ()=>{
  // your goes code here
  return 0;
}

window.addEventListener('${event}', (e)=>{
  e.key == '${e.key}'${addition} ? foo() : return;
});`;
document.getElementById('function-2').textContent = `const foo = ()=>{
  // Your code goes here
  return 0;
}

window.addEventListener('${event}', (e)=>{
  if (e.key == '${e.key}'${addition}){
    foo();
  }
});`;
document.getElementById('function-3').textContent = `window.addEventListener('${event}', (e)=>{
  e.key == '${e.key}'${addition} ? (/*Your code goes here*/) : return 0;
});`;
document.getElementById('function-4').textContent = `window.addEventListener('${event}', (e)=>{
  if (e.key == '${e.key}'${addition}){
    // Your code goes here
    return 0;
  }
});`;
document.getElementById('function-5').textContent = `function foo(){
  // your goes code here
  return 0;
}

window.addEventListener('${event}', (e)=>{
  e.key == '${e.key}'${addition} ? foo() : return;
});`;
document.getElementById('function-6').textContent = `function foo(){
  // your goes code here
  return 0;
}

window.addEventListener('${event}', (e)=>{
  if (e.key == '${e.key}'${addition}){
    foo();
  }
});`;
document.getElementById('function-7').textContent = `window.addEventListener('${event}', function(e){
  e.key == '${e.key}'${addition} ? (/*Your code goes here*/) : return;
});`;
  document.getElementById('function-8').textContent = `window.addEventListener('${event}', function(e){
  if (e.key == '${e.key}'${addition}){
    // your code goes here
    return 0;
  }
});`;
}

window.addEventListener('keydown', function(e){
  if (document.querySelector('.clear-message').style.display !== 'none'){
    document.querySelector('.clear-message').style.display = 'none';
  }

  else if (e.altKey){
    generateFunction(e, ' && e.altKey');
  }

  else if (e.ctrlKey){
    generateFunction(e, ' && e.ctrlKey');
  }

  else if (e.shiftKey){
    generateFunction(e, ' && e.shiftKey');
  }

  else{
    generateFunction(e, '');
  }
  e.preventDefault();
});

document.getElementById('function-1').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});

document.getElementById('function-2').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});

document.getElementById('function-3').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});

document.getElementById('function-4').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});

document.getElementById('function-5').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});

document.getElementById('function-6').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});

document.getElementById('function-7').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});

document.getElementById('function-8').addEventListener('click', function(e){
  e.target.select();
  document.execCommand('copy');
});
