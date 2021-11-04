const { AuthenticationError } = require('apollo-server-errors');
const { getSingleUser } = require('../controllers/user-controller');
const { Book, User } = require('../models');

const resolvers = {
    Query: {
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         return User.findOne({ _id: context.user._id })
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // }
        me: async (parent, args, context) => {
            getSingleUser(context, res);
        }
    }

//     Mutation: {
//         addUser:
//         login:
//         saveBook:
//         title:
//         removeBook:
//     }
}
module.exports = resolvers;