import { Question } from './Question';

 export interface Survey{
     id : string
    name : string
    description : string
    domain_type: string
    respondants:string
    expiryDate:string
    location:string[]
    gender:string
    age:string
    questionList : Question[];
}
