import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage.js';
import {GET_PRODUCT_BY_ID} from './SingleProduct';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayMessage from './ErrorMessage';
import {useMutation} from '@apollo/client';

const UPDATE_PRODUCT_BY_ID = gql`
  mutation UPDATE_PRODUCT_BY_ID($id: ID!, 
  $name: String, 
  $description: String, 
  $price: Int) {
  updateProduct(id: $id, data: {
    name: $name,
    description: $description,
    price: $price
  } ) {
    name
    description
    price
  }
}
`




export default function UpdateProduct({id}) {
  //get existing product query
  const {data: productData, error: productError, loading: productLoading} = useQuery(GET_PRODUCT_BY_ID, {
    variables: {id}
  });
  const product = productData?.Product;

  //useForm custom hook
  const {inputs, handleChange, resetInputs, clearInputs} = useForm(product);

   //useMutation hook
  const [updateProduct, {data: mutateData, error: mutateError, loading: mutateLoading}] = useMutation(UPDATE_PRODUCT_BY_ID);

  if (productError) return <DisplayError error={productError}/>;
  if (productLoading) return <div>loading...</div>
	return(
    <div>
      <Form onSubmit={async(e) => {
        e.preventDefault();
        //submit the inputfield to the backend
        let res = await updateProduct({
          variables: {
            id: id,
            name: inputs.name,
            price: inputs.price,
            description: inputs.description
          }
        })
       }}>

        <DisplayMessage error={mutateError}/>
        <fieldset disabled={mutateLoading} aria-busy={mutateLoading}>
           <label htmlFor="name">
              Name
              <input type="text" id="name" 
                name="name" placeholder="Name" 
                value={inputs.name} onChange={handleChange}/>
            </label> 
      
            <label htmlFor="price">
              Price
              <input type="number" id="price" 
                name="price" placeholder="Price" 
                value={inputs.price} onChange={handleChange}/>
            </label>

            <label htmlFor="description">
              Description
              <input type="text" id="description" 
                name="description" placeholder="Description" 
                value={inputs.description} onChange={handleChange}/>
            </label>
      
            <button type="submit">+ Change Product</button>
        </fieldset>
      </Form>
    </div>
		)
}

