export  const UPDATE_PRODUCT = 'updateProduct'

export  function updateProduct(newProduct){
    return{      
        type:UPDATE_PRODUCT,
        payload:newProduct 
    }
   
}

 