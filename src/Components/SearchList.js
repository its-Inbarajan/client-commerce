import React from "react";

export const SearchList = ({ results }) => {
  return (
    <div className="row">
      <div className="col-sm-12 mb-2">
        {results.length > 0 ? (
          <div className="float-lg-end">
            <div className="card ">
              <div className="card-body ">
                {results.map((items, id) => {
                  return (
                    <p key={id}>
                      {id + 1} :{items.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
