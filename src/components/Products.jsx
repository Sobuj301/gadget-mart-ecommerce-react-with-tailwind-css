import { useState } from 'react';
import Heading from './Heading';
import ProductCard from './ProductCard';
import Search from './Search';
import NotFound from './NotFound';

const Products = ({ products }) => {
    console.log(products)
    const [search, setSearch] = useState('')
    const keyword = search.toLocaleLowerCase()
    const filterProducts = products.filter(item => item.title.toLocaleLowerCase().includes(keyword) || item.category.toLocaleLowerCase().includes(keyword))

    return (
        <div className='py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Heading subTitle="Featured Products" title="Discover trending gadgets."></Heading>

            <Search search={search} setSearch={setSearch}></Search>
            {
                filterProducts.length > 0 ? <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        filterProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div> : <NotFound setSearch={setSearch} search={search}></NotFound>
            }
        </div>
    );
};

export default Products;