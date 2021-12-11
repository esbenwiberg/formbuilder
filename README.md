# Introduction 
# The Epic Formbuilder

The **formbuilder** is, as the name states, a builder of forms :)
It can **relieve** you from one of the more tiresome task of building forms thoughout your application.
It is **highly customizable** and can be tailored to your exact needs. As crazy as they may be.
Go through the supplied samples, to get inspired :)  

***NOTE: The development is still in an early state!  
The plan is to have a stable release ready in 2022 Q1.***

As for now it's a little hardwired to use FluentUI, but the plan is to extract that part to a different package.
It's made as a plug 'n' play sort of style, where you can create your own builders, that can cover the entirety or a subset hereof, and use them without any hassle.
This will open up for people creating their own builders (it's simple AF) ie. a MaterialUI builder or any other you prefer
In the long run I might open up to other frameworks than React

# Documentation
Find the Storybook documentation site here:
https://esbenwiberg.github.io/formbuilder

# Why do i need this?
TOP 10 reason to use this:

1.  You hate constantly creating forms by hand!
2.  You want to align all your forms in the entire application
3.  You want highly configurable forms that suit your every need
4.  You want easy-to-make validations
5.  You want to be able to create custom components and use/reuse them in your forms
6.  You want to be able to use forms for arrays of objects as well, with all the features you need
7.  You want to use forms with forms in them. And with another form in that. #recursiveformsFTW
8.  You want to be able to group the rendered properties in the form, just the way you want
9.  You want to dynamically at run-time, decide how our form is modelled, ie. by fetching a schema from an API
10. You hate constantly creating forms by hand!

# Install
    ```js
    npm i formbuilder
    ```
    or
    ```js
    yarn add formbuilder
    ```

# Release info
This is still a work in progress, and should not be used in production environments yet!
The plan is to have a stable release ready in 2022 Q1.

### Known issues
- react key warning, that's pretty good at hiding
- validation for nested forms sometimes act

### What's next?
- general stabilization
- various cleanup
- extraction of fluentUI builder to a seperate package. This opens up for us/you to create other builders using different UI libraries (ie. MaterialUI) or just plain html/js

# Quick Start
TODO: add sample code here

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)