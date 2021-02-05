
const Catergory = (products, type) => {
    if (type === '') return products;

    return products.filter(item => item.category === type);
}

export default Catergory