export default {
  protectedRoutes: [
    { route: "/admin", methods: ["POST", "PUT", "DELETE", "PATCH"] },
  ]
}

// Employees, departments & cats are not protected.