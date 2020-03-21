const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "48t1s0p1dk0p",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken:
        "ebfe15a70c0eaec620ec9f80291c9859b004e90248bd67d0b657c4d832de01b6"
});

export class ProductsModel {
    async getFromFile(){
        return await fetch('./data.json');
    }

    async getFromApi(){
        return await fetch('http://127.0.0.1:12001/products');
    }

    async getProducts() {
        // always returns promise so we can add .then
        // we can use await until promised is settled and return result
        try {
            // let result = await fetch("products.json");
            // let data = await result.json();
            let contentful = await client.getEntries({
                content_type: "comfyHouseProducts"
            });
            console.log(contentful.items);

            let products = contentful.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            });

            return products;
        } catch (error) {
            console.log(error);
        }
    }
}
