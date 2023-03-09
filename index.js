// adb shell service call isms 5<interface function to use> i32 0<sim card to use> s16 "com.google.android.apps.messaging"<app pkg name to use> s16 "null" s16 "+212697748319"<target number> s16 "null" s16 "hello"<message text>
// adb shell service call isms 5 i32 0 s16 "com.google.android.apps.messaging" s16 "null" s16 "+212697748319" s16 "null" s16 "hello"


import {smsSender,createShellCommand} from './functions.js'


for (let i = 1; i <= 20; i++) {
    let number = '+212697748319'
    let message = `hello from nodeJs, sent in ${(new Date).toDateString()}`
    smsSender(number,message)
}
