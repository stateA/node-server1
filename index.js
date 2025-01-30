const http = require("http");

const server = http.createServer((request, response) =>
{
    console.log(`request received : ${request.url}`);

    if (request.url == "/hello")
    {
        // response.write("<html><header></header><body><h1>Hello world</h1></body></html>");
        response.write('{"Message" : "Hello world"}');
        response.end();
    }
    else if (request.url == "/sentence")
    {
        var nouns = ["Apple", "Squirrel", "Lighthouse", "Elephant", "Piano", "Marble", "Rainbow", "Journey", 
            "Spark", "Mountain", "Table", "Guitar", "Butterfly", "Forest", "Ocean", "Cloud", "Wizard", 
            "Castle", "Detective", "Turtle", "Helicopter", "Volcano", "Robot", "Shadow", "Knight", 
            "Princess", "Sunset", "Telescope", "River", "Notebook", "Dragon", "Light", "Umbrella", "Mirror"];

        var adjectives = ["Happy", "Bright", "Tall", "Shiny", "Brave", "Beautiful", "Quiet", "Loud", "Elegant", "Gentle",
        "Warm", "Cold", "Soft", "Hard", "Sweet", "Bitter", "Smooth", "Rough", "Friendly", "Kind",
        "Loyal", "Energetic", "Lazy", "Friendly", "Bold", "Honest", "Funny", "Creative", "Serene", 
        "Wise", "Generous", "Curious", "Exciting", "Peaceful", "Mysterious", "Clever", "Dynamic"];

        var verbs = ["Run", "Jump", "Write", "Read", "Speak", "Listen", "Eat", "Drink", "Sleep", "Laugh",
        "Think", "Create", "Build", "Destroy", "Play", "Watch", "Sing", "Dance", "Climb", "Travel",
        "Cook", "Clean", "Study", "Teach", "Learn", "Help", "Guide", "Fix", "Drive", "Walk",
        "Work", "Shout", "Whisper", "Explore", "Grow", "Stop", "Start", "Run", "Hide", "Find"];
    
        var verb = verbs[Math.floor(Math.random() * verbs.length)];
        var adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
        var adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
        var noun = nouns[Math.floor(Math.random() * nouns.length)];

        var sentence = `${verb} the ${adj1} ${adj2} ${noun}`;
        response.write(`{"Message" : "${sentence}"}`);
        response.end();
    }
    else
    {
        response.write('{"Message" : "Not found on this server"}');
        response.end();
    }
}
);


if (require.main === module)
{
    server.listen(8046);
    console.log("Listening on port 8046");
}

module.exports = server;
