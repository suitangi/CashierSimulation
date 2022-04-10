window.expParam = {

  items: 4, //number of items
  cashiers: [2, 4, 6, 8, 10], //amount of total cashiers
  //cashierNumber: 2, //participant number
  customerTravelTime: 1, //second
  customerWalkAreaWidth: 350, //in pixels
  customerArrivalRate: .2, //per second
  customerFinishRate: .1, //per second
  expTime: 15, //minutes
  practiceTime: 3,
  practiceCashiers: 1,
  practiceArrivalRate: .5,
  practiceCashierNumber: 0,
  bonus: [0.02, 0.04, 0.06, 0.08, 0.1],

  customerImages: ['./img/person3.png', './img/person4.png', './img/person5.png', './img/person6.png'],

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
      question: "<br><strong>Study Number:</strong> IRB22-0131<br><strong>Study Title:</strong> The Effect of Load and Payment on Work Speed of Employees in Queueing Systems<br><strong>Researcher(s):</strong> Amy R. Ward, Yueyang Zhong, Awaid Yasin, Ragavendran Gopalakrishnan<br><strong>Collaborating Institutions:</strong> Queen’s University<br><br><strong>Description:</strong> We are researchers at the University of Chicago doing a research study about the effect of load and payment on work speed of employees in queueing systems. You will be asked to play the role of a cashier in a supermarket setting when customers are waiting for check-out in a line. You need to have a human intelligence task (HIT) approval rate (i.e., proportion of completed tasks) of at least 97%. Participation should take about 20 minutes. Your participation is voluntary.<br><br><strong>Incentives:</strong> You will be paid a participation fee of $0.5 plus performance-based (i.e., the number of completed tasks) compensation. MTurk does not allow for prorated compensation. In the event of an incomplete HIT, you must contact the research team and compensation will be determined based on what was completed and at the researchers' discretion.<br><br>PLEASE NOTE: This study contains attention checks to make sure that participants are finishing the tasks honestly and completely. As long as you read the instructions and complete the tasks, your HIT will be approved. If you fail these checks, your HIT will be rejected.<br><br><strong>Risks and Benefits:</strong> Your participation in this study does not involve any risk to you beyond that of everyday life. You will gain monetary benefit from the experiment.<br><br><strong>Confidentiality:</strong> Your Mechanical Turk Worker ID will be used to distribute payment to you but will not be stored with the research data we collect from you. Please be aware that your MTurk Worker ID can potentially be linked to information about you on your Amazon public profile page, depending on the settings you have for your Amazon profile. We will not be accessing any personally identifying information about you that you may have put on your Amazon public profile page. If you decide to withdraw from this study, any data already collected will be destroyed. Identifiable data will never be shared outside the research team. De-identified information from this study may be used for future research studies or shared with other researchers for future research without your additional informed consent.<br><br><strong>Contacts & Questions:</strong> If you have questions or concerns about the study, you can contact the researchers at Yueyang Zhong (yzhong0@uchicago.edu), Awaid Yasin (awaid@uchicago.edu). <br><br>If you have any questions about your rights as a participant in this research, feel you have been harmed, or wish to discuss other study-related concerns with someone who is not part of the research team, you can contact the University of Chicago Social & Behavioral Sciences Institutional Review Board (IRB) Office by phone at (773) 702-2915, or by email at sbs-irb@uchicago.edu.<br><br><strong>Consent:</strong> Participation is voluntary. Refusal to participate or withdrawing from the research will involve no penalty or loss of benefits to which you might otherwise be entitled.<br>Please print or save a copy of this page for your records.<br><br>",
      choices: ["<b>By clicking this button, you are indicating that you are at least 18 years old, have read and understand this consent form, and you agree to participate in this online research study.</b>"],
      type: 'choice',
      title: 'University of Chicago Online Consent Form for Research Participation'
    }, {
      question: "Welcome to the study! Please read all the instructions carefully. Please work on a <b>laptop or desktop</b> for the study. Please <b>do not</b> exit/navigate away from or refresh the page while you are working on the study.",
      type: 'text',
      title: 'Welcome'
    }, {
      question: "Thank you for your participation today. This task should take 20 minutes in total. Your responses will be kept strictly confidential and will be used to do academic research. We appreciate you taking your time and giving this your full consideration.",
      type: 'text',
      title: 'Task'
    }, {
      question: 'You will be completing a 3-min practice session on the next screen. <br><img src="./img/screen1.png"> <br><br> This is an individual task which will give you practice before you participate in the main session. <br> You will be acting as a cashier in a supermarket. Your customers each have five items in their cart. To process a customer’s order, slide each bar to match the listed price. Once all items are matched correctly, click submit button to move to the next cart. The “Submit Cart” button will remain inactive until you correctly set all five prices. <br> This practice session is to ensure you can do the mechanics of the task on your machine. The screen will auto-advance after 3 minutes.',
      type: 'text',
      title: 'Task'
    },
  ]

}
