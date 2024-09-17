function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getProductImage(productId) {
    const imageMap = {
        1: './images/patagonia.jpg',
        2: './images/venezia.jpg',
        3: './images/uzbekistan.jpg',
        4: './images/kenya.jpg',
        5: './images/piemonte.jpg',
        6: './images/chianti.jpg',
        7: './images/thailandia.jpg',
        8: './images/oman.jpg',
        9: './images/irlanda.jpg',
        10: './images/provenza.jpg',
        11: './images/hanami.jpg',
        12: './images/capri.jpg',
        13: './images/islanda.jpg',
        14: './images/cuba.jpg',
        15: './images/egitto.jpg',
        16: './images/california.jpg',
        17: './images/australia.jpg',
        18: './images/cappadocia.jpg',
        19: './images/lisbona.jpg',
        20: './images/dolomiti.jpg',
        21: './images/nuovazelanda.jpg',
        22: './images/cina.jpg',
        23: './images/filippine.jpg',
        24: './images/newyork.jpg',
        25: './images/maldive.jpg'
    };

    return imageMap[productId] || './images/viaggio.jpg';
};

function getProductDescription(productId) {
    const descriptionMap = {
        1: 'Tra tango e natura selvaggia: una opportunità unica di scoprire uno dei luoghi più iconici del Sudamerica. Viaggerai letteralmente ai confini della Terra, tra le sconfinate pampa e le vette innevate.',
        2: 'Per secoli tra calli e campielli l\'uomo ha fatto la storia di arti e mestieri. Se l\'artigianato è la vostra passione inoltratevi nel meandro cittadino alla scoperta di piccoli laboratori e botteghe tradizionali.',
        3: 'Il viaggio si snoda sulle tracce di carovane, leggende e antiche civiltà. Tra imponenti moschee, vivaci bazar e minareti, ricordi e leggende, un viaggio lungo la via più famosa al mondo ci porta indietro nel tempo a un\'epoca mitologica.',
        4: 'Nella culla della vita, nel cuore dell\'Africa: esplorerai parchi nazionali immensi, seguendo il ritmo della natura, svegliandoti presto e addormentandoti sotto un tetto di stelle.',
        5: 'Scoprirai il territorio piemontese al ritmo del pedale così da assaporare scorci insoliti. Un viaggio lento e a contatto con la natura, tra i meli in fiore, residenze sabaude e fiumi.',
        6: 'Culla di antiche tradizioni vinicole, di una cultura gastronomica fatta d\'ingredienti semplici e rustici: un tour indimenticabile da fare almeno una volta.',
        7: 'Amanti della natura, della cultura locale e giusto di un pizzico di divertimento? Allora questo itinerario fa per voi. Percorremo i sentieri meno battuti di questo meraviglioso paese del Sud Est asiatico.',
        8: 'Profumi inebrianti, paesaggi di sconfinata bellezza e accoglienza calorosa: un viaggio da vivere a 360° per scoprire questa terra dalla storia millenaria.',
        9: 'È nella terra dei Celti che Halloween affonda le proprie antichissime radici: corrisponde infatti a Samhain, il capodanno celtico! Spettacolari celebrazioni, dimore abbandonate, scogliere imponenti e verdi prati ti aspettano!',
        10: 'Luoghi d\'ispirazione, di arte e poesia, ricchi di scorci pittoreschi, profumi e colori. Una terra che con certezza farà colpo grazie ai suoi graziosi paesini medievali, i campi di lavanda e i sentieri tra i vigneti.',
        11: 'Hai sempre sognato di poter ammirare la fioritura dei ciliegi? In questo viaggio, tra tradizione e modernità, toccheremo le principali città, Tokyo, Kyoto, Osaka e Hiroshima, dormiremo in un ryokan e parteciperemo alla cerimonia del tè.',
        12: 'Famosa per il glamour delle sue estati, tutti meritano di visitarla almeno una volta nella vita: grotte mozzafiato, pendii di agrumeti e rovine romane, in una cornice blu intensa.',
        13: 'I colori e le sfumature di questa terra remota vi stupiranno: spiagge nere, cascate, prati verdi infiniti e ghiacciai imponenti. Zaino in spalla e parti al ritmo dell\'avventura!',
        14: 'Spiagge bianchissime, ritmi sensuali e allegria contagiosa: Cuba è più di una destinazione, è un\'emozione che accende l\'anima. No, Jack Sparrow non è incluso! Ma la degustaizone del rum sì.',
        15: 'Alla scoperta di una delle più antiche civiltà del mondo e delle testimonianze del suo splendore: esploreremo piramidi, tombe e necropoli, sopravvissute al lento scorrere del tempo per arrivare fino a noi.',
        16: 'Il leggendario tour della West Coast! Nel puro spirito di avventura e libertà, viaggeremo su quattro ruote, attraversando città e luoghi iconici, ammirando paesaggi incredibili e caldi tramonti.',
        17: 'Barriera corallina, paesaggi rosso fuoco, animali unici e architetture moderne si alternano per creare uno scenario da sogno e regalare un\'esperienza destinata a restare nel cuore.',
        18: 'Un assaggio della Turchia con queste mete imperdibili: Istanbul con la sua anima multiforme sospesa tra occidente e oriente e, in mongolfiera, la fiabesca Cappadocia e i suoi misteriosi paesaggi.',
        19: 'Doppia tappa per farvi innamorare di questo Paese che si affaccia sul mar Atlantico! Tra degustazioni in cantina, un giro sul tram 28 e un tramonto incantevole al Cristo Rei entreremo nella cultura locale e nella storia secolare.',
        20: 'Gambe in spalla per un\'escursione sulle vette alpine, tra placidi specchi dacqua e sentieri di natura incontaminata. Non mancheranno tappe culinarie in agriturismi e rifugi per degustare i prodotti locali.',
        21: 'Una terra inesplorata, selvaggia e misteriosa, divenuta famosa per aver ambientato i romanzi di Tolkien. Un luogo dove realtà e immaginazione si mescolano dando vita ad un nuovo mondo fatto di paesaggi e scenari indimenticabili.',
        22: 'Pechino, Xi\'An e Shangai: tre scrigni preziosi custodi di una civiltà millenaria e meravigliosa. Un viaggio alla scoperta della ricco patrimonio storico, artistico e culturale dell\'Impero Proibito.',
        23: 'Alla scoperta di due tra le più belle e famose isole. I nostri occhi saranno rapiti dalla bellezza dei paesaggi: la lussureggiante vegetazione, le spiagge paradisiache e il blu del mare saranno con noi per tutto il viaggio.',
        24: 'Da dove partire per scoprire gli Stati Uniti, se non da un viaggio a New York? La Grande Mela non aspetta altro che essere morsa! Ci immergeremo nell\'atmosfera di questa città che sembra sempre essere un passo avanti al resto del mondo.',
        25: 'Una vacanza alle Maldive è il modo migliore per abbandonare lo stress, godersi i panorami da cartolina e scoprire un mondo subacqueo straordinario. Un viaggio di assoluto relax per sentirsi in paradiso.',
    };

    return descriptionMap[productId] || 'Pront* per questo nuovo viaggio? Sarà fantastico e ricco di esperienze!';
};

//aggiornamento prodotti
function updateProductDiv(product, productDiv) {
    //const productImage = getProductImage(product.id);
    //const productDescription = getProductDescription(product.id);

    const imageInput = document.getElementById('image');
    const productImage = imageInput && imageInput.files.length > 0
        ? URL.createObjectURL(imageInput.files[0])
        : getProductImage(product.id);

    const descriptionInput = document.getElementById('description').value;
    const productDescription = descriptionInput && descriptionInput.trim() !== ""
        ? descriptionInput
        : getProductDescription(product.id);
    
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <span>${capitalizeFirstLetter(product.destination)}</span>
        <img src=${productImage} class="pic"/>
        <p>${productDescription}</p>
        <span style="margin: 0.5rem 0;">Guida locale: ${product.localGuide ? 
            `<img src="./icons/checked.png" alt="check" class='icon'/>` : 
            `<img src="./icons/unchecked.png" alt="uncheck" class='icon'/>`}
        </span>
        <div class="containerBtn" style="margin: 0.5rem 0;">
            <div class="scoreDiv" data-title="Natura e avventura">
                <img src='./icons/nature.png' class="scoreIcon"/>
                <span>${product.scoreNature}%</span>
            </div>
            <div class="scoreDiv" data-title="Chill & Relax">
                <img src='./icons/relax.png' class="scoreIcon"/>
                <span>${product.scoreRelax}%</span>
            </div>
            <div class="scoreDiv" data-title="Party e movida">
                <img src='./icons/party.png' class="scoreIcon"/>
                <span>${product.scoreParty}%</span>
            </div>
            <div class="scoreDiv" data-title="Monumenti e siti storici">
                <img src='./icons/history.png' class="scoreIcon"/>
                <span>${product.scoreHistory}%</span>
            </div>
            <div class="scoreDiv" data-title="Città e cultura">
                <img src='./icons/city.png' class="scoreIcon"/>
                <span>${product.scoreCity}%</span>
            </div>
        </div>
        <div class="containerBtn" style="align-items: flex-end;">
            <div class="containerBtn" style="width: 60px;">
                <button class='delete iconBtn' style='margin:0'><img alt='Delete' src='./delete.png'/></button>
                <button class='edit iconBtn' style='margin:0'><img alt='Edit' src='./edit.png'/></button>
            </div>
            <span class='price'>${product.price}€</span>
        </div>
    `;

    const deleteBtn = productDiv.querySelector('.delete');
    const editBtn = productDiv.querySelector('.edit');
    
    deleteBtn.addEventListener('click', function() {
        deleteProduct(product.id, productDiv);
    });
    editBtn.addEventListener('click', function() {
        editProduct(product);
    });

    //popup
    const scoreDivs = productDiv.querySelectorAll('.scoreDiv');

    scoreDivs.forEach(scoreDiv => {
        const title = scoreDiv.getAttribute('data-title');
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = title;
        popup.style.display = 'none';
        scoreDiv.appendChild(popup);

        scoreDiv.addEventListener('mouseover', function() {
            popup.style.display = 'block';
        });
        scoreDiv.addEventListener('mouseout', function() {
            popup.style.display = 'none';
        });
    });
};


//aggiungi prodotto
function addProduct(product){
    const productDiv = document.createElement('div');
    productDiv.classList.add('productDiv');
    productDiv.dataset.productId = product.id; 

    updateProductDiv(product, productDiv);
    registeredProducts.appendChild(productDiv);
};

//cancella prodotto
function deleteProduct(productId, productDiv) {
    fetch(`/orizon/api/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        productDiv.remove(data);
    })
    .catch(error => {
        console.error('Error deleting product:', error);
    });
};

//modifica prodotto
function editProduct(product) {
    const productIdInput = document.createElement('input');
    const nameInput = document.getElementById('name');
    const destinationInput = document.getElementById('destination');
    
    //const descriptionInput = document.getElementById('description');
    //const imageInput = document.getElementById('image');

    const priceInput = document.getElementById('price');
    const guideInput = document.getElementById('localGuide');

    const scoreNatureInput = document.getElementById('scoreNature');
    const scoreRelaxInput = document.getElementById('scoreRelax');
    const scorePartyInput = document.getElementById('scoreParty');
    const scoreHistoryInput = document.getElementById('scoreHistory');
    const scoreCityInput = document.getElementById('scoreCity');
    productIdInput.type = 'hidden';
    productIdInput.id = 'productId';
    productIdInput.value = product.id;
    nameInput.value = product.name;
    destinationInput.value = product.destination;

    //descriptionInput.value = product.description;
    //imageInput.value = product.image;

    priceInput.value = product.price;
    guideInput.checked = product.localGuide;
    scoreNatureInput.value = product.scoreNature;
    scoreRelaxInput.value = product.scoreRelax;
    scorePartyInput.value = product.scoreParty;
    scoreHistoryInput.value = product.scoreHistory;
    scoreCityInput.value = product.scoreCity;
    
    productForm.appendChild(productIdInput);
    if (productForm.style.display === 'none' || productForm.style.display === '') {
        productForm.style.display = 'block';
        toggleIconForm.src = './icons/arrow-up.png';
    }
    productForm.scrollIntoView({ behavior: 'smooth' });
};

export {addProduct, deleteProduct, editProduct, updateProductDiv};