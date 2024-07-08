function createAccount(pin, amount=0) {
    return {
        checkBalance: (pinIn) => {
            return pinIn === pin ? `$${amount}` : 'Invalid PIN.' 
        },
        deposit: (pinIn, deposit) => {
            if (pinIn === pin) {
                amount += deposit;
                return `Succesfully deposited $${deposit}. Current balance: $${amount}.`
            } else {
                return 'Invalid PIN.'
            }
        },
        withdraw: (pinIn, withdrawal) => {
            if (pinIn === pin) {
                if (withdrawal > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
                amount -= withdrawal;
                return `Succesfully withdrew $${withdrawal}. Current balance: $${amount}.`
            } else {
                return 'Invalid PIN.'
            }
        },
        changePin: (pinIn, newPin) => {
            if (pinIn === pin) {
                pin = newPin;
                return 'PIN successfully changed!'
            } else {
                return 'Invalid PIN.'
            }
        }
    }
}

module.exports = { createAccount };
