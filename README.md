# Exam-COD-QA-Automation


STRUCTURE
-----------------------
Description:  
Files:  
PO - contains only locators  
CMN - contains common functions for spec  
SPEC - contains only suit cases  

Directories:  
Core - contains shared enums, interfaces  
Shared - contains test cases which are equaly associated with more then one page  
Pages - contains the folders of each page tested.  
Pages/*[page-name] - folders which are nested and imitate the route of pages.  
  
  
Assumptions:  
  
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


VERSIONS
-----------------------

>**0.0**  
>    Initial proyect  

>**0.1**  
>    Create folder structure  

>**0.2**  
>    Update Configuration File  

>**0.3**  
>    Add Login Scenarios  
