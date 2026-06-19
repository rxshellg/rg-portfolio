import { useEffect, useMemo, useState } from "react";

const TYPE_SPEED_MS = 25;
const DELETE_SPEED_MS = 12;
const PAUSE_AFTER_TYPE_MS = 1600;
const PAUSE_AFTER_DELETE_MS = 400;

function splitIntoSentences(paragraphs: string[]): string[] {
  return (
    paragraphs
      .join(" ")
      .match(/[^.!?]+[.!?]+/g)
      ?.map((sentence) => sentence.trim()) ?? paragraphs
  );
}

export function useTypewriter(paragraphs: string[]) {
  const sentences = useMemo(() => splitIntoSentences(paragraphs), [paragraphs]);

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];

    if (!isDeleting && text.length < currentSentence.length) {
      const timeout = setTimeout(() => {
        setText(currentSentence.slice(0, text.length + 1));
      }, TYPE_SPEED_MS);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && text.length === currentSentence.length) {
      const timeout = setTimeout(
        () => setIsDeleting(true),
        PAUSE_AFTER_TYPE_MS,
      );
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text.length > 0) {
      const timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, DELETE_SPEED_MS);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSentenceIndex((current) => (current + 1) % sentences.length);
      setIsDeleting(false);
    }, PAUSE_AFTER_DELETE_MS);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, sentenceIndex, sentences]);

  return text;
}
