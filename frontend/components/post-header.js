import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Category from "../components/category";
export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  category,
}) {
  return (
    <>
      <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      <PostTitle>{title}</PostTitle>
      <div className=" justify-between items-start md:items-center w-full mt-2 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <Avatar
            name={author.name}
            picture={author.picture}
            bio={author.bio}
          />
          <div className="flex flex-col mt-4 self-end md:self-start md:mt-0">
            <p className="text-sm text-white text-opacity-40 mb-2">
              <Date dateString={date} />
            </p>
            <Category category={category} />
          </div>
        </div>
      </div>
    </>
  );
}
