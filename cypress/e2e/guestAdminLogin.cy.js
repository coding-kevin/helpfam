/// <reference types="cypress" />

let user;

before(function fetchUser() {
  cy.request(
    "POST",
    "https://kevin-tickets-backend.herokuapp.com/api/users/login",
    {
      name: Cypress.env("guestAdminUserName"),
      email: Cypress.env("guestAdminUserName"),
      password: Cypress.env("guestAdminPassword"),
      userType: "Admin",
    }
  )
    .its("body")
    .then((res) => {
      user = res;
    });
});

beforeEach(function setUser() {
  cy.visit("https://kevin-tickets-backend.herokuapp.com", {
    onBeforeLoad(win) {
      win.localStorage.setItem("user", JSON.stringify(user));
    },
  });
});

describe("JWT", () => {
  it("makes authenticated request", () => {
    cy.request({
      url: "https://kevin-tickets-backend.herokuapp.com/api/users/me",
      auth: {
        bearer: user.token,
      },
    })
      .its("body")
      .should("contains", {
        name: Cypress.env("guestAdminUserName"),
        email: Cypress.env("guestAdminUserName"),
        userType: "Admin",
      });
  });

  it("is logged in", () => {
    cy.contains("Hello Guest_Admin").should("be.visible");
  });
});
