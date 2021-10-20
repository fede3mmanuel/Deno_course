import { Product } from "../types.ts"

let products: Product[] = [
    {
        id: "1",
        name: "Product One",
        description: "This is product one",
        price: 29.99
    },
    {
        id: "2",
        name: "Product two",
        description: "This is product two",
        price: 39.99
    },
    {
        id: "3",
        name: "Product three",
        description: "This is product three",
        price: 59.99
    }
];

// @desc Get all products

// @route Get /api/v1/products

const getProducts = ({ response }: {response: any}) => {
    response.body = {
        sucess: true,
        data: products
    }
}

// @desc Get single product

// @route Get /api/v1/products/:id

const getProduct = ({ response }: {response: any}) => {
    response.body = 'get'   
}

// @desc Add a product

// @route post /api/v1/products

const addProduct = ({ response }: {response: any}) => {
    response.body = 'add'
}

// @desc Update product

// @route Put /api/v1/products/:id

const updateProduct = ({ response }: {response: any}) => {
    response.body = 'update'
}

// @desc Delete product

// @route Delete /api/v1/products/:id

const deleteProduct = ({ response }: {response: any}) => {
    response.body = 'delete'
}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }