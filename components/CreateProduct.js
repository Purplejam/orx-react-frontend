import useForm from '../lib/useForm';
import Form from './styles/Form';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/client';
import DisplayMessage from './ErrorMessage';
import {ALL_PRODUCTS_QUERY} from './Products';
import Router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
	mutation CREATE_PRODUCT_MUTATION(
	 $name: String!,
	 $price: Int!,
	 $description: String!,
	 $image: Upload
	) {
		createProduct(data: {
			name: $name,
			price: $price,
			description: $description,
			photo: {create: {image: $image, altText: $name}}
		})
		{
			id
			name
			price
			description
		}
	}
`

export default function CreateProduct () {
	const {inputs, handleChange, resetInputs, clearInputs} = useForm({
		name: 'Enter a name',
		price: 0,
		description: 'Enter a description',
		image: ''
	});

	const [createProduct, {loading, error, data}] = useMutation(CREATE_PRODUCT_MUTATION, 
		{variables: inputs,
			refetchQueries: [{query: ALL_PRODUCTS_QUERY}]});

	
	return(
		<Form onSubmit={async(e) => {
			e.preventDefault();
			//submit the inputfield to the backend
			const res = await createProduct();
			clearInputs();
			Router.push({pathname: `/product/${res.data.createProduct.id}`});
			}}>

			<DisplayMessage error={error}/>
			<fieldset disabled={loading} aria-busy={loading}>
				 <label htmlFor="image">
						Image
						<input type="file" id="image" 
							name="image" onChange={handleChange}/>
					</label> 

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
		
					<button type="submit">+ Add Product</button>
			</fieldset>
		</Form>
		)
}

