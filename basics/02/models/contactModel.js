const mongoose=require("mongoose");

//스키마 만들기
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,//필수 속성
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "전화번호는 꼭 기입해 주세요."],
    },
    office: {
      type: String,
    },
  },
  {
    timestamps: true,//자료 작성. 수정 시간 기록
  }
);

//스키마->모델로 변환: mongoose.model(모델명,스키마명)
const Contact=mongoose.model("Contact","contactSchema");

//내보내기
module.exports=Contact;