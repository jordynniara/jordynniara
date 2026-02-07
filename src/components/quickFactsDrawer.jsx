import { useState } from 'react';
import { TextAlignJustify } from 'lucide-react';
import PropTypes from 'prop-types';

const quickFacts = [
    { icon: "📚", label: "Favorite Book", value: (<p className="font-body text-sm text-wetsoil">"100 Years of Solitude by Gabriel Garcia Marquez"</p>) },
    { icon: "🎧", label: "Music Tastes", 
        value: (
           <div className="flex flex-col gap-1">
                <a href="https://www.youtube.com/watch?v=Gl83mI69nX4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Lupe Fiasco
                </a>
                <a href="https://www.youtube.com/watch?v=GYQfWJNWe3I" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Stevie Wonder
                </a>
                <a href="https://www.youtube.com/watch?v=e5YmG3jkzxA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Cleo Soul
                </a>
                <a href="https://www.youtube.com/watch?v=aFdDuo0LmZk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Indie Tribe
                </a>
                <a href="https://www.youtube.com/watch?v=sNotIE0mX1w" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    FKJ
                </a>
            </div>
        )
    },
    { icon: "🤝🏾", label: "Volunteer Work", value:(<p className="font-body text-sm text-wetsoil">"Black Girls Code"</p>) },
    { icon: "👩🏾‍🏫", label: "Currently Learning", value:(<p className="font-body text-sm text-wetsoil">"AI and Ethical Design"</p>) },
    { icon: "🎮", label: "Favorite Video Game", value:(<p className="font-body text-sm text-wetsoil">"Kingdom Hearts II"</p>) },
    { icon: "⚡️", label: "Superpower", value:(<p className="font-body text-sm text-wetsoil">"I'm great at giving gifts because I pay attention to details."</p>) },
];

export const QuickFactsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mx-auto w-9 h-7 flex items-center justify-center py-2 bg-white text-wetsoil rounded-sm font-accent hover:cursor-pointer
            rounded-t-none border-t-0 mt-0"
        aria-label="Toggle quick facts"
      >
        <TextAlignJustify className="w-9 h-6" /> 
      </button>

      {/* Drawer */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'h-full opacity-100' : 'hidden max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-4 border-wetsoil border-dashed inset-shadow-sm rounded-lg p-6 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-pebble/20 hover:bg-pebble/40 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                <div className="flex-1">
                  <p className="font-accent text-sm text-wetsoil/70"> 
                    {fact.label}
                  </p>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};