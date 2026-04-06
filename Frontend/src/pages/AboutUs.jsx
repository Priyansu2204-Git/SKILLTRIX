import { useEffect, useRef, useState } from "react";

const BASE_W = 1536;
const BASE_H = 1024;

const URLS = [
  "https://static.codia.ai/s/image_020432f0-1064-4baf-ac8b-4cc7997840f0.png", // 0
  "https://static.codia.ai/s/image_029e4c33-a91d-4f23-b8d0-72e9799ef09c.png", // 1
  "https://static.codia.ai/s/image_0e685c92-5f69-4220-9bfa-1412312be090.png", // 2
  "https://static.codia.ai/s/image_0f4fc406-440a-40f7-9bb7-d4feb058cfd3.png", // 3
  "https://static.codia.ai/s/image_244d7cec-0840-4473-8a17-d613493692b7.png", // 4
  "https://static.codia.ai/s/image_2b724c9a-9f6f-4364-8a95-a52391069893.png", // 5
  "https://static.codia.ai/s/image_3d3755d2-38b3-4675-810e-77dabedd184d.png", // 6
  "https://static.codia.ai/s/image_42c1176d-2181-44be-a6e4-5cfc56dacc06.png", // 7
  "https://static.codia.ai/s/image_4d08e224-2c25-4675-8be3-94ed4efa27a5.png", // 8
  "https://static.codia.ai/s/image_5581eaa7-04aa-4382-8be2-0d28ec6133af.png", // 9
  "https://static.codia.ai/s/image_5e239bbe-181b-4bc1-85fa-c0d461940776.png", // 10
  "https://static.codia.ai/s/image_636b968d-2981-40f8-9a44-66476d19bc73.png", // 11
  "https://static.codia.ai/s/image_65e01b10-d7ec-4c2a-8d1b-57d21bd8f404.png", // 12
  "https://static.codia.ai/s/image_6b799241-ae47-49d6-83c3-9fcff23837cb.png", // 13
  "https://static.codia.ai/s/image_7b6e8126-71f4-4648-9b00-8c1b776042a7.png", // 14
  "https://static.codia.ai/s/image_803a51d3-87dd-4ff1-b839-4cac207cf88d.png", // 15
  "https://static.codia.ai/s/image_830193f6-357c-45d8-aa30-7c7a2a3a8890.png", // 16
  "https://static.codia.ai/s/image_8c9ad898-11e1-42e4-87ed-c7871f2f9ad2.png", // 17
  "https://static.codia.ai/s/image_8e9af05d-c332-43bc-83fc-ad639e4a6431.png", // 18
  "https://static.codia.ai/s/image_9358754c-780a-41c4-8938-e1e39becb045.png", // 19
  "https://static.codia.ai/s/image_9542577e-1fed-4aa7-b484-0fcf76cae035.png", // 20
  "https://static.codia.ai/s/image_aa6def8b-d8ed-4a01-80a3-f4445b04ab4d.png", // 21
  "https://static.codia.ai/s/image_b30d1a0a-1a8e-41e6-a377-30ebcae18a1a.png", // 22
  "https://static.codia.ai/s/image_b9a35527-b708-4776-a8c4-4f2b7bfef81a.png", // 23
  "https://static.codia.ai/s/image_ba2be8a6-acef-4ccf-8b81-45e0c7cd33e5.png", // 24
  "https://static.codia.ai/s/image_cb817db8-c4b7-4923-9ec7-339b92df5770.png", // 25
  "https://static.codia.ai/s/image_cf8da822-3f18-4a2f-9f5b-de14cc252e1d.png", // 26
  "https://static.codia.ai/s/image_dbbacb73-a16d-4efa-8c10-f89297611256.png", // 27
  "https://static.codia.ai/s/image_eeb6caed-9f56-489c-a865-885eb640b810.png", // 28
];

function N({ r, children, style, className }) {
  const [l, t, w, h] = r;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: l,
        top: t,
        width: w,
        height: h,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Img({ r, urlRef, alt, style, imgStyle }) {
  const [l, t, w, h] = r;
  return (
    <img
      src={URLS[urlRef]}
      alt={alt || ""}
      style={{
        position: "absolute",
        left: l,
        top: t,
        width: w,
        height: h,
        objectFit: "contain",
        ...style,
        ...(imgStyle || {}),
      }}
    />
  );
}

function Txt({ r, style, children }) {
  const [l, t, w, h] = r;
  return (
    <div
      style={{
        position: "absolute",
        left: l,
        top: t,
        width: w,
        height: h,
        fontFamily: "Inter, sans-serif",
        lineHeight: 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      if (wrapRef.current) {
        const vw = wrapRef.current.parentElement
          ? wrapRef.current.parentElement.clientWidth
          : window.innerWidth;
        setScale(Math.min(1, vw / BASE_W));
      }
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const scaledH = Math.ceil(BASE_H * scale);

  return (
    <div
      style={{
        background: "#F5F3FA",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div
        ref={wrapRef}
        style={{
          position: "relative",
          width: BASE_W * scale,
          height: scaledH,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: BASE_W,
            height: BASE_H,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          <img
            src={URLS[13]}
            alt=""
            style={{
              position: "absolute",
              left: 0,
              top: 57,
              width: 1536,
              height: 920,
              objectFit: "contain",
            }}
          />

          {/* Node 1: top nav bar background */}
          <img
            src={URLS[24]}
            alt=""
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1536,
              height: 64,
              objectFit: "contain",
            }}
          />

          <N
            r={[1206, 7, 83, 44]}
            style={{
              background: "#FEFEFE",
              borderRadius: 9,
              border: "1px solid #E3DEE3",
            }}
          />
          <Txt
            r={[1227, 17, 44, 22]}
            style={{ fontSize: 16, color: "#696A72" }}
          >
            Login
          </Txt>
          {/* Sign Up button */}
          <N
            r={[1304, 8, 102, 42]}
            style={{
              background: "#7561EE",
              borderRadius: 8,
              border: "1px solid #725AEF",
            }}
          />
          <Txt
            r={[1324, 16, 63, 23]}
            style={{ fontSize: 16, color: "#C4BCF3" }}
          >
            Sign Up
          </Txt>

          {/* ——— HERO SECTION ——— */}
          {/* Wave / decorative background overlay */}
          <Img r={[0, 146, 1536, 117]} urlRef={0} alt="" />
          {/* About Skilltrix title */}
          <Txt
            r={[588, 94, 327, 48]}
            style={{ fontSize: 32, fontWeight: 700, color: "#323543" }}
          >
            About Skilltrix
          </Txt>
          {/* Subtitle */}
          <Txt
            r={[435, 157, 689, 29]}
            style={{ fontSize: 20, color: "#6C6B77", whiteSpace: "nowrap" }}
          >
            Empowering students with skills, internships, and career
            opportunities.
          </Txt>

          {/* ——— OUR PROCESS SECTION ——— */}
          {/* Section icon */}
          <Img r={[82, 278, 52, 39]} urlRef={5} alt="" />
          {/* "Our Process" label */}
          <Txt
            r={[146, 280, 196, 30]}
            style={{ fontSize: 22, color: "#3E404D" }}
          >
            Our Process
          </Txt>

          {/* Process card 1: Learn */}
          <N
            r={[79, 333, 212, 208]}
            style={{ background: "#FBFAFD", borderRadius: 9 }}
          />
          <Img r={[152, 347, 71, 60]} urlRef={3} alt="Learn" />
          <Txt
            r={[151, 421, 66, 23]}
            style={{ fontSize: 17, fontWeight: 700, color: "#4A4B56" }}
          >
            Learn
          </Txt>
          <Txt
            r={[115, 455, 134, 77]}
            style={{
              fontSize: 18,
              fontWeight: 300,
              color: "#7A7980",
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {"Gain theoretical\nand practical\nknowledge"}
          </Txt>

          {/* Arrow 1 */}
          <Img r={[291, 390, 39, 22]} urlRef={10} alt="" />

          {/* Process card 2: Practice */}
          <N r={[335, 325, 214, 224]} style={{ background: "#FEFDFE" }} />
          <Img r={[416, 356, 66, 54]} urlRef={1} alt="Practice" />
          <Txt
            r={[398, 420, 97, 24]}
            style={{ fontSize: 18, fontWeight: 700, color: "#4B4C57" }}
          >
            Practice
          </Txt>
          <Txt
            r={[371, 455, 153, 53]}
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "#797880",
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {"Work on real-world\nprojects"}
          </Txt>

          {/* Arrow 2 */}
          <Img r={[548, 390, 35, 22]} urlRef={20} alt="" />

          {/* Process card 3: Internship */}
          <N r={[584, 324, 221, 225]} style={{ background: "#FEFDFE" }} />
          <Img r={[668, 349, 59, 55]} urlRef={12} alt="Internship" />
          <Txt
            r={[638, 420, 118, 28]}
            style={{ fontSize: 22, fontWeight: 700, color: "#383946" }}
          >
            Internship
          </Txt>
          <Txt
            r={[641, 455, 114, 52]}
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "#6B6A72",
              textAlign: "right",
              whiteSpace: "pre-line",
            }}
          >
            {"Gain industry\nexposure"}
          </Txt>

          {/* Arrow 3 */}
          <Img r={[803, 390, 37, 22]} urlRef={28} alt="" />

          {/* Process card 4: Placement */}
          <N r={[843, 325, 228, 224]} style={{ background: "#FEFDFE" }} />
          <Img r={[923, 351, 63, 57]} urlRef={22} alt="Placement" />
          <Txt
            r={[893, 421, 124, 24]}
            style={{ fontSize: 17, fontWeight: 700, color: "#4D4F5A" }}
          >
            Placement
          </Txt>
          <Txt
            r={[898, 455, 113, 53]}
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "#6E6E75",
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {"Secure job\nopportunities"}
          </Txt>

          {/* Illustration (right side people) */}
          <Img r={[1098, 332, 438, 258]} urlRef={17} alt="Students learning" />

          {/* Small decorative dots */}
          <Img r={[26, 465, 11, 12]} urlRef={8} alt="" />
          <Img r={[30, 517, 13, 12]} urlRef={11} alt="" />
          <Img r={[1079, 433, 12, 12]} urlRef={15} alt="" />
          <Img r={[977, 562, 7, 7]} urlRef={27} alt="" />
          <Img r={[1034, 571, 8, 7]} urlRef={16} alt="" />

          {/* ——— WHY CHOOSE SKILLTRIX SECTION ——— */}
          {/* Background wave for why section */}
          <Img r={[0, 580, 1536, 329]} urlRef={4} alt="" />

          {/* Section icon */}
          <Img r={[29, 625, 18, 18]} urlRef={26} alt="" />
          <Img r={[82, 626, 53, 39]} urlRef={21} alt="" />
          {/* "Why Choose Skilltrix" label */}
          <Txt
            r={[149, 629, 332, 39]}
            style={{ fontSize: 28, fontWeight: 700, color: "#3B3E4B" }}
          >
            Why Choose Skilltrix
          </Txt>

          {/* Left illustration */}
          <Img r={[11, 682, 405, 190]} urlRef={9} alt="Students with mentor" />

          {/* Left features card */}
          <N
            r={[426, 689, 418, 177]}
            style={{ background: "#F9F7FB", borderRadius: 10 }}
          />
          {/* Left card items */}
          <Img r={[452, 706, 35, 30]} urlRef={23} alt="" />
          <Txt
            r={[499, 704, 310, 60]}
            style={{ fontSize: 18, color: "#696B72", whiteSpace: "pre-line" }}
          >
            {"Practical and industry-focused\nlearning approach"}
          </Txt>
          <Img r={[452, 774, 35, 30]} urlRef={6} alt="" />
          <Txt
            r={[500, 775, 289, 26]}
            style={{ fontSize: 18, color: "#50515A" }}
          >
            Real-time project experience
          </Txt>
          <Img r={[452, 815, 35, 30]} urlRef={7} alt="" />
          <Txt
            r={[499, 817, 342, 26]}
            style={{ fontSize: 18, color: "#575763" }}
          >
            Career-oriented training programs
          </Txt>

          {/* Right features card */}
          <N
            r={[865, 689, 590, 177]}
            style={{
              background: "#F9F8FB",
              borderRadius: 10,
              border: "4px solid #F3F2FA",
            }}
          />
          {/* Right card items */}
          <Img r={[893, 707, 40, 31]} urlRef={18} alt="" />
          <Txt
            r={[949, 706, 303, 27]}
            style={{ fontSize: 18, color: "#494A53" }}
          >
            Real-time project experience
          </Txt>
          <Img r={[893, 762, 40, 31]} urlRef={14} alt="" />
          <Txt
            r={[948, 761, 265, 26]}
            style={{ fontSize: 18, color: "#4E4F59" }}
          >
            Mentorship and guidance
          </Txt>
          <Img r={[893, 814, 40, 31]} urlRef={25} alt="" />
          <Txt
            r={[948, 815, 345, 26]}
            style={{ fontSize: 18, color: "#5C5B67" }}
          >
            Career-oriented training programs
          </Txt>
        </div>
      </div>
    </div>
  );
}
