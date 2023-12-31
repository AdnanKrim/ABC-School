import { Link } from "react-router-dom";
import bean from "../../../../public/images/bean.png";

const Messages = () => {
  return (
    <div className=" max-w-screen-xl mx-auto my-10">
      <div className=" flex sm: justify-center md:justify-center text-center items-center">
        {/* photo section  */}
        <div>
          <img
            style={{ borderRadius: "100" }}
            className="w-[300px] h-[300px] bg-gray-200  rounded-full p-2"
            src={bean}
            alt=""
          />
          <h1
            style={{ fontFamily: "Young Serif, serif" }}
            className="my-3 text-lg"
          >
            Professor Dr. Rowan Atkinson
          </h1>
          <p style={{ fontFamily: "Young Serif, serif" }}>
            Mayer Dua School and College
          </p>
        </div>
      </div>
      {/* nessage section  */}
      <div className="sm: me-2 sm: ms-2">
        <h1 style={{ fontFamily: "Young Serif, serif" }} className="text-3xl ">
          Message
        </h1>
        <p className="text-xl">
          Welcome to Mayer Dua School and College, where excellence in education is
          our guiding principle. Our institution is dedicated to nurturing young
          minds, fostering creativity, and instilling a passion for lifelong
          learning. At ABC, we believe in a holistic approach to education that
          goes beyond textbooks, emphasizing character development, critical
          thinking, and leadership skills. Our committed faculty and staff work
          tirelessly to create a supportive and inclusive learning environment,
          where every student can thrive and reach their full potential. ...{" "}
          <span className="font-bold text-blue-900">
            <Link to="/fullMessages">continue reading</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Messages;
