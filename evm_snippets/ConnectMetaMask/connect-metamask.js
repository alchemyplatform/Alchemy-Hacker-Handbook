// 1. Web3 login function
const loginWithEth = async () => {
    // 1.1 check if there is global window.web3 instance
    if (window.web3) {
      try {
        // 2. get the user's ethereum account - prompts metamask to login
        const selectedAccount = await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((accounts) => accounts[0])
          .catch(() => {
            // 2.1 if the user cancels the login prompt
            throw Error("Please select an account");
          });
  
        // 3. set the global userWalletAddress variable to selected account
        window.userWalletAddress = selectedAccount;
  
        // 4. store the user's wallet address in local storage
        window.localStorage.setItem("userWalletAddress", selectedAccount);
  
        // 5. show the user dashboard
        showUserDashboard();
  
      } catch (error) {
        alert(error);
      }
    } else {
      alert("wallet not found");
    }
  };
  
  // 6. when the user clicks the login button run the loginWithEth function
  document.querySelector(".login-btn").addEventListener("click", loginWithEth);
  