import {org, person, reference, article} from '../../../Types/index'
import PeopleListFull from '../peopleObjects/people'

let PeopleList: person[] = PeopleListFull

let OrgsListFull: org[] = [
{
    orgName: "Apollo Global Management",
    lobbiedFor: {
        issue: {
            billname: "H.R.5587: To amend the Federal Food, Drug, and Cosmetic Act with respect to the regulation of hemp-derived cannabidiol and hemp-derived cannabidiol containing substances.",
            reference: {
                textSumamry: "This bill implements barriers for growers of hemp related products to enter the market. Specifcally this bill would require the Food and Drug administration to monitor any product derived from cannabidiol or hemp-derived cannabidiol containing substance" ,
                URL: ["https://www.opensecrets.org/federal-lobbying/bills/summary?id=hr5587-116","https://www.congress.gov/bill/116th-congress/house-bill/5587"]
            }
        },
        amountpaid: {
            amount: 17100,
            personMoneyPaidTo: PeopleList[2] //Chuck Grassley
        }
    }
}
]
export default OrgsListFull