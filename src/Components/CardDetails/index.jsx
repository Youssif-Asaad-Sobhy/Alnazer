export function CardDetails({
  index,
  details,
  card,
  handleClick,
  handleDetailsClick,
}) {
  return (
    <div>
      {details && (
        <>
          <center>
            <p
              style={{
                justifyContent: "end",
                display: "flex",
                width: "300px",
                margin: "0 auto",
              }}
            >
              {card.title}
            </p>
            <p
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              {card.price}
            </p>
            <div class="d-grid gap-1 d-sm-block d-md-block">
              <button
                type="button"
                name="lol"
                class="btn btn-success w-full"
                onClick={() => handleClick(card)}
              >
                طلب الان
              </button>
              <button
                type="button"
                name="lolen"
                class="btn btn-danger"
                onClick={() => handleDetailsClick(index)}
              >
                اغلاق التفاصيل
              </button>
            </div>
          </center>
        </>
      )}
      {!details && (
        <button
          type="button"
          name="lolen"
          class="con col-sm-12 btn btn-info"
          onClick={() => handleDetailsClick(index)}
        >
          عرض التفاصيل
        </button>
      )}
    </div>
  );
}
