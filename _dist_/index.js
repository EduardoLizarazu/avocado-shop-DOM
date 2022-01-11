/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
**/


console.log('Happy hacking :)')

const baseURL = "https://platzi-avo.vercel.app";
const API = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector("#app");

// EVENT DELEGATION
// quiero solo el h2
appNode.addEventListener("click", (event) => {
    // cuando obtenemos el target podemos saber cuál elemento hijo del padre fue clicado, por tanto, con una simple condicional puede ver si el elemento clicado es el que yo quiero.
    if (event.target.nodeName === "H2") window.alert("hello");
    
});



const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency : "USD"
    }).format(price)
    return newPrice;
}


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
        const response = await fetch(`${url}/api/avo`);
        const dataJson = await response.json();
        const allItems = [];
        dataJson.data.forEach(item => {
            // create img
            const img = document.createElement("img");
            // img.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"; 
            img.className = "h-40 w-40 rounded-full mx-auto md:mx-0 md:mr-6 my-0 mx-auto"; 
            img.src = `${url}${item.image}`;
            img.style.margin = "0 auto"
            // create title
            const title = document.createElement("h2"); 
            title.className = "text-lg";
            title.textContent = item.name;
            // create price
            const price = document.createElement("div"); 
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price);
            // create container
            const container = document.createElement("div");
            container.className = "flex flex-col justify-center shadow-xl bg-gray-300 rounded-lg h-64 "
            // added to the div container but not yet in the body
            container.append(img, title, price); 
            // depend of the forEach, how mach element we have to put into
            allItems.push(container) 
        });
        appNode.append(...allItems) // added the div 
    } catch (error) {
        console.error(error);
    }
};
fetchData(baseURL);