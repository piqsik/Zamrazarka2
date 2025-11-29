import React, { useState, useEffect } from 'react';
import LiveCounter from './components/LiveCounter';
import { INITIAL_PROJECTS } from './data';
import { LegislativeProject } from './types';
import { 
  Shield, Activity, Scale, Banknote, FileText, Plane, Users, Sprout, Zap, 
  Flag, Cpu, ShieldAlert, UserCheck, Anchor, Coins, Plug, Car, Stethoscope,
  ExternalLink, ChevronDown, Info, ScrollText
} from 'lucide-react';

const App: React.FC = () => {
  const [projects, setProjects] = useState<LegislativeProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data with a delay
    const timer = setTimeout(() => {
      setProjects(INITIAL_PROJECTS);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(prevId => prevId === id ? null : id);
  };

  const getIcon = (name: string) => {
    const props = { className: "w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" };
    switch (name) {
      case 'shield': return <Shield {...props} />;
      case 'health': return <Activity {...props} />;
      case 'scale': return <Scale {...props} />;
      case 'money': return <Banknote {...props} />;
      case 'plane': return <Plane {...props} />;
      case 'users': return <Users {...props} />;
      case 'sprout': return <Sprout {...props} />;
      case 'zap': return <Zap {...props} />;
      case 'flag': return <Flag {...props} />;
      case 'cpu': return <Cpu {...props} />;
      case 'shield-alert': return <ShieldAlert {...props} />;
      case 'user-check': return <UserCheck {...props} />;
      case 'anchor': return <Anchor {...props} />;
      case 'coins': return <Coins {...props} />;
      case 'plug': return <Plug {...props} />;
      case 'car': return <Car {...props} />;
      case 'stethoscope': return <Stethoscope {...props} />;
      default: return <FileText {...props} />;
    }
  };

  // Function to calculate progress bar width based on time waiting
  // Scale: 180 days (approx 6 months) represents a "full" bar (100%)
  const calculateProgress = (submissionDate: string) => {
    const start = new Date(submissionDate).getTime();
    const now = new Date().getTime();
    const diff = now - start;

    // If waiting time is negative (future date) or zero, show minimal bar
    if (diff <= 0) return 2;

    const days = diff / (1000 * 60 * 60 * 24);
    const maxDays = 180; // The threshold for a "full" bar
    
    // Calculate percentage, min 2%, max 100%
    return Math.min(100, Math.max(2, (days / maxDays) * 100));
  };

  // Skeleton Loader Component
  const ProjectSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden animate-pulse">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Stripe Skeleton */}
        <div className="bg-gray-200 h-32 md:h-auto md:w-32 shrink-0"></div>

        {/* Content Area Skeleton */}
        <div className="flex-grow p-6 md:p-8 flex flex-col justify-center w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="h-8 bg-gray-200 rounded w-2/3"></div>
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>

          <div className="h-2 bg-gray-100 rounded-full mb-6 w-full"></div>

          {/* Counter Skeleton - Updated to match single block */}
          <div className="h-24 bg-gray-50 rounded-xl border border-gray-100 p-5 flex justify-between items-center">
             <div className="space-y-2">
               <div className="h-3 w-24 bg-gray-200 rounded"></div>
               <div className="h-2 w-32 bg-gray-200 rounded"></div>
             </div>
             <div className="flex items-baseline gap-2">
               <div className="h-10 w-16 bg-gray-200 rounded"></div>
               <div className="h-4 w-8 bg-gray-200 rounded"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-navy-900 font-sans p-6 md:p-12">
      
      {/* Minimal Title */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-black text-navy-900 mb-4 tracking-tight">
          Zamrażarka Legislacyjna
        </h1>
        <p className="text-navy-700 text-lg max-w-2xl mx-auto">
          Licznik czasu oczekiwania na procedowanie inicjatyw ustawodawczych.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6">
        {isLoading ? (
          // Display 3 skeleton items while loading
          <>
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
          </>
        ) : (
          projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const progressPercent = calculateProgress(project.submissionDate);
            
            return (
              <div 
                key={project.id} 
                onClick={() => toggleExpand(project.id)}
                className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-navy-200 transition-all duration-300 transform group cursor-pointer ${isExpanded ? 'ring-2 ring-navy-100' : 'hover:-translate-y-1'}`}
              >
                <div className="flex flex-col md:flex-row h-full">
                  
                  {/* Left Stripe / Icon Area */}
                  <div className="bg-navy-900 group-hover:bg-navy-800 transition-colors duration-300 p-6 md:w-32 flex flex-col items-center justify-start pt-8 text-center gap-2 shrink-0 relative overflow-hidden">
                     {/* Decorative background circle */}
                     <div className="absolute -top-10 -left-10 w-32 h-32 bg-navy-800 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                     <div className="relative z-10">
                       {getIcon(project.iconName)}
                     </div>
                     <span className="relative z-10 text-xs font-bold text-navy-light uppercase tracking-widest mt-2 opacity-80">
                       {project.category.split(' ')[0]}
                     </span>
                  </div>

                  {/* Content Area */}
                  <div className="flex-grow p-6 md:p-8 flex flex-col justify-center group-hover:bg-gray-50/50 transition-colors duration-300 relative">
                    {/* Expand Indicator Icon */}
                    <div className="absolute top-6 right-6 text-gray-300 group-hover:text-navy-700 transition-colors hidden md:block">
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2 pr-8">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="group-hover:text-navy-700 transition-colors flex items-center gap-2 z-10 relative"
                      >
                        <h2 className="text-2xl font-serif font-bold text-navy-900 leading-tight group-hover:underline decoration-2 underline-offset-4">
                          {project.title}
                        </h2>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-navy-700 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                      </a>
                      <span className="bg-navy-light text-navy-800 px-3 py-1 rounded-full text-xs font-bold border border-navy-200 whitespace-nowrap shadow-sm mt-2 md:mt-0">
                        Złożono: {project.submissionDate}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Animated Status Bar */}
                    <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6 border border-gray-100" title={`Postęp zamrażania: ${Math.round(progressPercent)}%`}>
                       <div 
                         className="absolute top-0 left-0 h-full bg-navy-900 rounded-full z-10 group-hover:bg-navy-700 transition-all duration-1000 ease-out"
                         style={{ width: `${progressPercent}%` }}
                       ></div>
                       <div className="absolute top-0 left-0 h-full w-full bg-white opacity-20 animate-progress-shimmer z-20 mix-blend-overlay"></div>
                    </div>

                    {/* Live Counter Component */}
                    <LiveCounter startDate={project.submissionDate} />

                    {/* Expandable Section */}
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <div className="overflow-hidden">
                         <div className="pt-2 border-t border-gray-200">
                            
                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                                  <ScrollText className="w-4 h-4 text-navy-700" />
                                  Szczegóły Projektu
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {project.longDescription || project.description}
                                </p>
                              </div>

                              <div className="bg-navy-light/20 p-4 rounded-lg border border-navy-100 shadow-sm">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-navy-900 uppercase tracking-wide mb-3">
                                  <Info className="w-4 h-4 text-navy-700" />
                                  Analiza Wpływu
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed italic">
                                  {project.impact || "Brak danych o wpływie."}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4 text-center">
                               <span className="text-xs font-semibold text-navy-700 cursor-pointer hover:underline">
                                 Zwiń szczegóły
                               </span>
                            </div>

                         </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="text-center mt-16 text-gray-400 text-xs">
        <p>Dane na podstawie informacji publicznych.</p>
      </div>
    </div>
  );
};

export default App;