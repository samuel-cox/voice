import { Conversation } from './components/conversation';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="about-text text-center mb-8">
            <h3 className="text-4xl font-semibold text-[#373737] mb-6">
              AI Chat Assistant
            </h3>
            <p className="text-lg text-[#555555] mb-8">
              Experience natural conversations with our AI assistant. Using advanced language models, 
              this tool can help answer questions, provide information, and engage in meaningful dialogue.
            </p>
          </div>
          
          <div className="border-2 border-[#373737] bg-white p-8 shadow-custom">
            <Conversation />
          </div>
        </div>
      </div>
    </main>
  );
}
