$("#btn-search").click(function() {
  console.log("sss");
  getUser().then(res => {
    setAnswer(res.answer);
  });
});

async function getUser() {
  const profileResponse = await fetch("https://yesno.wtf/api");
  return await profileResponse.json();
};
function setAnswer(answer){
  console.log(answer);
  $(".answer").css("display", "block");
  $(".answer-text").text(answer);
}




