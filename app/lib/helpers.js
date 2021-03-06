const helpers = {};

helpers.parseJsonToObject = (str) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
};

helpers.getGreeting = (theName, theDate) => {
  const month = new Date(theDate).getMonth();
  const date = new Date(theDate).getDate();

  // Luke - could it be the next Jedi?
  if (theName === 'Luke') {
    return 'Luke? Hmmm. The force is strong with your family';
  }

  // May 4 - May the Fourth be with you
  if (month === 4 && date === 4) {
    return 'May the Fourth be with you';
  }

  // Dec 25 - Happy Festivus
  if (month === 11 && date === 25) {
    return 'Happy Festivus';
  }

  // March 14 - Pi day
  if (month === 2 && date === 14) {
    return 'Happy Pi Day';
  }

  return 'Happy ' + ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(theDate).getDay()];
}

module.exports = helpers;
