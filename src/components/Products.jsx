import { useState } from 'react';
import Heading from './Heading';
import ProductCard from './ProductCard';
import Search from './Search';
import NotFound from './NotFound';

const Products = ({ products }) => {
    const [sortType, setSortType] = useState('')
    const [search, setSearch] = useState('')
    const keyword = search.toLocaleLowerCase()
    const filterProducts = products.filter(item => item.title.toLocaleLowerCase().includes(keyword) || item.category.toLocaleLowerCase().includes(keyword))
    const sortItems = [...filterProducts].sort((a, b) => {
        if (sortType === "low") return a.price-b.price;
        if (sortType === "high") return b.price-a.price;
        return 0
    })

    return (
        <div className='py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Heading subTitle="Featured Products" title="Discover trending gadgets."></Heading>

            <Search sortType={sortType} setSortType={setSortType} search={search} setSearch={setSearch}></Search>
            {
                filterProducts.length > 0 ? <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        sortItems.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div> : <NotFound setSearch={setSearch} search={search}></NotFound>
            }
        </div>
    );
};

export default Products;