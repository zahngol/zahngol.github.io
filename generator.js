function generate()
{
    let result = getRandomInt(0,10);
    document.getElementById("content").innerHTML = result.toString();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }