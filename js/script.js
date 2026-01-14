import { validateForm } from './form_validate.js';
import { prefillForm } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('success-toast');

    // Inputs
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    // const queryTypeInputs = document.querySelectorAll('input[name="query-type"]');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');

    //not used
    document.querySelector('body').onclick = function (e) {
        if (e.target != document.getElementsByClassName('container')[0]) {
            // alert('You clicked outside');
            // validateForm();
        } else {
            // console.log('You clicked inside');
        }
    }



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Reset errors
        let isValid = validateForm();

        if (isValid) {
            showSuccessToast();
            form.reset();
        }
    });



    function showSuccessToast() {
        toast.classList.add('show');

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    //try to prefill if there is any starter link.
    //usually referral link etc.
    prefillForm();
});
