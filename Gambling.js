

/**
 * Notes! 
 * - Use database to store user bets, ect.
 * - Host interface to choose who is part of the current bet, reward them for completing tasks, payout.
 * - User UI should be phone compatible. Which is gross, but like is quite important for the sake of getting something that we'd be able to actually use.
 * 
 * - I probably want to start my own archive of improv games
 * - 
 * 
 * 
 */

// const { cursorTo } = require("readline")


//1-2 odds (ex.  $10 —> +$5 —-> $15)
oneToTwo = [
"Scene doesn’t begin with “I” or “The” (1)",
"No mumbling (1)",
"No one says the word “listen” (2)",
"No reality is denied (2)",
"Not a teaching scene (2)",
"No mentions of off stage characters (1)",
"Someone makes an exclamation (ex. Woah, wow, dang, etc.) (1)",
"No breaking (1)",
"No one is an asshole in the scene (1)",
"No one says the word “interesting” (2)",
"Some object work is done (1)",
"Not a transaction scene (2)",
"No one says the word “hate” (2)",
"Does not take place at work (1)",
"No one stands still for the entire scene (1)",
"Characters know each other in the scene (2)",
"No fourth wall breaks (2)",
"A setting is named (1)",
"No denials (2)",
"No one says the word “awesome” (2)",
"YOU SHOULDN'T BE SEEING THIS FOR A LONG TIME (1)"]

//1-1 odds (ex. $10 —> +$10 —-> $20)
oneToOne = [
"Some object work is done (2)",
"No cussing (1)",
"Scene starts with object work (1)",
"No one is an asshole in the scene (2)",
"An argument breaks out (1)",
"Someone sits on a chair (1)",
"No one says the word “feel” (2)",
"No pauses in the middle of a scene lasting longer than 4 seconds (2)",
"No breaking (2)",
"A setting is named (2)",
"No mentions of off stage characters (2)",
"Scene doesn’t begin with “I” or “The” (2)",
"No mumbling (2)",
"Scene takes place in a household (1)",
"No scenes between strangers (2)",
"Coworker dynamic (1)",
"No one stands still for the entire scene (2)",
"No words are said for the first 4 seconds of a scene (1)",
"At least one character is named (1)",
"Someone makes an exclamation (ex. Woah, wow, dang, etc.) (2)",
"YOU SHOULDN'T BE SEEING THIS FOR A LONG TIME (1)"]

//3-1 odds (ex. $10—-> +$30 —-> $40)
threeToOne = [
"The first letter of the scene is a vowel (1)",
"No cussing (2)",
"Scene starts with object work (2)",
"No questions asked (1)",
"Sibling dynamic (1)",
"An argument breaks out (2)",
"No one says the “yes” (1)",
"One character has a “growing moment” (1)",
"An occupation is named (2)",
"Science term mentioned (1)",
"At least one character is named (2)",
"The characters are in a romantic relationship (1)",
"The first letter of the scene is a consonant (2)",
"Both characters have occupations named (1)",
"No one says the word “no” (1)",
"All characters are happy (1)",
"No argument scenes (2)",
"A food is mentioned (1)",
"No words are said for the first 4 seconds of a scene (2)",
"Parent-child dynamic (1)",
"YOU SHOULDN'T BE SEEING THIS FOR A LONG TIME (1)"]

//5-1 odds (ex.  $10—-> +$50 —-> $60)
fiveToOne = [
"Someone sits on the floor (1)",
"Someone mentions a brand (1)",
"Both people sit on a chair (2)",
"The scene starts with a greeting (Hey, Hi, etc.) (1)",
"An animal is mentioned (1)",
"No one says the word “no” (2)",
"All players touch someone else in the scene (1)",
"At least some of the characters are in a romantic relationship (1)",
"All characters are named (2)",
"None of the players say “um” the entire time (1)",
"There is a plot twist in a scene (1)",
"A time of day is mentioned (1)",
"Teacher- student dynamic (1)",
"Someone has a blue collar occupation (1)",
"The scene starts with a greeting (Hey, Hi, etc.) (1)",
"No one says the word “yes” (2)",
"Player eats on stage (1)",
"A color is mentioned (1)",
"The word “ok” is never mentioned (2)",
"A city, state, or country is mentioned (1)",
"YOU SHOULDN'T BE SEEING THIS FOR A LONG TIME (1)"]

//10-1 odds (ex.  $10—-> +$100 —-> $110)
tenToOne = [
"The scene starts with the word “I” (1)",
"Characters smoke on stage (1)",
"The scene starts with the word “The” (1)",
"Stage fight happens (1)",
"No questions asked (2)",
"Someone sits on the floor (2)",
"The scene starts with a greeting (Hey, Hi, etc.) (2)",
"A word is made up (1)",
"This scene takes place at an office (1)",
"A chess piece is mentioned (1)",
"None of the players say “um” the entire time (2)",
"A motor vehicle is mentioned (1)",
"A character bursts out in song (1)",
"A player sits or lies down on the ground (2)",
"Takes place at work (2)",
"Someone attempts an accent (1)",
"Someone plays a known fictional or non-fictional character (1)",
"A character starts dancing (1)",
"An animal is mentioned (2)",
"A food is mentioned (2)",
"YOU SHOULDN'T BE SEEING THIS FOR A LONG TIME (1)"]

//100-1 odds (ex.  $10—-> +$1000 —-> $1010)
hundredToOne = [
"A certain kind of soup is mentioned (1)",
"A cow is mentioned (1)",
"A DC comic book character is mentioned (1)",
"A country in South America is mentioned (1)",
"The word “balls” is said (1)",
"A string musical instrument is mentioned (1)",
"More than one source of light is mentioned (1)",
"The scene does not take place on land (1)",
"A natural disaster is mentioned (1)",
"More than one source of water is mentioned (1)",
"The word “email” is said (1)",
"A french accent is used  (1)",
"This scene takes place at a gym (1)",
"An ancient civilization is mentioned (1)",
"A chess piece is mentioned (2)",
"The word “baby” is said (1)",
"A current female pop star is mentioned (1)",
"A breakfast cereal is mentioned (1)",
"A US President is mentioned (1)",
"The word “ocean” is said (1)",
"YOU SHOULDN'T BE SEEING THIS FOR A LONG TIME (1)"]

roundNumber = 20;
userCash = 200;
roundActive = false;
submittedThisRound = false;
username = "TEMP";

function storeData() {
    fetch(`https://hack-box.vercel.app/degenGambling/submitData/${username}/${userCash}/${document.getElementById(`bet${1}In`).value},${document.getElementById(`bet${2}In`).value},${document.getElementById(`bet${3}In`).value},${document.getElementById(`bet${4}In`).value},${document.getElementById(`bet${5}In`).value},${document.getElementById(`bet${6}In`).value}`)
}


odds = [[], oneToTwo, oneToOne, threeToOne, fiveToOne, tenToOne, hundredToOne];

function updateRound() {

    for (i=1; i<7; i++){
        str = `Bet${i}CurrentBet`;
        currentBet = odds[i][roundNumber];

        if (currentBet.endsWith("(1)")) {
            conditional = "In at least one of the two scenes: ";
        } else {
            conditional = "In both of the scenes: ";
        }

        currentBet = currentBet.replace(" (1)", "").replace(" (2)", "");
        

        document.getElementById(str).innerHTML = `${conditional}<br>&emsp;&emsp;<b>${currentBet}</b>`;
    }
}

async function getRound() {
    await fetch("https://hack-box.vercel.app/degenGambling/currentRound").then(data => {
        data.json().then(response => {
            roundActive = response["active"];
            if (roundNumber != response["r"]) {
                getMyStuff();
            }
            roundNumber = response["r"];
        });
    });
    updateRound();
    setTimeout(() => {
        getRound();
    }, 1000);
    for (i = 1; i < 7; i++) {
        document.getElementById(`bet${i}In`).disabled = roundActive || submittedThisRound;
    }
    document.getElementById("submitButton").disabled = roundActive || submittedThisRound;
}

function submitBets() {
    sum = 0;
    canSub = true;
    document.getElementById("cashError").hidden = true;
    document.getElementById("tenError").hidden = true;
    document.getElementById("negError").hidden = true;
    for (i = 1; i < 7; i++) {
        if (parseInt(document.getElementById(`bet${i}In`).value)%10 != 0) {
            document.getElementById("tenError").hidden = false;
            canSub = false;
        }
        if (parseInt(document.getElementById(`bet${i}In`).value) < 0) {
            document.getElementById("negError").hidden = false;
            canSub = false;
        }
        sum += parseInt(document.getElementById(`bet${i}In`).value);
    }
    console.log(sum);
    if (sum > userCash) {
        document.getElementById("cashError").hidden = false;
        canSub = false;
    }
    if (canSub) {
        submittedThisRound = true;
        userCash -= sum;
        storeData();
    }
}

async function getMyStuff() {
    await fetch(`https://hack-box.vercel.app/degenGambling/getData/${username}`).then(data => {
        data.json().then(response => {
            userCash = response["cash"];
            submittedThisRound = response["btr"];
            for (i = 1; i < 7; i++) {
                document.getElementById(`bet${i}In`).value = response[`b${i}`];
            }
        });
    });
}

getRound();


/**
 * Get some of this on a hosted server. Probably MHR at this point simply due to the fact that you know how to deal with it.
 * Get a github pages up for the actual interface part.
 * 
 * Logins
 * - Probably make them do a short password as well. 
 * - Database, username and money
 * - Throw it in as a cookie. You can probably just take a lot of the logic that is in MHR
 * 
 * Client interface
 * - Buttons so you can actually gamble
 * - Make it actually look somewhat decent
 * 
 * Host interface
 * - Button to set which bet
 * - Button to increment round
 * - Button to close betting
 * - Payout
 * - Choose performers
 * - Payout performers
 * 
 * Server
 * - Holds which round
 * - Has to handle gambles - this is more complex than I am giving myself the time to set up. hm. uh oh. We'll be ok probably. Probably. I can code well. And I have from one to five to do this part really.
 * 
 * Database
 * - Players
 * -- Money
 * -- Current bet on (1-6)
 * Honestly that's kinda it? So maybe not that hard overall.
 * 
 * Like overall this project isn't really that bad. I just should have started a few days ago and not have left it for a DAY OF project. Let's see what I can do with a max of four hours.
 * 
 * Good luck.
 * 
 * Hour one:
 * - User interface
 * 
 * Hour two:
 * - Database
 * -- Logins and bets
 * -- A login page isn't hard. And honestly MHR looks ok on the phone so just take that login page. JUST STEAL THE PAGE and rework the login part itself.
 * 
 * Hour three:
 * - Host interface
 */