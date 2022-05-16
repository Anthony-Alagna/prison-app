import { People } from '@material-ui/icons'
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
},
{
    orgName: "GEO Group",
    lobbiedFor: {
        issue: {
            billname: "	FY21 Commerce/Justice/Science Appropriations (H.R.7667/H.R.7617), federal government use of contract correctional facilities and Residential Reentry Centers; FY21 Homeland Security Appropriations (H.R.7669),",
            reference: {
                textSumamry: "GEO's summary: federal government use of contract correctional facilities; contractual obligations of contract correctional facilities; use of federal contract monitoring and supervision services. GEO's political and governmental relations activities focus on promoting the use of public-private partnerships in the delivery of correctional services including evidence-based rehabilitation programs, both in-custody and post-release, aimed at reducing recidivism and helping the men and women in our care successfully reintegrate into their communities. GEO does not take a position on or advocate for or against criminal justice policy related to criminalizing certain behaviors or determining the length of criminal sentences. Furthermore, GEO does not take a position on, nor advocate for or against, the basis or length of an individual's detention.",
                URL: "https://lda.senate.gov/filings/public/filing/874b9aa7-47f0-4b61-99b3-02608601804d/print/"
            }
        },
        amountpaid: {
            amount: 70023,
            personMoneyPaidTo: PeopleList[3] // David Perdue
        }
    }
}
]
export default OrgsListFull