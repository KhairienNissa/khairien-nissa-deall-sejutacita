
const Pagination = (props) => (
  <div>
        <center>
            <button onClick={props.prev} disabled={props.page === 1} className={props.page === 1 ? "btnPagin btnPagin-disabled" : "btnPagin" }>Prev</button> 
            <span>
                <button onClick={props.next} className="btnPagin">Next</button>
            </span>
        </center>
  
    </div>
    
)

export default Pagination;
