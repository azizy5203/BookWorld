import { Button } from "@/components/ui/button";

const themeMap = {
  cold: {
    bg: "#e1f4ff",
    fill: "#00A6FF",
  },
  warm: {
    bg: "#ffebe1",
    fill: "#ff8d87",
  },
};

function Card({
  title = "To Kill a Mockingbird",
  author = "Brooklyn Simmons",
  theme = "warm",
}) {
  return (
    <div className="bg-white p-6 flex  gap-4 rounded-[8px]">
      <div
        className={`flex justify-center items-center px-[34px] py-[53px]  rounded-[8px]`}
        style={{
          backgroundColor: themeMap[theme]?.bg,
        }}
      >
        <div className="">
          <i
            className={`icon-book-store !w-[58px] !h-[58px] before:text-[58px]`}
            style={{
              color: themeMap[theme]?.fill,
            }}
          ></i>
        </div>
      </div>
      <div>
        <div className="">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="text-sm text-[#8F8F8F]">{author}</p>
        </div>

        <div className="flex flex-col mt-2">
          <p className="text-sm text-[#8F8F8F]">stores</p>
          <ul className="flex items-center gap-2">
            <li className="flex flex-col items-center p-2">
              <span className="text-sm text-black">Second Story</span>
              <span className="text-base font-semibold text-[#E9692C]">$4</span>
              <Button className="flex items-center gap-2 bg-[#2374bf]">
                <span className="text-base">Sell</span>
                <i className="icon-shopping-cart !text-[16px] !before:text-[16px] !w-4 !h-4"></i>
              </Button>
            </li>
            <li className="flex flex-col items-center p-2">
              <span className="text-sm text-black">Bookmark My Word</span>
              <span className="text-base font-semibold text-[#E9692C]">$7</span>
              <Button className="flex items-center gap-2 bg-[#2374bf]">
                <span className="text-base">Sell</span>
                <i className="icon-shopping-cart !text-[16px] !before:text-[16px] !w-4 !h-4"></i>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
