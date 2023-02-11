//this is were we show our all `flex-wrap`
let main2 = document.querySelector(".section-1-main");
main2.style.cssText="margin-right:50px; "

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        for(let i=0;i<data.products.length;i++){
            console.log("S");
        let card = document.createElement("div");
        main2.appendChild(card);
   
        //adding style to the card

        card.style.cssText="overflow:hidden;"
        let a = document.createElement('img');
        a.src = "https://mobilestube.com/wp-content/uploads/2022/08/iphone-14-front-side.jpg"
        card.appendChild(a);
        a.style.cssText = 'height:120px; width:120px';

        let div_2=document.createElement("div");
        card.appendChild(div_2);

        //here we add the id in the card
        let id=document.createElement("div");
        id.innerHTML="ID: "+data.products[i].id;
        div_2.appendChild(id);
        
        //here we add the title in the card.
        let title=document.createElement("div");
        title.innerHTML="Title: "+data.products[i].title;
        div_2.appendChild(title);

        //here we add the description in the card.
        let des=document.createElement("div");
        des.innerHTML="desription: "+data.products[i].description;
        div_2.appendChild(des);

        //here we add the price in the card.
        let price=document.createElement("div");
        price.innerHTML="price: "+data.products[i].price;
        div_2.appendChild(price);

         //here we add the discount in the card.
         let dis=document.createElement("div");
         dis.innerHTML="discount percentage: "+data.products[i].discountPercentage;
         div_2.appendChild(dis);
        }


        


    });
