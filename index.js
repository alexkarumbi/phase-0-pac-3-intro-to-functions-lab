function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    // string.toUpperCase();
     console.log(string.toUpperCase());
}
function logWhisper(string){
    //string.toLowerCase();
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
 //console.log(string===string.toLowerCase());
    if (string === string.toLowerCase())
    {
       return "I can't hear you!";}else if (string === string.toUpperCase())  {
        return "YES INDEED!"
      }else if (string === "Let's have dinner together!"){
        return"I would love to!"
      }

}
// function sayHiToHeadphonedRoommate(string){
//     if (string === string.toUpperCase()){
//         return "YES INDEED!";
//     }
// }
// function sayHiToHeadphonedRoommate(string){
//     if (string === "Let's have dinner together!"){
//         return "I would love to!";
//     }
// }
sayHiToHeadphonedRoommate("Hello");
console.log("yyyyyyyyyy");
logShout("hello");