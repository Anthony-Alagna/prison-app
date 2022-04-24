import {person} from './person'
import {org} from './organization'

export interface article {
    referenceURL?: string
    referenceImageURI?: string | any
    peopleInvolved?: person[] | person
    orgsInvolved?: org[] | org
}