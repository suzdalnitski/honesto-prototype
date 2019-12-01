import {
  MULTICHOICE_QUESTION,
  SCALE_QUESTION,
  TEXT_ONLY_QUESTION,
} from '../questions';

const multichoiceFeedbackToMe = (fromUser, questionId, answerId) => ({
  toUser: 0,
  fromUser,
  questionId,
  answerId,
  type: MULTICHOICE_QUESTION,
  scale: 3,
});

const feedbackGivenToMe = [
  // MULTICHOICE
  multichoiceFeedbackToMe(1, 0, 1),
  multichoiceFeedbackToMe(1, 1, 3),
  multichoiceFeedbackToMe(1, 2, 8),

  multichoiceFeedbackToMe(2, 0, 2),
  multichoiceFeedbackToMe(2, 1, 4),
  multichoiceFeedbackToMe(2, 2, 7),

  multichoiceFeedbackToMe(3, 0, 0),
  multichoiceFeedbackToMe(3, 1, 4),
  multichoiceFeedbackToMe(3, 2, 6),

  // SCALE_QUESTION
  {
    toUser: 0,
    fromUser: 1,
    questionId: 3,
    rating: 9,
    scale: 10,
    type: SCALE_QUESTION,
  },
  {
    toUser: 0,
    fromUser: 4,
    questionId: 3,
    rating: 7,
    scale: 10,
    type: SCALE_QUESTION,
  },
  {
    toUser: 0,
    fromUser: 1,
    questionId: 4,
    rating: 7,
    scale: 10,
    type: SCALE_QUESTION,
  },
  {
    toUser: 0,
    fromUser: 2,
    questionId: 4,
    rating: 8,
    scale: 10,
    type: SCALE_QUESTION,
  },
  {
    toUser: 0,
    fromUser: 3,
    questionId: 4,
    rating: 1,
    scale: 10,
    type: SCALE_QUESTION,
  },

  // TEXT_ONLY
  {
    toUser: 0,
    fromUser: 1,
    questionId: 10000,
    answerText:
      'Keep up the good work! Lorem illo vero ut possimus odio Beatae ratione vel delectus perspiciatis dolorem maiores nulla incidunt, dolore? Debitis eligendi quia ratione vel odio? Veritatis commodi odit totam culpa sapiente ipsum quas.',
    type: TEXT_ONLY_QUESTION,
  },
  {
    toUser: 0,
    fromUser: 2,
    questionId: 10000,
    answerText:
      'Amet ducimus quam officia hic similique nobis. Aspernatur sunt dignissimos deleniti labore ipsam Veritatis enim repudiandae nihil reprehenderit totam? Sint voluptatum et molestiae autem pariatur Ut officiis eaque rerum minima ut Sint dolores neque assumenda ab quas ullam laudantium Officiis corrupti dolor quaerat eaque nulla ipsam Numquam saepe dolorum soluta',
    type: TEXT_ONLY_QUESTION,
  },
  {
    toUser: 0,
    fromUser: 3,
    questionId: 10000,
    answerText:
      'Elit minima ut molestiae nostrum assumenda illum? Temporibus sit magnam minima modi perspiciatis Impedit est nobis excepturi labore iusto sequi libero accusantium. Id explicabo illum facilis error iste reiciendis dolorem',
    type: TEXT_ONLY_QUESTION,
  },
];

const multichoiceFeedbackByMe = (toUser, questionId, answerId) => ({
  fromUser: 0,
  toUser,
  questionId,
  answerId,
  type: MULTICHOICE_QUESTION,
  scale: 3,
});

const feedbackGivenByMe = [
  // MULTICHOICE
  multichoiceFeedbackByMe(1, 0, 0),
  multichoiceFeedbackByMe(1, 1, 4),
  multichoiceFeedbackByMe(1, 2, 6),

  // RATING_AND_TEXT
  {
    toUser: 1,
    fromUser: 0,
    questionId: 3,
    rating: 8,
    scale: 10,
    type: SCALE_QUESTION,
  },
  {
    toUser: 1,
    fromUser: 0,
    questionId: 4,
    rating: 2,
    scale: 10,
    type: SCALE_QUESTION,
  },
  {
    toUser: 1,
    fromUser: 0,
    questionId: 5,
    rating: 5,
    scale: 10,
    type: SCALE_QUESTION,
  },

  // TEXT_ONLY
  {
    toUser: 1,
    fromUser: 0,
    questionId: 10000,
    answerText:
      'Keep up the good work! Lorem illo vero ut possimus odio Beatae ratione vel delectus perspiciatis dolorem maiores nulla incidunt, dolore? Debitis eligendi quia ratione vel odio? Veritatis commodi odit totam culpa sapiente ipsum quas.',
    type: TEXT_ONLY_QUESTION,
  },
];

const sampleData = [...feedbackGivenToMe, ...feedbackGivenByMe];

export default sampleData;

