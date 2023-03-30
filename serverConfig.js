export default {
  protectedRoutes: [
    { route: "/users", methods: ["PUT", "DELETE", "PATCH"] },
    { route: "/DFabrica", methods: ["POST","PUT", "DELETE", "PATCH"] },
    { route: "/admin", methods:["GET","POST","PUT", "DELETE", "PATCH"]}
  ]
}