Meteor.subscribe("categories");

Template.categorie.helpers({
    categorie: function() {
        return Categories.find()}
});