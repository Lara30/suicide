// import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    //passwordsignupfiels = permet de contrôler les éléments facultatifs et obligatoires lors de l'enregistrement
    //d'un utilisateur, donc pour rendre le mail obligatoire on fait email_only
    passwordSignupFields: 'USERNAME_ONLY'
});
