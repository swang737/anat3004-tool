import { useCallback, useMemo, useRef, useState } from "react";
import { QUESTIONS } from "./questions.ts";
import './week7.css'

type QA = {
    id: string;
    question: string;
    answer: string;
    aliases?: string[];
    img?: string;
};

function normalizeString(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\b(muscle|artery|vein|nerve|bone|arteriae|vena|nervus|os)\b/gi, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isCorrect(input: string, qa: QA): boolean {
  const u = normalizeString(input);
  const answers = [qa.answer, ...(qa.aliases ?? [])].map(normalizeString);

  const inputWords = u.split(" ");

  return answers.some((ans) => {
    const ansWords = ans.split(" ");
    const overlap = inputWords.filter((word) => ansWords.includes(word));
    return (
      overlap.length > 0 &&
      (overlap.length === inputWords.length ||
        overlap.length === ansWords.length ||
        overlap.length >= Math.min(inputWords.length, ansWords.length) / 2)
    );
  });
}

function Week6Practice() {
    const [i, setI] = useState<number>(0);
    const [input, setInput] = useState<string>("");
    const [wrong, setWrong] = useState<number>(0);
    const [showAnswer, setShowAnswer] = useState<null | string>(null);
    const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);
    /* UseRef is a pointer, (won't reload when its changed) */
    /* HTMLInputElement is textbox */
    const inputRef = useRef<HTMLInputElement>(null);
    /* only computes this value if i changes */
    /* current question */
    const q = useMemo(() => QUESTIONS[i], [i]);
    /* Always chacking if quiz is done */
    const done = i >= QUESTIONS.length;

    /* useCallback(function, dependencies) dont create a new function, use this function everytime unless dependencies change */
    /* dependencies is empty, so this function is just used constantly */
    /* Resets and goes to the next question */
    const next = useCallback(() => {
        setInput("");
        setShowAnswer(null);
        setI((k) => k + 1);
        setWasCorrect(null);
        /* Run only after next question is done loadig (fail safe) */
        setTimeout(() => inputRef.current?.focus(), 0);
    }, []);

  const markCorrect = useCallback(() => {
    if (!q) return;
    if (isCorrect(input, q)) {
      setWasCorrect(true);
      setShowAnswer(q.answer);
    } else {
      setWrong((w) => w + 1);
      setWasCorrect(false);
      setShowAnswer(q.answer);
    }
  }, [input, q, next]);

  const markWrong = useCallback(() => {
    if (!q) return;
    setWrong((w) => w + 1);
    setWasCorrect(false);
    setShowAnswer(q.answer);
  }, [q, next]);


  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (showAnswer) {
                next();
            } else {
                markCorrect();
            }
        }
    }, [markCorrect, next, showAnswer]);

  if (done) {
    return (
      <div className="week-container" style={{ textAlign: "left", maxWidth: 800 }}>
        <h1>Practice complete</h1>
        <h3>Total questions: {QUESTIONS.length}</h3>
        <h3>Wrong count: <strong>{wrong}</strong></h3>
      </div>
    );
  }

  return (
    <div className="week-container" style={{ textAlign: "left", maxWidth: 800 }}>
      <div style={{ marginTop: 12, fontSize: 14, opacity: 0.7 }}>
        Question {i + 1} / {QUESTIONS.length} • Wrong: <strong>{wrong}</strong>
      </div>

      <div style={{ marginTop: 16 }}>
        {q.img && (
          <div style={{ marginBottom: 12 }}>
            <img
              src={q.img}
              alt="Question Image"
              className="practice-img"
            />
          </div>
        )}
        <h2 className="practice-q-text">{q.question}</h2>

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type your answer and press Enter"
          autoFocus
          className="practice-input"
        />

        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          <button onClick={markCorrect} className='check-button'>Check my Answer</button>
          <button onClick={markWrong} className="idk-button">Incorrect override</button>
        </div>

        {showAnswer && (<div className={wasCorrect ? "correct-answer-text-correct" : "correct-answer-text"}>
            Correct answer: <strong>{showAnswer}</strong>
          </div>)}
      </div>
    </div>
  );
}

export default Week6Practice;