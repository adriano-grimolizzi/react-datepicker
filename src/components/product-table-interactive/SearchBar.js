import React from 'react'

const SearchBar = ({ filterText, setFilterText, inStockOnly, setInStockOnly }) => {

    const handleFilterTextChange = event => {
        event.preventDefault()
        setFilterText(event.target.value)
    }

    const handleInStockOnlyChange = event => {
        setInStockOnly(event.target.checked)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange} />
            <p>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleInStockOnlyChange}
                />
                {' '}Only show products in stock
            </p>
        </form>
    )


}


export default SearchBar
