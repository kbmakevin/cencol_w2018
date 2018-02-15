# Week1

Instructor / Professor

Information and Communication Engineering Technology (ICET)

School of Engineering Technology and Applied Sciences (SETAS)

Centennial College, Progress Campus

email: ycam@my.centennialcollege.ca

---

tools we will be using in this course:

0. jdk/jre 8
1. java ee 7 (will be installed on app server; not laptop)
2. eclipse jee oxygen
3. jboss wildfly app server v.10
4. MySQL 6.3 Server / Workbench

4 assignments instead of 8 on course outline

---

typically,
.NET for internal things
Java EE more for internal or external things

High Availability (HA) has failover
    many servers running at same time
    99.9% availability, that 0.1% is for maintenance

jar
    packages thousands of classes, can be moved somewhere else and used easily

jar vs war vs ear?

development process

1.developers all check in code to Github/clear case (ibm)
2.using something like ANT, create package (jar/war/ear)
3.devs test their components in DIT
4.success; moves to SIT (sys integration testing) done by QA
5.3-4weeks, ok, goes to UAT
6.PTE
7.Production

tests will be mcq and or programming questions

lynda.com
    learning java enterprise edition w/alex threedom

thin client vs thick client
    desktop is thick client
        e.g. compiling code => .exe copied to each and every desktop to run 
    
    thin client => e.g. going through browser to access app server, dont need to change browser depending on application

3 ediitons of java
java se
java ee
java me

jre == jvm

jdk vs jre
jdk lets u compile and develop java programs via command-line tools

find out what java beans is
apparently it is a Java SE convention for coding classes
diff from Java Beans (EJB)

---

# Week2

- we will see due date of asn1 after week3
    - still learning material now

- when we save in eclipse, it auto compiles to .class in our bin folder

- 02-Basic-Java-Syntax.pdf
- 03-Java-OOP-Basics.pdf
- 04-Java-OOP-More.pdf
- 

- Java.lang
    - auto imported
    - contains Object class
    - contains alot of core features already

---

# Week3

## Bean
- ???

## DTO
- a best practice
- carry one obj from diff places
- used to carry data, try to minimize bus logic
- can call V0, Bean
    - doesnt matter jsut a name

- javafx can use css to style
- https://www.tutorialspoint.com/javafx/javafx_css.htm

## Singleton design pattern
- only want 1 and only 1 instance of that class in mememory at any given time per JVM
- diff from static...still creating an instance
- private constructor
- private static instantiation
- public method to return that instance

## Threads
- java.lang.Thread and java.lang.Object contain methods for us to manipulate threads
- need to implements Runnable or extends Thread
    - one isnt necessarily better than the other here
- in a typical java application without multi-threading
    - there are always 2 threads running
    - 1 for garbage collection
- atomic actions run on one thread
- synchronized
    - keyword which serializes access to code
- volatile
    - opposite of synchronized, allows multiple threads access to the code at the same time
- collections are not thread safe, need to use one of two methods
    - ...see slides

## Networking
- tcp/ip more reliable
- udp faster but less reliable delivery
    - use if care speed, less care about whether received or not


RE:assignment
- list grp member names and what they contributed
