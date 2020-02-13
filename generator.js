function generate()
{
    let result = getRandomChar(true, true);
    document.getElementById("content").innerHTML = result.toString();
}

function getRandomChar(alpha, number)
{
    var characters = '';
    if (alpha)
    {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (number)
    {
        characters += '1234567890';
    }

    var index = Math.floor(Math.random() * characters.length);
    return characters.charAt(index);
}