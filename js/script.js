const container2 = document.getElementById("container2");
const btn = document.getElementById("btn");

class Car {
    constructor(img, car, model, price, year) {
        this.img = img;
        this.car = car;
        this.model = model;
        this.price = price;
        this.year = year;
    }
};


let tesla = new Car(
    "https://www.motortrend.com/uploads/sites/5/2021/01/Tesla_Model_X_Refresh_2.jpg?fit=around%7C875:492", 
    "Tesla", 
    "1 454 170", 
    "X Plaid", 
    "2023"
);

let bmw = new Car(
    "https://www.bilia.se/siteassets/bilar/bmw/modeller/elbil/bmw-i5/bilia-bmw-i5-m60-isolated-4x3.png", 
    "Bmw", 
    "i5 M60", 
    "1 257 00", 
    "2024"
);

let golf = new Car(
    "https://file.kelleybluebookimages.com/kbb/base/evox/CP/51700/2024-Volkswagen-Golf%20R-front_51700_032_2400x1800_0Q0Q.png", 
    "Volkswagen", 
    "Golf R", 
    "556 900", 
    "2023"
);

let mercedes = new Car(
    "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy/auto-client/bab5665a7d7cb8ba5fd25004db675050/eqe.png", 
    "Mercedes", 
    "eqe", 
    "699 000", 
    "2023"
);

let id4 = new Car(
    "https://media.autoweek.nl/m/y7ryoeyb4tuv_800.jpg", 
    "Volkswagen", 
    "id4", 
    "564 452", 
    "2023"
);

let id5 = new Car(
    "https://www.ezoomed.ie/wp-content/uploads/2021/12/EV-1.jpg", 
    "Volkswagen", 
    "id5", 
    "840 422", 
    "2023"
);

let polestar = new Car(
    "https://d38ivru2h7do4x.cloudfront.net/app/uploads/2023/02/polestate-2-no-background.png", 
    "Polestar", 
    "2", 
    "890 332", 
    "2021"
);

let audi = new Car(
    "https://images.carprices.com/pricebooks_data/usa/colorized/2023/Audi/View2/S4/3.0_TFSI/8WCS4A_Z7.png", 
    "Audi", 
    "S4", 
    "683 439", 
    "2023"
);

let xpeng = new Car(
    "https://a-cdn.heyxpeng.com/www/public/static/img/p7-p5-2.d61deed0.png", 
    "Xpeng", 
    "p7", 
    "799 900", 
    "2023"
);

let skoda = new Car(
    "https://media.auto.works/630/94e820c1bde1ce3119e7922379afa8c7:aad39ccb0bc384061e13f0a8ec7b9253", 
    "Skoda", 
    "Enyaq", 
    "653 534", 
    "2022"
);

carsGroup = [
    tesla, 
    bmw, 
    golf, 
    mercedes, 
    id4, 
    id5, 
    polestar, 
    audi, 
    xpeng, 
    skoda
]



carsGroup.map((item) => {
    let carImg = document.createElement('img');
    carImg.src = item.img;

    let carName = document.createElement('h2');
    carName.textContent = item.car;

    let carModel = document.createElement('p');
    carModel.textContent = item.model;

    let carPrice = document.createElement('p');
    carPrice.textContent = item.price;

    let carYear = document.createElement('p');
    carYear.textContent = item.year;

    container2.appendChild(carImg);
    container2.appendChild(carName);
    container2.appendChild(carModel);
    container2.appendChild(carPrice);
    container2.appendChild(carYear);
});


