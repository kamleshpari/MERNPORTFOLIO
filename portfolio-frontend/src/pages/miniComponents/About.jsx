import React, { useEffect, useState } from "react";

const About = () => {

  

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1 text-white"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT
          <span className="text-tubeLight-effect font-extrabold t">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.JPG"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              My name is Kamlesh, known as Kamali by my followers. I'll graduate
              in Software Engineering from MUJ in 2024. I'm a web developer and
              freelancer. My hobbies include gaming, cooking, watching movies
              and series, exploring new cuisines, dabbling in photography,
              playing badminton, and occasionally sketching. I'm passionate
              about technology, love solving complex problems, and enjoy
              experimenting with innovative ideas. Creativity and adaptability
              define me!.
            </p>
            <p>
              I am passionate about technology and have a keen interest in
              movies, series, video games, and cooking. I pride myself on
              excelling at meeting deadlines for my work, staying organized, and
              delivering quality results. Beyond work, I enjoy exploring diverse
              cuisines, keeping up with emerging tech trends, and engaging in
              creative projects. I’m also enthusiastic about collaborating with
              others, solving complex problems, and continuously learning to
              improve my skills. These interests and qualities define me, both
              professionally and personally.".
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
      </div>
    </div>
  );
};

export default About;
