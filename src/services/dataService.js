var catalog = [
    {
        _id: "123456qwer",
        title: "Nutro",
        price: 59.99,
        stock: 15,
        image: "dogFood.jpg",
        category: "Dog Food"
    },
    {
        _id: "654321rewq",
        title: "Nulo",
        price: 69.99,
        stock: 10,
        image: "dogFood.jpg",
        category: "Dog Food"
    },
    {
        _id: "789456yuia",
        title: "Purina",
        price: 49.99,
        stock: 10,
        image: "dogFood.jpg",
        category: "Dog Food"
    },
];

class DataService {

    getCatalog () {
        // do the magic to connect to server
        // and retrieve the catalog

        // return mock data
        return catalog;
    }


}

export default DataService;