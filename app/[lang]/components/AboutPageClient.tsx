'use client';

import { Tabs, TabPanel } from './Tabs';
import { getAssetPath } from './getAssetPath';

function getPhoto(photoPath: string): string {
  return /^https?:\/\//.test(photoPath) ? photoPath : getAssetPath(photoPath);
}

type SocialLinks = Record<string, string | undefined>;

interface PersonCardProps {
  name: string;
  role: string;
  location: string;
  photo: string;
  social: SocialLinks;
  size?: 'large' | 'small';
}

function PersonCard({ name, role, location, photo, social, size = 'small' }: PersonCardProps) {
  const isLarge = size === 'large';
  return (
    <div className="text-center p-6 rounded-xl bg-white/5 border border-purple-500/20 backdrop-blur-sm">
      <div
        className={`mx-auto rounded-full overflow-hidden border-2 border-purple-500/30 mb-4 ${
          isLarge ? 'w-32 h-32' : 'w-24 h-24'
        }`}
      >
        <img
          src={getPhoto(photo)}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-white mb-1`}>{name}</h3>
      <p className="text-purple-300 text-sm mb-1">{role}</p>
      {location && (
        <p className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location}
        </p>
      )}

      <div className="flex justify-center gap-3">
        {social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.806 0-1.454.651-1.454 1.454s.651 1.454 1.454 1.454 1.454-.651 1.454-1.454-.651-1.454-1.454-1.454z"/>
            </svg>
          </a>
        )}
        {social.github && (
          <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.112.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.795 24 17.3 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        )}
        {social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
        {social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        )}
        {social.tiktok && (
          <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

interface PartnerCardProps {
  name: string;
  role: string;
  location: string;
  photo: string;
  social: SocialLinks;
}

function PartnerCard({ name, role, location, photo, social }: PartnerCardProps) {
  return (
    <div className="text-center p-6 rounded-xl bg-white/5 border border-purple-500/20 backdrop-blur-sm">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-purple-500/30 mb-4 flex items-center justify-center bg-white/5">
        <img
          src={getPhoto(photo)}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-purple-300 text-sm mb-1">{role}</p>
      <p className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {location}
      </p>
      <div className="flex justify-center gap-3">
        {social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.806 0-1.454.651-1.454 1.454s.651 1.454 1.454 1.454 1.454-.651 1.454-1.454-.651-1.454-1.454-1.454z"/>
            </svg>
          </a>
        )}
        {social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        )}
        {social.tiktok && (
          <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

interface AboutPageClientProps {
  dict: {
    aboutPage: {
      whoAreWe: string;
      paragraphs: string[];
      stats: { value: string; label: string }[];
      donate: string;
      donateLink: string;
      join: string;
      joinLink: string;
      joinVolunteer: string;
      joinVolunteerLink: string;
      joinUs: string;
      djBenefits: string;
      djBenefitsList: string[];
      volunteerBenefits: string;
      volunteerBenefitsList: string[];
      joinNow: string;
      founders: string;
      foundersList: { name: string; role: string; location: string; photo: string; social: SocialLinks }[];
      volunteers: string;
      volunteersList: { name: string; role: string; location: string; photo: string; social: SocialLinks }[];
      collaborators: string;
      collaboratorsList: { name: string; role: string; location: string; photo: string; social: SocialLinks }[];
      partners: string;
      partnersList: { name: string; role: string; location: string; photo: string; social: SocialLinks }[];
    };
  };
}

export default function AboutPageClient({ dict }: AboutPageClientProps) {
  const { aboutPage } = dict;

  const tabs = [
    { id: 'mission', label: aboutPage.whoAreWe },
    { id: 'join', label: aboutPage.joinUs },
    { id: 'team', label: aboutPage.collaborators },
    { id: 'partners', label: aboutPage.partners },
  ];

  return (
    <section className="py-[50px] bg-grid-pattern relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <Tabs tabs={tabs} defaultTab="mission">

          {/* ===== MISSION TAB ===== */}
          <TabPanel tabId="mission">
            {/* Paragraphs */}
            <div className="space-y-6">
              {aboutPage.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full">
              {aboutPage.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/5 border border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 title-bg">
                    {stat.value}
                  </div>
                  <div className="text-sm text-purple-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Donate button */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <a
                href={aboutPage.donateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-xl py-4 px-10 text-lg text-white font-bold no-underline flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                {aboutPage.donate}
              </a>
            </div>
          </TabPanel>

          {/* ===== JOIN US TAB ===== */}
          <TabPanel tabId="join">
            {/* DJ Benefits */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-3 title-bg">
                  {aboutPage.djBenefits}
                </h3>
                <div className="section-divider max-w-xs mx-auto" />
              </div>
              <ul className="space-y-4 max-w-3xl mx-auto">
                {aboutPage.djBenefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-8">
                <a
                  href={aboutPage.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl py-4 px-10 text-lg text-white font-bold no-underline border-2 border-purple-500 hover:bg-purple-500/30 transition-all duration-300 flex items-center gap-3 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  {aboutPage.joinNow}
                </a>
              </div>
            </div>

            {/* Volunteer Benefits */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-3 title-bg">
                  {aboutPage.volunteerBenefits}
                </h3>
                <div className="section-divider max-w-xs mx-auto" />
              </div>
              <ul className="space-y-4 max-w-3xl mx-auto">
                {aboutPage.volunteerBenefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-8">
                <a
                  href={aboutPage.joinVolunteerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl py-4 px-10 text-lg text-white font-bold no-underline border-2 border-purple-500 hover:bg-purple-500/30 transition-all duration-300 flex items-center gap-3 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  {aboutPage.joinNow}
                </a>
              </div>
            </div>
          </TabPanel>

          {/* ===== TEAM TAB ===== */}
          <TabPanel tabId="team">
            {/* Founders */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-3 title-bg">
                  {aboutPage.founders}
                </h3>
                <div className="section-divider max-w-xs mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aboutPage.foundersList.map((founder, index) => (
                  <PersonCard
                    key={index}
                    name={founder.name}
                    role={founder.role}
                    location={founder.location}
                    photo={founder.photo}
                    social={founder.social as SocialLinks}
                    size="large"
                  />
                ))}
              </div>
            </div>

            {/* Volunteers */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-3 title-bg">
                  {aboutPage.volunteers}
                </h3>
                <div className="section-divider max-w-xs mx-auto" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {aboutPage.volunteersList.map((volunteer, index) => (
                  <PersonCard
                    key={index}
                    name={volunteer.name}
                    role={volunteer.role}
                    location={volunteer.location}
                    photo={volunteer.photo}
                    social={volunteer.social as SocialLinks}
                  />
                ))}
              </div>
            </div>

            {/* Collaborators */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-3 title-bg">
                  {aboutPage.collaborators}
                </h3>
                <div className="section-divider max-w-xs mx-auto" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {aboutPage.collaboratorsList.map((collaborator, index) => (
                  <PersonCard
                    key={index}
                    name={collaborator.name}
                    role={collaborator.role}
                    location={collaborator.location}
                    photo={collaborator.photo}
                    social={collaborator.social as SocialLinks}
                  />
                ))}
              </div>
            </div>
          </TabPanel>

          {/* ===== PARTNERS TAB ===== */}
          <TabPanel tabId="partners">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-3 title-bg">
                {aboutPage.partners}
              </h3>
              <div className="section-divider max-w-xs mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {aboutPage.partnersList.map((partner, index) => (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  role={partner.role}
                  location={partner.location}
                  photo={partner.photo}
                  social={partner.social as SocialLinks}
                />
              ))}
            </div>
          </TabPanel>

        </Tabs>
      </div>
    </section>
  );
}
