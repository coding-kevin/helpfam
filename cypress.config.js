const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    guestAdminUserName: "Guest_Admin",
    guestAdminPassword: "Guest_Admin",
    guestCustomerUserName: "Guest_Customer",
    guestCustomerPassword: "Guest_Customer",
    userName: "Cy_User",
    userPassword: "D8N6jxw6Pv6S6Ta",
  },
});
