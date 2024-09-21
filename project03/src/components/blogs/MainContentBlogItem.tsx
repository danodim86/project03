import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import linkedinName from "../../../public/images/blogItemLinkedinName.png";
import linkedinIcon from "../../../public/images/blogItemLinkedinIcon.png";
import facebookIcon from "../../../public/images/blogItemFacebookIcon.png";
import twitterIcon from "../../../public/images/blogItemTwitterIcon.png";

import likeIcon from "../../../public/images/likeIcon.png";
import heartIcon from "../../../public/images/heartIcon.png";
import commentIcon from "../../../public/images/commentIcon.png";
import paperclipIcon from "../../../public/images/paperclipIcon.png";
import { BlogItemType, CommentType } from "@/interfaces/types";

import image2 from "../../../public/images/image2.png";

interface MainContentCardItemProps {
  blogInfoData: BlogItemType;
  comments: CommentType[]; 
  newComment: string;
  setNewComment: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

const MainContentBlogItem: React.FC<MainContentCardItemProps> = ({
  blogInfoData,
  comments,
  newComment,
  setNewComment,
  handleSubmit,
}) => {
  if (!blogInfoData) return <p>Loading...</p>;
  return (
    <section className="blogItemContentContainer">
      <div className="leftSide">
        <div className="mainTitleContainer">
          <h2>{blogInfoData.title}</h2>
          <p>{blogInfoData.starterText}</p>
        </div>
        <div className="subHeadingOneContainer">
          <h3>{blogInfoData.subheading1}</h3>
          <p dangerouslySetInnerHTML={{ __html: blogInfoData.subparagraph1 }} />
        </div>
        <div className="subHeadingTwoContainer">
          <h3>{blogInfoData.subheading2}</h3>
          <p dangerouslySetInnerHTML={{ __html: blogInfoData.subparagraph2 }} />
        </div>
        <div className="subHeadingThreeContainer">
          <h3>{blogInfoData.subheading3}</h3>
          <p dangerouslySetInnerHTML={{ __html: blogInfoData.subparagraph3 }} />
        </div>
        <div className="subHeadingFourContainer">
          <h3>{blogInfoData.subheading4}</h3>
          <p dangerouslySetInnerHTML={{ __html: blogInfoData.subparagraph4 }} />
        </div>
        <div className="subHeadingFiveContainer">
          <h3>{blogInfoData.subheading5}</h3>
          <p dangerouslySetInnerHTML={{ __html: blogInfoData.subparagraph5 }} />
        </div>
        <div className="ConclusionContainer">
          <h3>{blogInfoData.subheading6}</h3>
          <p dangerouslySetInnerHTML={{ __html: blogInfoData.subparagraph6 }} />
        </div>
        <div className="reactionsAndSocials">
          <div className="reactionsContainer">
            <div className="likeIcon">
              <Image src={likeIcon} alt="like icon"></Image>
              <span>{blogInfoData.likesNumber}</span>
            </div>
            <div className="heartsIcon">
              <Image src={heartIcon} alt="hearts icon"></Image>
              <span>{blogInfoData.heartsNumber}</span>
            </div>
            <div className="commentIcon">
              <Image src={commentIcon} alt="comment icon"></Image>
              <span>{blogInfoData.commentsNumber}</span>
            </div>
          </div>
          <div className="shareBlogContainer">
            <p>Ти се допаѓа овој блог? Сподели го!</p>
            <ul>
              <li>
                <Image src={facebookIcon} alt="facebook icon"></Image>
              </li>
              <li>
                <Image src={twitterIcon} alt="twitter icon"></Image>
              </li>
              <li>
                <Image src={linkedinIcon} alt="linkedin icon"></Image>
              </li>
            </ul>
          </div>
        </div>

        <div className="commentInputContainerOuter">
          <div className="dottedPatternForCommentContainer"></div>
          <div className="commentInputContainerInner">
            <div className="userComment">
              <div className="profilePicture">
                <Image src={image2} alt="profile picture"></Image>
              </div>
              <div className="commentInput">
                <textarea
                  placeholder="Коментирај..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="paperClipCommentButtonContainer">
              <div className="imageContainer">
                <Image src={paperclipIcon} alt="paper clip icon"></Image>
              </div>
              <div className="buttonContainer">
                <button className="commentButton" onClick={handleSubmit}>Коментирај</button>
              </div>
            </div>
          </div>
        </div>

        <div className="commentSection">
          <h2>Коментари</h2>
          <ul className="commentListContainer">
            {blogInfoData.comments.map((comment, index) => (
              <li  key={index}>
                <div className="commentContainer">
                  <div className="userContainer">
                    <Image
                      src={comment.image}
                      alt="user picture"
                      width={70}
                      height={70}
                    ></Image>
                    <div className="nameContainer">
                      <h3>{comment.name}</h3>
                      <p>Пред {comment.timeAgo} минути</p>
                    </div>
                  </div>
                  <div className="commentContent">{comment.content}</div>
                  <div className="reactionsContainer">
                    <div className="likesContainer">
                      <Image src={likeIcon} alt="likeIcon"></Image>
                      <span>{comment.likesNumber}</span>
                    </div>
                    <div className="repliesContainer">
                      <Image src={commentIcon} alt="commentIcon"></Image>
                      <span>{comment.repliesNumber}</span>
                    </div>
                  </div>
                </div>
                {comment.replies && (
                  <ul className="repliesListContainer">
                    {comment.replies.map((reply, index) => (
                      <li key={index}>
                        <div className="replyUserContainer">
                          <Image
                            src={reply.image}
                            alt="user picture"
                            width={60}
                            height={60}
                          ></Image>
                          <div className="nameContainer">
                            <h3>{reply.name}</h3>
                            <p>Пред {reply.timeAgo} минути</p>
                          </div>
                        </div>
                        <div className="replyContentContainer">
                          {reply.content}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rightSide">
        <div
          className="imageContainer"
          style={{ backgroundImage: `url(${blogInfoData.authorImage})` }}
        ></div>
        <div className="authorNameContainer">
          <h3>{blogInfoData.author}</h3>
          <Image src={linkedinName} alt="linkedin icon"></Image>
        </div>
        <div className="authorSocialMediaContainer">
          <p>Сподели со колегите!</p>
          <div className="iconsContainer">
            <Link href={blogInfoData.linkedinLink}>
              <Image src={linkedinIcon} alt="linkedin icon"></Image>
            </Link>
            <Link href={blogInfoData.facebookLink}>
              <Image src={facebookIcon} alt="facebook icon"></Image>
            </Link>
            <Link href={blogInfoData.twitterLink}>
              <Image src={twitterIcon} alt="twitter icon"></Image>
            </Link>
          </div>
        </div>
        <div className="subheadingsContainer">
          <h3>Кратка содржина</h3>
          <ul>
            <li>{blogInfoData.subheading1}</li>
            <li>{blogInfoData.subheading2}</li>
            <li>{blogInfoData.subheading3}</li>
            <li>{blogInfoData.subheading4}</li>
            <li>{blogInfoData.subheading5}</li>
            <li>{blogInfoData.subheading6}</li>
            <li>Коментари</li>
          </ul>
        </div>
        <div className="dottedPattern"></div>
      </div>
    </section>
  );
};

export default MainContentBlogItem;
