import rectangle from "./rectangle.png";
import union from "./union.svg";
import vector1 from "./vector-1.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";

type NavigationItem = {
  label: string;
  image: string;
  alt: string;
  containerClassName: string;
  imageClassName: string;
  labelClassName: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "About",
    image: union,
    alt: "About icon",
    containerClassName:
      "absolute top-64 left-[calc(50.00%_-_242px)] w-[84px] h-[105px]",
    imageClassName: "absolute -top-1 -left-px w-[84px] h-[76px]",
    labelClassName:
      "absolute top-[78px] left-[calc(50.00%_-_25px)] [font-family:'Afacad-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal]",
    href: "#about",
  },
  {
    label: "Contact",
    image: vector3,
    alt: "Contact icon",
    containerClassName:
      "absolute top-64 left-[calc(50.00%_+_160px)] w-20 h-[105px] flex flex-col gap-1.5",
    imageClassName: "-ml-px w-20 h-[76px] -mt-1",
    labelClassName:
      "ml-[-3px] h-[27px] w-[63px] self-center [font-family:'Afacad-Bold',Helvetica] text-black text-xl font-bold text-center tracking-[0] leading-[normal]",
    href: "#contact",
  },
  {
    label: "My Work",
    image: vector1,
    alt: "My work icon",
    containerClassName:
      "absolute top-[258px] left-[calc(50.00%_-_108px)] w-[89px] h-[103px] flex flex-col gap-1.5",
    imageClassName: "-ml-px w-[89.14px] h-[74px] -mt-1",
    labelClassName:
      "-ml-px h-[27px] w-[70px] self-center [font-family:'Afacad-Bold',Helvetica] text-black text-xl font-bold text-center tracking-[0] leading-[normal]",
    href: "#work",
  },
  {
    label: "FaQ",
    image: vector2,
    alt: "Frequently asked questions icon",
    containerClassName:
      "absolute top-[257px] left-[calc(50.00%_+_30px)] w-[82px] h-[104px] flex flex-col gap-[7px]",
    imageClassName: "-ml-px w-[82px] h-[74px] -mt-1",
    labelClassName:
      "ml-[-3px] h-[27px] w-[33px] self-center [font-family:'Afacad-Bold',Helvetica] text-black text-xl font-bold text-center tracking-[0] leading-[normal]",
    href: "#faq",
  },
];

export const DasBurd = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full min-w-[680px] min-h-[1080px] relative">
      <img
        className="absolute top-[629px] left-0 w-[680px] h-[451px]"
        alt=""
        aria-hidden="true"
        src={rectangle}
      />
      <div
        className="left-[calc(50.00%_-_382px)] w-[764px] h-[629px] bg-[linear-gradient(180deg,rgba(104,191,253,1)_0%,rgba(255,255,255,1)_35%)] absolute top-0"
        aria-hidden="true"
      />
      <section
        id="more"
        aria-labelledby="more-heading"
        className="absolute top-[409px] left-14 w-[567px] h-[395px] bg-white rounded-[10px] overflow-hidden border-[3px] border-solid border-[#5175a5]"
      >
        <header className="left-0 w-[567px] h-[65px] bg-[#5175a5] absolute top-0">
          <h2
            id="more-heading"
            className="absolute top-[18px] left-[calc(50.00%_-_260px)] [font-family:'Pixelify_Sans-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]"
          >
            More
          </h2>
        </header>
        <nav aria-label="More navigation">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              className={`${item.containerClassName} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
              href={item.href}
              aria-label={item.label}
            >
              <img
                className={item.imageClassName}
                alt={item.alt}
                src={item.image}
              />
              <span className={item.labelClassName}>{item.label}</span>
            </a>
          ))}
        </nav>
        <p className="absolute top-[171px] left-[calc(50.00%_-_238px)] [font-family:'Afacad-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal]">
          Grapich Designer, Illustrator, Video &amp; Photo Editor, Developer
        </p>
        <h1 className="absolute top-[90px] left-[calc(50.00%_-_170px)] w-[337px] [text-shadow:1px_-2px_0px_#000000] [-webkit-text-stroke:1.5px_#000000] bg-[linear-gradient(0deg,rgba(81,118,166,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Big_Shoulders_Display-Bold',Helvetica] font-bold text-transparent text-[64px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Hi! i&apos;m Kasyh
        </h1>
      </section>
      <a
        href="#what-i-do"
        aria-label="What I do"
        className="absolute top-[226px] left-[360px] w-[263px] h-[65px] bg-white rounded-[10px] overflow-hidden border-[3px] border-solid border-[#51a58a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span
          id="what-i-do"
          className="bg-[#51a58a] absolute top-0 left-0 w-[567px] h-[65px]"
          aria-hidden="true"
        />
        <span className="absolute top-[18px] left-[calc(50.00%_-_56px)] [font-family:'Pixelify_Sans-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
          what i do:
        </span>
      </a>
      <a
        href="#what-i-wont-do"
        aria-label="What I won't do"
        className="absolute top-[319px] left-[360px] w-[263px] h-[65px] bg-white rounded-[10px] overflow-hidden border-[3px] border-solid border-[#a55151] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span
          id="what-i-wont-do"
          className="bg-[#a55151] absolute top-0 left-0 w-[567px] h-[65px]"
          aria-hidden="true"
        />
        <span className="absolute top-[18px] left-[calc(50.00%_-_94px)] [font-family:'Pixelify_Sans-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
          what i won&apos;t do:
        </span>
      </a>
      <a
        href="#order"
        id="order"
        aria-label="Order here"
        className="absolute top-[273px] left-[69px] w-[265px] h-[121px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span
          className="absolute top-[25px] left-[5px] w-[254px] h-[72px] rounded-[127px/36px] border border-solid border-black rotate-[-11.54deg] shadow-[0px_4px_0px_#000000] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(251,255,0,1)_90%)]"
          aria-hidden="true"
        />
        <span className="absolute top-[21px] left-[calc(50.00%_-_124px)] w-[243px] [text-shadow:1px_-2px_0px_#000000] [-webkit-text-stroke:1.5px_#000000] [font-family:'Big_Shoulders_Display-Bold',Helvetica] text-white text-[64px] whitespace-nowrap font-bold text-center tracking-[0] leading-[normal]">
          ORDER HERE
        </span>
      </a>
    </main>
  );
};
