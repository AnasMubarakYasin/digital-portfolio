/// <reference types="astro/client" />

declare namespace Types {
  interface Profile {
    id: string;
    photo: string;
    name: string;
    headline: string;
    resume: string;
    website: string;
    career: string;
    personal: Personal;
    experiences: Experience[];
    projects: Project[];
    certificates: Certificate[];
    educations: Education[];
    languages: Language[];
    positions: ActivePosition[];
    active_positions: ActivePosition[];
    preferred_positions: PreferredPosition[];
    skills: Skill[];
  }
  interface Personal {
    email: string;
    phone: string;
    dob: string;
    salary: string;
    location: string;
    work: string;
  }
  interface Experience {
    photo: string;
    name: string;
  }
  interface Project {
    photo: string;
    name: string;
    client: string;
    description: string;
    link: string;
  }
  interface Certificate {
    photo: string;
    name: string;
    publisher: string;
    published: string;
  }
  interface Education {
    photo: string;
    name: string;
    title: string;
    graduated: string;
  }
  interface Language {
    photo: string;
    name: string;
    level: string;
  }
  interface ActivePosition {
    photo: string;
    name: string;
    company: string;
    status: string;
  }
  interface PreferredPosition {
    name: string;
    experience: string;
  }
  interface Skill {
    name: string;
  }
}
