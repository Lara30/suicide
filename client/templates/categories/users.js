Template.users.events({
    'submit form': function(e) {
        e.preventDefault();

        var questions = {
            nom: $(e.target).find('[name=nom]').val(),
            prenom: $(e.target).find('[name=prenom]').val(),
            adresse: $(e.target).find('[name=adresse]').val(),
            tel: $(e.target).find('[name=tel]').val(),
            mail: $(e.target).find('[name=mail]').val()
        };

      /*  Meteor.call('questionsInsert', questions, function(error, result) {
            // affiche l'erreur à l'utilisateur et s'interrompt
            if (error)
            return alert(error.reason);
            Router.go('categorie', {_id: result._id});
        });*/

        questions._id = Posts.insert(questions);
        Router.go('categorie', questions);
    }
});

/*Router.go('postPage', post);*/
