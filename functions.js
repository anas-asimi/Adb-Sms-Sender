import { exec } from 'node:child_process';


function smsSender(target, message) {
    exec(
        createShellCommand(target, message),
        { 'shell': 'powershell.exe' }
    )
}


function createShellCommand(target, message) {
    let command = `adb shell service call isms 5 i32 0 s16 "com.google.android.apps.messaging" s16 "null" s16 "${target}" s16 "null" s16 "${message}"`
    console.log(command);
    return command
}


export {smsSender,createShellCommand}