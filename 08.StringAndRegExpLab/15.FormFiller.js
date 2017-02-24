/**
 * Created by Lucifer on 05-Oct-16.
 */
function fillForm(input) {
    let [username, email, phone] = input.splice(0, 3);
    for (let line of input) {
        console.log(line
            .replace(/<![a-zA-Z]+!>/g, username)
            .replace(/<@[a-zA-Z]+@>/g, email)
            .replace(/<\+[a-zA-Z]+\+>/g, phone)
        );
    }
}
