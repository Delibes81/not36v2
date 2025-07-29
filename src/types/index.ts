export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface MenuItem {
  label: string;
  href: string;
}