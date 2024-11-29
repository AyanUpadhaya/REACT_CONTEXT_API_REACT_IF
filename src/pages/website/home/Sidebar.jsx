import { Form } from "react-router-dom";
import { useSearchContext } from "../../../context/contexts";
const Sidebar = () => {
  const { setSearchByTitleStr } = useSearchContext();

  return (
    <div
      className={` d-none d-md-block h-full overflow-auto `}
      style={{ width: "250px", padding: "10px", height: "100%" }}
    >
      <Form id="search-form" role="search">
        <input
          id="q"
          className="form-control"
          aria-label="Search"
          placeholder="Search title"
          type="search"
          name="q"
          onChange={(e) => setSearchByTitleStr(e.target.value)}
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
      </Form>
    </div>
  );
};

export default Sidebar;
