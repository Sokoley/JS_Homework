let articles = [
        {
            id: 1,
            title: "JS",
            description: "Описание",
            author: "Mike"
        },
        {
            id: 2,
            title: "PHP",
            description: "Описание",
            author: "Mike"
        },
        {
            id: 3,
            title: "HTML",
            description: "Описание",
            author: "Alex"
        },
        {
            id: 4,
            title: "Базы Данных",
            description: "Описание",
            author: "Peter"
        }
    ];



    function createTable(statya) {
        var table = document.createElement('table');
        table.setAttribute("border", 1);

        let row = table.insertRow();
        let col1 = row.insertCell();
        let col2 = row.insertCell();
        let col3 = row.insertCell();
        let col4 = row.insertCell();

        col1.innerText = 'Id';
        col2.innerText = 'Title';
        col3.innerText = 'Description';
        col4.innerText = 'Author';

        for (let i = 0; i < statya.length; i++) {
            let row = table.insertRow(i+1);
            for (let key in statya[i]) {
                let col = row.insertCell(); 
                col.innerText = statya[i][key];   
            }
        }

        var div = document.getElementById('divTable');
        div.appendChild(table);
}

createTable(articles);

//////////////////////////////////////////////////////////////////
let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: 'pianino.jpg'
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: 'guitar.jpg'
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: 'drum.jpg'
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: 'fluit.jpg'
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: 'harp.jpg'           
        }
    };

    function Main(object) {
        for (let key in object) {
               console.log(object[key].title);
               let title = document.createElement("h2");
               title.innerText = object[key].title;
               title.classList.add("nazv");

               console.log(object[key].img);
               let img = document.createElement("img");
               img.setAttribute("src", "img/" + object[key].img);
               img.classList.add("foto");

               console.log(object[key].price);
               let price = document.createElement("p");
               price.classList.add("cena");
               price.innerText = object[key].price;

               let div = document.createElement('div');
               div.classList.add("blocks");
               div.appendChild(title);
               div.appendChild(img);
               div.appendChild(price);

               let goodsDiv = document.getElementById("goods");
               goodsDiv.appendChild(div);



        }
};

Main(goods);