if (typeof (navigator.msLaunchUri) === "function") {
    navigator.msLaunchUri('microsoft-edge:' + window.location.href,
        function () { window.location.href="https://go.microsoft.com/fwlink/?linkid=2151617" },
        function () {console.log('ie but no edge')}
    )
}