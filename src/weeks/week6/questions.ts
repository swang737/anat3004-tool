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
    question: `The articular disc is attached posteriorly to the postglenoid tubercle and the
posterior surface of the neck of the condyle via the bilaminar zone.
What is the anterior attachment of the articular disc?`, 
    answer: 'lateral pterygoid muscle'
  },
  {
    id: 'q9', 
    question: `What are the spaces above and below the articular disc?`, 
    answer: 'Superior and inferior joint/articular cavities'
  }, 
  {
    id: 'q10', 
    question: `Identify the joint capsule of the temporomandibular joint.
What is the anterior thickening of the joint capsule referred to as?`, 
    answer: 'Lateral ligament (NOTE: The thickening of anterior ATTACHMENT NOT CAPSULE is anterior ligament)'
  }, 
  {
    id: 'q11', 
    question: `What are two other supporting ligaments of the temporomandibular joint?
What are their attachments?`, 
    answer: 'Sphenomandibular ligament - spine of sphenoid to lingula of mandible, Stylomandibular ligament - styoid process to posterior border of angle of mandible'
  }, 
  {
    id: 'q12', 
    question: `Identify the muscles of mastication, their different divisions/parts, and their
attachments (origin is the attachment to a structure which is generally stationary,
insertion is the attachment to a structure which typically moves):`, 
    answer: `Temporalis - Verticle and Horizontal fibres, Origin: Inferior temporal line, Insert: Condyle and anterior ramus (verticle only)
    Masseter - Superficial, Deep and Coronoid part, Origin: Temporal process of zygomatic bone (Superficial), Zygomatic process of temporal bone (Deep), Insert: Angle and ramus of mandible (Superficial), Ramus of mandible (Deep)
    Lateral Pterygoid - Upper and Lower heads, Origin: Infratemporal fossa of sphenoid (Upper) Lateral surface of lateral pterygoid plate (Lower), Insert: Articular disc (Upper) Neck of condyle (Lower)
    Medial Pterygoid - Superficial and deeo heads, Origin: Pyramidal process of palatine (Superficial), Medial surface of lateral pterygoid plate (Deep), Insert: Medial side of angle of mandible
    Digastric - Anterior and posterior bellies, Origin: Digastric fossa of mandible (Anterior) Mastoid process (Posterior), Insert: Intermediate tendon of digastric
    Buccinator - Origin: Alveolar margin of mandible/maxilla, pterygomandibular raphe, Insert: Modiolus`
  }, 
  {
    id: 'q13', 
    question: `Name two muscles immediately posterior to the buccinator muscle.
Which of these share a common attachment site with the buccinator muscle?`,
    answer: 'Medial pterygoid muscle, Superior pharyngeal constrictor'
  },
  {
    id: 'q14', 
    question: `What are the attachment sites of the pterygomandibular raphe?`, 
    answer: 'Hamulus of medial pterygoid and posterior part of mylohyoid line (attatchment line of mylohyoid on mandible)'
  }, 
  {
    id: 'q15', 
    question: `Attribute the muscles responsible for the movements of the mandible (consider
when they are isometrically/tonically or concentrically contracted):`, 
    answer: `Elevation - Masseter, Temporalis (verticle fibres), Medial pterygoid
    Depression - Lateral pterygoid, anterior belly of digastric
    Protrusion - Lateral pterygoid, masseter (Superficial part)
    Retrusion - Temporalis (Horizontal), Masseter (Deep part), 
    Lateral Extrusion - Everything`
  }, 
  {
    id: 'q16', 
    question: `What arteries supply the Temporomandibular Joint?`, 
    answer: 'SAD - Superficial temporal, Ascending pharyngeal, Deep auricular'
  }, 
  {
    id: `q17`, 
    question: `What arteries supply the temporalis muscle? Try and identify them.`, 
    answer: 'Anterior and Posterior deep temporal arteries, Middle temporal artery, Superficial temporal artery'
  }, 
  {
    id: 'q18', 
    question: `Generally, what structures are medial to the pterygoid venous plexus?`, 
    answer: 'Lateral/Medial pterygoid, Buccinator, Maxillary artery'
  }

  /* HAVE NOT ADDED INNERVATION OF TMJ, MAKE SURE TO DO THIS IN FUTURE AFTER ADD INNERVATION TO CONTENT */
];