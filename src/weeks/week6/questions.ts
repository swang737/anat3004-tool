type QA = {
    id: string;
    question: string;
    answer: string;
    aliases?: string[];
    img?: string;
};

export const QUESTIONS: QA[] = [
  {
    id: "q1",
    question: "What bone, and part of that bone, forms the mandibular fossa?",
    answer: "Squamous/tympanic part of temporal",
    aliases: ["tympanic part of temporal"],
  },
  {
    id: "q2",
    question: "What bone, and part of that bone, articulates within the mandibular fossa?",
    answer: "condyle of mandible",
    aliases: ["condyloid"],
  },
  {
    id: "q3",
    question: `Briefly describe the movement (stages) of this bone within the mandibular fossa as mandible depresses.
You can perform this on yourself by pressing on your TMJ (anterior and inferior to your auricle, where the parotid gland is) as you open your mouth.`,
    answer: "Anterior rotation and translation",
    aliases: ["anterior translation", "slide"],
  },
  {
    id: "q4",
    question: `Perform this action on a skull and replicate the dislocation of the mandible.
What bony feature did the mandible get stuck on?
What muscle could fatigue and spasm before resolving the dislocation?
Articular eminence/tubercle
Lateral pterygoid muscle`,
    answer: "articular eminence and lateral pterygoid muscle",
    aliases: ["lateral pterygoid", "articular tubercle"],
  },
  {
    id: "q5",
    question: `Identify BONY anatomical features IMMEDIATELY adjacent to the articular fossa/mandibular fossa. There may be multiple right answers: (Anterior, Posterior, Medial, Inferior, Superior)`,
    answer: "Anterior: Articular eminence, Posterior: Petrotympanic fissure/Post-glenoid tubercle, Medial: Spine of sphenoid/foramen spinosum, Inferior: Articular disc, Superior: Middle cranial fossa",
  },
  {
    id: 'q6', 
    question: `What type of joint is the temporomandibular joint?`, 
    answer: `atypical hinge and sliding synovial joint (a Ginglymoarthrodial joint)`,
  }, 
  {
    id: 'q7', 
    question: `Identify the articular disc, what are its different regions?`, 
    answer: 'Anterior ligament (attached to joint capsule and lateral pterygoid), intermediate zone (between condyle and mandibular fossa), posterior ligament (attatched to bilaminar zone), bilaminar zone'
  }, 
  {
    id:'q8', 
    question: ``
  }
];