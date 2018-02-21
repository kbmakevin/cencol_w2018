# Story Estimation Using the Wideband Delphi Approach
## Definition
- essentially asking 'when will u be done?'
- the wideband delphi approach is an iterative technique used to estimate stories (Boehm, 1981).

## What Makes a Good Approach to Estimating Stories?
- allows us to change our mind whenever we have new information about an **unstarted** story
- works for both epics and smaller stories
- doesnt take a lot of time
- provides useful information about the proj's progrss and the work remaining
- is tolerant of imprecision in the estimates
- can be used to plan releases
- avoids groupthink

## Pre-conditions to the Wideband Delphi Approach
- all team members must participate
- stories should contain as many acceptance tests as possible; recall that acceptance tests are criteria determining whether a story is **DONE**
- have a stack of blank index cards, or use an electronic medium that allows for a secret ballot type of answer (more on this).

## Wideband Delphi Approach to Estimation
1. The team's customer randomly selects a story from the collection and reads it to the Developers
    - the devs ask as many questions as they need and the customer answers them to the best of her ability (this is only possible bc the cust is responsible for writing the acceptance tests)
    - if she doesnt know the ans, she takes a guess or asks the team to defer estimating that story
    - note: if u are doing the estimation via a Google+ Hangout, have the team Customer share his/her screen with the story generated from the story-writing workshop
2. when there are no more questions, each developer secretly writes an estimate in ideal developer hour on a card (or text it to the Customer) 
3. when everyone has finished estimating, the result is revealed and the high and low estimators explain their estimates
4. the group discusses it for up to a few minutes
    - a note or two may be jotted on the story card
    - a new story or two may be written
5. go back to step 2 and repeat the process until the estimates converges

## A Note on Estimate Convergence
- convergence of the estimates can usually be achieved after three rounds
- convergence of the estimates does not mean everyone's estimates must be the same
    - if, on the second round, estimate results are 3, 3, 3 , and 2, just ask the low estimator if she is okay with using the 3 as the estimate
- aim for reasonableness not absolute precision

## Triangulate
- definition: triangulating an estimate refers to estimating a story based on its relationship to one or more stories
- after the first few estimates have been made, it becomes possible (and necessary) to triangulate the estiamtes
    - suppose a story is estimated at 4 ideal developer hours and a second story is estimated at 2 ideal developer hours
    - considered together the devs shuld agree that the first story is roughly twice the size of the second story
    - when estimating a third story at 3 ideal dev hours, it would be roghly be in b/t the first and second story
- triangulation helps the team from gradually changing the meaning of an "ideal developer hour"
- 