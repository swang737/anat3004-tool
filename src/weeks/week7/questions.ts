type QA = {
    id: string;
    question: string;
    answer: string;
    aliases?: string[];
    img?: string;
};

export const QUESTIONS: QA[] = [
    {
        id: 'q1',
        question: `What structure lies beneath the arcuate eminence?`, 
        answer: 'Superior/anterior semilunar canal'
    },
    {
      id: 'q2',
      question: `What bony feature forms the floor of the middle ear?` ,
      answer: 'Jugular Fossa',
      aliases: [],
      img: ''
    },
    {
      id: 'q3',
      question: `What feature of the inner ear is sealed off by the stapes?` ,
      answer: 'Oval window',
      aliases: [],
      img: ''
    },
    {
      id: 'q4',
      question: `What two structures contain perilymph and endolymph respectively?` ,
      answer: 'Bony labyrinth, membranous labyrinth',
      aliases: [],
      img: ''
    },
    {
      id: 'q5',
      question: `What is inside the pyramid in the posterior wall of the middle ear?` ,
      answer: 'Stapedius Muscle',
      aliases: [],
      img: ''
    },
    {
      id: 'q6',
      question: `What type of joints are the joints in the ossicular chain?` ,
      answer: 'Synovial joints',
      aliases: [],
      img: ''
    },
    {
      id: 'q7',
      question: `What glands are found in the external ear and what do they produce?` ,
      answer: 'Ceruminous glands which produce cerumen when mixed with sebum',
      aliases: [],
      img: ''
    },
    {
      id: 'q8',
      question: `State each wall of the middle ear and its features.` ,
      answer: `Roof - Tegmen tympani, 
      Lateral wall - Tympanic membrane, 
      Anterior (Carotid) wall - Auditory tube, exiting tensor tympani, 
      Posterior wall - Aditus, pyramidal eminence (with tendon of stapedius), chorda tympani, 
      Medial wall - Promontory, tympanic plaexus, oval window, round window (with second tympanic membrane), prominennce of facial nerve, prominence of lateral semicircular canal, 
      Floor (Jugular wall) - Thin bone seperating from jugular vein`,
      aliases: [],
      img: ''
    },
    {
      id: 'q9',
      question: `What structure is behind the tympanic plexus? What forms this structure?` ,
      answer: 'Promontory, which is formed by the first turn of the Cochlea',
      aliases: [],
      img: ''
    },
    {
      id: 'q10',
      question: `Which nerve innervates stapedius?` ,
      answer: 'Stapedius nerve which is a branch from facial nerve',
      aliases: [],
      img: ''
    },
    {
      id: 'q11',
      question: `Which nerve innervates tensor tympani?` ,
      answer: 'Medial pterygoid branch from mandibular division of trigeminal nerve',
      aliases: [],
      img: ''
    },
    {
      id: 'q12',
      question: `Identify the labels` ,
      answer: `A - Parotid gland, 
      B - Lateral pterygoid, 
      C - Mastoid air cells in mastoid process of temporal bone, 
      D - Middle meatus, 
      E - Internal carotid artery`,
      aliases: [],
      img: 'week7/q12.png'
    },
];