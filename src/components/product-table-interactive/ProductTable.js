import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const ProductTable = ({ filterText, inStockOnly }) => {

    const rows = []
    let lastCategory = null

    let filteredProducts = PRODUCTS

    if (filterText) {
        filteredProducts = filteredProducts.filter(product => product.name.includes(filterText))
    }
    if (inStockOnly) {
        filteredProducts = filteredProducts.filter(product => product.stocked === true)
    }

    filteredProducts.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
        }
        rows.push(<ProductRow product={product} key={product.name} />)
        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )

}
export default ProductTable
