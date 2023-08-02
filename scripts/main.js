const accordions = document.querySelectorAll('.accordion')
accordions.forEach(accordion => { 
  accordion.addEventListener('click', e => {
    accordion.classList.toggle('active')
  })
})



// ----------------------------------------------------------------
// Plants Array
// ----------------------------------------------------------------

const plants = [
  {
    "name": "Fikus Tree",
    "price": 350,
    "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    "image": "plant1.png"
  },
  {
    "name": "White Sprite Succulent",
    "price": 200,
    "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    "image": "plant2.png"
  },
  {
    "name": "Snake Plant",
    "price": 400,
    "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    "image": "plant3.png"
  },
  {
    "name": "Parlour Palm",
    "price": 350,
    "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    "image": "plant4.png"
  },
  {
    "name": "Japanese Maple",
    "price": 1200,
    "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
    "image": "plant5.png"
  },

  {
    "name": "Amaryllis",
    "price": 500,
    "description": "Popular flowering bulbous plant known for its large, trumpet-shaped blooms. It is widely cultivated for its stunning flowers, which come in various colors, including red, white, pink, orange, and bicolor varieties.",
    "image": "Amaryllis.jpeg"
  },
  
  {
    "name": "Bulbs",
    "price": 100,
    "description": "Popular for their delightful and fragrant blooms that appear when the weather is cooler. They are a simple yet effective way to infuse gardens with vibrant colors and pleasant scents, making them a favorite choice for winter landscaping.",
    "image": "Bulbs.jpeg"
  },

  {
    "name": "Clivias",
    "price": 300,
    "description": "Clivias are a beloved choice for winter gardening because of their ability to bloom in the shade during the winter months. Their bright and cheerful flowers bring a sense of warmth and vibrancy to gardens when many other plants are not in bloom.",
    "image": "Clivias.jpeg"
  },

  {
    "name": "Jasmine",
    "price": 150,
    "description": "Winter-flowering shrubs are popular for their ability to add visual interest and sweet fragrance to winter gardens. These shrubs provide a refreshing burst of scent and color during the colder months, enhancing the overall garden experience.",
    "image": "Jasmine.png"
  },

  {
    "name": "Pansies",
    "price": 275,
    "description": "Winter pansies are popular for their resilience and ability to thrive in colder temperatures. They offer a wide range of colors and patterns, and their cheerful faces provide a welcome sight during the winter season, brightening up gardens and container displays.",
    "image": "Pansies.jpeg"
  },

  {
    "name": "Primroses",
    "price": 300,
    "description": "Primroses are popular for their dainty and charming blooms that bring a touch of elegance to winter gardens. They are known for their cold tolerance and ease of cultivation, making them a top choice for adding color and cheer to outdoor spaces during the colder months.",
    "image": "Primrose.jpeg"
  }
];

// ----------------------------------------------------------------
// When the document loads
// ----------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    loadPlants();

}); 

// ----------------------------------------------------------------
// Load all plants
// ----------------------------------------------------------------

function loadPlants() {

    // Load and display all the plants
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      
      console.log(plant);

      // 1: Select plants container and add the current array plant to it
      $("#plantsContainer").append($("#plantCardTemplate").html());

      // 2: Create a varible that contains the most recently added plant card
      let currentChild = $("#plantsContainer").children().eq(i+1);

      // 3: Set the content for the plant card from the plants list
      $(currentChild).find(".card-img-top").attr('src','assets/' + plant.image);
      $(currentChild).find("#nameText").text(plant.name);
      $(currentChild).find("#priceText").text('R' + plant.price);
      $(currentChild).find("#descriptionText").text(plant.description);

      // 4: Hide the description text from the plant card
      $(currentChild).find("#descriptionText").hide();

    }
}

// ----------------------------------------------------------------
// When the plant card is clicked
// ----------------------------------------------------------------

$("#plantsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

})

$(document).ready(function() {
  $(document).on('click', '.remove-btn', function() {
    $(this).closest('tr').remove()
  })
})