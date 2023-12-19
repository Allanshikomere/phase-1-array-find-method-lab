// code your solution here
function superbowlWin(record) {
    
    const winningYearObject = record.find(obj => obj.result === "W");
  
    
    return winningYearObject ? winningYearObject.year : undefined;
  }