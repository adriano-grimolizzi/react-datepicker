import React, { useState } from 'react'

import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

const FilterableProductTable = () => {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <>            
            <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly} 
            />
            <ProductTable filterText={filterText} inStockOnly={inStockOnly} />
        </>
    )
}

export default FilterableProductTable
