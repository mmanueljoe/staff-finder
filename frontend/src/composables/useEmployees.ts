import { useQuery } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core";

const EMPLOYEES_QUERY = gql`
  query {
    employees {
      id
      name
      position
      department
      skills
      email
    }
  }
`;

export function useEmployees() {
  const { result, loading, error } = useQuery(EMPLOYEES_QUERY);

  return {
    result,
    loading,
    error,
  };
}
