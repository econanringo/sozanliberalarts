import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async"; // <- Helmetインポート

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);   // ローディング状態のフラグ
  const [error, setError] = useState(null);       // エラーメッセージの状態

  // 日付をyyyy/mm/dd形式に変換する関数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // 月は0から始まるので+1
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}/${month}/${day}`;
  };

  useEffect(() => {
    // APIからお知らせの一覧を取得
    axios.get(process.env.REACT_APP_API_URL, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY // ご自身のAPIキーを設定
      }
    })
    .then(response => {
      setNewsList(response.data.contents); // microCMSから取得したデータをstateに格納
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching news:', error);
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return(
      <div className="flex items-center justify-center ">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">エラーが発生しました。SLAの誰かに尋ねてください。</div>; // エラーメッセージ表示
  }

  return (
    <>
      <Helmet>
        <title>ニュース | Sozan Liberal Arts</title>
      </Helmet>
      <div className="mb-4 max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">お知らせ一覧</h1>

        {/* お知らせのカード一覧表示 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map(news => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
                <Link
                  to={`/news/${news.id}`}
                  className="mt-4 text-indigo-600 hover:text-indigo-800"
                >
                  続きを読む
                </Link>
              </div>

              {/* 投稿日付表示（publishedAtを使用） */}
              <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                {formatDate(news.publishedAt)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
