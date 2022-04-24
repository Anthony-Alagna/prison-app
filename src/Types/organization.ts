import {person} from './person'

export interface org{
    members: string[] | string | person[] | person;
    orgAffiliations?: person[] | person | string[];
    lobbiedFor?: string[]
    

}