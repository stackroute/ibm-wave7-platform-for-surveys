import { Question } from './Question';

 export interface Survey{
     id : string
    name : string
    description : string
    domain_type: string
    respondants:number
    expiryDate:string
    location:string[]
    gender:string
    age:string
    status:string
    responses:number
    rewardPoints:number
    questionList : Question[];
}
