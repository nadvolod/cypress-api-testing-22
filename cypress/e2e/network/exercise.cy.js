/// <reference types="cypress" />

describe("Network Requests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  //GET Requests
  it("GET one todo returns one todo", () => {
    // 💡 https://on.cypress.io/request
    cy.request(`${baseUrl}/todos/1`).should((response) => {
      // TODO expect() your (response.status).to.eq(200)
      //TODO expect response.body to have a property that equals some value
      //should we check anything else?
    });
  });

  it("GET comments returns 200 and 500 body length", () => {
    // 💡 https://docs.cypress.io/api/commands/request#Assertions
    // TODO implement this on your own but try this for your expect .to.have.property("length").and.be.oneOf([500, 501])
  });

  it("GET a comment on postId=1 and id=2 returns valid email", () => {
    //💡 Use query string parameters appended to your url like this /comments?postId=1&id=2
    cy.request(`${baseUrl}/comments?postId=1&id=2`).should((response) => {
      // TODO implement the rest of the test
    });
  });

  it("GET /comments with cy.request({qs:})", () => {
    // TODO this is the same test as above, but instead
    // 💡use the `qs` object from cy.request()
    //💡 https://docs.cypress.io/api/commands/request#Arguments

  });

  /**
   * 
   * POSTS
   */

  it("Can create new post", () => {
    // resource will not be really updated on the server but it will be faked as if
    // TODO supply the body of the request
    cy.request("POST", `${baseUrl}/posts`, {
      // TODO add properties: values here
    })
      // note that the value here is the returned value of the 2nd request
      // which is the new post object
      .then((response) => {
        console.log(response);
        // TODO expect the response status to be 201
        // TODO expect the response body to contain the title = "YOUR TITLE"
      });
  });

  it("Can create new user on /posts v2", () => {
    cy.request("POST", `${baseUrl}/posts`, {
      // TODO set the body as before
    }).as("post");

    // tip: log the request object to see everything it has in the console
    cy.get('@post').then(console.log)

    // you can retrieve the XHR multiple times -
    // returns the same object.
    cy.get('@post')
      .then((response) => {
        console.log(response);
        // TODO expect the response status to be 201
        // TODO expect the response body to contain the title = "Cypress POST"
        // TODO what else do you want to expect?
        expect(response.body).to.contain({
          title: "Cypress POST",
        });
      });
  });

  it("Can update posts", () => {
    // a PUT is used to update an existing entity
    //TODO what method should be used in cy.request()?
    cy.request("HELLO", `${baseUrl}/posts/1`, {
      id: 1,
      userId: 11,
      title: "foo",
      body: "bar",
    }).then((response) => {
      response
      //TODO expect response.status to equal what status code?
      //TODO expect response.statusText to equal what string?
      //TODO expect response.body to contain what title?
    });
  });
});
