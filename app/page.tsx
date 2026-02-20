'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

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

type ContentItem = Experience | Education | Skill | Certification | Volunteering;

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
          title: 'Leader',
          company: 'Founders Running Club',
          period: 'Jan 2026 - Present',
          description:
            'Leading the local founders community in Helsinki through recurring events and peer support for startup operators.',
          skills: ['Community Leadership', 'Founder Network', 'Event Facilitation'],
        },
        {
          title: 'CEO, Co-Founder & CTO',
          company: 'FitArenaa Oy',
          period: 'Nov 2025 - Present',
          description:
            'Defining company vision, product roadmap, platform architecture, and GTM strategy. Leading AI-driven analytics development, MVP validation with gym operators, and investor/funding preparation.',
          skills: ['Startup Leadership', 'Product Roadmap', 'AI Analytics', 'B2B GTM', 'Fundraising'],
        },
        {
          title: 'Multicultural Counselor',
          company: 'City of Vantaa',
          period: 'Sep 2023 - Present',
          description:
            'Providing multicultural counseling to students and families, supporting communication between homes and schools, and improving student inclusion and well-being.',
          skills: ['Counseling', 'Cross-cultural Communication', 'Education Support', 'Stakeholder Coordination'],
        },
        {
          title: 'Entrepreneurship Coach | Mentor',
          company: 'Freelance',
          period: 'Jan 2021 - Present',
          description:
            'Helping students and emigrants establish businesses in Finland through business planning, financial planning, and practical execution support.',
          skills: ['Entrepreneurship', 'Business Planning', 'Financial Planning', 'Mentoring'],
        },
        {
          title: 'Sales Development Manager',
          company: 'Reetro',
          period: 'Oct 2024 - Jan 2026',
          description:
            'Led B2B sales strategy and process improvements for agile software markets, refining outreach and customer development workflows.',
          skills: ['Sales Management', 'Sales Operations', 'CRM', 'B2B Outreach'],
        },
        {
          title: 'Book Designer',
          company: 'Freelance',
          period: 'Jan 2025 - Mar 2025',
          description:
            'Collaborated with authors to produce child-focused visual storytelling through illustration, layout, and cover design.',
          skills: ['Graphic Design', 'Cover Art', 'Page Layout'],
        },
        {
          title: 'Founder | CEO | Board Member',
          company: "Phloopy's Oy",
          period: 'Jul 2015 - May 2024',
          description:
            "Built and led Finland's first concept in its category, owning operations, recruiting, budgeting, supplier relationships, compliance, and growth strategy.",
          skills: ['Operations', 'Leadership', 'Stakeholder Management', 'Negotiation', 'Sales & Marketing'],
        },
        {
          title: 'AWS Cloud Practitioner Trainee | Project Manager',
          company: 'The Shortcut',
          period: 'Mar 2023 - Jun 2023',
          description:
            'Completed AWS Cloud training and managed migration planning for SQL datasets and backups using agile project coordination.',
          skills: ['AWS', 'Project Management', 'Linux', 'Security', 'Python'],
        },
      ],
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
          description:
            'Helping international spouses integrate into Finnish culture and improve job-market readiness through 1:1 mentoring and practical guidance.',
        },
        {
          title: 'Startup Mentor',
          organization: 'Startup Refugees',
          period: 'Aug 2023 - Dec 2024',
          description: 'Supporting refugee founders with business planning, customer discovery, and early-stage execution.',
        },
        {
          title: 'Education Mentor',
          organization: 'Haaga-Helia University of Applied Sciences',
          period: 'Jan 2023 - Present',
          category: 'Education',
          description:
            'Coaching students on academic and career development, with a focus on entrepreneurship skills and business model creation.',
        },
        {
          title: 'Team Lead',
          organization: 'AIESEC in Finland',
          period: 'Jan 2018 - Jan 2019',
          category: 'Social Services',
          description:
            'Led company relations and internship program execution for international volunteers, including hiring, workshops, and partner communication.',
        },
      ],
    },
    {
      id: 'education',
      title: 'Education',
      icon: AcademicCapIcon,
      content: [
        {
          title: "Bachelor's Degree in Business Information Technology",
          institution: 'Haaga-Helia University of Applied Sciences',
          period: '2014 - 2018',
          description: 'Graduated with 253 credits. Focused on data analysis and student performance evaluation using KNIME Analytics Platform.',
        },
        {
          title: "Bachelor's Degree in Informatique de gestion",
          institution: 'HES-SO Valais-Wallis',
          period: '2016 - 2017',
          description: 'Double-degree exchange studies in business informatics.',
        },
      ],
    },
    {
      id: 'skills',
      title: 'Skills & Expertise',
      icon: CodeBracketIcon,
      content: [
        {
          category: 'Core Competencies',
          items: ['CEO/CTO Leadership', 'Company Building', 'Product Strategy', 'Operations', 'Mentoring'],
        },
        {
          category: 'Technical & Tools',
          items: ['AI-driven Analytics', 'AWS Cloud Foundations', 'JIRA', 'Confluence', 'CRM Workflows', 'Data Analysis'],
        },
        {
          category: 'Languages',
          items: [
            'Albanian (Native)',
            'English (Full Professional)',
            'Finnish (Professional)',
            'French (Limited)',
            'Italian (Limited)',
            'Korean (Elementary)',
          ],
        },
      ],
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: UserGroupIcon,
      content: [
        {
          title: 'AWS re/Start Graduate',
          issuer: 'Amazon Web Services (AWS)',
          period: 'Jun 2023',
        },
        {
          title: 'Data Mastery for Specialists',
          issuer: 'TechClass',
          period: 'Nov 2024',
        },
        {
          title: 'Cybersecurity for Employees',
          issuer: 'TechClass',
          period: 'Jan 2025',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <h1 className="text-5xl font-bold tech-gradient">Enxhi Helen Nikolla</h1>
            <CheckBadgeIcon className="h-8 w-8 text-primary tech-pulse" />
          </div>
          <p className="text-xl text-gray-300 glow-text">Tech Entrepreneur | CEO, Co-Founder & CTO | Project & Operations Leadership</p>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Proactive, resilient, and growth-minded builder with a strong track record in leading projects, people,
            and early-stage companies. Focused on technology-enabled execution, meaningful partnerships, and creating
            trusted team environments where strategy turns into measurable outcomes.
          </p>
          <a
            href="https://www.linkedin.com/in/enxhinikolla/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-5 tech-badge px-4 py-2 rounded-md text-sm"
          >
            View LinkedIn Profile
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 space-y-4">
                  {level.content.map((item, i) => (
                    <div key={i} className="bg-background/50 p-4 rounded backdrop-blur-sm">
                      {'title' in item && <h3 className="font-semibold text-primary glow-text">{item.title}</h3>}
                      {'category' in item && <h3 className="font-semibold text-primary glow-text">{item.category}</h3>}
                      {'company' in item && <p className="text-gray-300">{item.company}</p>}
                      {'organization' in item && <p className="text-gray-300">{item.organization}</p>}
                      {'institution' in item && <p className="text-gray-300">{item.institution}</p>}
                      {'issuer' in item && <p className="text-gray-300">{item.issuer}</p>}
                      {'period' in item && <p className="text-sm text-gray-400">{item.period}</p>}
                      {'description' in item && <p className="mt-2">{item.description}</p>}
                      {'level' in item && item.level && <p className="mt-1 text-sm text-gray-300">Level: {item.level}</p>}
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
