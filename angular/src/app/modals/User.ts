import { Survey } from './Survey';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  location: string;
  ageGroup: string;
  gender: string;
  isAuthenticated: boolean;
  surveysList : Survey[];
  rewardPoints : number;
}