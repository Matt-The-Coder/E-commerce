
const baseURL = 'http://localhost:3000'
const categoryFetcher = async (url) =>{
    const responseObjectCategory = {
        errorMessage: '',
        data: []
    }
  try {
    const data = await fetch(baseURL + url)
    const result = await data.json()
    responseObjectCategory.errorMessage = ''
    responseObjectCategory.data = result
  } catch (error) {
    responseObjectCategory.errorMessage = error
  } 

  return responseObjectCategory
   
}

const productFetcher = async (url) =>{
    const responseObjectProduct= {
        errorMessage: '',
        data: []
    }

    try {
        const product = await fetch(baseURL + url)
       const data = await product.json()
       responseObjectProduct.errorMessage = ''
       responseObjectProduct.data = data
     
    } catch (error) {
        responseObjectProduct.errorMessage = error
    }

    return responseObjectProduct
    
}
export {categoryFetcher, productFetcher}
