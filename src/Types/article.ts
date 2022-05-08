import {person, org, reference} from './index'

export interface article {
    referenceURL?: string | reference
    referenceImageURI?: string | any
    peopleInvolved?: person[] | person
    orgsInvolved?: org[] | org
}