/* eslint-disable filenames/match-exported */
const i18n = {
  

  login: {
    
    login: 'Login',
    password: 'Password',
    enterEmail: 'Enter your email',
    email: 'Email*',
    email_without: 'Email',
    name: 'Name*',
      
  },
  network: {
    message:
      'You are having trouble connecting to the internet.Please Enable WiFi or mobile data.',
    title: 'No Internet Connection',
    warn: 'warn',
  },
  
  
  validations: {
    whiteSpace: 'Blank spaces are not allowed.',
    enterEmail: 'Please enter email address.',
    enterValidEmail: 'Please enter a valid email address.',
    enterPassword: 'Please enter password.',
    reenterPassword: 'Please re-enter the password',
    enterValidPassword:
      'Invalid password, password must be atleast 6 characters with minimum 1 Uppercase, 1 Lowercase, 1 Numeric and 1 Special character from ' +
      `#?!@$%^&*-)(.`,
    connectionErrorMsg: "Please make sure you're connected with internet.",
    connectionServiceErrorMsg:
      "Please make sure you're connected with internet or our servers are not responding.",
  },
  
};

module.exports = i18n;
