Meteor.subscribe("paniers");

Template.paniers.helpers({
    paniers: function() {
        return Panier.find();
    }
});
Template.boissons.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='compteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            compteur:compteur,
            total:this.price*compteur
        });
    },
});
Template.burgers.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='compteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            compteur:compteur,
            total:this.price*compteur
        });
    },
});
Template.desserts.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='compteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            compteur:compteur,
            total:this.price*compteur
        });
    },
});
Template.pizzas.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='compteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            compteur:compteur,
            total:this.price*compteur
        });
    },
});
Template.salades.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='compteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            compteur:compteur,
            total:this.price*compteur
        });
    },
});