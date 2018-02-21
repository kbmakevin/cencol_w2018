# User Stories
## Gathering Stories
- number of way to gather
1. user interviews
2. questionnaires
3. observation
4. story-writing workshop

## Story-Writing Workshops
- includes developers, users, the product customer and other stakeholders
- priority of stories not emphasized
- effective way to trawl/fishing for stories
- recommended that a workshop be held prior to starting each planned release
- combines brainstorming with low-fidelity prototyping
- maps high level interactions w the planned softwre
- built iteratively
- use a white-board or collaborative software
- draw an empty box
1. what does the user see? (Home Page)
2. what actions does this component have?
3. after listing them out, write user stories for each actions
4. what can user do next? arrows/transitions pointing to new boxes
5. repeat process for each box
6. after reaching a leaf node in the tree, go back up to first decision/branching and go down another path.
7. repeat process for each path

## Low-fidelty prototype
- a prototype per system user role
- a box:
    - denotes a new component for the system
    - component title underlined
    - below the title is a very short list of what the components does or contains
- an arrow:
    - denotes links bt components
    - they are actions that can be taken from one component to anotehr
- for each action, draw a line to a new box, label the box, and write a story
- what the UI will be is not relevant here,
- we are simply walking thru the worklflow (i.e. coverage)
- avoid lenghty debates over each story
- emphasis is on QUANTITY NOT QUALITY
- favor depth-first approach over bread-first approach
- maintain an issues list to come back to

## Ask questions to identify missing stories
- what will the user most likely want to do next?
- what mistakes could the user make here?
- what could confuse the user at this point?
- what additional information could the user need?

## Low-fidelity prototype
- in practice, prototype is thrown away within a few days...for our purpose we will keep it
- stories will be refined by the Team's customer (with help from other team members)
- however, customer is ultimately responsible for the "refined version" of a story

# Acceptance Testing
- express details that result from the conversation bt the customer and developers (avoid writing lengthy lists of "the system shall...")

## Acceptance Testing: Two Steps
1. Notes about future tests are recorded on the back of story cards (any time)
2. Test notes are turned into full-fledged tests that are used to demonstrate that the story has been correctly and fully coded
- test notes capture assumptions made by the customer
- basic criteria used to determine if a story is fully implemented (i.e. "DONE")

## Write tests...
- before coding (i.e. before the start of an iteration)
- whenever custoemr and developers talk about the story and want to capture explicit details
- whenever new tests are discoverd during or after the programming of the story

## Team Customer should...
- go thru the stories and write additional tests he/she can think of at the start of an iteration

## Questions the Team Customer should consider
- what else do the programmers need to know about this story?
- what am i assuming about how this story will be implementd?
- are there cirumstances when this may behave differently?
- what can go wrong during the story?

## Team Customer specifies the tests
- because the final software is the vision held by the customer
- the customer can work w devs to create tests, but the minimum the cust needs to do is to specify tests that will be used as criteria for determining when a story has been correctly developed

## Testing is Part of the Process
- testing must involve users and the Customer, product manager and tester

## The Framework for Integrated Test
- acceptance tests reflect customer acceptance who has been responsible for guiding the system's development
- the customer should execute acceptance tests at the end of each iteration, including all acceptance tests from prior iterations

## Automating Acceptance Testing Frameworks
- FIT
- Capybara
- http://en.wikipedia.org/wiki/Acceptance_testing#List_of_acceptance-testing_frameworks
- 

# Writing Stories
## Independent
- stories should be independent
- avoid introducing dependencies b/t stories...leads to prioritization and planning problems
- estimation problems
- combine the dependent stories into one larger but independent story
- can split stories
- put two estimates on a card

example
- "A company can pay for a job posting with a Visa card"
- "A company can pay for a job posting with a MasterCard"
- "A company can pay for a job posting with an American Express card"
    - difficult to estimate...combine or split stories
-  Combining
    -  "A company can pay for a job posting with a credit card"
-  Splitting
    -  A company can pay with one type of credit card,
    -  and
    -  A company can pay with two additional types of credit cards

## Negotiable
- stories are negotiable...not written contracts
- short descriptions of functionality...the details are to be negotiated b/t the Customer and Development team
- Placeholder to hold a conversation and notes about issues to be resolved during conversation

## Valuable to Purchasers or Users
- users of the software vs Purchasers of the software

## Estimatable
- important for developers to be able to estimate the size of the story (i.e. the amt of time it will take to turn a story into working code)

## Reasons story may not be estimatable
1. Developers lack domain knowledge
    - discuss w Customer to get general understanding
2. Devs lack technical knowledge
    - spike (complex story)
3. The story is too big
    - useful to write epics before disaggregating into smaller, constituent stories
        - epic = combination/grp of smaller constituent stories

- stories should be small

## Splitting Epics: Compound Stories
example
- A Job Seeker can post her resume (compound story)
    - a job seeker can mark resumes as inactive
    - a job seeker can have multiple resumes
    - a job seeker can edit resumes
    - and so on...
- Be careful to not split stories too much...too small
    - a job seeker can enter a date for each community service entry on a resume
    - a job seeker can edit a date for each community service entry on a resume
        - fact that u can edit, implies u can enter alrdy...
- A better soln is to grp smaller stories
    - a job seeker can create resumes, which include education, prior jobs, salary history, presentations, community service, and an objective
        - make sure this story is small enough to be left as one story
    - a job seeker can edit a resume
    - a job seeker can delete a resume
        - these 3 together become compound stories. need to be small enough for one iteration
- Disaggregate along functionality
    - preceeding example disaggregate along the lines of create, edit, and delete
- Disaggregate along data
    - a job seekr can add and edit education information
    - a job seeker can add and edit job history information

## Splitting Epics: Complex Stories
- inherently large and cannot be disaggregated into set of constiuent stories
- if uncertainty exists, split into two stories
    - investigative story, and 
    - a story for developing the new feature
- example
    - A company can pay for a job posting with a credit card (devs have no knowledge of cc processing)
        - investigate cc processing (define max time with spike)
        - a user can pay with a credit card

## Combining Stories
- stories that are too small and may take longer to estimate individually
- examples are bug reports and UI changes
- Combined stories are given a name, scheudled and worked on just like any other story

## Testable
- stories should be testable
- if a story cannot be tested, how can the devs know when they have finished coding? See lecture on "Acceptance Testing"
- Untestable stories are commonly found in non-functional requirements (e.g. The system must support peak usage of up to 40 concurrent users)
- strive for automating tests whenever possible
- make sure stories are written using quantifiable technology
    - A user NEVER has to WAIT LONG for any screen to appear
    - vs
    - New screens appear within TWO SEFCONDS in 95% of all cases

# Guidlines for Writing Good Stories
## Start with Goal Stories
- for each user role, identify the goals that user has for interacting with the propsoed software
- these goals (or high-level stories) can be used to generate additional stories as needed
- there are a number of ways of how to split large stories

## Splitting large stories along techinical lines
- a job seeker can post a resume
    - a job seeker can fill out a resume form
    - information on a resume form is written to the database
- not a good approach. why?
    - slice the cake

## Splitting large stories: Slice the Cake
- write replacement stories that provide some level of end-to-end functionality
- a job seeker can post a resume
    - a job s can submit a resume that includes only basic information (e.g. name, address, education history)
    - a job s can submit a resume that includes all information an employer may want to see
- good approach. why?
    - end to end functionality, verifiable, in each iteration, demonstrate value to customer; couldnt do with splitting w tech lines

## Write Closed Stories
- achivement of a meaningful goal
- allows the user/developer to feel he/she has accomplisehd something
- example
    - a recruiter can manage the ads she has placed
        - this is not closed.
    - a recruiter can review resumes from applicants to one of her ads
    - a recruiter can change the expiration date of an ad
    - a recruiter can delete an application that is not a good match for a job
- stories need to be small enough to be estimatable and conveniently shcheduled into a single interation
- large enough to avoid capturing details to oearly (e.g. button position on the app)

## Put Constraints on Cards
- non-functional requirements
- not estimated
- not scheduled into iterations
- acceptance tests can be written to ensure the constraints are not violated
- the system must support peak usage of up to 50 concurrent users

## Size the Story to the Horizon
- focus on stories in the near future
- write stories a t diff levels based on the implementation horizon of the stories
    - write stories for the next few iterations that can be planned into those iterations

## Sample of high-level stories
- a job s can post a resume
- a job s can search job openings
- a recruiter can post a job opening
- a recruiter can search resumes
- the customer can decide to focus only on allowing a job s to post resumes for the first few iterations

## Expanding on "A Job Seeker can post a resume"
- a job s can add a new resume to the site
- a job s can edit a resume that is already on the site
- a job s can remove her resume from the site
- and so on...

## Keep the UI out as long as possible
- keep UI out of ur stories as long as possible to avoid mixing reqs w soln specs
- eventually ui details will be intro as the software becomes omore complete and stories shift away from entirely new functionality to being modifications

## Some Things are not Stories
- user stories are not appropiate for everything
- express requirements in a form that is appropiate for that particular requirement (e.g. UI is better captured with screen captures)

## Include User Roles in the Stories
- "A user can post her resume" vs. "A job seeker can post her resume"
- keeps the user in the forefront of the developer's mind
- sample template
```
"i as a (role) want (function) so that (business value)"
```

- make stories explicitly clear
- example
    - job seekers can remove resumes from the site
    - vs
    - a job seeker can remove resumes
    - vs
    - a job seeker can remove her own resumes
        - this is explicitly clear!

## Write in Active Voice
- user stories are easier to read and understand when written in active voice
- a resume can be posted by a job seeker
    - passive
- a job seeker can post a resume
    - active

## Customer Writes the Stories
- ideally the customer writes the stories...however, on many projects developers help out during an initial story writing workshop, or suggests new stories
- BUT, responbility for writing stories resides with the Customer and cannot be passed to Developers
- Because the Customer is responsible for prioritizing the stories that will go into each iteration...it is vital they understand each story (best way is to write them)
- 