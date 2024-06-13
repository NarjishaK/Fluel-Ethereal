function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("phone").value,
    };
    const serviceID = "service_z9vv6qq";
    const templateID = "template_t9tcqih";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("Your Message Send Successfull");
      })
      .catch((err) => console.log(err));
  }
  