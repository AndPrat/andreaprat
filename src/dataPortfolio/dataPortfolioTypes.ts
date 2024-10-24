export interface PortfolioData {
  id: string;
  name: string;
  category: string[];
  description: string;
  otherInformation?: string;
  title1?: string;
  title2?: string;
  coverimage: string;
  image1: string;
  image2: string;
}

export type Portfolio = PortfolioData[];
