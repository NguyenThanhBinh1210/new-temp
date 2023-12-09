const Rating = () => {
  return (
    <div className="rounded-lg p-6 border border-[#e5451b]">
      <div className="grid grid-cols-10 mb-5">
        <h4 className="text-[24px] text-center text-[#2a4e9a] font-semibold col-span-6">
          Đánh giá chất lượng dịch vụ, bạn nhé!
        </h4>
        <div className="col-span-4 flex flex-col items-center justify-center">
          <div className="text-yellow-400 text-[36px] font-semibold">
            4.9 <span className="ml-[1px]">★</span>
          </div>
          <div className="">30 đánh giá</div>
        </div>
      </div>
      <div className="bg-[#e5451b]">
        <p className="text-white font-semibold text-[20px] py-2 px-2 flex gap-x-2">
          Chọn đánh giá{" "}
          <span className="cursor-pointer flex gap-x-1">
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
          </span>
        </p>
      </div>
      <div>
        <CommentItem
          title="Nga - Vận Tải Quốc Tuấn"
          day="31-08-2023 lúc 11:39"
          desc="Dịch vụ tốt, chuyên môn cứng, quyết toán thuế 3 năm mà chả mất đồng tiền nào, tuyệt vời"
        />
        <CommentItem
          title="trung"
          day="29-03-2023 lúc 08:52"
          desc="dịch vụ tốt"
        />
        <CommentItem
          title="Chị Hà Thực Phẩm Organic"
          day="10-11-2022 lúc 10:34"
          desc=" chị cảm ơn Tuyết nhé, rất là chịu khó giải thích cho chị hiểu giấy tờ bên thuế, dịch vụ Alpha tốt nha (mỗi tội làm tốt quá nên giờ không có ý định tuyển kế toán nội bộ nữa) "
        />
      </div>
    </div>
  );
};

export const CommentItem = ({
  title,
  day,
  desc,
}: {
  title: string;
  day: string;
  desc: string;
}) => {
  return (
    <div className="pb-3 border-b pt-3">
      <div>
        <strong className="text-[#428bca]">{title}</strong> | {day}
        <div>
          <span className="text-yellow-400 text-[20px]">★★★★★</span>
          <span> {desc}</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
