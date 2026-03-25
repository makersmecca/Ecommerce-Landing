import "./Categories.scss";
const NUM_COLS = 3;

const Categories = ({ categories }) => {
  const entries = Object.entries(categories);
  const colSize = Math.ceil(entries.length / NUM_COLS);
  const cols = Array.from({ length: NUM_COLS }, (_, i) =>
    entries.slice(i * colSize, (i + 1) * colSize),
  );

  return (
    <div className="categories-wrapper">
      <div className="categories-container">
        {cols.map((col, i) => (
          <div className="col" key={i}>
            {col.map(([name, id]) => (
              <div className="category-card" key={id}>
                <img
                  className={`category-cover-img ${name}`}
                  src={`/Products/category-cover/${name}.jpg`}
                />
                <div className="category-title">{name.toUpperCase()}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
