# MVP Set Up

1.  Make sure to install [dependencies and environment](https://reactnative.dev/docs/environment-setup) as described on the link or below. 
2. In MVP folder, run `npx react-native start` to start Metro Bundler
3. Open a new terminal and run `npx react-native run-android` to see app runnning in Android emulator

# MVP Installation

1. This guide follows React's environment [set up](https://reactnative.dev/docs/environment-setup).
	- For the M1 MacOS, follow [how to run android emulator](https://blog.inkdrop.info/running-a-react-native-app-on-android-emulator-in-m1-mac-76a16348d1e4) and [setting up react](https://dev.to/ravics09/setup-react-native-and-run-app-on-mac-m1-32kk).
2. 
	- For MacOS, make sure you have [homebrew](https://brew.sh/) installed and open a terminal and run to install node: `brew install node`, install watchman: `brew install watchman`, and  install Java Development Kit: `brew install --cask adoptopenjdk/openjdk/adoptopenjdk8`.
	- For Windows, make sure you have [Chocolatey](https://chocolatey.org/) installed and open command prompt and run  `choco install -y nodejs.install openjdk8` to install node and java development kit
3. Download and install [Android Studio](https://developer.android.com/studio/index.html).
	- Make sure during installation that the boxes `Android SDK`, `Android SDK Platform` and `Android Virtual Device` are checked. 
4. Install Android SDK: Open Android Studio, click on 'Configure' button and select 'SDK Manager'. Select the 'SDK Platforms' tab from within the SDK Manager, then check the box next to 'Show Package Details'in the bottom right corner. Look for and expand the 'Android 10 (Q)'' then make sure the following items are checked: 'Android SDK Platform 29' and 'Intel x86 Atom_64 System Image' or 'Google APIs Intel x86 Atom System Image'
5. Configure the Android Home variable: 
	- For MacOS: add the following lines to `$HOME/.bashprofile` or `~/.zprofile`: 
	`export ANDROID_HOME=$HOME/Library/Android/sdk
	export PATH=$PATH:$ANDROID_HOME/emulator
	export PATH=$PATH:$ANDROID_HOME/tools
	export PATH=$PATH:$ANDROID_HOME/tools/bin
	export PATH=$PATH:$ANDROID_HOME/platform-tools`
	- For Windows: open windows control panel, click on 'User Accounts', then click 'User Accounts' again, click on 'Change my environment variables', click on 'New...'' and write ANDROID_HOME on variable name, and  write `C:\Users\YOUR_USER\AppData\Local\Android\Sdk` on variable value

