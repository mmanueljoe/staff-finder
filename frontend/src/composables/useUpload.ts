import { gql } from "@apollo/client/core";
import { useMutation } from "@vue/apollo-composable";

const CREATE_EMPLOYEE = gql`
  mutation (
    $name: String!
    $position: String!
    $department: String!
    $skills: [String!]!
    $email: String!
  ) {
    addEmployee(
      name: $name
      position: $position
      department: $department
      skills: $skills
      email: $email
    ) {
      id
      name
      position
      department
      skills
      email
    }
  }
`;

export function useUpload() {
  const { mutate, loading, error } = useMutation(CREATE_EMPLOYEE);

  return {
    mutate,
    loading,
    error,
  };
}
