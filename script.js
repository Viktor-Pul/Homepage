function sendMessage()
{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    if (name === '' || email === '' || message === '')
    {
        document.querySelector('.alert').style.display = 'block';
    }
    else
    {
        alert("Sorry, I will  learn the backend in the next lesson. Therefore, this message CANNOT be sent. Thanks for wanting to chat with me.")
    }
}

function hidde(){
    document.querySelector('.alert').style.display = 'none';
}