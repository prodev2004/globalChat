const messages_container = document.querySelector('.messages');
const sendBtn = document.querySelector('.input button');
const input = document.querySelector('.input input');

const user_input_info_container = document.querySelector('.user_input_info');
const confirm_info_btn = document.querySelector('.confirm_info_btn');
const chat_container = document.querySelector('.chat_container');
const input_user_info_name = document.querySelector('.user_input_info input[type="text"]');
const file_input = document.querySelector('.user_input_info input[type="file"]');
const avatar_image = document.querySelector('.single img');

sendBtn.addEventListener('click', addMessageOnClick);
input.addEventListener('keyup', sendMessageOnEnter);

confirm_info_btn.addEventListener('click', get_user_info);

function addMessage() {
    // and also we'll set this img's src to that avatar_image src
    messages_container.innerHTML += `
        <div class="single">
            <div class="img">
                <img src="${avatar_image.src}" alt="">
            </div>
            <div class="user_info">
                <h4>${input_user_info_name.value}</h4>
                <p>${input.value}</p>
            </div>
        </div>`
    input.value = '';
    input.focus();
    const lastMsg = document.querySelector('.single:last-of-type')
    lastMsg.scrollIntoView(true)
}

function sendMessageOnEnter(e) {
    if (e.keyCode === 13 && input.value !== '') {
        addMessage()
    }
}

function addMessageOnClick() {
    if (input.value === '') {
        return
    } else {
        addMessage()
    }
}

function get_user_info () {
    if (input_user_info_name.value && file_input.value) {
        user_input_info_container.style.display = 'none';
        chat_container.style.display = 'flex';
        get_user_image();
    } else {
        alert('Fill in the fields');
    }
}

// now we'll create the function where we can upload any image in our pc
function get_user_image () {
    const file = file_input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            avatar_image.src = result;
            // so this result will be avatar's src
            // if you want to know what this code does then you can check the video where we create a custom upload button with preview video in this channel. I'll add the link in the description
        }
        reader.readAsDataURL(file);
    }
}
// that's it for this function...
// now we'll call this function inside the get_user_info