import {person, reference, article} from './index'

export interface org{
    members: string[] | string | person[] | person;
    orgAffiliations?: person[] | person | string[];
    lobbiedFor?: string[]
}