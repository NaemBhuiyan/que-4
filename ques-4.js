function wearPPE() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Wearing PPE"), 2000);
  });
}

function fightCorona() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fighting Corona"), 1000);
  });
}

function execute() {
  Promise.all([wearPPE(), fightCorona()]).then((values) => {
    console.log(values);
  });
}

execute();
