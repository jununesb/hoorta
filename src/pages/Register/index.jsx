import Figure from "../../components/atoms/Figure";
import Picture from "../../components/atoms/Picture";
import Header from "../../components/organisms/Header";
import HomeInfo from "../../components/organisms/HomeInfo";
import heartImage from "../../assets/images/heartImage.png";
import vegetablePack from "../../assets/images/vegetablePack.png";
import FormRegister from "../../components/molecules/FormRegister";

const Register = () => {
  return (
    <div>
      <Header />
      <FormRegister />
      <Figure type="square">
        <Picture
          image={heartImage}
          width={["218px", "437px"]}
          height={["206px", "412px"]}
          top={["30px"]}
          left={["-40px", "-130px"]}
          position={["relative"]}
        />
      </Figure>
      <Figure type="rectangle">
        <Picture
          image={vegetablePack}
          width={["305px"]}
          height={["444px"]}
          top={["100px"]}
          left={["85px"]}
          position={["relative"]}
        />
      </Figure>
      <HomeInfo />
    </div>
  );
};

export default Register;
