import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import ModalLayout from "../components/HomePage/ModalLayout";
import MobileNavbar from "../components/HomePage/NavBar/MobileNavBar";
import NavBar from "../components/HomePage/NavBar/NavBar";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";
import { useUserManagementHook } from "../hooks/userManagementHook";
import Aos from "aos";
import 'aos/dist/aos.css'

const Solutions = () => {
  useUserManagementHook();

  const dispatch = useDispatch();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  const { code, signup, forgotpassword } = router.query;

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  // const [screenLoading, screenData] = usePostHttp(
  //   width && height ? { width, height } : "",
  //   "/screen"
  // );

  useEffect(() => {
    if (window.screen.width) setWidth(window.screen.width);
    if (window.screen.height) setHeight(window.screen.height);
  }, []);

  useEffect(() => {
    if (code) setLoginModalOpen(true);
  }, [code]);

  useEffect(() => {
    if (signup) setLoginModalOpen(true);
  }, [signup]);

  useEffect(() => {
    if (user.data && !user.data.verified) setLoginModalOpen(true);
  }, [user]);

  useEffect(() => {
    if (forgotpassword) setLoginModalOpen(true);
  }, [forgotpassword]);

  useEffect(() => {
    Aos.init({ duration: 1500 });

    // Add this CSS rule to disable the horizontal scrollbar
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto'; // Restore the default behavior of the horizontal scrollbar when the component unmounts
    };
  }, []);

  return (
    <>
      <Head>
        <title>Stock Knowledge</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {loginModalOpen && (
        <ModalLayout
          signup={signup}
          code={code}
          forgotpassword={forgotpassword}
          showModal={setLoginModalOpen}
        />
      )}
      <MobileNavbar showModal={setLoginModalOpen} />
      <NavBar showModal={setLoginModalOpen} />
      <div id="home" className="sm:w-screen xs:w-screen">
        <div className="text-white px-20 py-44 space-y-2 md:w-full xs:w-screen"
            style={{
              background:
                "url('images/Our_Offers.png') no-repeat",
              backgroundSize: "cover"
            }}>
          <h1 className="text-center xl:text-6xl lg:text-6xl md:text-6xl sm:text-xl xs:text-xl xl:w-full lg:w-full md:w-full reno:w-full sm:w-full xs:w-full font-bold" data-aos="fade-up">
            Our Offers
          </h1>
        </div>
        <br />
        <br />
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col xxs:flex-col p-6 h-1/4 flex items-center" data-aos="fade-right">
          <div className="md:w-1/2 flex justify-end px-14 transform hover:bg-white transition duration-500 hover:scale-105">
            <img src={`${process.env.ASSETS_DOMAIN}/public/01-lms.png`} />
          </div>
          <div className="md:w-1/2 px-14 md:text-left xs:text-center xxs:text-center">
            <h4 className="text-4xl font-bold text-blue-500">
              Learning Management System (LMS)
            </h4>
            <p className="text-xl">with WebXR</p>
            <br />
            <p className="text-xl text-subheading">
              The WebXR contents are hosted in the LMS. The LMS allows teachers
              to share their materials, give quizzes, and track students’
              activities and progress. It also has student’s profiles that shows
              their courses, tests, and performance statistics.
            </p>
          </div>
        </div>
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col-reverse xxs:flex-col-reverse p-6 h-1/4 flex items-center" data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="md:w-1/2 px-14 md:text-right xs:text-center xxs:text-center">
            <h4 className="text-4xl font-bold text-blue-500">Gamified XR Mobile App</h4>
            <p className="text-xl">
              Augmented Reality (AR) & Virtual Reality (VR) learning contents
            </p>
            <br />
            <p className="text-xl text-subheading">
              Stock Knowledge Extended Reality (XR) mobile application allow
              students to venture into subject areas through simulation, for
              example, by exploring the subatomic world, studying parts of the
              body, exploring lava inside a volcano{" "}
            </p>
            <br />
            <p>
              <a
                href="https://play.google.com/store/apps/details?id=com.StockKnowledge.SKChemistry"
                target="_blank"
                className="text-lg text-subheading text-skBlue hover:text-black"
              >
                DOWNLOAD STOCK KNOWLEDGE VR DEMO ON GOOGLE PLAY
              </a>
            </p>
            <br />
            <p href="#" className="text-lg text-subheading">
              Download the APK for AR AND VR contents:
            </p>
            <ul className="text-subheading">
              <li>
                <a
                  className="text-skBlue hover:text-black"
                  href="https://drive.google.com/file/d/1_lbZ5IhXlcnUOk5XozQsPVApJGMmEq4Q/view?usp=sharing"
                  target="_blank"
                >
                  Version 13-6
                </a>
              </li>
              <li>
                <a
                  className="text-skBlue hover:text-black"
                  href="https://drive.google.com/file/d/1O9hFuADXEK7pwtNonSIO3MKex7hQCfjv/view?usp=sharing"
                  target="_blank"
                >
                  Version 14-7
                </a>
              </li>
              <li>
                <a
                  className="text-skBlue hover:text-black"
                  href="https://drive.google.com/file/d/1m4OHXbySpCaP9--vupA6dHnqkf61-SrR/view?usp=sharing"
                  target="_blank"
                >
                  Version 14-8
                </a>
              </li>
              <li>
                <a
                  className="text-skBlue hover:text-black"
                  href="https://drive.google.com/file/d/1dDggaAKPqfemy0NPe6IjcgSVDaqRePPw/view?usp=sharing"
                  target="_blank"
                >
                  Version 14-9-4
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 px-14 transform hover:bg-white transition duration-500 hover:scale-105">
            <img src={`${process.env.ASSETS_DOMAIN}/public/02 - XR.png`} />
          </div>
        </div>
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col xxs:flex-col p-6 h-1/4 flex items-center" data-aos="fade-right" data-aos-anchor-placement="top-center">
          <div className="md:w-1/2 flex justify-end px-14 transform hover:bg-white transition duration-500 hover:scale-105">
            <img
              src={`${process.env.ASSETS_DOMAIN}/public/03 - gamified.png`}
            />
          </div>
          <div className="md:w-1/2 px-14 md:text-left xs:text-center xxs:text-center">
            <h4 className="text-4xl font-bold text-blue-500">
              Gamified lessons
            </h4>
            <br />
            <p className="text-xl text-subheading">
              We used common game features like points, instant feedback,
              badges, and levels to make the learning process more motivating,
              more engaging, and addictive for digital savvy students. 
            </p>
          </div>
        </div>
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col-reverse xxs:flex-col-reverse p-6 h-1/4 flex items-center" data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="md:w-1/2 px-14 md:text-right xs:text-center xxs:text-center">
            <p className="text-4xl font-bold text-blue-500">
              Adaptive Learning
            </p>
            <p className="text-xl"> that uses Artificial Intelligence</p>

            <br />
            <p className="text-xl text-subheading">
              The adaptive learning feature through the use of AI is for
              personalized studying
            </p>
          </div>
          <div className="md:w-1/2 px-14 transform hover:bg-white transition duration-500 hover:scale-105">
            <img
              src={`${process.env.ASSETS_DOMAIN}/public/04 - adaptive.png`}
            />
          </div>
        </div>
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col xxs:flex-col p-6 h-1/4 flex items-center" data-aos="fade-right" data-aos-anchor-placement="top-center">
          <div className="md:w-1/2 flex justify-end px-14 transform hover:bg-white transition duration-500 hover:scale-105">
            <img src={`${process.env.ASSETS_DOMAIN}/public/05 - tech.png`} />
          </div>
          <div className="md:w-1/2 px-14 md:text-left xs:text-center xxs:text-center">
            <h4 className="text-4xl font-bold text-blue-500">
              Technical Workshops
            </h4>
            <br />
            <p className="text-xl text-subheading">
              Upskilling and re-skilling future workforce with relevant skills
              needed in the age of digital transformation 
            </p>
          </div>
        </div>
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col-reverse xxs:flex-col-reverse p-6 h-1/4 flex items-center" data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <div className="md:w-1/2 px-14 md:text-right xs:text-center xxs:text-center">
            <h4 className="text-4xl font-bold text-blue-500">XR Mobile App</h4>
            <p className="text-xl">VR Box</p>
            <br />
            <p className="text-xl text-subheading">
              Needed to enjoy Stock Knowledge XR and webXR contents
            </p>
          </div>
          <div className="md:w-1/2 px-14 transform hover:bg-white transition duration-500 hover:scale-105">
            <img src={`${process.env.ASSETS_DOMAIN}/public/06 - vrbox.png`} />
          </div>
        </div>
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col xxs:flex-col p-6 h-1/4 flex items-center"  data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div className="md:w-1/2 flex justify-end iframe-container border-box border-8 border-skBlue">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q-NHEO2IS3s?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
          </div>
          <div className="md:w-1/2 px-14 md:text-left xs:text-center xxs:text-center">
            <h4 className="text-4xl font-bold text-blue-500">
              Stock Knowledge Education
            </h4>
            <br />
            <p className="text-xl text-subheading">
            Stock Knowledge provides affordable and accessible digital, experiential learning technologies using games, 
            augmented reality, virtual reality, and AI to make the learning process more fun, engaging, and effective.
            </p>
          </div>
        </div>
        <div className="md:w-full xs:w-screen xxs:w-screen md:flex-row xs:flex-col-reverse xxs:flex-col-reverse p-6 h-1/4 flex items-center" data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div className="md:w-1/2 px-14 md:text-right xs:text-center xxs:text-center">
            <h4 className="text-4xl font-bold text-blue-500">Stock Knowledge Enterprise</h4>
            <br />
            <p className="text-xl text-subheading">
              Stock Knowledge provides cutting-edge products and services to Enterprise customers for their digital training needs. The customized gamified, 
              fully immersive content via web and mobile extended reality (XR- AR, VR, MR) applications enables companies to upskill and reskill their 
              employees effectively and efficiently. The applications offer 70-100% improved employee performance, cost-efficient, and 80% better 
              management of employees anytime, anywhere.
            </p>
          </div>
          <div className="md:w-1/2 iframe-container border-box border-8 border-skBlue">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iqcDXUMro9c?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
        <div className="lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen xxs:w-screen lg:items-center reno:items-start md:items-start sm:items-start xs:items-start xxs:items-start flex bg-blue-100 lg:mt-32 md:mt-32 reno:mt-32 sm:mt-16 xs:mt-16 xxs:mt-16 p-4 lg:flex-row reno:flex-col md:flex-col sm:flex-col xs:flex-col xxs:flex-col">
          <h6
            id="partners"
            className="lg:text-right lg:w-1/2 xs:w-full lg:text-6xl reno:text-6xl md:text-6xl sm:text-4xl xs:text-4xl xxs:text-4xl font-semibold text-heading p-10"
          >
             <span className="reno:block lg:hidden text-skBlue">Our Product</span>
            <span className="text-skBlue lg:block reno:hidden md:hidden sm:hidden xs:hidden xxs:hidden"> Our Product
            
            <br/>
            
            <img src='/06-vrbox-bgremoved.png' width="600" height="300"/> 


            </span>
          </h6>
          <div className="lg:w-1/2 reno:w-full md:w-full sm:w-full xs:w-full xxs:w-full lg:px-0 md:px-20 reno:px-52 flex flex-wrap lg:pb-0 reno:pb-10 md:pb-10 sm:pb-10 xs:pb-10 xxs:pb-10">
            <h6
              id="partners"
              className="lg:text-left lg:w-auto xs:w-full lg:text-6xl reno:text-6xl md:text-6xl sm:text-4xl xs:text-4xl xxs:text-4xl font-semibold text-heading p-10"
            >
              <span className="reno:block lg:hidden text-heading">VR Box</span>
              <span className="text-heading lg:block reno:hidden md:hidden sm:hidden xs:hidden xxs:hidden">
                VR Box
              </span>
            </h6>
            <br />
            <div className="box-border w-full lg:text-left lg:text-4xl reno:text-4xl md:text-4xl sm:text-2xl xs:text-2xl xxs:text-2xl font-base text-heading p-10">
              <p className="text-subheading">
                <span className="font-semibold">&#8369; 200.00</span>/pc
              </p>
              <p className="text-subheading">
                <span className="font-semibold">&#8369; 160.00</span>/for bulk
                orders (minimum of 50 pcs.)
              </p>
              <br />
              <Link href="/cart">
                <a className="text-center rounded-full bg-skBlue font-bold xl:text-xl lg:text-xl reno:text-xl md:text-md sm:text-xl xs:text-xl xxs:text-xl text-white py-4 px-12 hover:bg-blue-700">
                  BUY NOW
                </a>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;
