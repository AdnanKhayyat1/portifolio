import React from "react";

import { Stack, Column, Row, Text, Line, Img } from "components";

const HomePagePage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-dmserifdisplay lg:h-[3168px] xl:h-[3623px] 2xl:h-[4076px] 3xl:h-[4890px] mx-[auto] w-[100%]">
        <Column className="absolute top-[0] w-[100%]">
          <Stack className="lg:h-[2318px] xl:h-[2651px] 2xl:h-[2983px] 3xl:h-[3579px] w-[100%]">
            <Column className="absolute w-[100%]">
              <Column
                className="bg-cover bg-repeat font-dmserifdisplay xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group4.png')" }}
              >
                <Row className="justify-between lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[99%]">
                  <Text className="font-dmserifdisplay font-normal not-italic lg:text-[41px] xl:text-[47px] 2xl:text-[53px] 3xl:text-[64px] text-black_900 w-[auto]">
                    ADNAN KHAYYAT
                  </Text>
                  <Text className="font-darkergrotesque font-extrabold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 tracking-ls1 w-[auto]">
                    ABOUT RESUME PROJECTS{" "}
                  </Text>
                </Row>
                <Line className="bg-black_900 h-[4px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[29%]" />
                <Text className="font-normal lg:mb-[528px] xl:mb-[604px] 2xl:mb-[679px] 3xl:mb-[815px] lg:ml-[313px] xl:ml-[358px] 2xl:ml-[403px] 3xl:ml-[484px] lg:mt-[49px] xl:mt-[57px] 2xl:mt-[64px] 3xl:mt-[77px] not-italic lg:text-[103px] xl:text-[118px] 2xl:text-[133px] 3xl:text-[160px] text-black_900 xl:tracking-ls2 lg:tracking-ls2 2xl:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                  Bounded By Nothing
                </Text>
              </Column>
              <Text className="font-montserrat font-normal leading-[normal] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[172px] xl:mt-[197px] 2xl:mt-[221px] 3xl:mt-[266px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 tracking-ls1 w-[64%]">
                My past projects have delivered record-breaking metrics. I aim
                to expand product beyond my day-to-day operations
              </Text>
              <Text className="font-montserrat font-normal leading-[normal] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[491px] xl:mt-[562px] 2xl:mt-[632px] 3xl:mt-[759px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 tracking-ls1 w-[59%]">
                All skills mentioned below were learned practically by being
                heavily involved in a project or past experience
              </Text>
              <Stack className="bg-black_900 font-darkergrotesque lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] lg:mt-[431px] xl:mt-[492px] 2xl:mt-[554px] 3xl:mt-[665px] w-[100%]">
                <div className="absolute bg-gradient  lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] rounded-radius864 w-[100%]"></div>
                <Row className="absolute left-[2%] top-[8%] w-[58%]">
                  <Column className="w-[68%]">
                    <Text className="font-dmserifdisplay font-normal not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 tracking-ls1 w-[auto]">
                      Bold in execution and excited by the most abstract ideas
                    </Text>
                    <Text className="font-montserrat font-normal leading-[normal] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_200 tracking-ls1 w-[45%]">
                      I’m driven by a sense of achievement. I aspire to make
                      complex ideas a reality.{" "}
                    </Text>
                  </Column>
                  <Img
                    src="images/img_image11.png"
                    className="lg:h-[204px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[315px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] w-[32%]"
                    alt="imageEleven"
                  />
                </Row>
                <Text className="absolute bottom-[7%] font-extrabold right-[3%] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-green_A700 tracking-ls1 underline w-[auto]">
                  {"EXPLORE THE SPOTIFY MOOD PROJECT >>>"}
                </Text>
              </Stack>
            </Column>
            <Stack className="absolute bottom-[16%] lg:h-[586px] xl:h-[671px] 2xl:h-[754px] 3xl:h-[905px] inset-x-[0] mx-[auto] w-[98%]">
              <Column className="absolute left-[0] top-[0] w-[96%]">
                <Text className="font-dmserifdisplay font-normal lg:mr-[467px] xl:mr-[534px] 2xl:mr-[601px] 3xl:mr-[721px] not-italic lg:text-[54px] xl:text-[62px] 2xl:text-[70px] 3xl:text-[84px] text-black_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  A skill set reflective of my eagerness to learn
                </Text>
                <Text className="font-dmserifdisplay font-normal lg:ml-[647px] xl:ml-[740px] 2xl:ml-[833px] 3xl:ml-[999px] lg:mt-[176px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[272px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 tracking-ls1 w-[auto]">
                  Bold in execution and excited by the most abstract ideas
                </Text>
                <Text className="font-montserrat font-normal leading-[normal] 3xl:ml-[1156px] lg:ml-[749px] xl:ml-[856px] 2xl:ml-[964px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-center text-white_A700 tracking-ls1 w-[19%]">
                  I’m driven by a sense of achievement. I aspire to make complex
                  ideas a reality.{" "}
                </Text>
              </Column>
              <Img
                src="images/img_image10.png"
                className="absolute bottom-[10%] lg:h-[335px] xl:h-[383px] 2xl:h-[431px] 3xl:h-[517px] inset-x-[0] mx-[auto] w-[40%]"
                alt="imageTen"
              />
              <Img
                src="images/img_joshcalabrese.png"
                className="absolute bottom-[0] lg:h-[531px] xl:h-[607px] 2xl:h-[683px] 3xl:h-[819px] right-[0] w-[28%]"
                alt="joshcalabrese"
              />
            </Stack>
            <Column className="absolute inset-x-[0] mx-[auto] top-[33%] w-[94%]">
              <Line className="bg-black_900 h-[4px] lg:ml-[317px] xl:ml-[363px] 2xl:ml-[408px] 3xl:ml-[490px] w-[43%]" />
              <Text className="font-normal lg:mt-[53px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[82px] not-italic lg:text-[54px] xl:text-[62px] 2xl:text-[70px] 3xl:text-[84px] text-black_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                <span className="text-black_900 font-dmserifdisplay">
                  I don’t only get things done, I get things to{" "}
                </span>
                <span className="text-red_900 font-dmserifdisplay italic">
                  g
                </span>
                <span className="text-lime_600 font-dmserifdisplay italic">
                  r
                </span>
                <span className="text-cyan_900 font-dmserifdisplay italic">
                  o
                </span>
                <span className="text-indigo_900 font-dmserifdisplay italic">
                  w
                </span>
                <span className="text-black_900 font-dmserifdisplay">.</span>
              </Text>
              <Row className="font-montserrat justify-between lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] lg:mt-[206px] xl:mt-[236px] 2xl:mt-[266px] 3xl:mt-[319px] w-[97%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 text-center tracking-ls1 w-[23%]">
                  <span className="text-black_900 font-montserrat">
                    Faster load-time performance for pages transformed from
                    client-side to hybrid rendering after refactoring React
                    components into Next.js FC in Typescript.{" "}
                  </span>
                  <span className="text-black_900 font-montserrat font-bold italic">
                    Udemy
                  </span>
                  <span className="text-black_900 font-montserrat"> </span>
                </Text>
                <Text className="font-normal leading-[normal] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 text-center tracking-ls1 w-[24%]">
                  <span className="text-black_900 font-montserrat">
                    Data points simultaneously exchanged among drone agents in a
                    Python insect simulator while still maintaining 30 FPS.
                    <br />
                  </span>
                  <span className="text-black_900 font-montserrat font-bold italic">
                    HCMI Lab, BYU{" "}
                  </span>
                </Text>
                <Text className="font-bold italic leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 text-center tracking-ls1 w-[30%]">
                  Faster training speed for LSTM model trained on 30,000 rows of
                  data each epoch. Training speed went from 180s / epoch to 3s /
                  epoch.
                  <br />
                  DRAGN Lab, BYU
                </Text>
              </Row>
              <Line className="bg-black_900 h-[4px] lg:ml-[317px] xl:ml-[363px] 2xl:ml-[408px] 3xl:ml-[490px] 3xl:mt-[106px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] w-[43%]" />
            </Column>
          </Stack>
          <Text className="font-normal lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] not-italic lg:text-[129px] xl:text-[148px] 2xl:text-[166px] 3xl:text-[200px] text-black_900 xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 w-[auto]">
            <span className="text-black_900 font-dmserifdisplay">
              Let’s get in{" "}
            </span>
            <span className="text-cyan_900 font-dmserifdisplay">t</span>
            <span className="text-lime_600 font-dmserifdisplay">o</span>
            <span className="text-red_901 font-dmserifdisplay">u</span>
            <span className="text-indigo_900 font-dmserifdisplay">c</span>
            <span className="text-cyan_900 font-dmserifdisplay">h</span>
          </Text>
        </Column>
        <Row className="absolute inset-x-[0] justify-between mx-[auto] top-[33%] w-[81%]">
          <Text className="font-normal italic lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[7px] mt-[1px] 3xl:text-[107px] lg:text-[69px] xl:text-[79px] 2xl:text-[89px] text-black_900 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[auto]">
            40%
          </Text>
          <Text className="font-normal italic lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] 3xl:text-[107px] lg:text-[69px] xl:text-[79px] 2xl:text-[89px] text-black_900 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[auto]">
            50,000
          </Text>
          <Text className="font-normal italic lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[7px] 3xl:text-[107px] lg:text-[69px] xl:text-[79px] 2xl:text-[89px] text-black_900 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[auto]">
            98.3%
          </Text>
        </Row>
        <Img
          src="images/img_margaretjaszow.png"
          className="absolute lg:h-[146px] xl:h-[167px] 2xl:h-[187px] 3xl:h-[225px] right-[0] top-[25%] w-[31%]"
          alt="margaretjaszow"
        />
        <Stack className="absolute bottom-[0] font-darkergrotesque 3xl:h-[1081px] lg:h-[700px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
          <Stack className="absolute bottom-[0] lg:h-[424px] xl:h-[485px] 2xl:h-[545px] 3xl:h-[654px] w-[100%]">
            <Row className="absolute bg-black_900 border-black_900 border-bw7 border-solid bottom-[0] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] w-[100%]">
              <Column className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[33%]">
                <Text className="font-dmserifdisplay font-normal not-italic lg:text-[41px] xl:text-[47px] 2xl:text-[53px] 3xl:text-[64px] text-gray_201 text-shadow-ts w-[auto]">
                  ADNAN KHAYYAT
                </Text>
                <Text className="font-darkergrotesque font-medium leading-[normal] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_201 tracking-ls1 w-[78%]">
                  My name is Adnan Khayyat. I’m a computer science student
                  graduating from Brigham Young University (Provo) in December
                  2022. My main areas of expertise are software engineer and
                  data science, but I also have intrest in UX/UI design, music,
                  and humanitarian art.{" "}
                </Text>
              </Column>
              <Column className="lg:mt-[55px] xl:mt-[63px] 2xl:mt-[70px] 3xl:mt-[85px] w-[63%]">
                <Row className="items-center 3xl:mr-[10px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] w-[99%]">
                  <Line className="bg-white_A700 lg:h-[203px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[314px] w-[6px]" />
                  <Text className="font-medium leading-[normal] lg:ml-[39px] xl:ml-[45px] 2xl:ml-[50px] 3xl:ml-[61px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_201 tracking-ls1 w-[12%]">
                    ABOUT
                    <br />
                    PROJECTS
                    <br />
                    VALUES
                    <br />
                    WORK
                    <br />
                    RESUME
                  </Text>
                  <Line className="bg-white_A700 lg:h-[203px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[314px] xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[153px] lg:ml-[99px] w-[6px]" />
                  <Text className="font-medium leading-[normal] lg:ml-[40px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[62px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_201 tracking-ls1 w-[11%]">
                    LinkedIn
                    <br />
                    Github
                    <br />
                    Twitter
                    <br />
                    Instagram
                    <br />
                    Email
                  </Text>
                  <Text className="font-medium leading-[normal] lg:ml-[117px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[182px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_201 tracking-ls1 w-[33%]">
                    Email: akhayyat20@gmail.com
                    <br />
                    Provo, UT <br />
                    Designed in Figma
                    <br />
                    Photoshoot at BYU
                    <br />
                    Implemented in React and Webflow
                  </Text>
                </Row>
                <Text className="font-extrabold lg:ml-[200px] xl:ml-[229px] 2xl:ml-[257px] 3xl:ml-[309px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_201 tracking-ls1 w-[auto]">
                  ALL RIGHTS RESERVED ADNAN KHAYYAT (C) 2022
                </Text>
              </Column>
            </Row>
            <Img
              src="images/img_dsc22371.png"
              className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] left-[0] top-[0] w-[31%]"
              alt="DSC22371"
            />
          </Stack>
          <Column
            className="absolute bg-cover bg-repeat lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] right-[0] top-[0] w-[29%]"
            style={{ backgroundImage: "url('images/img_group5.png')" }}
          >
            <Row className="justify-end ml-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[78%]">
              <Img
                src="images/img_group4_black_900.svg"
                className="3xl:h-[101px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] w-[41%]"
                alt="GroupFour"
              />
              <Img
                src="images/img_signal.svg"
                className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] xl:ml-[103px] 2xl:ml-[115px] 3xl:ml-[139px] lg:ml-[90px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] w-[18%]"
                alt="signal"
              />
            </Row>
            <Img
              src="images/img_reply.svg"
              className="3xl:h-[100px] lg:h-[65px] xl:h-[74px] 2xl:h-[83px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[25px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[158px] xl:mt-[180px] 2xl:mt-[203px] 3xl:mt-[244px] w-[13%]"
              alt="reply"
            />
          </Column>
        </Stack>
      </Stack>
    </>
  );
};

export default HomePagePage;
