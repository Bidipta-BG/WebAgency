export const schoolQuestions = [
  {
    "id": "Q1",
    "step": 1,
    "industry": "school",
    "question": "What type of educational institution do you run?",
    "inputType": "single-select",
    "options": [
      {
        "id": "school-primary-or-se",
        "label": "School (primary or secondary)"
      },
      {
        "id": "coaching-centre-or-i",
        "label": "Coaching centre or institute"
      },
      {
        "id": "private-tuition",
        "label": "Private tuition"
      },
      {
        "id": "online-coaching-or-e",
        "label": "Online coaching or EdTech"
      },
      {
        "id": "college-or-universit",
        "label": "College or university"
      },
      {
        "id": "skill-development-or",
        "label": "Skill development or vocational training"
      }
    ],
    "required": true,
    "scoring": {
      "online-coaching-or-e": {
        "complexityPoints": 15
      },
      "college-or-universit": {
        "complexityPoints": 25
      },
      "skill-development-or": {
        "complexityPoints": 5
      }
    }
  },
  {
    "id": "Q2",
    "step": 1,
    "industry": "school",
    "question": "How many students are currently enrolled?",
    "inputType": "single-select",
    "options": [
      {
        "id": "fewer-than-50-studen",
        "label": "Fewer than 50 students"
      },
      {
        "id": "50-to-200-students",
        "label": "50 to 200 students"
      },
      {
        "id": "200-to-1-000-student",
        "label": "200 to 1,000 students"
      },
      {
        "id": "more-than-1-000-stud",
        "label": "More than 1,000 students"
      }
    ],
    "required": true,
    "scoring": {
      "50-to-200-students": {
        "complexityPoints": 5
      },
      "200-to-1-000-student": {
        "complexityPoints": 15
      },
      "more-than-1-000-stud": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q3",
    "step": 2,
    "industry": "school",
    "question": "What is the main goal of your website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "get-more-admissions-",
        "label": "📝 Get more admissions and enquiries"
      },
      {
        "id": "provide-online-class",
        "label": "🖥️ Provide online classes or study materials"
      },
      {
        "id": "showcase-results-awa",
        "label": "🏆 Showcase results, awards, and achievements"
      },
      {
        "id": "inform-parents-and-s",
        "label": "📢 Inform parents and students about updates"
      },
      {
        "id": "all-of-the-above",
        "label": "✨ All of the above"
      }
    ],
    "required": true,
    "scoring": {
      "get-more-admissions-": {
        "complexityPoints": 5
      },
      "provide-online-class": {
        "complexityPoints": 20
      },
      "showcase-results-awa": {
        "complexityPoints": 5
      },
      "inform-parents-and-s": {
        "complexityPoints": 5
      },
      "all-of-the-above": {
        "complexityPoints": 25
      }
    }
  },
  {
    "id": "Q4",
    "step": 2,
    "industry": "school",
    "question": "How do students or parents currently find you?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "word-of-mouth",
        "label": "Word of mouth"
      },
      {
        "id": "social-media",
        "label": "Social media"
      },
      {
        "id": "google-search",
        "label": "Google search"
      },
      {
        "id": "local-newspaper-or-h",
        "label": "Local newspaper or hoardings"
      },
      {
        "id": "direct-walk-in",
        "label": "Direct walk-in"
      }
    ],
    "required": true,
    "scoring": {}
  },
  {
    "id": "Q5",
    "step": 2,
    "industry": "school",
    "question": "What should visitors be able to do on your website?",
    "inputType": "multi-select",
    "options": [
      {
        "id": "submit-an-admission-",
        "label": "📝 Submit an admission or enquiry form"
      },
      {
        "id": "download-a-prospectu",
        "label": "📥 Download a prospectus or brochure"
      },
      {
        "id": "attend-or-access-onl",
        "label": "🖥️ Attend or access online classes"
      },
      {
        "id": "view-the-academic-ca",
        "label": "📅 View the academic calendar and timetable"
      },
      {
        "id": "check-exam-results",
        "label": "📊 Check exam results"
      },
      {
        "id": "view-faculty-or-teac",
        "label": "👩‍🏫 View faculty or teacher profiles"
      },
      {
        "id": "pay-fees-online",
        "label": "💳 Pay fees online"
      }
    ],
    "required": true,
    "scoring": {
      "submit-an-admission-": {
        "complexityPoints": 10
      },
      "download-a-prospectu": {
        "complexityPoints": 5
      },
      "attend-or-access-onl": {
        "complexityPoints": 20
      },
      "view-the-academic-ca": {
        "complexityPoints": 5
      },
      "check-exam-results": {
        "complexityPoints": 15
      },
      "view-faculty-or-teac": {
        "complexityPoints": 5
      },
      "pay-fees-online": {
        "complexityPoints": 20
      }
    }
  },
  {
    "id": "Q6",
    "step": 2,
    "industry": "school",
    "question": "How do you currently conduct classes?",
    "inputType": "single-select",
    "options": [
      {
        "id": "only-offline-in-pers",
        "label": "Only offline, in-person classes"
      },
      {
        "id": "online-via-zoom-or-g",
        "label": "Online via Zoom or Google Meet"
      },
      {
        "id": "on-a-dedicated-learn",
        "label": "On a dedicated learning app or platform"
      },
      {
        "id": "both-online-and-offl",
        "label": "Both online and offline (hybrid)"
      }
    ],
    "required": true,
    "scoring": {
      "online-via-zoom-or-g": {
        "complexityPoints": 10
      },
      "on-a-dedicated-learn": {
        "complexityPoints": 20
      },
      "both-online-and-offl": {
        "complexityPoints": 15
      }
    }
  },
  {
    "id": "Q7",
    "step": 2,
    "industry": "school",
    "question": "Do you want students to pay fees through the website?",
    "inputType": "single-select",
    "options": [
      {
        "id": "yes-full-fee-payment",
        "label": "Yes, full fee payment online"
      },
      {
        "id": "yes-but-only-partial",
        "label": "Yes, but only partial or instalments"
      },
      {
        "id": "no-fees-are-paid-at-",
        "label": "No — fees are paid at the centre"
      }
    ],
    "required": true,
    "scoring": {
      "yes-full-fee-payment": {
        "complexityPoints": 20
      },
      "yes-but-only-partial": {
        "complexityPoints": 15
      }
    }
  }
];
