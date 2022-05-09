import {person, org, reference} from './index'

export interface article extends reference {
    referenceImageURI?: string | any
    peopleInvolved?: person[] | person
    orgsInvolved?: org[] | org
}