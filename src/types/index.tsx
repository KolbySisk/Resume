export interface Experience {
  jobTitle: string;
  companyName: string;
  start: string;
  end: string;
  description: string;
  bulletPoints?: string[];
}

export interface Education {
  degree: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  website: string;
}
