import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Your Profile"} />

          <h2 className="mt-5 ml-5">الملف الشخصي الخاص بي</h2>
          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
              <figure className="avatar avatar-profile">
                <img
                  className="rounded-circle img-fluid"
                  src={user.avatar.url}
                  alt={user.name}
                />
              </figure>
              <Link to="/me/update" className="btn btn-info btn-block my-5">
                تعديل الملف الشخصي
              </Link>
            </div>

            <div className="col-12 col-md-5">
              <h4>الاسم كامل</h4>
              <p>{user.name}</p>

              <h4>البريد الإلكتروني</h4>
              <p>{user.email}</p>

              <h4>انضم في</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>

              {user.role !== "admin" && (
                <Link to="/orders/me" className="btn btn-warning btn-block mt-5">
                  طلبياتي
                </Link>
              )}

              <Link
                to="/password/update"
                className="btn btn-info btn-block mt-3"
              >
                تغيير كلمة المرور
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
