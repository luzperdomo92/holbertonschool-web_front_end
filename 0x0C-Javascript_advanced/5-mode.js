function changeMode(size, weight, transform, background, color){
  return () => {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main(){

  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')

  let parraf = document.createElement('p');
  parraf.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(parraf)

  let button1 = document.createElement('button');
  button1.innerHTML = 'Spooky';
  document.body.appendChild(button1);
  button1.addEventListener("click", spooky);

  let button2 = document.createElement('button');
  button2.innerHTML = 'Dark mode';
  document.body.appendChild(button2);
  button2.addEventListener("click", darkMode);

  let button3 = document.createElement('button');
  button3.innerHTML = 'Scream mode';
  document.body.appendChild(button3);
  button3.addEventListener("click", screamMode);


}

main();
