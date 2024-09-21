import MainContentBlogItem from "@/components/blogs/MainContentBlogItem";
import CardsComponent from "@/components/reusable/CardsComponent";
import Carousel from "@/components/reusable/Carousel";
import HeroSection from "@/components/reusable/HeroSection";
import {
  BlogItemProps,
  BlogItemType,
  BlogsCardData,
  CarouselItemData,
} from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogItem: NextPage<BlogItemProps> = ({
  carouselItems,
  blogInfoData,
  similarBlogs,
}) => {
  const [comments, setComments] = useState(blogInfoData.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async () => {
    if (!newComment.trim()) return; 

    const newCommentData = {
      name: "Даниел Димитровски", 
      timeAgo: "1",
      image: "/images/image3.png", 
      content: newComment,
      likesNumber: 335,
      repliesNumber: 552,
    };

    try {
      const response = await fetch(`https://json-server-project03.onrender.com/blogs/${blogInfoData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: [...comments, newCommentData],
        }),
      });

      if (response.ok) {
        setComments([...comments, newCommentData]);
        setNewComment(""); 
      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Блог | МАЧР</title>
        <meta
          name="description"
          content="Прелистајте ја нашата збирка на информативни блогови за HR практики, иднината на работата, и многу повеќе. Останете информирани со најновите трендови и истражувања во човечки ресурси."
        />
        <meta
          name="keywords"
          content="HR блогови, човечки ресурси, HR практики, трендови на работното место, далечинска работа, инклузија, диверзитет, ангажираност на вработените, лидерство"
        />
        <meta
          name="author"
          content="Македонска Асоцијација за Човечки Ресурси"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <HeroSection>
        <div
          className="heroTextContainerBlogItem"
          style={{ backgroundImage: `url(${blogInfoData.image})` }}
        >
          <p>Блог</p>
          <h1>{blogInfoData.title}</h1>
          <p>
            Од <span>{blogInfoData.author}</span> | {blogInfoData.issueDate}
          </p>
        </div>
      </HeroSection>
      <Carousel carouselItems={carouselItems} />

      <div className="breadCrumbsBlogItemContainer">
        <Link href="/">Почетна</Link> &gt; <Link href="/blogs">Блогови</Link>{" "}
        &gt; <span>Блог Пост</span>
      </div>

      <MainContentBlogItem
        blogInfoData={blogInfoData}
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        handleSubmit={handleSubmit}
      />

      <div className="dottedPatternContainerBlogs">
        <div className="dottedPatternOne"></div>
        <div className="dottedPatternTwo"></div>
      </div>

      <CardsComponent
        title="Тема: Kултура во компанијата"
        data={similarBlogs}
        disableAnimation={true}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const [carouselResponse, blogInfoResponse] = await Promise.all([
    fetch("https://json-server-project03.onrender.com/carousel"),
    fetch(`https://json-server-project03.onrender.com/blogs/${id}`),
  ]);

  const carouselItems: CarouselItemData[] = await carouselResponse.json();
  const blogInfoData: BlogItemType = await blogInfoResponse.json();

  const similarBlogIds = blogInfoData.similarBlogsIds;

  const similarBlogsPromises = similarBlogIds.map(async (blogId: string) => {
    const response = await fetch(`https://json-server-project03.onrender.com/blogs/${blogId}`);
    const blogData = await response.json();

    return {
      id: blogData.id,
      title: blogData.title,
      description: blogData.description,
      image: blogData.image,
      categories: blogData.categories,
      type: blogData.type,
    };
  });

  const similarBlogs: BlogsCardData[] = await Promise.all(similarBlogsPromises);

  return {
    props: {
      carouselItems,
      blogInfoData,
      similarBlogs,
    },
  };
};

export default BlogItem;
