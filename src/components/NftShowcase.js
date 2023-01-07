import React from "react";

export default function CollectionShowcaseComponent({
  collectionImage,
  authorImage,
  name,
  author,
  description,
  mint,
  type,
  revenue,
}) {
  return (
    <div className="relative left-1/2 h-full w-max -translate-x-1/2 rounded-lg text-white">
      <img src={collectionImage} alt="" />
      <div className="collection-info">
        <div className="collection-div">
          <div className="profile-details">
            <img
              src={authorImage}
              className="profile-image max-h-[60vh] max-w-full rounded-lg object-cover"
              alt=""
            />
            <div>
              <p className="col-name">{name}</p>
              <p className="col-author">By: {author}</p>
            </div>
          </div>
          <p className="col-detail">{description}</p>
          <div className="info-row">
            <div>
              <p>{mint}</p>
              <p>Minted</p>
            </div>
            <div className="white-line"></div>
            <div className="middle-row">
              <p>{type}</p>
              <p>Type</p>
            </div>
            <div className="white-line"></div>
            <div>
              <p>{revenue}</p>
              <p>Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
