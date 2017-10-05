import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if (Meteor.users.findOne("your_admin_user_id"))
        Roles.addUsersToRoles("your_admin_user_id", ['admin']);

    // code to run on server at startup
});
