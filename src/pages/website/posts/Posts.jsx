import PostCard from "../../../components/shared/ui/cards/PostCard";
import { useLoaderData } from "react-router-dom";
import { Else, If, Then } from "react-if";
import { useSearchContext } from "../../../context/contexts";

const Posts = () => {
  const { posts } = useLoaderData();
  const { searchByTitleStr } = useSearchContext();
  //create new var and check post length before slicing
  const data = posts.length > 0 ? posts?.slice(0, 12) : [];
  //and filter
  const filterBySearch = (data, searchValue) => {
    if (searchValue.trim().length > 0) {
      return data?.title?.toLowerCase().startsWith(searchValue?.toLowerCase());
    } else {
      return true;
    }
  };
  //filter function based on search by title
  const filteredData = [...data]?.filter((item) =>
    filterBySearch(item, searchByTitleStr)
  );
  const content = filteredData.map((post) => (
    <PostCard key={post.id} post={post}></PostCard>
  ));

  return (
    <div className="d-flex flex-column gap-2 w-100">
      <If condition={filteredData.length > 0}>
        <Then>{content}</Then>

        <Else>
          <div className=" card w-100 h-100 d-flex justify-content-center align-items-center py-5">
            <div className="card-body">
              <div>
                <h2 className="card-title">No data found</h2>
              </div>
            </div>
          </div>
        </Else>
      </If>
    </div>
  );
};

export default Posts;
