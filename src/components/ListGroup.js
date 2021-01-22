import React from "react";

function ListGroup() {
  return (
    <div>
      {expenditure.length == 0 ? (
        <p>No Spended money</p>
      ) : (
        expenditure.map((spend, index) => {
          return (
            <ListGroup.Item
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              key={index}
              variant={spend.spended ? "danger" : "success"}
            >
              <div>{spend.date}</div>
              <div>{spend.description}</div>
              <div>
                {"Rs."}
                {spend.moneyValue}
              </div>
            </ListGroup.Item>
          );
        })
      )}
    </div>
  );
}

export default ListGroup;
