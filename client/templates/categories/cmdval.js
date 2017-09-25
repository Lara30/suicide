Meteor.subscribe('panier');
Meteor.subscribe('cmdval');

Template.panier.events({
    'submit .validercommande'() {

        Panier.find().observe({
            added: function(item) {
                Cmdval.insert(item);
            }
        });
    }
});

Template.panier.helpers({
    panier:function() {
        return Cmdval.find();
    }
});
