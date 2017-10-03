Meteor.subscribe("panier");

Template.panier.helpers({
    panier: function() {
        return Panier.find();
    },
    //on crée une nouvelle fonction pour la totalité des commandes
    'totalite': function() {
        //on donne un point de départ qui est de 0
        totalite = 0;
        //on lui dit d'afficher le total des produits dès que c'est égal à 1
        Panier.find({}, {fields:{total:1}}).map(function(doc) {
            //la totalité des commandes est égale au total des produits
            totalite += doc.total;
        });
        //il retourne ainsi la totalité des commandes
        return totalite;
    }
});

//BOUTON SUPPRIMER
Template.panier.events({
    'click input.remove'(event){
        event.preventDefault();
        Panier.remove(this._id);
        },
});



//BOUTON MODIFIER
Template.panier.events({
    'click .modif'(event) {

        event.preventDefault();
        var compteur = $("."+this._id+"").val();

        Panier.update(this._id, {
            name:this.name,
            price:this.price,
            image:this.image,
            counter:compteur,
            total:this.price*compteur,
            _id:this._id
        });
    },
});



Template.boissons.events({
    'submit .formulaire'(event){
       /* if(this.InStock)
            confirm ("vous avec acheté un" + this.name + "pour" + this.price);
        else
            alert("pas en stock");*/

        event.preventDefault();
        var compteur = $("input[name='inputcompteur']").val();
        // var compteur= event.target.inputcompteur.value;
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            counter:compteur,
            total:this.price*compteur
        });
    },
});

Template.burgers.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='inputcompteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            counter:compteur,
            total:this.price*compteur
        });
    },
});
Template.desserts.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='inputcompteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            counter:compteur,
            total:this.price*compteur
        });
    },
});
Template.pizzas.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='inputcompteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            counter:compteur,
            total:this.price*compteur
        });
    },
});
Template.salades.events({
    'submit .formulaire'(event){
        event.preventDefault();
        var compteur = $("input[name='inputcompteur']").val();
        Panier.insert({
            name:this.name,
            price:this.price,
            image:this.image,
            counter:compteur,
            total:this.price*compteur
        });
    },
});
