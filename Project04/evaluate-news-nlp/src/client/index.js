import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

// moved to index.js as suggested in https://knowledge.udacity.com/questions/435694

    // Check that service workers are supported
       if ('serviceWorker' in navigator) {
            // Use the window load event to keep the page load performant
            window.addEventListener('load', () => {
                console.log('Installing service workers')
                navigator.serviceWorker.register('/service-worker.js');
            });
        }

export {
    checkForName,
    handleSubmit
}
