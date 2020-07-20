function sendMail(contactForm) {
  emailjs
    .send("gmail", "jihane", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      informationrequest: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("Your mail was send successfully", response);
      },
      function (error) {
        console.log("Sorry try again later", error);
      }
    );
  return false;
}