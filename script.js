/* RADIO SECTION */
const reviews = [
    "La paperella di gomma è diventata il mio strumento di debugging preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. È anche un ottimo antistress per le giornate difficili!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio, fugiat consequuntur perspiciatis doloremque magni alias maxime, et architecto incidunt dolor, sequi sit. Facilis dolorem dicta illo deserunt laborum. Laudantium.",
    "Voluptatum dicta id voluptatibus aliquam corrupti! In distinctio quaerat cum voluptatibus sed quisquam! Culpa, impedit earum numquam blanditiis nam, animi harum eum nulla soluta voluptatem similique accusamus eaque non enim.",
    "Voluptatum dicta id voluptatibus aliquam corrupti! In distinctio quaerat cum voluptatibus sed quisquam! Culpa, impedit earum numquam blanditiis nam, animi harum eum nulla soluta voluptatem similique accusamus eaque non enim."

]

const reviewersNames = [
    "David William - Feb 22, 2023",
    "Arthur Lorem - Jan 16, 2024",
    "Jacob Ipsum - Aug 26, 2022",
    "Martha Dolor - March 8, 2021"
]

const radios = document.querySelectorAll('input[name="flexRadioDefault"]');
const reviewText = document.getElementById("reviewText");
const reviewerName = document.getElementById("reviewerName");

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        const index = parseInt(radio.value);
        reviewText.textContent = reviews[index];
        reviewerName.textContent = reviewersNames[index];
    });
});

document.getElementById("radio1").checked = true;
reviewText.textContent = reviews[0];
reviewerName.textContent = reviewersNames[0];

/* COLLECTION SECTION    */

const duckCollection = [
    {
        img: './fromDesigner/imgs/product-item1.png',
        price: '$15',
    },
    {
        img: './fromDesigner/imgs/product-item2.png',
        price: '$24.99',
    },
    {
        img: './fromDesigner/imgs/product-item3.png',
        price: '$69'
    }
]

const productContainer = document.getElementById("product-container");

duckCollection.forEach(product => {
    const section = document.createElement("div");
    section.className = "text-center mb-4";

    section.innerHTML = `
        <img src="${product.img}" alt="prodotto" class="img-fluid mb-2">
        <h5 class="fw-bold text-success">${product.price}</h5>
        <div class="stars text-center mt-2">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    `;

    productContainer.appendChild(section);
});

/*Sidebar Toggle*/
const toggle = document.getElementById('menu-toggle');
const close = document.getElementById('menu-close');
const sidebar = document.getElementById('sidebar');

toggle.addEventListener('click', () => {
    sidebar.classList.add('show');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    sidebar.classList.remove('show');
    document.body.style.overflow = '';
});
