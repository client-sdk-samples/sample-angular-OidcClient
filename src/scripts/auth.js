// TODO: Did not test
if ((Oidc && Oidc.Log && Oidc.Log.logger)) {
    Oidc.Log.logger = console;
}
new Oidc.UserManager().signinRedirectCallback().then(function (user) {
    if (user == null) {
        document.getElementById("waiting").style.display = "none";
        document.getElementById("error").innerText = "No sign-in request pending.";
    }
    else {
        window.location = "/";
    }
}).catch(function (er) {
    document.getElementById("waiting").style.display = "none";
    document.getElementById("error").innerText = er.message;
});