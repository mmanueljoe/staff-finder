import { gql } from "@apollo/client/core"
import { useQuery } from "@vue/apollo-composable";
import { type Ref } from "vue";


const SEARCH_QUERY = gql`
    query($query: String!){
        searchEmployees(query: $query){
            id
            name
            position
            department
            skills
            email
        }
    }
`
export function useSearch(query: Ref<string>){
    const { result, loading , error } = useQuery(SEARCH_QUERY, 
        () => ({
            query: query.value
        }),
        () => ({
            enabled: !!query.value
        }) 
);

    return {
        result,
        loading,
        error
    }
}

