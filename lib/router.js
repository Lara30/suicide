Router.configure({
    layoutTemplate: 'layout',
  /*  waitOn: function() {
        return Meteor.subscribe('categories');}*/
});
// Page selon les categories choisies
Router.route('/', {name: 'categories'});
// on donne le chemin de la page et on le redirige sur le bon template
Router.route('/panier', {
    name:'paniers'
});
Router.route('/pages/:name', function() {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});