# DailyLifeTracker

A mobile app built to assist you in tracking major functions of daily life including (Sleep, Food intake, Fluid intake, 
Mental Health). This application was built to help a friend of mine dealing with major health issues and needed a 
central location for tracking these functions. Hopefully others will find use for this as well.

## Development

You need an Android emulator setup using API 28 or later. 

Create a file called `local.properties` in the android/ subfolder that points to your Android sdk location.
```
# android/local.properties
sdk.dir=/home/{user}/Android/Sdk
```

Start this device up and proceed with the following commands:

```
# Run the JS server
npx react-native start

# Build the Android application
npx react-native run-android
```

The application should be deployed on your Android virtual device.

## Authors

- Anthony Loukinas <@anthonyloukinas>