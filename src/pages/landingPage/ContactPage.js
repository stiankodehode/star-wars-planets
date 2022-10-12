import {
  Application,
  Background,
  ContactFormFlex,
  FormFlex,
  ContactWrapper,
  TextEmail,
  YellowText,
  FormBtn,
  BtnWrapper,
  DeleteBtn,
  PostageWrapper,
  ImgStyle,
} from "../../components/contactPageStyle";
import JediLogo from "../../img/jedi-logo.png";

function clickConfirm() {
  alert("Your application has been sent!");
}

const ContactPage = () => {
  return (
    <Background>
      <YellowText>Contact</YellowText>

      <PostageWrapper>
        <ImgStyle src={JediLogo} />
        <p>Letters can be sent to:</p>
        <small>
          The Jedi Council <br />
          Sector 42, Daga System <br />
          Naboo
        </small>
      </PostageWrapper>

      <ContactWrapper>
        <YellowText>Send us your Jedi application</YellowText>
        <ContactFormFlex>
          <FormFlex>
            <section className="text-email-wrapper">
              <label>
                <TextEmail type="text" placeholder="Darth Vader" />
              </label>
              <label>
                <TextEmail
                  type="email"
                  placeholder="darth.vader@darkside.com"
                />
              </label>
            </section>
            <label>
              <Application
                type="textarea"
                rows="8"
                placeholder="Write your application request here"
              />
            </label>
            <BtnWrapper>
              <DeleteBtn type="reset">Delete All</DeleteBtn>
              <FormBtn type="reset" onClick={() => clickConfirm()}>
                Submit Form
              </FormBtn>
            </BtnWrapper>
          </FormFlex>
        </ContactFormFlex>
      </ContactWrapper>
    </Background>
  );
};

export default ContactPage;
