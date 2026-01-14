// Prefill form from URL query parameters
function prefillForm() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('firstName')) firstName.value = urlParams.get('firstName');
    if (urlParams.has('lastName')) lastName.value = urlParams.get('lastName');
    if (urlParams.has('email')) email.value = urlParams.get('email');
    if (urlParams.has('message')) message.value = urlParams.get('message');

    if (urlParams.has('queryType')) {
        const type = urlParams.get('queryType');
        const radio = document.querySelector(`input[name="query-type"][value="${type}"]`);
        if (radio) radio.checked = true;
    }

}

export {
    prefillForm
}