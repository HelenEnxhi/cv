'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRightIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, UserGroupIcon, CheckBadgeIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Certification {
  title: string;
  issuer: string;
  period: string;
  level?: string;
}

interface Volunteering {
  title: string;
  organization: string;
  period: string;
  description: string;
  category?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  date: string;
}

type ContentItem = Experience | Education | Skill | Certification | Volunteering | Testimonial;

interface Level {
  id: string;
  title: string;
  icon: any;
  content: ContentItem[];
}

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levels: Level[] = [
    {
      id: 'experience',
      title: 'Professional Experience',
      icon: BriefcaseIcon,
      content: [
        {
          title: 'Sales Development Manager',
          company: 'Reetro',
          period: 'Oct 2024 - Present',
          description: 'Leading cross-functional initiatives to optimize sales processes and drive business growth. Managing stakeholder relationships and implementing agile methodologies to enhance team performance. Analyzing market trends and customer feedback to inform product strategy and development.',
          skills: ['Project Management', 'Agile Methodologies', 'Stakeholder Management', 'Product Strategy']
        },
        {
          title: 'Multicultural Counselor',
          company: 'City of Vantaa',
          period: 'Sep 2023 - Present',
          description: 'Managing educational support projects and coordinating resources across multiple stakeholders. Implementing process improvements and tracking project outcomes. Facilitating cross-cultural communication and collaboration between diverse teams.',
          skills: ['Project Coordination', 'Resource Management', 'Process Improvement', 'Cross-functional Collaboration']
        },
        {
          title: 'Founder & CEO',
          company: 'Phloopy\'s Oy',
          period: 'Jul 2015 - May 2024',
          description: 'Led end-to-end project management for business development and operational initiatives. Managed stakeholder relationships and resource allocation across multiple projects. Implemented agile methodologies to improve team productivity and project delivery. Developed and executed product strategies aligned with business objectives.',
          skills: ['Strategic Planning', 'Project Leadership', 'Resource Allocation', 'Product Development']
        }
      ]
    },
    {
      id: 'volunteering',
      title: 'Volunteering & Mentoring',
      icon: HeartIcon,
      content: [
        {
          title: 'Mentor',
          organization: 'City of Helsinki',
          period: 'Jan 2023 - Present',
          category: 'Arts and Culture',
          description: 'Help international spouses integrate into Finnish culture. Having 1:1s with the mentees about the job market in Finland. Providing entrepreneurship and business plan guidance.'
        },
        {
          title: 'Startup Mentor',
          organization: 'Startup Refugees',
          period: 'Aug 2023 - Dec 2024',
          description: 'Supporting refugees in their entrepreneurial journey and business development.'
        },
        {
          title: 'Education Mentor',
          organization: 'Haaga-Helia University of Applied Sciences',
          period: 'Jan 2023 - Present',
          category: 'Education',
          description: 'Help students with academic, personal, and professional issues, as well as give emotional support. Identifying mentees\' strengths and areas of improvement. Developing entrepreneurship skills and building business plans.'
        },
        {
          title: 'Team Lead',
          organization: 'AIESEC in Finland',
          period: 'Jan 2018 - Jan 2019',
          category: 'Social Services',
          description: 'Taking care of company relations, raising internships in schools for international volunteers, opening new internships, writing job descriptions, interviewing applicants, conducting seminars and workshops.'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      icon: AcademicCapIcon,
      content: [
        {
          title: 'Bachelor\'s Degree in Business Information Technology',
          institution: 'Haaga-Helia University of Applied Sciences',
          period: '2014 - 2018',
          description: 'Majored in Students\' performance evaluation analysis with KNIME Analytics Platform. Credits: 253cr'
        },
        {
          title: 'Bachelor\'s Degree in Informatique de gestion',
          institution: 'HES-SO Valais-Wallis',
          period: '2016 - 2017',
          description: 'Double-degree studies'
        }
      ]
    },
    {
      id: 'skills',
      title: 'Skills & Expertise',
      icon: CodeBracketIcon,
      content: [
        {
          category: 'Core Competencies',
          items: ['Project Management', 'Product Strategy', 'Agile Methodologies', 'Stakeholder Management']
        },
        {
          category: 'Technical Skills',
          items: ['JIRA', 'Confluence', 'Project Planning Tools', 'Data Analysis', 'Agile Frameworks']
        },
        {
          category: 'Languages',
          items: [
            'Albanian (Native)',
            'English (Full Professional)',
            'Finnish (Professional)',
            'French (Limited)',
            'Italian (Limited)',
            'Korean (Elementary)'
          ]
        }
      ]
    },
    {
      id: 'certifications',
      title: 'Certifications & Achievements',
      icon: UserGroupIcon,
      content: [
        {
          title: 'AWS re/Start Graduate',
          issuer: 'Amazon Web Services (AWS)',
          period: 'Jun 2023'
        },
        {
          title: 'Data Mastery for Specialists',
          issuer: 'TechClass',
          period: 'Nov 2024'
        },
        {
          title: 'Cybersecurity for Employees',
          issuer: 'TechClass',
          period: 'Jan 2025'
        },
        {
          title: 'YKI Finnish Language Certificate',
          issuer: 'University of Jyväskylä',
          period: 'Jul 2022',
          level: 'B2'
        }
      ]
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      icon: ChatBubbleLeftRightIcon,
      content: [
        {
          quote: "Enxhi is one of those rare people who thrive under difficult conditions. I met Enxhi while we were volunteering for a non-profit focused on youth empowerment. She handled the trials and tribulations that come up with running a non-profit brilliantly, all the while being a full time student and entrepreneur. I have always been in awe of Enxhi's entrepreneurial spirit and her ability to outwork everyone. I'm confident Enxhi will elevate whichever workplace she joins.",
          author: "Jaiju Joseph",
          position: "Product Manager",
          company: "Elisa Polystar",
          date: "June 14, 2022"
        },
        {
          quote: "Enxhi has a great talent for organization and management of resources. During our time volunteering together she created a great team in our organization and enabled us to get reach ambitious goals of sales conversions.",
          author: "Niclas Joswig",
          position: "Senior AI Research Scientist",
          company: "Axon",
          date: "June 7, 2022"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-5xl font-bold tech-gradient">Enxhi Helen Nikolla</h1>
            <CheckBadgeIcon className="h-8 w-8 text-primary tech-pulse" />
          </div>
          <p className="text-xl text-gray-300 glow-text">Project Management | Product Strategy | Agile Leadership</p>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Dynamic project and product management professional with a proven track record in leading cross-functional teams and delivering successful initiatives. 
            Skilled in agile methodologies, stakeholder management, and strategic planning with a strong focus on business outcomes. Known for exceptional interpersonal skills, 
            rapid learning abilities, and adaptability in fast-paced environments.
          </p>
        </motion.div>

        <div className="tech-grid">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="tech-card rounded-lg p-6 cursor-pointer"
              onClick={() => setSelectedLevel(selectedLevel === level.id ? null : level.id)}
            >
              <div className="flex items-center mb-4">
                <level.icon className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-semibold tech-gradient">{level.title}</h2>
              </div>
              {selectedLevel === level.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 space-y-4"
                >
                  {level.content.map((item, i) => (
                    <div key={i} className={`bg-background/50 p-4 rounded backdrop-blur-sm ${'quote' in item ? 'border-l-4 border-primary' : ''}`}>
                      {'title' in item && <h3 className="font-semibold text-primary glow-text">{item.title}</h3>}
                      {'category' in item && <h3 className="font-semibold text-primary glow-text">{item.category}</h3>}
                      {'company' in item && <p className="text-gray-300">{item.company}</p>}
                      {'organization' in item && <p className="text-gray-300">{item.organization}</p>}
                      {'institution' in item && <p className="text-gray-300">{item.institution}</p>}
                      {'issuer' in item && <p className="text-gray-300">{item.issuer}</p>}
                      {'period' in item && <p className="text-sm text-gray-400">{item.period}</p>}
                      {'description' in item && <p className="mt-2">{item.description}</p>}
                      {'quote' in item && (
                        <>
                          <p className="italic text-lg mb-4">"{item.quote}"</p>
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className="font-semibold text-primary">{item.author}</p>
                            <p className="text-gray-300">{item.position} at {item.company}</p>
                            <p className="text-sm text-gray-400">{item.date}</p>
                          </div>
                        </>
                      )}
                      {'skills' in item && item.skills && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.skills.map((skill, j) => (
                            <span key={j} className="tech-badge px-2 py-1 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      {'items' in item && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.items.map((skill, j) => (
                            <span key={j} className="tech-badge px-2 py-1 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
              {selectedLevel !== level.id && (
                <div className="flex items-center text-gray-400 mt-4">
                  <span>Click to {selectedLevel ? 'close' : 'explore'}</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 