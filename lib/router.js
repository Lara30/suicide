Router.configure({
    layoutTemplate: 'layout',
  /*  waitOn: function() {
        return Meteor.subscribe('categories');}*/
});
// Page selon les categories choisies
Router.route('/', {name: 'categorie'});

// on donne le chemin de la page et on le redirige sur le bon template

Router.route('/panier', {
    name:'panier'
});

Router.route('/pages/:name', function() {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});