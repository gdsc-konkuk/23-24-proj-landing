import React from "react";
import GatheringImg from "../assets/images/trygdsc/gathering.jpeg";
import StudyImg from "../assets/images/trygdsc/study.jpeg";
import ChallengeImg from "../assets/images/trygdsc/challenge.jpeg";

export default function TryGdsc() {
  return (
    <>
      <div className="text-center mt-16">
        <p className="text-6xl font-bold noto-sans-kr">Try With GDSC</p>
        <p className="mt-4 font-pretendard">
          "더 나은 미래를 위해 새로운 것을 시도하는"
        </p>
        <p className="text-zinc-600 font-pretendard">
          다양한 활동을 통해 더 단단한 GDSC Konkuk을 만들어 나가요.
        </p>
      </div>

      <section className="grid grid-rows-4 gap-4 mt-12 justify-center align-center">
        <div className="relative w-[486px] h-[304px]  row-start-1 row-end-3 group ">
          <img
            className="object-cover w-full h-full rounded-[20px] flex-shrink-0"
            src={GatheringImg}
            alt="gather_img"
          />
          <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-white text-[30px] font-[600] p-10 uppercase">
              Gathering
            </p>
          </div>
          <div className="absolute bg-black rounded-[20px] bg-opacity-50 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-[30px] font-[600] p-10 uppercase">
              소모임
              <br />
              <span className="text-gray-400 text-xl">
                어떤 주제든 관심있다면 함께
              </span>
            </p>
          </div>
        </div>

        <div className="relative w-[486px] h-[316px] row-start-2 row-end-4 group ">
          <img
            className="object-cover w-full h-full rounded-[20px] flex-shrink-0"
            src={StudyImg}
            alt="study_img"
          />
          <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-white text-[30px] font-[600] p-10 uppercase">
              Study
            </p>
          </div>
          <div className="absolute bg-black rounded-[20px] bg-opacity-50 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-[30px] font-[600] p-10 uppercase">
              스터디
              <br />
              <span className="text-gray-400 text-xl">
                파트별 더 깊은 지식 쌓기
              </span>
            </p>
          </div>
        </div>

        <div className="relative w-[384px] h-[231px] row-start-3 row-end-5 justify-self-end group ">
          <img
            className="object-cover w-full h-full rounded-[20px] flex-shrink-0"
            src={ChallengeImg}
            alt="challenge_img"
          />
          <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-white text-[30px] font-[600] p-10 uppercase">
              Challenge
            </p>
          </div>
          <div className="absolute bg-black rounded-[20px] bg-opacity-50 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-[30px] font-[600] p-10 uppercase">
              챌린지
              <br />
              <span className="text-gray-400 text-xl">
                어떤 주제든 관심있다면 함께
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
