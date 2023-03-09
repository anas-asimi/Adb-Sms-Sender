import { exec } from 'node:child_process';


function smsSender(target, message) {
    let command = createShellCommand(target, message)
    exec(
        command,
        { 'shell': 'powershell.exe' }
    )
}


function createShellCommand(target, message) {
    return `adb shell service call isms 5 i32 0 s16 "com.google.android.apps.messaging" s16 "null" s16 "${target}" s16 "null" s16 "'${message}'"`
}


export {smsSender,createShellCommand}