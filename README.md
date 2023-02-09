# Exam-COD-QA-Automation

REQUIREMENT  
-----------------------  
Make a project with Typescript + Playwright to check the Login page.
  
__Objective:__ document test organization decisions. It isn't necessary to implement all the test scenarios, simply documenting them is enough.  
__Deliverable:__ in this exercise not only the delivered code is assessed, but also the documentation; It's recommended to document the recommendations/decisions made and list all the possible use cases to be tested.  
__Delivery time__: 72 hours (Friday at 3:40 p.m. - GMT+1)  
  
  
DECISIONS   
-----------------------  
  
First of all, I chose to do the documentation and coding in English so that you can also evaluate my level of English.  

Second, I chose to use a repository for testing because:  
- I use it in my day to day and it seems to me the minimum for any type of development.  
- You will be able to evaluate my way of working and you will be able to follow up on my process and my thoughts. 
- It's the best way to share the code without thinking about permission, access and so on.
- As indicated by good practices, I created a branch for each feature I wanted to do. At the end of this file you can see the history of the "versions" to also understand how the branch order was without having to see the merges and the history.
- As indicated by good practices, i implemented conventional commit messaging.
  
    
The first thing I obviously did was install playwright and generated the structure that I consider to be the best for this type of project. This structure is explained a in the structure section (little below).

Then I focused on creating the scenarios according to what I think should be tested without knowing exactly the real business and development flows. I think I made the different scenarios possible. Basically my train of thought was by:
- Initial test that the component to be tested is reached correctly.
- The different happy paths: login by username, login by email, with deposits and without deposits. (all its variants)
- Human error scenarios: leaving credentials empty, wrong password.
- The business scenarios: unverified user, blocked user, user forced to change password (so should not be able to log in), user located in a country that haven't permission to log in.

Then I started coding each scenario. Since I had not yet implemented the good practices, I simply started coding in the rough, in order to have a result of the logic and what was necessary faster.
Once I was able to test the scenarios as desired, I started to refactor the code in order to implement the good practices explained in the structure section.  
  
I had to create the structure of the home page because the login test started from there, and that responsibility belongs to the home page. It is also a way to show the benefits of the implemented structure that allows the use of SOLID principles.  
  
I also modified the configuration so that it adapts to what I think is the best, and that is that in the event of failures it generates evidence.
  
Also, I implemented the configuration file behavior per environment. The idea of this is that for each environment of the CI/CD the file is replaced with the necessary information for the test of the scenario in the environment that is being executed. In this way, the information will not be accessible by everyone (especially if production tests are carried out or the information in different environments is sensitive).


STRUCTURE
----------------------- 
__Files:__ 
PO - contains only locators  
CMN - contains common functions for spec  
SPEC - contains only suit cases  

__Directories:__  
Core - contains shared enums, interfaces  
Shared - contains test cases which are equaly associated with more then one page  
Pages - contains the folders of each page tested.  
Pages/*[page-name] - folders which are nested and imitate the route of pages.  
   
  
__Assumptions:__  
  
The directory structure for specs should be determined by route. It means that all you need to find yourself around is to know the route.  
Page-objects should be close to the specs. Thanks to that, whenever you want to write a new test case you don’t have to search for locators, functions.  
Page objects should be shorter and simpler.  
All items should be grouped by domain to decrease entry threshold.  
Reduce risk of creating monolith files.  
Page objects contains only locators.  
Cmn file contains all functions associated with spec mostly.  
Standarized way of specs which is equaly associated with more then one page. (shared)  
More specific imports. You can import just locators or just a functions if you need.  
All spec model is described mostly by three simple files.  
  
  
DISCLAIMER  
-----------------------  
This is the first time I use this framework. Although it is similar to other frameworks that I use, I had to assimilate the peculiarities of this framework (installation, ways to solve problems, etc) in a short time. So maybe in very specific things, there are better solutions or different ways of doing it.    

I would have liked to implement successful login cases, but I couldn't register on the page. The registration process doesn't recognize me as a person on the census. I sent an email with my ID and information. I'm still waiting for an answer.
    
    
RECOMMENDATIONS
-----------------------
I dared to make the following recommendations that I saw when doing this exam:  
- I don't recommend using popup for login or error messages. It is an old way of doing it and in the new good UX/UI practices, it's not recommended to do it. 
- Use Id in HTML elements.
- Improve the registration process. It's slow and discourages signing up.

VERSIONS
-----------------------

>**0.0**  
>    Initial Proyect  

>**0.1**  
>    Create Folder Structure  

>**0.2**  
>    Update Configuration File  

>**0.3**  
>    Add Login Scenarios  

>**0.4**  
>    Add Conclusions  





