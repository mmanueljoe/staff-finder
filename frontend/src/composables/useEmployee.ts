import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { type Ref } from "vue";

const FETCH_EMPLOYEE = gql`
  query ($id: ID!) {
    employee(id: $id) {
      id
      name
      position
      department
      skills
      email
    }
  }
`;
export function useEmployee(employeeId: Ref<string>) {
  const { result, loading, error } = useQuery(
    FETCH_EMPLOYEE,
    () => ({
      id: employeeId.value,
    }),
    () => ({
      enabled: !!employeeId.value,
    }),
  );

  return {
    result,
    loading,
    error,
  };
}
