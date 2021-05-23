# Domo React Template

## What is this?

This is a base template that you can use to create Domo custom apps with React. 

## Setup

1. Clone this repo
2. From the root of the directory , `npm install`
3. Once all packages are installed, `npm run build`
4. Once it is built, `npm start` to test if everything builds properly
5. The app should now be running properly

## How to deploy

1. From the root of the directly, `npm run build`
2. `cd build`
3. `domo publish`
4. If it is your first time using `domo publish` on this app, your app will not have a design ID. 
    When you publish, your `build/manifest.json` will have a design ID. Copy that id to `public/manifest.json`. This ensures
    that when you publish down the road, it won't create copies of your app but will instead update the same app each time.
5. In your domo instance go to `Asset Library`. Select your app, you can then create a card with your app

## Requirements

Domo app developer documentation can be found [HERE](https://developer.domo.com/docs/dev-studio/dev-studio-overview)
You will need to have followed the instructions found the developer documentation to install [DomoCLI](https://developer.domo.com/docs/dev-studio/set-up)

Once you have, you can use `domo login` which will allow you to connect and publish to your instance.

Another important item to remember is the manifest.json. You'll see it in the `/public` directory. This is where the App's name,version,size, and dataset connections
are derived from. The "id" in manifest.json is the "design id" of your app. When you deside to `domo publish`, you may realize that an entirely new "id" is created
in your new build folder. If the id in your build folder doesn't match the id in your public folder, you will end up publishing and entirely separate app to your instance.

Remember to make sure that you copy the "id" from your manifest in `/public` to the manifest in your `/build`. You can always log into your domo instance, check your asset library and look at your custom app designs. If you see several of the same app, that means you kept publishing with different id's. If you click on your custom app within asset library, then click info you will see the Design Id. Copy that back into your project if you lost it somehow. Then when you publish, it will overwrite the same app rather than uploading a completely different app.


## Summary of Project Components and Logic

The summarized structure:

```
<App>
    <MuiThemeProvider>
            <StateProvider>
            </StateProvider>
    </MuiThemeProvider>
</App>
```


This app utilizes the Material UI library. MuiThemeProvider is part of that library, and is used to wrap components with a theme. 
This app also utlizes React Context, this is where you see `<StateProvider>` come in

`<StateProvider>` is where ALL LOGIC resides. The state resides here, it utilizes [React-Context](https://reactjs.org/docs/context.html) to pass state and functions down to children components. This is an alternative to something called Prop Drilling or using Redux.
The functions that handle all the text field changes, submission, button clicks also live here.

Any components that are wrapped by `<StateProvider>` will be able to use functions and state variables that are passed down. 

If you don't want to use React Context or Material UI, you can simply remove MuiThemeProvider and StateProvider and build your react app however you want.