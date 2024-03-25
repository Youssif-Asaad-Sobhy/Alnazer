
import pfp from './pfp.jpg'
export default function Nav()
{
    return (<nav className="navbar navbaar sticky-top ">
    <div className="container-fluid ms-3">
      {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a className="navbar-brand" href="">
        <div className="logo rakkas-regular">
          ALnazer Store <span className={"shaker"}>.</span>
        </div>
      </a>
      <div className={"joe  pe-3"}>
        <a
          href={"https://www.facebook.com/profile.php?id=61556301853383"}
          className={"text-decoration-none"}
          target={"about-blank"}
        >
          {/*<span className={'me-2 text-black-50'}>Developed With &#128153; By</span>*/}
          <img className={"pfp rounded"} src={pfp} alt="" />
          <span className={"ms-3 text-black-50    "}>Alnazer FB Page</span>
        </a>
      </div>
    </div>
  </nav>)
}