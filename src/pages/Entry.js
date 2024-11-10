import React from 'react';
import { Helmet } from "react-helmet-async"; // <- インポートする

const Entry = () => (
  <>
    <Helmet>
      <title>エントリー | Sozan Liberal Arts</title>
    </Helmet>
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 max-w-screen-xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">エントリーフォーム</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdWk_QQAzKw0o6xS4zmSNFU8Tmo98jB8f7cD74ywYsSaRrtLw/viewform?embedded=true"
        width="100%"
        height="500"
        frameBorder="0"
        title="Entry Form"
      >
        読み込んでいます…
      </iframe>
    </div>
  </>
);

export default Entry;