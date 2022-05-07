import {person} from './person'
import {org} from './organization'
import {reference} from './reference'

export interface article {
    referenceURL?: string | reference
    referenceImageURI?: string | any
    peopleInvolved?: person[] | person
    orgsInvolved?: org[] | org
}