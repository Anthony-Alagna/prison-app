import {org, article, person, reference} from '../../../Types/index'

let people: person[] = []

let TedCruz: person = {
    firstname: "Ted",
    lastname: "Cruz"
}
people.push(TedCruz)
let MikeLee: person = {
    firstname: "Mike",
    lastname: "Lee"
}
people.push(MikeLee)
let ChuckGrassley: person = {
    firstname: "Chuck",
    lastname: "Grassley",
    "title": "Senator",
    "politicalaffiliation": "Republican",
    "relations": [ 
        TedCruz, MikeLee
    ],
    "reference": {
        "picture": "prison-app\\img\\People\\ChuckGrassley.png",
        "article": {
            URL: "https://reason.com/2015/02/12/chuck-grassley-says-sentencing-reforms-b/",
            picture: "prison-app\\img\\People\\Grassley-at-marijuana-hearing.jpg",
            orgsInvolved: 
        }
    },
  }
people.push(ChuckGrassley)