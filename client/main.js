import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
    /*'click .toto'(event, instance) {
        // increment the counter when button is clicked
      alert();
    },*/
});
//on applique au template panier un événement au submit du bouton compteur
//qui récupère le nom, l'image et le prix
Template.panier.events({
    'submit .compteur'(event) {
      event.preventDefault();
      this.name=name;
      this.image=image;
      this.price=price;
    }
});