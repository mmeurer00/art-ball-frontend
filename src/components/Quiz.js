const quizData = [
    {
      question:
        "What is the HTML tag under which one can write the JavaScript code?",
      a: "<javascript>",
      b: "<scripted>",
      c: "<script>",
      d: "<js>",
      correct: "c"
    },
    {
      question:
        'Choose the correct JavaScript syntax to change the content of the following HTML code. \n \n <h1 id="hello">HelloWorld</h1>',
      a: 'document.getElement("hello").innerHTML="Hello World!";',
      b: 'document.getElementById("hello").innerHTML="Hello World!";',
      c: 'document.getId("hello)="Hello World!";',
      d: 'document.getElementById("hello").innerHTML=Hello World!;',
      correct: "b"
    },
    {
      question:
        'Which of the following is the correct syntax to display "Hello World" in an alert box using JavaScript?',
      a: 'alertbox("Hello World!");',
      b: 'msg("Hello World!");',
      c: 'msgbox("Hello World!");',
      d: 'alert("Hello World!");',
      correct: "d"
    },
  
    {
      question:
        'What is the correct syntax for referring to external script called "script.js"?',
      a: '<script src="script.js">',
      b: '<script href="script.js">',
      c: '<script ref="script.js">',
      d: '<script name="script.js">',
      correct: "a"
    },
    {
      question:
        'Predict the output of the following JavaScript code.\n \n a = 8 + "8"; \n document.write(a); \n',
      a: "16",
      b: "Complication Error",
      c: "88",
      d: "Run Time Error",
      correct: "c"
    },
    {
      question:
        "Predict the output of the following JavaScript code.\n \n let nums [110, 15, 25]; \n let sum = nums[1] + nums.sort()[1]; \n console.log(sum);",
      a: "30",
      b: "40",
      c: "220",
      d: "22",
      correct: "a"
    },
    {
      question:
        "Predict the output of the following JavaScript code.\n \n let a = 10; \n let b = a % 4; \n let c = b / 2 \n let d = a + c;\n \n console.log(a);",
      a: "11",
      b: "undefined",
      c: "30",
      d: "10",
      correct: "d"
    },
    {
      question: "Which of the following is not reserved word in JavaScript?",
      a: "interface",
      b: "throws",
      c: "program",
      d: "short",
      correct: "c"
    }
  ];


class Quiz {

}