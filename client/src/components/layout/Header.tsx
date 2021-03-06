import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "redux/auth/actions";
import { profileTypes } from "redux/profile/profileAction";

function Header() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  let data;
  useSelector(state => (data = state));
  useEffect(() => {
    dispatch({
      type: profileTypes.GET_INFO
    });
  }, []);

  return (
    <header>
      <div className="topbar stick d-flex align-items-center justify-content-between pt-3 pb-3">
        <div className="logo h-100">
          <a href="newsfeed.html" className="h-100 d-block">
            <img src="static/logo.png" className="mh-100 mw-100" />
          </a>
        </div>
        <div className="top-area">
          <div className="top-search">
            <form method="post">
              <input type="text" placeholder="Search People, Pages, Groups etc" />
              <button data-ripple>
                <i className="ti-search" />
              </button>
            </form>
          </div>
          <ul className="setting-area">
            <li>
              <a href="newsfeed.html" title="Home" data-ripple>
                <i className="fa fa-home" />
              </a>
            </li>
            <li>
              <a href="#" title="Friend Requests" data-ripple>
                <i className="fa fa-user" />
                <em className="bg-red">5</em>
              </a>
            </li>
            <li>
              <a href="#" title="Notification" data-ripple>
                <i className="fa fa-bell" />
                <em className="bg-purple">7</em>
              </a>
            </li>
            <li>
							<Link href="/message">
                <a>
									<i className="fa fa-commenting" />
									<em className="bg-blue">9</em>
								</a>
							</Link>
            </li>
            <li>
              <a href="#" title="Languages" data-ripple>
                <i className="fa fa-globe" />
                <em>EN</em>
              </a>
            </li>
            <li>
              <a href="#" title="Help" data-ripple>
                <i className="fa fa-question-circle" />
              </a>
            </li>
          </ul>
          <div className="user-img">
            {data.profileReducer.info.username != null ? (
              <>
                <div className="user-img" onClick={() => setActive(!active)}>
                  <h5 className="mr-1">{data.profileReducer.info.username}</h5>
                  <img src={data.profileReducer.imgAvatar} />
                </div>
                <div className={`${active ? "active" : ""} user-setting`}>
                  <span className="seting-title">
                    User setting <a href="#">see all</a>
                  </span>
                  <ul className="log-out">
                    <li>
                      {" "}
                      <Link href="/profile">
                        <a>
                          <i className="ti-user" /> view profile
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          dispatch({ type: actionTypes.LOGOUT });
                        }}
                      >
                        <i className="ti-power-off" />
                        log out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
