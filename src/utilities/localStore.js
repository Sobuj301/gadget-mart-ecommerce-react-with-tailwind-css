const getLocalStoreData = () => {
   const localData = localStorage.getItem('cart')
   if (localData) {
      return JSON.parse(localData)
   }
   else {
      return []
   }
}

const addLocalStoreData = (id) => {
   const preData = getLocalStoreData()
   if (!preData.includes(id)) {
      const updateCart = [...preData, id]
      localStorage.setItem("cart", JSON.stringify(updateCart))
   }
}





export { addLocalStoreData, getLocalStoreData }

