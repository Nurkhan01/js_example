const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodoItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
        const todoItems = response.data;

        console.log(`GET: Here's the list of todos`, todoItems);

        return todoItems;
    } catch (errors) {
        console.error(errors);
    }
};

getTodoItems().then(function (arguments){
    // let result = [];
    for (const argument of arguments) {
        let title = argument.title
        let url = BASE_URL+"/todos/"+argument.id
        main.insertAdjacentHTML('afterbegin', `<p style="background-color: ${random_bg_color()}">
        <a href="${url}">${title}</a></p>`);
        // let p = document.createElement('p')
        // p.append(argument)
        // result.push(p);
    }
    // main.append(...result)
})

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    return bgColor
}