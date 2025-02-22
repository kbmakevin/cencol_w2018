# Week1
- only 20% companies have erp
- this course not only about erp, relevant for us to go into work
- quiz 1 on feb2, friday
---

# Chapter 1: Introduction to Enterprise Resource Planning Systems
Notes from lecture slides:
```
erp => all modules into one sys, data from one easily visible and usable by another module 
```
```
legacy sys => old m/f sys 
```
- There are 14 ERP-Supported Business Processes

manage IT 
- supporting software, upgrades, deciding whether or not to, pros/cons

how do u know if business problems?
- measures to track it
    - e.g. > x # luggages reported problems for airlines, low traffic for websites

lack of compliance?
- mentioned sth about banks as an example

complexity
1. number of db
2. number of transactions
3. number of concurrent transactions
4. number of points of logon/entry

#  Questions from Quiz 1 (True/False)
1. ERP software for a particular industry is known as a(n) vertical or industry solution.
    - **true**, ERP vendors offer industry-specific versions of their software called vertical solutions (or industry solns)

2. A business process is a collection of activities that together add value to the company.
    - **true**

3. ERP systems are sold in modules, or groups of related programs performing a major function within the system, such as accounting or manufacturing.
    - yes, sold in modules
    - process-centered - supports end-to-end business processes
    - accounting is part of module "Management Accounting"
    - manufacturing is part of module "Operations and Supply Chain"
    - **true**

4. Software developers and programmers verify there is proper security in the data center.
    - **False**, the verification that there is proper security in the data center is done by IT Auditor
    - Software devs/programmers design customizations and program ERP system if necessary

5. missing question

6. missing question7. 

7. A best practice is a business process that is generally recognized as more effective and/or efficient than others in a particular industry.
    - **true**

8. ERP systems evolved from customer relationship management systems.
    - **false**, it evolved from material requirements planning (MRP systems) and discrete manufacturing industry
    - MRP developed into MRPII (Manuafcutring resourc eplanning systems)
    - MRPII into ERP

9. End users are involved in selecting the best ERP system out of the possible choices
    - **False**, Integration Parterns help clients select the best ERP system out of the possible choices
    - End Users are simply employees in an organization

10. Data integration increses data duplication and does not facilitate reconciliations among systems.
    -  **false**, data integration reduces data duplication and reconciliations among systems
---

# Week2
- netsuite, complete ERP in the cloud
    - bought out by Oracle

---

# Week3
- showed lots of pictures in wk3 on ecent
- started lec slides: relational dbms

---

# Week4
- read all slides, some stuff on test not from txtbk but in the other slides
- EAI & ERPs
- strong vs weak entitiees
- why are we interested in categorizing data?
    - e.g. master, transaction, etc.
    - when we migrate data, it can easily take up to 1-2 years
    - master data should be prioritized, need to be able to easily find it
    - this data is critical to the company, need to back it up, etc.

## EAI
- Enterprise Application Integration

### ERP vs EAI
- eai cheaper measure, if u cannot afford erp
- business process restructuring (BPR)
- erp has all business processes, u adapt to erp
- eai allows u to retain some of ur business processes
- erp takes long to implement, depends on business (2-3 yrs possibly)

- one soln w/o eai, need to have domain knowledge of everything to be able to connect it to the e-commerce site
    - very complicated

- EAI, central node
    - ppl need to have lots of domain knowledge here
    - it is a means to delay the neccessity to get an ERP
    - lots of diff transformations happening here
        - e.g. one module may use ascii, another one utf, etc.

- ODS, operational data store
    - used as temp database

- remote procedure call (RPC)
    - comes from UNIX
    - calling a function which resides in a diff sys
    - e.g. verifying cibc credit cards
        - u dont have the logic/data for ccs on ur side
        - u send request/call to cibc, they return t/f to u

## Cloud Computing
- the internet was more influential than the industrial revolution!
- can be divided into two models
1. Deployment Models
    - define the type of access to the cloud

- community cloud
    - e.g. credit rating, all banks access the same "cloud"

2. Service Models
    - reference models on which the Cloud Computing is based

- IaaS, potential issue
    - shared rsrcs, if someone else pays more than u, ur jobs may be lower priority

- https://doublehorn.com/saas-paas-and-iaas-understanding/

---

# Week5
- over reading week play around with netsuite
- identify bottle neck in a business e.g. when shopping, queueing up to pay is bottleneck

---

# Week6
- business process, process maps

## Test Review
- test on slides, not book
- 10 mcq
- 10 tf
- 5 short ans
- includes the cloud computing slides, not just textbook slides
    - review all ppt slides on ecentennial
    - eai slides
        - 80% of jobs are in here, bc not everyone can afford erp
- 