function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }

  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };

  function wrapAdjective(wrapper = '*') {
    return function(adjective) {
      return `${wrapper}${adjective}${wrapper}`;
    };
  }
  function wrapAdjective(character) {
    return function(adjective) {
      if (character === '*') {
        return `You are *${adjective}*!`;
      } else if (character === '||') {
        return `You are ||${adjective}||!`;
    }
};
}
