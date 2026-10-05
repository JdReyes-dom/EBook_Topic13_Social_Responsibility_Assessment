/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 13: A Post That Fooled The Birds
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What sport were Darrel and Sam preparing to play in the Inter-School Championship?',
    choices: { a: 'Basketball', b: 'Badminton', c: 'Volleyball', d: 'Tennis' },
    correct: 'b'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Which suspicious account username posted the fake alert?',
    choices: { a: '@SchoolAlertOfficial', b: '@CentralHighNews', c: '@NoobMaster67', d: '@CloudSwyftAdmin' },
    correct: 'c'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You see a viral social media post claiming your school is unexpectedly closed tomorrow, but no official announcement has been made by school officials. What should you do first?',
    choices: {
      a: 'Share it immediately with classmates so they can plan ahead.',
      b: 'Verify the news on the official school website or portal.',
      c: 'Assume it is true and turn off your alarm for the next morning.',
      d: 'Post a comment expressing anger about the sudden closure.'
    },
    correct: 'b'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'A friend sends a link offering free game currency, urging you to forward it immediately to ten friends to claim the prize. How should you react?',
    choices: {
      a: 'Forward it to ten friends right away to claim the reward.',
      b: 'Pause and inspect the source or link before taking any action.',
      c: 'Send it only to five friends to see if it works first.',
      d: 'Report your friend\'s account for hacking without speaking to them.'
    },
    correct: 'b'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What was the actual reason for the closure according to the school\'s official notice?',
    choices: {
      a: 'The facility was condemned due to severe structural failure.',
      b: 'A scheduled 30-minute closure for routine maintenance.',
      c: 'Preparation for a school-wide musical performance.',
      d: 'An emergency repair on the lighting system.'
    },
    correct: 'b'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What detail on the fake post made Sam question its authenticity?',
    choices: {
      a: 'The font style used in the image.',
      b: 'The strange handle and a grainy, generic photo.',
      c: 'Spelling errors in the photo caption.',
      d: 'The date stamp on the image was from last year.'
    },
    correct: 'b'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'According to Cloudy, what steps should be followed during a 3-Step News Check?',
    choices: {
      a: 'Read quickly, like the post, and share with everyone.',
      b: 'Trace to the root, read the original context, and pause before forwarding.',
      c: 'Block the author, report the post, and delete your account.',
      d: 'Ask three friends, take a screenshot, and post a rebuttal.'
    },
    correct: 'b'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why was Darrel\'s observation of other students significant?',
    choices: {
      a: 'It proved that the other students were ignoring safety rules.',
      b: 'It contradicted the claims made in the alarming post.',
      c: 'It showed that the activity had been moved outdoors.',
      d: 'It indicated that the other students were unaware of the location.'
    },
    correct: 'b'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'How did a routine maintenance notice transform into a rumor that spread panic?',
    choices: {
      a: 'The school administration updated the notice multiple times.',
      b: 'Repeated sharing exaggerated and distorted the original truth.',
      c: 'A coach sent out an incorrect email blast.',
      d: 'A technical glitch corrupted the official portal\'s homepage.'
    },
    correct: 'b'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why does Cloudy warn that feeling panicked or rushed is a key indicator to inspect news carefully?',
    choices: {
      a: 'Urgent news is always completely false.',
      b: 'Emotional reactions often bypass critical thinking and verification skills.',
      c: 'Reading while panicked causes eye strain.',
      d: 'Social media algorithms hide posts that make people feel calm.'
    },
    correct: 'b'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;