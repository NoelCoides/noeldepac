document.getElementById("loanApplication").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let months = parseInt(document.getElementById("months").value);
    let interest = parseFloat(document.getElementById("interest").value);

    // hesabu riba ya kila mwezi
    let totalInterest = (amount * (interest / 100)) * months;
    let totalPayable = amount + totalInterest;
    let monthlyPayment = (totalPayable / months).toFixed(2);

    document.getElementById("result").innerText =
        `Asante ${name}! Ombi lako la mkopo wa TZS ${amount} limepokelewa.
        Utalipa jumla ya TZS ${totalPayable.toFixed(2)} kwa miezi ${months},
        sawa na TZS ${monthlyPayment} kila mwezi.`;
});