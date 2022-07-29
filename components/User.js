import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

export const CURRENT_USER = gql`
	query CURRENT_USER {
	 authenticatedItem {
	    ... on User {
	      name
	      id
	      email
	      password_is_set
	      cart {
	      		id
	        quantity
	        product{
	          id
	          name
	          price
	          description
	          photo {
	            image {
	              publicUrlTransformed
	            }
	          }
	        }
	      }
	    }
	  }
	}
`

export default function useUser() {
const {data} = useQuery(CURRENT_USER);
return data?.authenticatedItem;
}

