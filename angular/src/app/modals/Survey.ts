import { Question } from './Question';

 export interface Survey{
     id : string
    name : string
    description : string
    domain_type: string
    questionList : Question[];
}