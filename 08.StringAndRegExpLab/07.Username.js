/**
 * Created by Lucifer on 05-Oct-16.
 */
function userNames(emails) {
    let usernames = [];
    for (let email of emails) {
        let emailTokens = email.split('@');
        let name = emailTokens[0] + '.';
        emailTokens[1].split('.').map(t => name += t[0]);
        usernames.push(name);
    }

    return usernames.join(', ');
}