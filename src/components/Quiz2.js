const quizData = [
    {
      question:
        "Are there any children in tow?",
      a: "Family friendly please", // true
      b: "It's date night.", // false
      c: "No...But who says it's just for kids?", // true
      d: "I'm all by myself.",
      key: "family"
    },
    {
      question:
        'What are we looking to spend today?',
        // $ are actually int 0 - 5 in backend, if they pick 3 dollar signs price must be less than or equal to 3
      a: "$",
      b: "$$",
      c: "$$$",
      d: "$$$$",
      key: "price"
    },
    {
        question:
          "What type of art fancies you?",
          // theater 1, visual art 2, music 3, arch/design 4, film 5
        a: "Theater",
        b: "Visual Art",
        c: "Live Music",
        d: "Architecture & Design",
        key: "category"
      },
    {
      question:
        'Are you feeling musical...literally?',
      a: 'Yes!',
      b: 'It\'s debatable',
      c: "Not today.",
      d: "If I wanted a musical I would have watched Glee.",
      key: "musical"
    },
  
    {
      question:
        'What\'s the vibe of the day"?',
        // happy (1), moody (2), comedy(4), dancey(5), feel-something(3), culturey(6)
      a: 'Sunshine & Smiles',
      b: 'Trigger me/Kim K Crying',
      c: 'Cultured',
      d: 'I need a laugh',
      key: "mood"
    },
    {
      question:
        'Up for a journey?',
      a: "Nah, let's walk.",
      b: "A tiny one, a short cab ride is fine.",
      c: "Heck Yeah, let's take the A to Rockaway!",
      d: "Nope"
    },
];
// ---------------------------------- Questions End ------------------------------------

// ---------------------------------- Fetching ------------------------------------
let allActivities = []

const getArtActivities = () => {
    fetch('http://127.0.0.1:3000/arts')
    // returns promise
    .then(r => r.json())
    //handles fetch promise/return JSON object
    .then(arts=> {
        arts.forEach(activity => {
            allActivities.push(activity)
        })
        return allActivities
    })
}

getArtActivities()


// ---------------------------------- Fetching End ------------------------------------

// ---------------------------------- DOM Elements ------------------------------------
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// ---------------------------------- DOM Elements End ------------------------------------

let currentQuiz = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answersEls.forEach((answersEl) => {
        if (answersEl.checked) {
        answersEl.checked = false;
        }
    });
}

function getSelected() {
    let answer = undefined;
  
    answersEls.forEach((answersEl) => {
      if (answersEl.checked) {
        answer = answersEl.id;
      }
    })
    return answer;
    // console.log(answer)
}

// var colors = ["red",undefined,"","blue",null,"crap"];
// // remove undefined, null, "" and any other crap
// var cleanColors= _.without(colors,undefined,null,"","crap");
// //cleanColors is now ["red","blue"];

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    // console.log(allActivities)
    if (answer) {
       
        if (allActivities.length == 1){
            currentQuiz = 6
        }
        else {
            //--------------------------- FAMILY BOOLEAN LOGIC ----------------------------------
            if ("family" == quizData[currentQuiz].key){
                console.log(answer)
                if (answer == ('a' || 'c')){
                    const a = allActivities.filter(activity => activity.family == true)
                    allActivities = a

                }
                else {
                    const b = allActivities.filter(activity => activity.family == false)
                    allActivities = b
                    
                }
                console.log(allActivities)
            }
            //--------------------------- PRICE LOGIC ----------------------------------
            if ("price" == quizData[currentQuiz].key){
                console.log(answer)
                if (answer == ('a' || 'b')){
                    const c =  allActivities.filter(activity => activity.price !== (0 || 1))
                    allActivities = c
                }
                if (answer == ('c')){
                    const d = allActivities.filter(activity => activity.price !== (2 || 3))
                    allActivities = d
                }
                if (answer == ('d')){
                    const e = allActivities.filter( activity => activity.price !== (4 || 5))
                    allActivities = e
                }
                console.log(allActivities)
            }
            //------------------------------ CATEGORY LOGIC ---------------------------------------
            if ("category" == quizData[currentQuiz].key){
                // console.log(answer)
                // console.log("test",allActivities)
                if (answer == ('a')){
                    const f = allActivities.filter(activity => activity.category_id == (1 || 5))
                    allActivities = f
                }
                if (answer == ('b')){
                    const g = allActivities.filter(activity => activity.category_id == 2)
                    allActivities = g
                }
                if (answer == ('c')){
                    const h = allActivities.filter(activity => activity.category_id == 3)
                    allActivities = h
                }
                if (answer == ('d')){
                    const i = allActivities.filter(activity => activity.category_id == 4)
                    allActivities = i
                }
                console.log(allActivities)
            }
            if ("musical" == quizData[currentQuiz].key){
                console.log(answer)
                if (answer == ('a' || 'b')){
                    const j = allActivities.filter(activity => activity.musical == true)
                    allActivities = j
                    
                }
                else {
                    const k = allActivities.filter(activity => activity.musical == false)
                    allActivities = k
                }
            }
            if ("mood" == quizData[currentQuiz].key){
                console.log(answer)
                if (answer == ('a')){
                    const l = allActivities.filter(activity => activity.mood_id == (1 || 4))
                    allActivities = l
                }
                if (answer == ('b')){
                    const m = allActivities.filter(activity => activity.mood_id == ( 2 || 3))
                    allActivities = m
                }
                if (answer == ('c')){
                    const n = allActivities.filter(activity => activity.mood_id == 6)
                    allActivities = n
                }
                if (answer == ('d')){
                    const o = allActivities.filter(activity => activity.mood_id == (4 || 5))
                    allActivities = o
                }
            }
        }
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        const random = Math.floor(Math.random() * allActivities.length);
        const rand = allActivities[allActivities.length * Math.random() | 0]
        console.log(rand)
        quiz.innerHTML = 
        `<h2>Based on your answers ${rand.name} would be a fantastic way to satisy your artistic cravings today!</h2> 
        
        <button onclick="location.reload()">Reload</button>`;
    }
    console.log("load")
})