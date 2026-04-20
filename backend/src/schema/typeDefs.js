export const typeDefs = `
 type Employee {
    id: ID!
    name: String!
    position: String!
    department: String!
    skills: [String!]!
    email: String!
  }

  type Query {
    employees: [Employee!]!
    employee(id: ID!): Employee
    searchEmployees(query: String!): [Employee!]!
  }

  type Mutation {
    addEmployee(name: String!, position: String!, department: String!, skills: [String!]!, email: String!): Employee!
    deleteEmployee(id: ID!): Employee
    updateEmployee(id: ID!, name: String, position: String, department: String, skills: [String!], email: String): Employee
}
`;


