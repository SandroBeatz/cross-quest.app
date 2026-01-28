
import { GoogleGenAI, Type } from "@google/genai";
import { CrosswordData, Direction } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const CROSSWORD_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    gridSize: { type: Type.NUMBER },
    items: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          clue: { type: Type.STRING },
          answer: { type: Type.STRING },
          row: { type: Type.NUMBER },
          col: { type: Type.NUMBER },
          direction: { type: Type.STRING }
        },
        required: ["id", "clue", "answer", "row", "col", "direction"]
      }
    }
  },
  required: ["title", "gridSize", "items"]
};

export async function generateCrossword(categories: string[]): Promise<CrosswordData> {
  const theme = categories.join(', ');
  
  const prompt = `Generate a high-quality connected crossword in Russian.
Theme: ${theme}.
STRICT LOGIC RULES:
1. Exactly 3 words.
2. All words must be nouns in Russian, uppercase.
3. Every word MUST intersect with at least one other word.
4. If Word A and Word B share a cell (row, col), the character at that position in BOTH words must be identical.
5. Grid size 10x10. Coordinates row (0-9), col (0-9).
6. Format as JSON. Direction: 'H' (horizontal) or 'V' (vertical).
Example: 'КОТ' (0,0) H, 'ТОК' (0,2) V. Cell (0,2) is 'Т' for both. This is a valid intersection.`;

  // Using gemini-3-pro-preview for complex reasoning tasks like crossword layout
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: CROSSWORD_SCHEMA,
      temperature: 0.1,
    },
  });

  try {
    const text = response.text.trim();
    const data = JSON.parse(text);
    // Sanitize data
    data.items = data.items.map((item: any) => ({
      ...item,
      answer: item.answer.toUpperCase().replace(/[^А-ЯЁA-Z]/g, ''),
      direction: item.direction === 'H' ? Direction.HORIZONTAL : Direction.VERTICAL
    }));
    return data as CrosswordData;
  } catch (e) {
    console.error("Failed to parse crossword data", e);
    throw new Error("Ошибка генерации. Попробуйте еще раз.");
  }
}
