const Posts = () => {
  const { posts } = useLoaderData();
  const { searchByTitleStr } = useSearchContext();

  // Slice posts if available
  const data = posts.length > 0 ? posts.slice(0, 12) : [];

  // Filter posts based on search string
  const filteredData = data.filter((post) => {
    if (searchByTitleStr.trim().length > 0) {
      return post.title.toLowerCase().startsWith(searchByTitleStr.toLowerCase());
    }
    return true;
  });

  // Map filtered posts to PostCard components
  const content = filteredData.map((post) => (
    <PostCard key={post.id} post={post} />
  ));

  return (
    <div className="d-flex flex-column gap-2 w-100">
      <If condition={filteredData.length > 0}>
        <Then>{content}</Then>
        <Else>
          <div className="card w-100 h-100 d-flex justify-content-center align-items-center py-5">
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
