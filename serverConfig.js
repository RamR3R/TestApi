export default {
  protectedRoutes: [
    { route: "/users", methods: ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/Dfabrica ", methods: ["POST", "PUT", "DELETE", "PATCH"] }
  ]
}

// Employees, departments & cats are not protected.