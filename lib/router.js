Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() {
        return Meteor.subscribe('categories');}
});
// Page selon les categories choisies
Router.route('/', {name: 'categories'});

Router.route('/pages/:name', function() {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});