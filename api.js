const BASE_URL = 'http://localhost:8888/uib';
// http://localhost:8888/phpmyadmin/
let data
const getTodoItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/backendApi.php`);
        const todoItems = response.data;

        console.log(`GET: Here's the list of todos`, todoItems);
        this.data = todoItems;
        return todoItems;
    } catch (errors) {
        console.error(errors);
    }
};

getTodoItems().then(function (arguments){
    console.log(arguments)
    for (const [index, argument] of arguments.entries()) {
        row.insertAdjacentHTML('afterbegin', `<div class="col-md-6">
            <div>id product category: ${argument.products_category_id}</div>
            <div>product category name: ${argument.products_category_name}</div>
            <div>id product: ${argument.products_id}</div>
            <div>product name: ${argument.products_name}</div>
            <div>product price: ${argument.price}</div>
            <div class="col-md-6">
                <button onclick="updateData(${index})">edit</button>
            </div>
            <div class="col-md-6">
                <button>delete</button>
            </div>
        </div>`);
        // let p = document.createElement('p')
        // p.append(argument)
        // result.push(p);
    }
    // main.append(...result)
})

async function updateData(index){
    this.data[index].products_name = 'apple juce'
    let id = this.data[index].products_id
    const res = await axios.put(`${BASE_URL}/backendApi.php?update_id=${id}`, this.data[index]);
    alert(res.data);
}