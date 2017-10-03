Meteor.publish('categories', function() {
    return Categories.find();
});
Meteor.publish('boissons', function() {
    return Boissons.find();
});
Meteor.publish('pizzas', function() {
    return Pizzas.find();
});
Meteor.publish('burgers', function() {
    return Burgers.find();
});
Meteor.publish('salades', function() {
    return Salades.find();
});
Meteor.publish('desserts', function() {
    return Desserts.find();
});

// pour passer en local
Meteor.publish('cmdval', function() {
    return Cmdval.find();
});