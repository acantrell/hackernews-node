const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';
const SUB_KEYS = {
    NEW_LINK: 'NEW_LINK',
    NEW_VOTE: 'NEW_VOTE',
};

function getUserId(context) {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }

    throw new Error('Not authenticated');
}

module.exports = { APP_SECRET, SUB_KEYS, getUserId }
