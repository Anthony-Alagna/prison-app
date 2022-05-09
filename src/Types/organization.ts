import {person, reference, article} from './index'

interface lobby{

}
export interface org{
    orgName: string
    members?: string[] | string | person[] | person;
    orgAffiliations?: person[] | person | string[];
    lobbiedFor?: lobby
}