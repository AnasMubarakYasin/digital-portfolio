/// <reference types="astro/client" />

declare namespace Types {
  interface Profile {
    id: string;
<<<<<<< HEAD
    photo: string;
    name: string;
    headline: string;
=======
    image: string;
    photo: string;
    name: string;
    headline: string;
    about: string;
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
    photo: string;
=======
    image: string;
>>>>>>> 75f4020 (feat: add storage service)
    name: string;
    client: string;
    description: string;
    link: string;
<<<<<<< HEAD
  }
  interface Certificate {
    photo: string;
=======
    tags: string[];
  }
  interface Certificate {
    icon: string;
>>>>>>> 75f4020 (feat: add storage service)
    name: string;
    publisher: string;
    published: string;
  }
  interface Education {
<<<<<<< HEAD
    photo: string;
=======
    icon: string;
>>>>>>> 75f4020 (feat: add storage service)
    name: string;
    title: string;
    graduated: string;
  }
  interface Language {
<<<<<<< HEAD
    photo: string;
=======
    icon: string;
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
=======
  interface File {
    path: string;
    size: number;
    type: string;
  }
>>>>>>> 75f4020 (feat: add storage service)
}
