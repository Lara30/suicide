Router.configure({
    layoutTemplate: 'layout',
  /*  waitOn: function() {
  return Meteor.subscribe('categories');}*/
});
// Page selon les categories choisies
Router.route('/', {name: 'categorie'});

// on donne le chemin de la page et on le redirige sur le bon template

Router.route('/panier', {name:'panier'});

// Router.route('/login', {name:'login'});
/*pour la gestion des utilisateurs
 */
/*var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.layoutTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};
Router.onBeforeAction(requireLogin, {only: 'cmdval'});*/


//essai de l'envoi du bouton valider à un formulaire de connexion en détails de l'user
Router.route('/users', {name: 'users'});


//pour la gestion des personnes logées
/*
Router.route('/register', {name:'register'});
*/

//il suite la route de chaque catgéorie en récupérant leur nom
Router.route('/pages/:name', function() {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});


