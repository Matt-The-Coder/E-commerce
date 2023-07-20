import Navbar from '../Components/Homepage/Navbar.jsx';
import Content from '../Components/Homepage/Content.jsx';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {categoryFetcher, productFetcher} from '../Components/Homepage/Customhooks/ApiFetcher.js';

const Homepage = ()=>{
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    useEffect( ()=> {
        const fetching = async () => {
            const data = await categoryFetcher('/Categories')
            console.log(data)
          if(data.errorMessage){
            console.log('error while getting categories')
          }
          setCategories(data.data)
        }

        fetching()
    }, [])

    const handleCategoryClick = async (id) => {
            const data = await productFetcher(`/products?catid=${id}`)
            if(data.errorMessage){
                console.log('error on retrieving products')
            }
            setProducts(data.data)
    }
    const renderCategories = () =>{
        
        return categories.map((categ)=>{
            return(<Link to={'/'} key={categ.id} id={categ.id} onClick={()=>{handleCategoryClick(categ.id)}}>{categ.title}</Link>)
        })

      }
     const renderProducts = () =>{
       return products.map((product)=>{
        return(<div key={product.id} id={product.id}>{product.title} {product.Message}</div>)
       })
   
      }
    return (
        <div className='Homepage'>
            <Navbar render={renderCategories}/>
            <Content product={renderProducts}/>
        </div>
    )
}
export default Homepage