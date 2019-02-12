const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const emailjs = require('emailjs/email');
const pdfdocument = require('pdfkit');
exports.sendmailfn = functions.database.ref('/sendmail/{emailkey}').onWrite(event => {
    var doc = new pdfdocument();


    // error occure here.
    //console you event please to show the strucute of data.
    var email = event.change.val().email;
    // var email = event.

    doc.text('This email was sent as soon as the user logged in');
    doc.end();

    var server = emailjs.server.connect({
        user: 'agrawalabhishek199718@gmail.com',
        password: 'Abhi@199718',
        host: 'smtp.gmail.com',
        ssl: true
    });

    server.send({
        text: 'This mail was sent automatically when the user logged in',
        from: 'agrawalabhishek199718@gmail.com',
        to: 'agrawalabhishek199718@gmail.com',
        subject: 'Wow, we can send an email this way',
        attachment: [
            {data: 'somerandomdata', type:'application/pdf', stream: doc, name: 'rules.pdf'}
        ]
    }, (err, message) => {
      debugger;
        if (err)
            console.log(err);
        console.log(message);
    })
})
