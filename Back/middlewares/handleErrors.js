/**
 * It sends a 404 status code and a JSON message to the client
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - the response object
 * @param next - The next middleware function in the stack.
 */
function notFound(req, res, next) {
    res.status(404)
    res.json({message: '🛠 Not Found'})
}

// class ErrorMaker {
//     constructor(status, message) {
//         this.status = status;
//         this.message = message;
//     }
// }
// if(isSamePassword && userToLogin.email ===  credential.email) {
//             console.log('We have a winner !');
//         } else {
//             throw new errorMaker(401,'Wrong Password or Email') ;
//         }


module.exports = {notFound}