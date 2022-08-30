import styled from 'styled-components'
import { motion } from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Cuisine = () => {


  const [input, setInput] = useState('');
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
	const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=198a1131976843cd844cd9a1ea1995fc&cuisine=${name}`)
	const recipes = await data.json()
	setCuisine(recipes.results);
  }
  useEffect(()=>{
	getCuisine(params.type)
  }, [params.type])
  return (
	<Grid
	
	>
		{cuisine.map((item)=>{
			return (
				<Link to={'/recipe/' + item.id}>
				<Card key={item.id}>
					<img src={item.image} alt="cuisine" />
					<h4>{item.title}</h4>
				</Card>
				</Link>
				
			)
		})}
	</Grid>
  )
}

const Grid = styled(motion.div) `
	display:grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;
const Card = styled.div `
img {
	width:100%;
	border-radius: 2rem;
}
a {
	text-decoration:none;
}
h4 {
	text-align: center;
	padding:1rem;
}
`

export default Cuisine