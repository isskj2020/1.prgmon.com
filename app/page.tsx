'use client'

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa'
import { profiles } from './profile'
import { useState } from 'react'


export default function Page() {
  const [lang, setLang] = useState<'en' | 'ja'>('en');
  const profile = profiles[lang]

  return (
    <main className='mx-auto max-w-4xl bg-white text-gray-900'>
      <div className='px-8 py-8'>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setLang('en')}
            className={lang === 'en' ? 'font-bold' : 'text-gray-400'}
          >
            EN
          </button>

          <span>/</span>
          <button
            onClick={() => setLang('ja')}
            className={lang === 'ja' ? 'font-bold' : 'text-gray-400'}
          >
            JP
          </button>
        </div>

        <header className='mb-16'>
          <p className='mb-3 text-sm font-medium tracking-widest text-gray-500'>
            {profile.title.toUpperCase()}
          </p>

          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            {profile.name}
          </h1>

          <p className='mt-6 text-lg leading-8 text-gray-600'>
            {profile.desc}
          </p>
        </header>

        <section className='mb-12'>
          <h2 className='mb-6 border-b pb-2 text-sm font-semibold tracking-widest text-gray-500'>
            {profile.workExperienceLabel}
          </h2>

          <div className='space-y-7'>
            {profile.workExperiences.map((item) => (
              <div
                key={`${item.date}-${item.desc}`}
                className='grid gap-2 sm:grid-cols-[180px_1fr]'
              >
                <div className='text-sm text-gray-500'>
                  {item.date}
                </div>

                <div className='text-gray-800'>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='mb-6 border-b pb-2 text-sm font-semibold tracking-widest text-gray-500'>
            {profile.educationLabel}
          </h2>

          <div className='space-y-7'>
            {profile.educations.map((item) => (
              <div
                key={`${item.date}-${item.desc}`}
                className='grid gap-2 sm:grid-cols-[180px_1fr]'
              >
                <div className='text-sm text-gray-500'>
                  {item.date}
                </div>

                <div className='text-gray-800'>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='mb-6 border-b pb-2 text-sm font-semibold tracking-widest text-gray-500'>
            {profile.additionalSkillLabel}
          </h2>

          <div className='space-y-7'>
            {profile.additionalSkills.map((item) => (
              <div
                key={`${item.date}-${item.desc}`}
                className='grid gap-2 sm:grid-cols-[180px_1fr]'
              >
                <div className='text-sm text-gray-500'>
                  {item.date}
                </div>

                <div className='text-gray-800'>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='mb-6 border-b pb-2 text-sm font-semibold tracking-widest text-gray-500'>
            CONTACT
          </h2>

        
          <div className='flex items-center gap-5'>
            <a
              href={profile.github}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='flex items-center gap-2 font-bold text-gray-600 transition hover:text-black'
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='flex items-center gap-2 font-bold text-gray-600 transition hover:text-black'
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
        
            <a
              href={profile.facebook}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='flex items-center gap-2 font-bold text-gray-600 transition hover:text-black'
            >
              <FaFacebook size={24} />
              <span>Facebook</span>
            </a>
        
            <a
              href={`mailto:${profile.email}`}
              aria-label='Email'
              className='flex items-center gap-2 font-bold text-gray-600 transition hover:text-black'
            >
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
