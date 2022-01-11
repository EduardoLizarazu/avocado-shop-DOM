/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
**/

console.log('Happy hacking :)')

const API = "https://platzi-avo.vercel.app/api/avo";

// web api
// Conectarnos al servidor
// Procesar la respuesta y convertir a JSON
// JSON -> Data -> Renderizar info JSON
// window.fetch(API)
//     .then(response => response.json())
//     .then(reponseJson => {
//         const allItems = [];
//         reponseJson.data.forEach(item => {
//             // create image
//             const img = document.createElement("img");
//             // create title
//             const title = document.createElement("h2");
//             // create price
//             const price = document.createElement("div");

//             const container = document.createElement("div")
//             container.append(img, title, price);

//             allItems.push(container);
//         });
//         document.body.append(...allItems);
//     });

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const dataJson = await response.json();
        const allItems = [];
        dataJson.data.forEach(item => {
            // create img
            const img = document.createElement("img"); 
            // create title
            const title = document.createElement("h2"); 
            // create price
            const price = document.createElement("div"); 
            // create container
            const container = document.createElement("div");
            container.append(img, title, price);

            allItems.push(container)
        });
        document.body.append(...allItems)
    } catch (error) {
        console.error(error);
    }
};
fetchData(API);