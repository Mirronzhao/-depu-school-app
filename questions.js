const questions = [
  // ==================== School Overview ====================
  {
    id: 1,
    category: "School Overview",
    question: "What is Chongqing DEPU Foreign Language School? Describe its type, investment, and education levels.",
    referenceAnswer: "Chongqing DEPU Foreign Language School is fully funded by DEPU Education with an investment of nearly 800 million yuan. It is a 12-year integrated international school encompassing primary, middle, and high school education.",
    keywords: ["DEPU Education", "800 million", "12-year", "integrated international school", "primary", "middle", "high school"]
  },
  {
    id: 2,
    category: "School Overview",
    question: "How large is the DEPU campus? Mention total area, construction area, and campus organization.",
    referenceAnswer: "The school covers 98.7 acres with nearly 120,000 square meters of construction area. It is divided into two adjacent independent campuses — the middle school and the primary school, equipped with sports venues and art classrooms.",
    keywords: ["98.7 acres", "120,000 square meters", "two", "independent campuses", "middle school", "primary school"]
  },
  {
    id: 3,
    category: "School Overview",
    question: "When did DEPU start? How many students and faculty as of June 2024?",
    referenceAnswer: "DEPU started in September 2015. As of June 2024, it has over 2,300 students including approximately 100 international students, and 480 faculty members. The student-teacher ratio is about 1:5.",
    keywords: ["September 2015", "2,300 students", "100 international students", "480 faculty", "1:5"]
  },
  {
    id: 4,
    category: "School Overview",
    question: "Who are the main investors of DEPU Education?",
    referenceAnswer: "Liu Xiaozong, with a Master of Economics from Kellogg School of Management, Northwestern University, former General Manager/CEO of Huawei Technologies in multiple branches, Chairman of Yinsong Capital Management (Hong Kong), Co-founder and CEO of Macric Biotech, Co-founder and Chairman of the School Supervisory Board of DEPU. Yu Yong, Bachelor from Tsinghua University, Master from University of Ottawa, Co-founder and Managing Director of DEPU Education, Co-founder and Chairman of the Board of Trustees.",
    keywords: ["Liu Xiaozong", "Northwestern University", "Huawei", "Yu Yong", "Tsinghua University", "co-founder"]
  },
  {
    id: 5,
    category: "School Overview",
    question: "When was Chongqing DEPU Education Investment Co., Ltd. established and what is its registered capital?",
    referenceAnswer: "It was established on January 23, 2013, with a registered capital of 318.4161 million yuan. Its main business includes investment in education industry projects and education management consulting.",
    keywords: ["January 23, 2013", "318.4161 million", "registered capital", "education investment"]
  },

  // ==================== Mission & Vision ====================
  {
    id: 6,
    category: "Mission & Vision",
    question: "What is DEPU's motto and where does it come from?",
    referenceAnswer: "DEPU's motto is \"Cultivated in the world, character will become universal,\" derived from Chapter 54 of Lao Tzu's Tao Te Ching. The full passage describes how character cultivated at different levels — individual, family, village, state, and world — produces different qualities.",
    keywords: ["Cultivated in the world", "character will become universal", "Tao Te Ching", "Lao Tzu", "Chapter 54"]
  },
  {
    id: 7,
    category: "Mission & Vision",
    question: "What is DEPU's mission?",
    referenceAnswer: "Facing a fast-changing and uncertain future, DEPU deeply understands parents' anxiety and is committed to returning education to its essence, innovating educational philosophy, practice and management, and developing a 12-year holistic curriculum that integrates the East and the West, to cultivate healthy and happy students, innovators and creators with cross-cultural communication skills.",
    keywords: ["returning education to its essence", "innovating", "holistic curriculum", "East and West", "healthy and happy", "innovators", "cross-cultural"]
  },
  {
    id: 8,
    category: "Mission & Vision",
    question: "What is DEPU's vision and educational goal?",
    referenceAnswer: "DEPU's Vision: To become the leader and standard setter of international schools in the era of 3.0. DEPU's Educational Goal: To cultivate healthy and happy students, innovators and creators with cross-cultural communication skills and understanding.",
    keywords: ["leader", "standard setter", "era of 3.0", "healthy and happy", "innovators", "creators", "cross-cultural"]
  },
  {
    id: 9,
    category: "Mission & Vision",
    question: "What does \"understand China\" mean in DEPU's educational philosophy?",
    referenceAnswer: "\"Understand China\" means understanding traditional Chinese philosophical thought and using it to guide decisions and behavior. Specifically, DEPU hopes students will have a heart of benevolence, understand the way of adaptation, and achieve the unity of knowledge and action.",
    keywords: ["traditional Chinese philosophy", "benevolence", "adaptation", "unity of knowledge and action"]
  },
  {
    id: 10,
    category: "Mission & Vision",
    question: "What does \"understand the world\" mean in DEPU's educational philosophy?",
    referenceAnswer: "\"Understand the world\" means understanding the foundations of Western civilization. DEPU hopes students will possess solid philosophical and scientific literacy, critical thinking, a spirit of contract, and a global perspective.",
    keywords: ["Western civilization", "philosophical and scientific literacy", "critical thinking", "spirit of contract", "global perspective"]
  },
  {
    id: 11,
    category: "Mission & Vision",
    question: "What does \"innovator and creator\" mean at DEPU?",
    referenceAnswer: "DEPU hopes students will have the ability to innovate and create change, reject following old conventions and fixed mindsets, and always use innovative thinking to address the uncertainties of the future world and the challenges of artificial intelligence.",
    keywords: ["innovate", "create change", "reject conventions", "innovative thinking", "artificial intelligence"]
  },
  {
    id: 12,
    category: "Mission & Vision",
    question: "What does \"healthy and happy person\" mean at DEPU?",
    referenceAnswer: "DEPU hopes students, besides having solid knowledge and skills, will also possess lifelong learning ability, communication and collaboration skills, life skills, deep humanistic and artistic accomplishment, perseverance and bravery, and the ability to treat others well and give back to society.",
    keywords: ["lifelong learning", "communication", "collaboration", "humanistic", "perseverance", "give back to society"]
  },

  // ==================== Academic Divisions ====================
  {
    id: 13,
    category: "Academic Divisions",
    question: "What academic divisions does DEPU have?",
    referenceAnswer: "DEPU has four academic divisions: Bilingual Boarding Primary Department, Smart Junior High Department (Small Class), Bilingual Junior High Department, and International Senior High Department.",
    keywords: ["Bilingual Boarding Primary", "Smart Junior High", "Bilingual Junior High", "International Senior High", "four"]
  },
  {
    id: 14,
    category: "Academic Divisions",
    question: "Describe DEPU's Bilingual Boarding Primary Department.",
    referenceAnswer: "The Bilingual Boarding Primary Department features 26-student pure small classes, dual homeroom teachers, and one-on-one parent meetings. It uses the CANDIE Curriculum which includes Cross-culture Curriculum, Absorbing Sinology, National Compulsory Curriculum, Discovery and Inquiry, and Extra-Curriculum activities like golf, swimming, climbing, squash, football, tennis, baseball, and piano.",
    keywords: ["Bilingual Boarding Primary", "26", "small class", "dual homeroom", "CANDIE", "Cross-culture", "Sinology"]
  },
  {
    id: 15,
    category: "Academic Divisions",
    question: "Describe DEPU's Smart Junior High Department (Small Class).",
    referenceAnswer: "The Smart Junior High Department has no more than 30 students per class, with dual homeroom teachers, one-on-one parent meetings, and face-to-face homework grading. It uses the LEVER Curriculum, targeting the Zhongkao exam with national compulsory courses, 18 elective quality courses, and 6 second foreign language electives.",
    keywords: ["Smart Junior High", "30", "LEVER", "Zhongkao", "18 elective", "6 second foreign language"]
  },
  {
    id: 16,
    category: "Academic Divisions",
    question: "Describe DEPU's Bilingual Junior High Department.",
    referenceAnswer: "The Bilingual Junior High has 25 students per class, using the LENSES Curriculum. It aims for direct progression to the International Senior High and studying abroad. It combines national compulsory courses with Cambridge IGCSE courses, featuring bilingual teaching and full-English instruction by foreign teachers.",
    keywords: ["Bilingual Junior High", "25", "LENSES", "IGCSE", "bilingual teaching", "foreign teachers", "studying abroad"]
  },
  {
    id: 17,
    category: "Academic Divisions",
    question: "Describe DEPU's International Senior High Department.",
    referenceAnswer: "The International Senior High features 25-student boutique small classes using the COMPAS Curriculum. It offers Cambridge A-Level courses plus CCA courses and domestic courses, with bilingual and full-English instruction by foreign teachers. It uses a walking-class elective system.",
    keywords: ["International Senior High", "25", "COMPAS", "A-Level", "CCA", "walking-class", "boutique"]
  },

  // ==================== Academic Achievements ====================
  {
    id: 18,
    category: "Academic Achievements",
    question: "How many DEPU graduates have been accepted into top global universities?",
    referenceAnswer: "Over the past nine years, more than 500 DEPU graduates have been accepted into top global universities, including Oxford, Cambridge, Imperial College London, LSE, UCL, University of Chicago, Columbia, UCLA, NYU, University of Toronto, McGill, ANU, University of Sydney, NUS, and University of Hong Kong.",
    keywords: ["500", "graduates", "Oxford", "Cambridge", "Imperial College", "Columbia", "UCLA"]
  },
  {
    id: 19,
    category: "Academic Achievements",
    question: "What were DEPU's 2025 QS World University Rankings admission statistics?",
    referenceAnswer: "In 2025, 33% of graduates were admitted to QS top 10 universities, 91% to QS top 50, and 99% to QS top 100.",
    keywords: ["33%", "top 10", "91%", "top 50", "99%", "top 100", "QS"]
  },
  {
    id: 20,
    category: "Academic Achievements",
    question: "What were DEPU's 2024 QS rankings admission statistics?",
    referenceAnswer: "In 2024, 31% of graduates were admitted to QS top 10 universities, 91% to QS top 50, and 99% to QS top 100.",
    keywords: ["31%", "top 10", "91%", "top 50", "99%", "top 100"]
  },
  {
    id: 21,
    category: "Academic Achievements",
    question: "What percentage of DEPU graduates are admitted to foreign universities?",
    referenceAnswer: "100% of DEPU graduates are admitted to foreign universities.",
    keywords: ["100%", "admitted", "foreign universities"]
  },

  // ==================== Certifications ====================
  {
    id: 22,
    category: "Certifications",
    question: "What authoritative certifications has DEPU received?",
    referenceAnswer: "DEPU has received: Cognia Accredited School, College Board AP Accredited School, Cambridge Assessment International Education accredited \"Chongqing Cambridge International Centre\", Edexcel Academic Qualification and Examination Centre, IBO Accredited IBPYP Candidate School, Cambridge International Teacher Professional Development Centre, Aptis Test Demonstration School, and Five-Star IELTS Demonstration Middle School.",
    keywords: ["Cognia", "College Board AP", "Cambridge", "Edexcel", "IBO", "IBPYP", "Aptis", "IELTS"]
  },
  {
    id: 23,
    category: "Certifications",
    question: "What is the significance of DEPU being a \"Chongqing Cambridge International Centre\"?",
    referenceAnswer: "DEPU is authorized by Cambridge Assessment International Education as a global unified examination center, named \"Chongqing Cambridge International Centre.\" It is also the only Cambridge International Teacher Professional Development Centre in Southwest China authorized by Cambridge International, providing in-service training for A-Level teachers in the region.",
    keywords: ["Cambridge International Centre", "examination center", "Teacher Professional Development", "Southwest China", "A-Level"]
  },
  {
    id: 24,
    category: "Certifications",
    question: "What is Cognia and what does its accreditation mean for DEPU?",
    referenceAnswer: "Cognia is the world's largest non-profit international school accreditation organization. DEPU's Cognia accreditation means it receives regular supervision and guidance, shared resources, and teacher professional development opportunities, driving the school to continuously pursue excellence.",
    keywords: ["Cognia", "non-profit", "accreditation", "supervision", "excellence"]
  },

  // ==================== Leadership ====================
  {
    id: 25,
    category: "Leadership",
    question: "Who is the principal of DEPU and what recognition has the principal received?",
    referenceAnswer: "Dr. Xu Lingke (Roger Xu) is the principal of DEPU. He has been elected as one of China's top ten most influential international school principals and appointed as a member of the Chinese International School Expert Lecturer Group. He is a frequent keynote speaker at major international education forums organized by Newschool Insight, TopSchools, and Dandelion Think Tank. He holds a PhD in Education.",
    keywords: ["Dr. Xu Lingke", "Roger Xu", "principal", "top ten", "Expert Lecturer", "PhD"]
  },
  {
    id: 26,
    category: "Leadership",
    question: "What is the \"CHINA IV LEAGUE\" and who are its members?",
    referenceAnswer: "The \"CHINA IV LEAGUE\" is the first international school alliance in China, established under DEPU's leadership. Its members include Beijing International Bilingual Academy (Haijia), Shanghai United International School Qingpu Campus, and Tsinglan School (Dongguan/Guangzhou).",
    keywords: ["CHINA IV LEAGUE", "first", "international school alliance", "Beijing Haijia", "Shanghai Qingpu", "Tsinglan"]
  },
  {
    id: 27,
    category: "Leadership",
    question: "What other school alliances is DEPU part of?",
    referenceAnswer: "DEPU is a founding member of the Chinese International School Principals Club, alongside top international schools like Shanghai YK Pao School and Beijing No.4 High School International Division.",
    keywords: ["founding member", "Principals Club", "YK Pao", "Beijing No.4"]
  },

  // ==================== Facilities ====================
  {
    id: 28,
    category: "Facilities",
    question: "What sports facilities does DEPU have?",
    referenceAnswer: "DEPU has a 24-hour heated swimming pool, fencing hall, squash courts, rock climbing wall, golf practice area, basketball courts, football field, tennis courts, baseball facilities, as well as professional dance rooms, piano rooms, and fitness center.",
    keywords: ["swimming pool", "fencing", "squash", "climbing wall", "golf", "basketball", "tennis", "piano"]
  },
  {
    id: 29,
    category: "Facilities",
    question: "What special facilities does DEPU have beyond sports?",
    referenceAnswer: "DEPU has a Harry Potter-style library, a sci-fi themed geography classroom, a LOFT-style cafe, a cinema, cooking classrooms, Lego rooms, tea ceremony rooms, calligraphy rooms, art studios, and a multi-function laundry room.",
    keywords: ["library", "Harry Potter", "geography classroom", "cafe", "cinema", "cooking", "Lego", "tea ceremony"]
  },
  {
    id: 30,
    category: "Facilities",
    question: "What are DEPU's boarding arrangements?",
    referenceAnswer: "DEPU is a fully enclosed campus with full boarding (day school available by special application). Primary school dorms are 4-person rooms with one life teacher per two dorms, 24-hour duty for lower grades. Middle/high school uses loft beds with desks, with 2 life teachers per floor. All dorms have 24-hour hot/cold water, central AC, and alkaline direct drinking water systems.",
    keywords: ["boarding", "4-person", "life teacher", "24-hour", "central AC", "drinking water"]
  },

  // ==================== Teaching Model ====================
  {
    id: 31,
    category: "Teaching Model",
    question: "What is DEPU's class size and teaching model?",
    referenceAnswer: "DEPU uses pure small-class education with 26-30 students per class, dual homeroom teachers, one-on-one parent meetings, a mentor system, and stratified walking-class teaching. DEPU believes every student is a unique work of art.",
    keywords: ["26-30", "small class", "dual homeroom", "one-on-one parent meetings", "mentor system", "unique work of art"]
  },
  {
    id: 32,
    category: "Teaching Model",
    question: "What is the student-teacher ratio at DEPU?",
    referenceAnswer: "The student-teacher ratio at DEPU is approximately 1:5, with over 480 faculty members serving over 2,300 students.",
    keywords: ["1:5", "480", "2,300", "student-teacher ratio"]
  },

  // ==================== Curriculum Details ====================
  {
    id: 33,
    category: "Curriculum Details",
    question: "What is the CANDIE curriculum at DEPU's primary school?",
    referenceAnswer: "CANDIE stands for Cross-culture, Absorbing Sinology, National compulsory, Discovery and Inquiry, and Extra-curriculum. It is the bilingual boarding primary school's curriculum framework integrating Eastern and Western educational approaches.",
    keywords: ["CANDIE", "Cross-culture", "Sinology", "National compulsory", "Discovery", "Extra-curriculum"]
  },
  {
    id: 34,
    category: "Curriculum Details",
    question: "What is the LEVER curriculum at DEPU's Smart Junior High?",
    referenceAnswer: "LEVER is the Smart Junior High Department's curriculum, focusing on the national Zhongkao exam with compulsory education courses, plus 18 quality elective courses and 6 second foreign language electives.",
    keywords: ["LEVER", "Zhongkao", "18 elective", "6 second foreign language"]
  },
  {
    id: 35,
    category: "Curriculum Details",
    question: "What is the LENSES curriculum at DEPU's Bilingual Junior High?",
    referenceAnswer: "LENSES is the Bilingual Junior High Department's curriculum, combining national compulsory courses with Cambridge IGCSE courses, designed for students aiming to progress to the International Senior High and study abroad.",
    keywords: ["LENSES", "IGCSE", "national compulsory", "study abroad"]
  },
  {
    id: 36,
    category: "Curriculum Details",
    question: "What is the COMPAS curriculum at DEPU's International Senior High?",
    referenceAnswer: "COMPAS is the International Senior High Department's curriculum, featuring Cambridge A-Level courses, CCA (Co-Curricular Activities) courses, and domestic courses, with walking-class elective options.",
    keywords: ["COMPAS", "A-Level", "CCA", "walking-class"]
  },
  {
    id: 37,
    category: "Curriculum Details",
    question: "What is the Cambridge A-Level program and why is it advantageous?",
    referenceAnswer: "A-Level is the world's most popular international curriculum. Its advantages include: credit transfer (up to one year of university credits), allowing specialization (only 3 subjects needed for university application), and multiple exam sessions per year using the best score — not a single exam determining everything.",
    keywords: ["A-Level", "credit transfer", "3 subjects", "multiple exams", "specialization"]
  },

  // ==================== Scholarships ====================
  {
    id: 38,
    category: "Scholarships",
    question: "What scholarship programs does DEPU offer for International Senior High?",
    referenceAnswer: "DEPU offers entrance scholarships (full tuition waiver for top Zhongkao scorers, partial reduction for near-top scorers) and university admission scholarships (500,000 RMB for Ivy League/Oxford/Cambridge admission, 100,000 RMB for top US/UK universities).",
    keywords: ["entrance scholarship", "full tuition waiver", "500,000 RMB", "Ivy League", "Oxford", "Cambridge", "100,000 RMB"]
  },

  // ==================== Extracurricular Activities ====================
  {
    id: 39,
    category: "Extracurricular Activities",
    question: "What extracurricular activities does DEPU offer?",
    referenceAnswer: "DEPU offers equestrian, fencing, golf, rugby, rock climbing, taekwondo, squash, swimming, percussion, drama, seal carving, piano, tennis, yoga, basketball, football, baseball, cooking, Lego, dance, calligraphy, debate, oil painting, computer programming, choir, and more.",
    keywords: ["equestrian", "fencing", "golf", "climbing", "taekwondo", "swimming", "drama", "piano"]
  },
  {
    id: 40,
    category: "Extracurricular Activities",
    question: "What second foreign languages can students learn at DEPU?",
    referenceAnswer: "DEPU offers 6 second foreign language electives at the Smart Junior High level.",
    keywords: ["6", "second foreign language", "electives"]
  },

  // ==================== School Culture ====================
  {
    id: 41,
    category: "School Culture",
    question: "What is the principal's message about education?",
    referenceAnswer: "Dr. Xu Lingke's message is \"Enjoy Bitterness for Sweetness\" — becoming addicted to difficult but beautiful pursuits. He believes education should first cultivate \"human beings,\" then \"what kind of human beings.\" DEPU focuses on things that seem useless but are related to goodness and beauty: weekend happiness activities, desert hiking, drama performances, and Chongqing-Study programs.",
    keywords: ["Enjoy Bitterness for Sweetness", "cultivate human beings", "goodness and beauty", "weekend happiness", "desert hiking", "drama"]
  },
  {
    id: 42,
    category: "School Culture",
    question: "How does DEPU ensure personalized attention for each student?",
    referenceAnswer: "DEPU believes every student is a unique work of art. It has established 26-30 person small classes, dual homeroom teachers, one-on-one parent meetings, a mentor system where every student has their own dedicated mentor for comprehensive academic and life guidance, and stratified walking-class teaching.",
    keywords: ["unique work of art", "small classes", "dual homeroom", "one-on-one", "mentor", "personalized"]
  },

  // ==================== English Vocabulary & Communication ====================
  {
    id: 43,
    category: "English Vocabulary & Communication",
    question: "What is the English School Office Meeting at DEPU?",
    referenceAnswer: "The English School Office Meeting is a language ecology practice where participants use English to conduct school business. The principle is: it's not an English test, but a group of people using another language to get things done together (M.I.P. — Meeting In Progress). Participants don't need to be perfect, just participate.",
    keywords: ["English School Office Meeting", "language ecology", "M.I.P.", "not an English test", "participate"]
  },
  {
    id: 44,
    category: "English Vocabulary & Communication",
    question: "What tool does DEPU recommend for real-time translation during English meetings?",
    referenceAnswer: "DEPU recommends the Doubao APP for real-time interpretation: click \"Make a Call\" → \"Choose Scenario\" → \"Simultaneous Interpretation\" → set Chinese-English bidirectional translation. Participants should wear earphones for personal listening only.",
    keywords: ["Doubao APP", "simultaneous interpretation", "Chinese-English", "earphones"]
  },

  // ==================== Admissions & Contact ====================
  {
    id: 45,
    category: "Admissions & Contact",
    question: "Where is DEPU located and how can you contact the school?",
    referenceAnswer: "DEPU is located in Longzhouwan, Banan District, Chongqing, near Wanda Plaza. It's accessible via Light Rail Line 3 to Xuetangwan Station. The school phone number is 023-66223222 and the official website is www.idepu.org.",
    keywords: ["Longzhouwan", "Banan District", "Line 3", "Xuetangwan", "023-66223222", "idepu.org"]
  },

  // ==================== Industry Recognition ====================
  {
    id: 46,
    category: "Industry Recognition",
    question: "What industry honors has DEPU received?",
    referenceAnswer: "DEPU has been listed on the 2024 China International School Brand Value Ranking, and Dr. Xu Lingke has been recognized as one of China's top ten most influential international school principals. DEPU is also a founding member of the Chinese International School Principals Club.",
    keywords: ["Brand Value Ranking", "2024", "top ten", "Principals Club", "founding member"]
  },
  {
    id: 47,
    category: "Industry Recognition",
    question: "How has DEPU influenced the international education industry in China?",
    referenceAnswer: "DEPU's success has attracted many top international schools to visit and discuss school governance and operations. Under DEPU's leadership, China's first international school alliance — the \"CHINA IV LEAGUE\" — was established. The principal is frequently invited as a keynote speaker at major education forums.",
    keywords: ["attracted", "school governance", "CHINA IV LEAGUE", "first alliance", "keynote speaker"]
  },

  // ==================== Historical Data ====================
  {
    id: 48,
    category: "Historical Data",
    question: "What were DEPU's 2018 Zhongkao results?",
    referenceAnswer: "DEPU's 2018 junior high graduates achieved: 25.4% scoring above 660 points, 72.5% scoring above 600 points, and 91.6% above the joint admission line, with high-score percentages leading among Chongqing key middle schools.",
    keywords: ["2018", "25.4%", "660", "72.5%", "600", "91.6%", "joint admission line"]
  },
  {
    id: 49,
    category: "Historical Data",
    question: "What was the initial investment and founding vision of DEPU?",
    referenceAnswer: "DEPU was established with an investment of 10 billion yuan from DEPU Education, envisioned as a 3.0-era international school integrating bilingual boarding primary, small-class junior high, bilingual junior high, and international senior high education.",
    keywords: ["10 billion", "3.0-era", "international school", "bilingual", "small-class"]
  },
  {
    id: 50,
    category: "Historical Data",
    question: "What does DEPU's English version school introduction highlight about its investors' backgrounds?",
    referenceAnswer: "Liu Xiaozong holds a Master of Economics from Northwestern University's Kellogg School and was Huawei's GM/CEO in Shenyang, Mexico/Central America, and Asia-Pacific branches. Yu Yong holds a Bachelor's from Tsinghua University and a Master's from University of Ottawa, with extensive experience in technology and education ventures.",
    keywords: ["Northwestern University", "Kellogg", "Huawei", "Tsinghua", "University of Ottawa", "technology"]
  }
];