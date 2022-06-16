import ClickAwayListener from "react-click-away-listener";

const PopupVideo = ({ videoUrl, play, setPlay }) => {
  const videUrlControlPlay = play ? videoUrl + "&autoplay=1" : videoUrl;

  return (
    <div
      className="video-popup"
      style={{ display: play ? "block" : "none" }}
      data-toggle="modal"
      data-backdrop="static"
    >
      <div className="popup-bg">
        <ClickAwayListener onClickAway={() => play && setPlay(false)}>
          <div className="popup-content">
            <iframe
              className="video"
              src={videUrlControlPlay}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default PopupVideo;
