/* INITIALIZATION */
window.onload = function () {
    document.body.className = '';
}
window.ontouchmove = function () {
    return false;
}
window.onorientationchange = function () {
    document.body.scrollTop = 0;
}



/* BG ANIMATION
https://maninak.github.io
*/
setInterval(function () {
    requestAnimationFrame(updateGradient);
}, 30);

let colors = new Array(
    [89, 97, 100],
    [83, 120, 149],
    [232, 140, 62],
    [106, 145, 129],
    [60, 21, 24],
    [173, 43, 43],
    [151, 153, 19],
    [88, 140, 57],
    [49, 135, 118]
);

let step = 0;
// color table indices for:
// current color left
// next color left
// current color right
// next color right
let colorIndices = [8, 7, 6, 2];

// transition speed
let gradientSpeed = 0.0075;

function updateGradient() {
    let c0_0 = colors[colorIndices[0]];
    let c0_1 = colors[colorIndices[1]];
    let c1_0 = colors[colorIndices[2]];
    let c1_1 = colors[colorIndices[3]];

    let istep = 1 - step;
    let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    let color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    let gradientEl = document.getElementsByClassName("gradient")[0];

    gradientEl.style.background = "linear-gradient(-45deg, " + color1 + " , " + color2 + ") scroll";

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;

        // mark currently used colors to be avoided
        var colorIndicesToAvoid = [colorIndices[1], colorIndices[3]];

        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        colorIndices[1] = pickColor(colors, colorIndicesToAvoid);
        colorIndices[3] = pickColor(colors, colorIndicesToAvoid);
    }
}

//pick two new target color indices
//do not pick the same as the current one
function pickColor(colors, colorIndicesToAvoid) {
    let newColorIndex;

    do {
        newColorIndex = (Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    } while (newColorIndex in colorIndicesToAvoid); // don't pick a color we're told to avoid

    return newColorIndex;
}

// Cards
const cards = [{
    "img_url": "img/idt.svg",
    "title": "Research platform for analyzing digital transformation projects",
    "description": "<p>The primary goal of this project was to study the current and ongoing digital transformation of organizations. First, we identified crucial success and failure factors of digital transformation initiatives. We used data mining to determine their empirical significance and uncover hidden relationships. Second, we conducted a comprehensive network analysis designed to examine corporate collaboration on digital transformation activities. We also created a software package in Python to decrease the barriers to performing the same analysis steps in the future. Finally, we designed and implemented an extensible software prototype capable of collecting, analyzing and organizing information on digital transformation projects.</p><p>The prototype was made specifically for the <a href=\"https://www.i17.in.tum.de/home/\">Chair of Information Systems</a> at the Technical University in Munich.</p>",
    "background": "repeating-radial-gradient(circle, #26687F, #26687F 10px, #286D84 10px, #286D84 20px)",
    "tags": [
        "University",
        "Prototype",
        "Digital Transformation",
        "Success Factors",
        "Holistic Analysis",
        "Value Network",
        "Platform",
        "Python",
        "sklearn",
        "NetworkX",
        "NodeJS",
        "JavaScript"
    ],
    "pictures": [
        "img/pictures/idt1.png",
        "img/pictures/idt2.png",
        "img/pictures/idt3.png",
        "img/pictures/idt4.png",
        "img/pictures/idt5.png"
    ],
    "videos": [],
    "url": "",
    "category": "Master's Capstone",
    "tab": "projects"
}, {
    "img_url": "img/saphana.png",
    "title": "Native SAP HANA application for detecting fraud activity in ERP data",
    "description": "<p>The objective of this work was investigation of occupational fraud activity in P2P business data and implementation of a prototype for its detection - a comprehensive tool dedicated for fraud investigators and forensic accountants. We applied a red-flag based approach to detect fraudulent patterns once fraud prevention has failed. The prototype leverages the power of SAP HANA to process large volumes of ERP data blazingly fast. In addition to processing capabilities, the tool offers a web interface with a rich, customizable UI.</p><p>The prototype was made in collaboration with <a href=\"https://www.i17.in.tum.de/en/research/projects/current-projects/sap-university-competence-center-ucc/\">SAP UCC</a>.</p>",
    "background": "repeating-linear-gradient(to bottom, #3168AB, #3168AB 10px, #336EB3 10px, #336EB3 20px)",
    "tags": [
        "University",
        "Prototype",
        "Fraud Detection",
        "Red Flags",
        "P2P Process",
        "In-Memory Database",
        "SAP HANA",
        "SAP ERP",
        "SQLScript",
        "XSJS",
        "SAPUI5",
        "JavaScript"
    ],
    "pictures": [
        "img/pictures/hana1.png",
        "img/pictures/hana2.png",
        "img/pictures/hana3.png"
    ],
    "videos": [],
    "url": "",
    "category": "Bachelor's Capstone",
    "tab": "projects"
}, {
    "img_url": "img/zeissimt.png",
    "title": "Mobile application for connecting Zeiss with its customers",
    "description": "<p>Zeiss IMT is an iOS application prototype which aims to facilitate the communication and interaction between Zeiss Metrology centers and their potential customers. The project life cycle was managed with Agile techniques (Scrum) and backed by communicating continuously to clients. The process included object-oriented modeling and system design as well as the realization of graphical UIs, usability testing, continuous integration and delivery. The responsibilities of mine also included server-side development and release management.</p>",
    "background": "white",
    "tags": [
        "iOS App",
        "Scrum",
        "Prototype",
        "Swift",
        "Backend",
        "NodeJS",
        "JavaScript"
    ],
    "pictures": [],
    "videos": [{
        "video": "https://www.youtube.com/embed/8wqAjsUedyg",
        "img": "img/pictures/zeiss.png"
    }],
    "url": "",
    "category": "Corporate Project",
    "tab": "projects"
}, {
    "img_url": "img/vectorbt.png",
    "title": "Python library for backtesting and analyzing trading strategies at scale",
    "description": "<p>vectorbt is a next-generation backtesting library for Python that applies various backtesting and data science techniques to technical analysis. The way it works is by representing trading data — from time series to order records — as nd-arrays, and processing them using NumPy and Numba. This in turn enables use cases such as blazingly fast hyperparameter optimization, which is otherwise mainly done using distributed and cloud computing. Another advantage is integration of Plotly and ipywidgets to display interactive charts and dashboards right in the Jupyter notebook.</p>",
    "background": "#384355",
    "tags": [
        "Cryptocurrency",
        "Trading",
        "Backtesting",
        "Optimization",
        "Python",
        "NumPy"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://github.com/polakowo/vectorbt",
    "category": "Open Source Project",
    "tab": "projects"
}, {
    "img_url": "img/gpt2bot.svg",
    "title": "Your new Telegram buddy based on transformers",
    "description": "<p>gpt2bot is a multi-turn Telegram chatbot based on transformers. In December 2019, Microsoft released a model called DialoGPT, which has been trained on gigabytes of Reddit discussions. Shortly after, I built a Telegram chatbot around it, so everyone could run a Colab notebook and start talking to his new virtual buddy in Telegram.</p>",
    "background": "#EF6444",
    "tags": [
        "AI",
        "Transformers",
        "GPT-2",
        "DialoGPT",
        "Chatbot",
        "Telegram"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://github.com/polakowo/gpt2bot",
    "category": "Open Source Project",
    "tab": "projects"
}, {
    "img_url": "img/datadocs.svg",
    "title": "Bullet points from my journey into Data Science & Engineering",
    "description": "<p>The information on data science and machine learning grows every hour, with both theory and best practices being distributed over many websites, online books, and lengthy Medium articles. To overcome hurdles of constant Googling and to keep an overview, I created an open-source documentation that organizes knowledge in a most efficient and intuitive manner - bullet points. The website is based on <a href=\"https://github.com/facebook/Docusaurus\">Facebook's Docusaurus</a> and allows for search, collaboration and knowledge sharing.</p>",
    "background": "white",
    "tags": [
        "Documentation",
        "Data Science",
        "Data Engineering",
        "Cloud Computing"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://polakowo.github.io/datadocs/",
    "category": "Open Source Project",
    "tab": "projects"
}, {
    "img_url": "img/yelp-3nf.svg",
    "title": "Data pipeline with Airflow that transforms and loads gigs of Yelp data into Redshift",
    "description": "<p>The designed data pipeline translates the non-relational Yelp dataset distributed over JSON files in Amazon S3 bucket, into a 3NF-normalized dataset stored on Amazon Redshift. The resulting schema ensures data consistency and referential integrity across tables, and is meant to be the source of truth for analytical queries and BI tools. Additionally, the data was enriched with demographics and weather data coming from third-party data sources.</p>",
    "background": "linear-gradient(to right, #485563, #29323c);",
    "tags": [
        "Cloud",
        "Data Warehouse",
        "Apache Airflow",
        "Apache Spark",
        "Amazon Redshift",
        "Amazon S3",
        "Python"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://github.com/polakowo/yelp-3nf",
    "category": "Capstone Project",
    "tab": "projects"
}, {
    "img_url": "img/mlprojects.svg",
    "title": "Collection of machine learning projects and Kaggle competitions",
    "description": "<p>While taking MOOCs, I completed a set of personal machine learning projects to gain hands-on experience in ML. This collection comprises of various topics: from forecasting sales to image segmentation. Most of the projects are based on former Kaggle competitions for validation reasons. Some projects, such as <a href=\"https://github.com/polakowo/mlprojects/tree/master/1c-sales-prediction\">Forecasting monthly 1C sales</a>, are result of in-class competitions, where all baselines have been beaten.</p>",
    "background": "linear-gradient(to right, #e0eafc, #cfdef3);",
    "tags": [
        "Machine Learning",
        "Deep Learning",
        "Python",
        "fastai",
        "PyTorch",
        "TensorFlow"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://github.com/polakowo/mlprojects",
    "category": "Personal Projects",
    "tab": "projects"
}, {
    "img_url": "img/gtd-analysis.png",
    "title": "Building interactive EDA tools for the Global Terrorism Database",
    "description": "<p>The scope of this project was to provide dynamic visualizations with D3.js to identify and highlight hidden patterns of terrorist attacks around the world. After carefully choosing data preprocessing steps and building an efficient front-end logic, I were able to serve a lot of diverse data and display rich animations, without sacrificing responsiveness.</p>",
    "background": "repeating-linear-gradient(-45deg, #FDE457, #FDE457 20px, #FDDE4C 20px, #FDDE4C 40px)",
    "tags": [
        "Terrorism",
        "Data Analysis",
        "Visualization",
        "Python",
        "sklearn",
        "JavaScript",
        "D3.js"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://polakowo.github.io/gtd-analysis/project/",
    "category": "Capstone Project",
    "tab": "projects"
}, {
    "img_url": "img/oscarobber.png",
    "title": "Network and sentiment analysis applied on the IMDB database",
    "description": "<p>The <a href=\"https://www.imdb.com/interfaces/\">IMDb Dataset</a> represents one of the largest internet sources for movies/actors data. I used the data to study the collaboration network of co-star actors. In particular, I assembled an evolving social network by linking actors and science fiction movies together throughout history. After, I proceeded to calculate topological and non-topological metrics from this network, for example, whether actors tend to play in similar movies. Finally, I studied correlation between plots and ratings, extracted important keywords, and performed sentiment analysis on user reviews.</p>",
    "background": "#0B1A2D",
    "tags": [
        "Movies",
        "Actors",
        "Network Analysis",
        "NLP",
        "User Reviews",
        "Python",
        "sklearn",
        "NetworkX",
        "NLTK"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://polakowo.github.io/oscarobber/",
    "category": "Capstone Project",
    "tab": "projects"
}, {
    "img_url": "img/cryptoz.svg",
    "title": "Python library for visualizing and tracking cryptocurrency markets",
    "description": "<p>You might have encountered situations where Bitcoin was outpacing alts after a market-wide correction or where Bitcoin stagnated and alts suddenly boomed. The cryptocurrency market is a complex, dynamic ecosystem, where correlations appear and disappear with time. Most of the standard tools out there lack the ability to visualize such relationships, while observing each coin in isolation brings a little value. That's why I created an open-source Python package with tools such as time-based heatmaps. For example, you can easily compare Bollinger Bands of dozens of coins without having to build ugly line charts.</p>",
    "background": "#FBD249",
    "tags": [
        "Cryptocurrency",
        "Trading",
        "Market",
        "Visualization",
        "Python"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://github.com/polakowo/cryptoz",
    "category": "Open Source Project",
    "tab": "projects"
}, {
    "img_url": "img/gem.svg",
    "title": "Stop Loss, Trailing Stop, or Take Profit? 2 Million Backtests Shed Light",
    "description": "<p>In this article, I utilized large-scale backtesting with vectorbt to explore the performance of the most common stop signals for different cryptocurrencies, time periods, and stop values.</p>",
    "background": "#1F2536",
    "tags": [
        "Trading",
        "Backtesting",
        "Cryptocurrency",
        "Optimization",
        "Stop Loss"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://polakowo.medium.com/stop-loss-trailing-stop-or-take-profit-2-million-backtests-shed-light-dde23bda40be",
    "category": "Medium Article",
    "tab": "articles"
}, {
    "img_url": "img/tum.png",
    "title": "Information Systems at Technical University of Munich",
    "description": "<p>Earned a Bachelor's and Master's Degree in Information Systems after graduating from Technical University of Munich.</p>",
    "background": "white",
    "tags": [
        "Information Systems",
        "Computer Science",
        "Business Analytics"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://www.tum.de/en/",
    "category": "2011 - 2018",
    "tab": "education"
}, {
    "img_url": "img/dtu.jpg",
    "title": "Computer Science at Denmarks Technical University (study abroad)",
    "description": "<p>Spent one year studying Computer and Data Science in Copenhagen within the Erasmus+ Programme.</p>",
    "background": "#F0F0F0",
    "tags": [
        "Computer Science",
        "Data Science"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://www.dtu.dk/",
    "category": "2016 - 2017",
    "tab": "education"
}, {
    "img_url": "img/tub.png",
    "title": "Preparatory Course at Technical University of Berlin",
    "description": "<p>Completed a successful preparation at Technical University of Berlin for technical study programs in Germany.</p>",
    "background": "white",
    "tags": [
        "T Course"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://www.tum.de/en/",
    "category": "2009 - 2010",
    "tab": "education"
}, {
    "img_url": "img/lnu.png",
    "title": "Electrical Engineering at Ivan Franko National University of Lviv",
    "description": "<p>Studied for one year Electrical Engineering at Ivan Franko National University of Lviv.</p>",
    "background": "#04215D",
    "tags": [
        "Electrical Engineering"
    ],
    "pictures": [],
    "videos": [],
    "url": "https://www.lnu.edu.ua/en/",
    "category": "2008 - 2009",
    "tab": "education"
}]

const generate_card = (item, i) => $(`
    <div class="col-xs-12 col-sm-6 col-lg-4">
        <div class="card mb-4 box-shadow project" data-id="${i}">
            <table style="height: 225px; width: 100%;">
                <tbody>
                    <tr>
                        <td class="align-middle text-center" style="background: ${item.background};">
                            <img class="card-img-top" src="${item.img_url}">
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="card-body">
                <p class="card-text">${item.title}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${item.category}</small>
                </div>
            </div>
        </div>
    </div>
`)
const generate_details = (item, i) => $(`
    <div class="row">
        <div class="col-xs-12 col-lg-8 offset-lg-2">
            <div class="collapse" data-id="${i}">
                <div class="card card-body mb-5">
                    <div class="card-text">
                        <small>Description</small>
                        ${item.description}
                    </div>
                    ${item.tags.length > 0 ? `
                        <small>Tags</small>
                        <p class="card-text">${item.tags.map(tag => `<span class="badge badge-pill badge-light">${tag}</span>`).join(' ')}</p>` 
                    : ''}
                    ${item.pictures.length > 0 ? `
                        <small>Images</small>
                        <div class="container">
                            <div class="row">
                                ${item.pictures.map(path => (`
                                    <div class="col-xs-6 col-sm-4 col-lg-3 mt-2">
                                        <a href="${path}" data-toggle="lightbox" data-gallery="gallery">
                                            <img src="${path}" class="img-fluid img-thumbnail">
                                        </a>
                                    </div>`
                                )).join('')}
                            </div>
                        </div>` 
                    : ``}
                    ${item.videos.length > 0 ? `
                        <small>Videos</small>
                        <div class="container">
                            <div class="row">
                                ${item.videos.map(path => (`
                                    <div class="col-xs-6 col-sm-4 col-lg-3 mt-2">
                                        <a href="${path.video}" data-toggle="lightbox" data-gallery="gallery">
                                            <img src="${path.img}" class="img-fluid img-thumbnail">
                                        </a>
                                    </div>`
                                )).join('')}
                            </div>
                        </div>` 
                    : ``}
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            ${item.url ? `<a href="${item.url}"target="_blank" role="button" 
                            class="btn btn-sm btn-outline-secondary">View</a>` : ``}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`)

function collapse() {
    const id = $(this).data('id')
    const $details = $(`.collapse[data-id="${id}"]`)
    const shown = $details.hasClass('show')

    if ($('.collapse.show').length) {
        $('.collapse.show').on('hidden.bs.collapse', function () {
            $('.collapse').off('hidden.bs.collapse')
            if (!shown) {
                $details.collapse('show')
                $(`.project[data-id!="${id}"]`).css('opacity', 0.3)
            }
        })
        $('.collapse.show').collapse('hide')
        $('.project').css('opacity', 1.0)
    } else {
        $details.collapse('show')
        $(`.project[data-id!="${id}"]`).css('opacity', 0.3)
    }
}

function getBootstrapDeviceSize() {
    return $('#users-device-size').find('div:visible').last().data('id');
}

$(document).ready(function () {
    size = getBootstrapDeviceSize()
    console.log(size)
    everyth = null
    switch (size) {
        case 'xs':
            everyth = 1
            break
        case 'sm':
        case 'md':
            everyth = 2
            break
        case 'lg':
        case 'xl':
            everyth = 3
            break
    }
    let tabNumCards = {
        projects: 0,
        articles: 0,
        education: 0
    };
    let rows = {
        projects: [],
        articles: [],
        education: []
    };
    cards.forEach((item, i) => {
        tabRows = rows[item.tab]
        if (tabNumCards[item.tab] % everyth == 0) {
            tabRows.push($('<div class="row"></div>'))
            $(`#${item.tab}`).append(tabRows[tabRows.length - 1]);
        }
        $currentRow = tabRows[tabRows.length - 1];
        $currentRow.append(generate_card(item, i));
        $currentRow.parent().append(generate_details(item, i));
        $(`.project[data-id="${i}"]`).on("click", collapse);
        tabNumCards[item.tab] += 1;
    })
})

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true,
        showArrows: false
    });
});
