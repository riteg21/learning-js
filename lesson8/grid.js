let getupTime = prompt("Когда вы просыпаетесь?");

if (getupTime < 7) {
  console.log("Вы жаворонок");
} else if (getupTime >= 7 && getupTime <= 9) {
  console.log("Вы встаете как большинство людей");
} else {
  console.log("Вы - сова");
}
