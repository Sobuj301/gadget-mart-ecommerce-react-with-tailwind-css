const getCartFromStorage = () => {
   const localData = localStorage.getItem('cart')
  return localData ? JSON.parse(localData) : []
}


export { getCartFromStorage }

