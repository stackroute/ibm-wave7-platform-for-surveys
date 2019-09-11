export interface Question
{
    questionId:string;
    questionTag:string;
    choices:string[];
    survey_id:string;
    domainType:string;
    response : string;
}