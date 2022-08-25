
function saturdayFun(activity = "roller-skate"){
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function (activity = "go to the office"){
    console.log(`This Monday, I will ${activity}.`);
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(outer = "*"){
    return function(work = "a hard worker"){
        return (`You are ${outer}${work}${outer}!`)
    
    }
    
         
}
const output = wrapAdjective("||")