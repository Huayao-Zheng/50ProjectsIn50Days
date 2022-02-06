const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
const types = ['info', 'success', 'error'];

const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
const randomType = () => types[Math.floor(Math.random() * types.length)];

const createNotification = (message = null, type = null) => {
    const notification = document.createElement('div');

    notification.classList.add('toast');
    notification.classList.add(type ? type : randomType());

    notification.innerText = message ? message : randomMessage();

    toasts.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
};

button.addEventListener('click', () => createNotification('Invalid'));
