(function () {
    let changeName = [
        'Lorry Morengo, CEO',
        'Nazar Klimovych, Team Leader of team - 05',
    ]

    function getChanging() {
        const index = Math.floor(Math.random() * changeName.length);
        return changeName[index];
    }
    function takeName() {
        const name = document.querySelector('.author');
        name.innerHTML = getChanging();
    }

    setInterval(takeName, 2000)
})();
