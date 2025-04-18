export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  role: 'farmer' | 'admin' | 'expert';
  farmSize?: number;
  location?: string;
  createdAt: Date;
}

export interface Pest {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  images: string[];
  severity: 'Low' | 'Medium' | 'High';
  crops: string[];
  regions: string[];
  treatments: Treatment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Treatment {
  type: 'biological' | 'chemical' | 'cultural' | 'mechanical';
  name: string;
  description: string;
  effectiveness: number;
  environmentalImpact: 'Low' | 'Medium' | 'High';
  cost: 'Low' | 'Medium' | 'High';
}

export interface PestReport {
  id: string;
  userId: string;
  pestId: string;
  location: {
    lat: number;
    lng: number;
  };
  severity: 'Low' | 'Medium' | 'High';
  images: string[];
  notes: string;
  status: 'pending' | 'verified' | 'rejected';
  createdAt: Date;
}