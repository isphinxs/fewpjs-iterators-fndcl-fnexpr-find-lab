function superbowlWin(arr) {
    const win = arr.find(game => game.result === "W");
    if (win) {
        return win.year;
    } else {
        return win;
    }
}
