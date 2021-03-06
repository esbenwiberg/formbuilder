# Introduction 
## The only React formbuilder you'll ever need

The **formbuilder** is, as the name states, a builder of forms :smiley:  
It can **relieve** you from one of the more tiresome tasks of building forms thoughout your application.  
It is **highly customizable** and can be tailored to your exact needs. As crazy as they may be.  
Go through the supplied samples, to get inspired :smiley:  

***NOTE: The development is still in an early state!  
The plan is to have a stable release ready in 2022 Q1.***

It's made as a plug 'n' play sort of style, where you can use the available builders. For now there's only a 'FluentUI' builder. (this is in a seperate package '@wiberg/fluentui-builder')  
Or you can create your own builders, that can cover the entirety or a subset hereof, and use them without any hassle.  
This will open up for people creating their own builders (it's quite simple) ie. a MaterialUI builder or any other you prefer.  

It's dependency-free (except for React), so it's lightweight and headless!

# Why do i need this?
**TOP 11 reason to use this:**

1.  You hate constantly creating forms by hand!
2.  You want to align all your forms in the entire application
3.  You want highly configurable forms that suit your every need
4.  You want easy-to-make validations
5.  You want to be able to create custom components and use/reuse them in your forms
6.  You want to be able to use forms for arrays of objects as well, with all the features you need
7.  You want to use forms with forms in them. And with another form in that. #recursiveformsFTW
8.  You want to be able to group the rendered properties in the form, just the way you like
9.  You want to dynamically at run-time, decide how your form is modelled, ie. by fetching a schema from an API
10. You want to use your specific UI library for rendering the forms. ie. FluentUI, MUI, Chakra, your own or whatever!
11. You hate constantly creating forms by hand!

# Documentation
Find the Storybook documentation site here:  
https://esbenwiberg.github.io/formbuilder

# Npm
Find the npm package [here](https://www.npmjs.com/package/@wiberg/formbuilder)

# Install
```js
npm i @wiberg/formbuilder

#builder
npm i @wiberg/fluentui-builder
or
npm i @wiberg/materialui-builder
#or create your own builder in your app
```
or
```js
yarn add @wiberg/formbuilder

#builder
yarn add @wiberg/fluentui-builder
or
yarn add @wiberg/materialui-builder
#or create your own builder in your app
```

## Requirements
PeerDependencies:
```React```

# Release info
**This is still a work in progress, and should not be used in production environments yet!**  
The plan is to have a stable release ready in ***2022 Q1***.

### Known issues
- some react hooks exhaustive deps needs to be handled
- ~~a minor type issue in IFormBuilderProps, causing the need for cast to any~~

### What's next?
- general stabilization
- various cleanup
- more documentation
- material ui builder

# Quick Start
Find a 'Get started' guide on the [documentation site](https://esbenwiberg.github.io/formbuilder/?path=/docs/get-started--page)