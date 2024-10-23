const originalQuestions = [
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
        answer: "Oxygen"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Diamond", "Quartz", "Steel"],
        answer: "Diamond"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        answer: "Japan"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arctic", "Antarctic", "Gobi"],
        answer: "Antarctic"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Mars", "Mercury", "Earth"],
        answer: "Mercury"
    },
    {
        question: "Who is known as the Father of Modern Physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Pepper", "Onion"],
        answer: "Avocado"
    },
    {
        question: "Which organ is responsible for pumping blood throughout the body?",
        options: ["Liver", "Lungs", "Heart", "Kidneys"],
        answer: "Heart"
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1920"],
        answer: "1912"
    },
    {
        question: "What is the most spoken language in the world?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "Which element is represented by the symbol 'Fe'?",
        options: ["Fluorine", "Iron", "Francium", "Fermium"],
        answer: "Iron"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
        answer: "Alexander Fleming"
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: ["Camel", "Horse", "Elephant", "Donkey"],
        answer: "Camel"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "Skin"
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "New Zealand", "South Africa", "India"],
        answer: "Australia"
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "120°C", "80°C"],
        answer: "100°C"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Nauru", "Malta"],
        answer: "Vatican City"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Venice", "Florence"],
        answer: "Rome"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Saturn"
    },
    {
        question: "Who wrote the 'Iliad' and the 'Odyssey'?",
        options: ["Homer", "Virgil", "Ovid", "Socrates"],
        answer: "Homer"
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
        answer: "Barometer"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        answer: "Yen"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen"
    },
    {
        question: "What is the main ingredient in sushi?",
        options: ["Fish", "Rice", "Seaweed", "Vegetables"],
        answer: "Rice"
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "32°F", "100°F", "100°C"],
        answer: "0°C"
    },
    {
        question: "Which planet is known as the Earth's twin?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Venus"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the hardest natural material on Earth?",
        options: ["Gold", "Diamond", "Emerald", "Ruby"],
        answer: "Diamond"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "What is the main gas found in the sun?",
        options: ["Oxygen", "Carbon Dioxide", "Helium", "Hydrogen"],
        answer: "Hydrogen"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote the famous book '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
        answer: "George Orwell"
    },
    {
        question: "What is the most widely spoken language in Brazil?",
        options: ["Portuguese", "Spanish", "English", "French"],
        answer: "Portuguese"
    },
    {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

export default originalQuestions;
