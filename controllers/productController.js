const products = [
    {
        "id": "MACBOOKPRO",
        "name": "Macbook Pro",
        "manufacturer": "Apple",
        "price": 1299,
        "stock": 32,
        "options": [
            "Intel Core i5",
            "Retina Display",
            "Long life battery"
        ]
    }, {
        "id": "MACBOOKAIR",
        "name": "Macbook Pro Air",
        "manufacturer": "Apple",
        "price": 1099.99,
        "ultrabook": true,
        "stock": 112,
        "options": [
            "Intel Core i7",
            "SSD",
            "Long life battery"
        ]
    }, {
        "id": "LENOVOX230",
        "name": "Thinkpad X230",
        "manufacturer": "Lenovo",
        "price": 1099.99,
        "ultrabook": true,
        "stock": 0,
        "options": [
            "Intel Core i5",
            "SSD",
            "Long life battery"
        ]
    }
]

const getAll = (req, res) => {
    return res.json(products);
}

const getOne = (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id == id);

    if (!product) {
        return res.status(404).json({
            "error": "Product not found"
        })
    }

    return res.json(product);
}

const getPriceByProductQt = (req, res) => {
    const { id, qt } = req.params;
    const quantity = parseInt(qt);
    const product = products.find(product => product.id == id);

    if (!product) {
        return res.status(404).json({
            "error": "Product not found"
        })
    }

    if (isNaN(quantity)) {
        return res.status(400).json({
            "error": "quantity must be a number"
        })
    }

    return res.json({
        id,
        qt,
        "unit_price": product.price,
        "total_price": product.price * quantity
    })
}

const getProductsByStock = (req, res) => {
    const qt = parseInt(req.params.qt);

    if (isNaN(qt)) {
        return res.status(400).json({
            "error": "quantity must be a number"
        })
    }

    const filteredProducts = products.filter(product => product.stock >= qt);

    return res.json(filteredProducts);
}


module.exports = {
    getAll,
    getOne,
    getPriceByProductQt,
    getProductsByStock
}