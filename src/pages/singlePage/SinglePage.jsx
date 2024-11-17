import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummyData";
import { useLoaderData } from "react-router-dom";
import DOMPurify from 'dompurify';


const SinglePage = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="userimg" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postDetail.desc) }}>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">
            General
          </p>
          <div className="listVertical">
            <div className="feature">
              <img src="utility.png" />
              <div className="featureText">
                <span>Utilites</span>
                {
                  post.postDetail.utilities === "owner" ?
                    <p>Owner is responsible </p> :
                    <p>Tenant is responsible </p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="pet.png" />
              <div className="featureText">
                <span>Pet Policy</span>
                {
                  post.postDetail.pet === "allowed" ?
                    <p>Pets Allowed</p> :
                    <p>Pets Not Allowed</p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">
            Room Sizes
          </p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" />
              <span>{post.postDetail.size}</span>
            </div>
            <div className="size">
              <img src="/bed.png" />
              <span>{post.bedroom}</span>
            </div>
            <div className="size">
              <img src="/bath.png" />
              <span>{post.bathroom}</span>
            </div>
          </div>
          <p className="title">
            Nearby Places
          </p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="school.png" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school > 999 ? post.postDetail.school / 1000 + "km" : post.postDetail.school + "m"}</p>
              </div>
            </div>
            <div className="feature">
              <img src="bus.png" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}</p>
              </div>
            </div>
            <div className="feature">
              <img src="restaurant.png" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}</p>
              </div>
            </div>
          </div>
          <p className="title">
            Location
          </p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="button">
            <button>
              <img src="/chat.png" alt="chat" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="save" />
              save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage