import axios from "axios";

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

    async getCatalog () {
        // if you want to use the server
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;

        // server not needed
        // return catalog;
    }


}

export default DataService;