// code your solution here
function saturdayFun(activity = "roller-skate"){
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function (activity = "go to the office"){
    console.log(`This Monday, I will ${activity}.`);
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(outer = "*"){
    const inner = function(work = "special"){
        let result = `You are ${work}`
        return result("*")
    }

}