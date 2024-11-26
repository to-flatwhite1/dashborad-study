'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const NewsPage = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(
            `https://content.guardianapis.com/search?api-key=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&show-fields=thumbnail,headline,byline,bodyText'` //NEXT_PUBLIC_ 접두사를 반드시 사용해야만 클라이언트 측에서 환경 변수를 사용할 수 있습니다. 예를 들어, NEWS_API_KEY를 NEXT_PUBLIC_NEWS_API_KEY로 변경해야 합니다.
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setNews(data.response.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h2>뉴스</h2>
            <ul className="divide-y px-5 ">
                {news.map((item) => (
                    <li key={item.id}>
                        <Link href={item.webUrl} className="py-3 flex gap-3">
                            <Image
                                src={item.fields.thumbnail}
                                alt={item.webTitle}
                                width={300}
                                height={200}
                                className="object-cover rounded w-1/3 "
                            />
                            <div className="flex-1 flex flex-col justify-around">
                                <strong>{item.webTitle}</strong>
                                <p className="text-gray-500 text-sm mt-2">{item.webPublicationDate}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default NewsPage;

fetch(
    'https://content.guardianapis.com/search?api-key=cb5c8f1d-41e3-4481-b13e-7b075cf3e537&show-fields=thumbnail,headline,byline,bodyText'
);
