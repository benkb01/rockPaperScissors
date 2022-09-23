

pChoice = prompt("Rock, paper, or scissors?");
cChoice = getCompChoice();

console.log("You chose " + pChoice + ". Computer chose " + cChoice + ". You " + getResult(pChoice, cChoice) + "!");



function isFormatted(choice)
    {
    if (choice.compareToIgnoreCase("rock") == 0)
        {
        return "rock";
        }
    else if (choice.compareToIgnoreCase("paper") == 0)
        {
        return "paper";
        }
    else if (choice.compareToIgnoreCase("scissors") == 0)
        {
        return "scissors";
        }
    else 
        {
        return "end";
        }
    }

function getCompChoice()
{
    temp = Math.floor(Math.random() * 3);
    if (temp == 0)
        {
        return "rock";
        }
    else if (temp == 1)
        {
        return "paper";
        }
    else    
        {
        return "scissors";
        }
}

function getResult(p, c)
{
if (p===c)
    {
    return "tie";
    }
else if (p === "rock")
    {
    if (c === "paper")
        {
        return "lose";
        }
    else
        {
        return "win";
        }
    }
else if (p === "paper")
    {
    if (c === "rock")
        {
        return "win";
        }
    else    
        {
        return "lose";
        }
    }
else
    {
    if (c === "rock")
        {
        return "lose";
        }
    else    
        {
        return "win";
        }
    }

}