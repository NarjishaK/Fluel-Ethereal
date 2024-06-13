function senSubscribe() {
    var params = {
      subscribe: document.getElementById("subscribe").value,
    };
    const serviceID = "service_5ahlkvb";
    const templateID = "template_dtysbow";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("subscribe").value = "";
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  