function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function showError(message) {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #ff5f6d, #e37a4d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () { } // Callback after click
    }).showToast();
}

function showSuccess(message) {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #006a5d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () { } // Callback after click
    }).showToast();
}