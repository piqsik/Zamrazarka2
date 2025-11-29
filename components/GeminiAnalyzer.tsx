import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Send } from 'lucide-react';

const GeminiAnalyzer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      // NOTE: Using the pattern provided in the prompt instructions
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const prompt = `
        Jesteś ekspertem legislacyjnym w Kancelarii Prezydenta RP.
        Przeanalizuj poniższy krótki opis lub tytuł projektu ustawy.
        
        Twoim zadaniem jest:
        1. Określić kategorię (np. Bezpieczeństwo, Zdrowie, Gospodarka).
        2. Napisać krótkie, oficjalne uzasadnienie dlaczego ten projekt jest pilny (maksymalnie 2 zdania).
        3. Oszacować potencjalny wpływ społeczny (Pozytywny/Neutralny/Negatywny).

        Tekst projektu: "${inputText}"
        
        Odpowiedz w formacie czystego tekstu, używając profesjonalnego języka urzędowego.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setAnalysis(response.text);
    } catch (err) {
      console.error("Gemini Error:", err);
      setError("Wystąpił błąd podczas łączenia z systemem AI. Sprawdź konfigurację klucza API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-prezydent-dark px-6 py-4 flex items-center justify-between">
        <h3 className="text-white font-serif font-bold text-lg flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-prezydent-gold" />
          Analiza Legislacyjna AI
        </h3>
        <span className="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded">Powered by Gemini</span>
      </div>
      
      <div className="p-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wprowadź treść lub tytuł nowej inicjatywy do analizy:
        </label>
        <div className="relative">
          <textarea
            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-prezydent-red focus:ring-0 transition-colors h-32 resize-none text-sm"
            placeholder="Np. Ustawa o wsparciu rolnictwa w obliczu suszy..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !inputText}
            className={`absolute bottom-3 right-3 p-2 rounded-full text-white shadow-md transition-all ${
              loading || !inputText 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-prezydent-red hover:bg-red-800 hover:scale-105'
            }`}
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded border-l-4 border-red-500">
            {error}
          </div>
        )}

        {analysis && (
          <div className="mt-6 animate-fade-in">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 border-b pb-1">Wynik Analizy</h4>
            <div className="prose prose-sm prose-red max-w-none text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="whitespace-pre-line">{analysis}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiAnalyzer;