window.expParam = {

  items: 4, //number of items
  cashiers: 4, //amount of total cashiers
  cashierNumber: 2, //participant number
  customerTravelTime: 1, //second
  customerWalkAreaWidth: 350, //in pixels
  customerArrivalRate: .2, //per second
  customerFinishRate: .1, //per second
  expTime: 15, //minutes
  practiceTime: 3,
  practiceCashiers: 1,
  practiceArrivalRate: .5,
  practiceCashierNumber: 0,

  itemset: [
    {
      name: "Chocolate",
      price: 3.5
    }, {
      name: "Soda",
      price: 2.25
    }, {
      name: "Cheese",
      price: 2.5
    }, {
      name: "Cake",
      price: 6.65
    }, {
      name: "Yogurt",
      price: 2.9
    }, {
      name: "Cereal",
      price: 3.75
    }, {
      name: "Bananas",
      price: 2.25
    }, {
      name: "Chips",
      price: 1.75
    }, {
      name: "Tissue",
      price: 5.25
    }
  ],

  postquestions: [{
    question: "What is your gender?",
    choices: ["Male", "Female", "Other"],
    type: 'choice',
    title: 'Gender'
  }, {
    question: "What is your age?",
    placeholder: " ",
    type: 'number',
    min: 18,
    max: 99,
    title: 'Age'
  }, {
    question: "What is yout marital Status?",
    choices: ["Married", "Single", "Widowed", "Divorced"],
    type: 'choice',
    title: 'Marital Status'
  }, {
    question: "How many children do you have?",
    choices: ["None", "One", "Two", "Three", "Four or more"],
    type: 'choice',
    title: 'Children'
  }, {
    question: "What is your highest level of education?",
    choices: ["Elementary, Junior or High school", "Some college", "2 year degree", "4 year degree", "Professional Degree", "Doctorate"],
    type: 'choice',
    title: 'Education'
  }, {
    question: "What is your race?",
    choices: ["Black or African American", "White", "Asian", "Native American or Alaska Native", "Native Hawaiian or other Pacific Islander", "Hispanic"],
    type: 'choice',
    title: 'Race'
  }, {
    question: "Do you use the following devices?",
    choices: ["External mouse", "Touch pad", "Touch Screen", "Other"],
    type: 'choice',
    title: 'External Devices'
  }],
  confirm_popup: {
    title: "Submission Complete!",
    content: "Thank you for completing the experiment!"
  },

  prequestions: [{
      question: "Consent Question",
      choices: ["<b>By clicking this button, you are indicating that you are at least 18 years old, have read and understand this consent form, and you agree to participate in this online research study.</b>"],
      type: 'choice',
      title: 'Study Information'
    }, {
      question: "Welcome to the study! Please read all the instructions carefully. Please work on a <b>laptop or desktop</b> for the study. Please <b>do not</b> exit or refresh the page while you are working on the study.",
      type: 'text',
      title: 'Welcome'
    }, {
      question: "Thank you for your participation today. This task should take 20 minutes in total. Your responses will be kept strictly confidential and will be used to do academic research. We appreciate you taking your time and giving this your full consideration.",
      type: 'text',
      title: 'Task'
    }, {
      question: "This sentence is here to give some instrucctions on the experiment that will happen after you click next. This sentence is here to demonstrate what this instruction box will look like as it makes the entire instruction longer.",
      type: 'text',
      title: 'Task'
    },
  ]

}
