Meteor.subscribe("paniers");

Template.paniers.helpers({
    paniers: function() {
        return Panier.find();
    }
});
Template.boissons.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.burgers.events({
    'submit .formulaire'(event){

        event.preventDefault();

        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            compteur:this.compteur
        });
        target.compteur.value=this.compteur;
    },
});
Template.desserts.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.pizzas.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});
Template.salades.events({
    'submit .formulaire'(event){
        event.preventDefault();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image
        });
    },
});