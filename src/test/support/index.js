import './commands';

// CUSTOMIZATION
// We don't want to fail our tests because of an uncaught script error on the site
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});