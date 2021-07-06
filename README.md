# session-local-cookie

This project is about session storage, local storage, and cookies.

- Session/local Storage and Cookies:https://www.youtube.com/watch?v=GihQAC1I39Q
- JWOT & NODE.JS tut: https://www.youtube.com/watch?v=mbsmsi7l3r4
- What is JWOT: https://www.youtube.com/watch?v=7Q17ubqLfaM

Basic Overview:

Let's break it down step by step.

First, the user needs to log in. To do so, they enter their username and password in a form, then submit the form. When the form is submitted, those credentials are transmitted to the server.

The way credentials are sent can be done in various different ways, and may be very complex depending on how secure you want this process to be. For the sake of this post, we shall abstract this process by a single HTTPS request that contains the credentials in the request body. Keep in mind that it would require to be way more secure than this.

The server eventually gets the user credentials. To ensure they are authentic, the server compares them against the actual user credentials that are stored in some database. In practice, passwords in the database are hashed, and to perform the comparison the server has to hash the password provided by the user as well. If both hashes match, the user is considered as authenticated.

Once the user is authenticated, you need to store this information somewhere. There are two choices : either this information is stored server side (by maintaining a session), either it is stored client side (by keeping information in a cookie). The first option requires the server to be stateful. Stateful servers are a pain in the ass to scale, and from my experience this strategy is avoided. This leaves us with the second option : storing the authentication information client side.

Storing the information client side means that the client has to come with it every time it makes a request to the server. This is analog to bring your ID card with you everytime you travel to confirm your identity. This is not a problem at all : the server stores that information in a cookie, and cookies are automatically transmitted to the server at each HTTP request. That way, the server is stateless and doesn't have to remember any information. Instead, for each HTTP request, it decodes the authentication cookie (if any), and if it is valid, the request may proceed.

What is stored in the cookie is a token. This token has been generated when the server had a successful match with the password hashes. It is encrypted, so it is not possible to decode what is inside the cookie. Only the server should be able to decrypt the token. The token, in itself, contains the authentication information. If it gets stolen, the attacker can impersonate the user for free. Which is why there are several additional protections around it.
