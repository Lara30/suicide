Meteor.subscribe("paniers");

Template.paniers.helpers({
    paniers: function() {
        return Paniers.find();
    }
});
Template.boissons.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Paniers.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.burgers.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Paniers.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.desserts.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Paniers.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.pizzas.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Paniers.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.salades.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Paniers.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});