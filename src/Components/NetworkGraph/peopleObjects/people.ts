import { People } from '@material-ui/icons';
import {org, article, person, reference} from '../../../Types/index'
import OrgsListFull from '../orgObjects/orgs';
let OrgsList: org[] = OrgsListFull

const PeopleListFull: person[] = [

{
    firstname: "Ted",
    lastname: "Cruz"
},

{
    firstname: "Mike",
    lastname: "Lee"
},

{
    firstname: "Chuck",
    lastname: "Grassley",
    "title": "Senator",
    "politicalaffiliation": "Republican",
    "relations": [ 
        
    ],
    "reference": {
        "picture": "prison-app\\img\\People\\ChuckGrassley.png",
        "article": {
            URL: "https://reason.com/2015/02/12/chuck-grassley-says-sentencing-reforms-b/",
            picture: "prison-app\\img\\People\\Grassley-at-marijuana-hearing.jpg",
            orgsInvolved: OrgsList[0] //Apollo Global Managment
        }
    }
},
]