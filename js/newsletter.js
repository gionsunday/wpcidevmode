window.addEventListener("load", () => {
  const newsletterBtn = document.querySelector("#newsletterbtn");
  const newserror = document.querySelector("#newslettererror")

  const emailInput = document.querySelector("#newsletteremail");
    const nameInput = document.querySelector("#newslettername");

  newsletterBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (emailInput.value == "") {
      console.log("Please Provide Email");
      emailInput.style.border = "2px solid crimson !important"
      newserror.textContent = "Please enter a valid email!"
    } else {
      newsletterBtn.textContent = "Subscribing...";
      emailInput.style.border = "none"
      
      try {
        const data = await axios.post("https://wcpinitiative.onrender.com/wcpi/api/newsletter", {
          email: emailInput.value,
          name: nameInput.value
        });

        newsletterBtn.textContent = "Subscribed!";
        console.log(data);
        emailInput.value = "";
        nameInput.value ="" 
        newserror.textContent = data.data.maessage

        setInterval(() => {
          newsletterBtn.textContent = "Subscribe";
          newserror.textContent = ""
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  });
});
