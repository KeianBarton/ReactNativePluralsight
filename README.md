# React Native Fundamentals

https://app.pluralsight.com/library/courses/react-native-fundamentals/table-of-contents

# Getting started with React Native

- React Native generates a true native app for cross-platform mobiles (with performance on par)
  Same code for iOS or Android
- Just like React, React Native includes many components ready for use e.g. `<Button>`
- APIs directly talk to the hardware of the device (some are common to all devices, some unique) e.g. `DatePickerAndroid` and `DatePickerIOS`

https://facebook.github.io/react-native/docs/getting-started

```
npm install -global expo-cli
expo init globo
```

Expo doesn't build any native code when creating a project (so you cannot include custom native modules). React Native CLI can be used for installing for specific OS features and will allow you to build native code into your project. Ignite CLI can be used to speed up development (not covered in this course).

`App.js` is the starting point for the app

The Expo app for mobiles allows us to run/debug React Native apps on the appropriate device. Expo itself provides an SDK based on React Native to build mobile apps (e.g. features not available out the box with React Native).

Run the app with `npm start` and hook up via QR code to the Expo app.
Shake the device e.g. select "debug JS remotely" which open a browser window or toggle inspector.

# Learning React Native Basics

- View: A container that supports layout with flexbox, style, stome touch handling and accesibility controls.
- Props / state work the same way as React props / state
