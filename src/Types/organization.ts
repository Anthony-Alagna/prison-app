import {person, reference, article} from './index'

interface lobby{
    amountpaid: amount
    issue: string | issue
    motivation?: string
}
interface issue{
    billname: string;
    reference: reference
}
interface amount{
    amount: number
    personMoneyPaidTo: person
}
export interface org{
    orgName: string
    members?: string[] | string | person[] | person;
    orgAffiliations?: person[] | person | string[];
    lobbiedFor?: lobby
}