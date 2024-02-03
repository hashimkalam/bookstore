import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2 bg-[#FFDB58]/50 rounded-xl shadow-xl p-2">
      <thead>
        <tr>
          <th className="border-b-2 border-slate-600">No</th>
          <th className="border-b-2 border-slate-600">Title</th>
          <th className="border-b-2 border-slate-600 max-md:hidden">Author</th>

          <th className="border-b-2 border-slate-600 max-md:hidden">
            Publish Year
          </th>

          <th className="border-b-2 border-slate-600">Operations</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book, index) => (
          <tr
            key={book._id}
            className="h-8 hover:bg-[#FFDB58]/75 rounded-xl duration-200 ease-in-out"
          >
            <td className="text-center">{index + 1}</td>

            <td className=" text-center">{book.title}</td>

            <td className=" text-center max-md:hidden">{book.author}</td>

            <td className="text-center max-md:hidden">{book.publishYear}</td>

            <td className="text-center ">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>

                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>

                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
