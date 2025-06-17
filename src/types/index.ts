export interface UserProfile {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  profileImage: string;
  connectionDegree: string;
  careerInterests: string[];
  personalInterests: string[];
  availability: string;
  mutualConnections?: number;
}

export interface FilterTag {
  id: string;
  label: string;
  isActive: boolean;
} 