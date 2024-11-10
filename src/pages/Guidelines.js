import React, { useEffect } from 'react';
import 'flowbite';  // Flowbite をインポート
import { Helmet } from "react-helmet-async"; // <- インポートする

const Guidelines = () => {
  useEffect(() => {
    // Flowbite のタブ機能を手動で初期化
    const tabElements = document.querySelectorAll('#default-tab button');
    tabElements.forEach(tabElement => {
      tabElement.addEventListener('click', () => {
        const target = document.querySelector(tabElement.getAttribute('data-tabs-target'));
        const allTabContents = document.querySelectorAll('#default-tab-content > div');
        allTabContents.forEach(content => {
          content.classList.add('hidden');
        });
        target.classList.remove('hidden');
      });
    });
  }, []);  // 初回レンダリング時にのみ実行

  return (
    <>
      <Helmet>
        <title>注意事項 | Sozan Liberal Arts</title>
      </Helmet>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 max-w-screen-xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">注意事項</h1>
        <p>1. スライドについて</p>
        <p>スライドについて、以下の注意事項を読んで、正確に共有してください。</p>
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
          <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Googleスライドの場合</button>
          </li>
          <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Canvaプレゼンテーションの場合</button>
          </li>
          <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">そのほかのものを使った場合</button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content" className="max-w-screen-xl mx-auto px-4">
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          Googleスライドを使って作った場合は、次の手順でフォームを入力してください。
          <ol>
            <li>自分の作ったプレゼンテーションを開きます。</li>
            <li>右上の共有をクリックします。<br /><img src="slide_1.png" alt="Slide 1" className="w-1/2" />
            </li>
            <li>その中に、フォームに書かれているメールアドレスを入れてください。(812423から始まるやつです。)<br />
              <img src="slide_2.png" alt="Slide 2" className="w-1/2" />
            </li>
            <li>その後に一番左下のリンクをコピーを押します。</li>
            <li>そのリンクをフォームの欄に貼り付けてください。(Ctrl + V で貼り付けることができます。)</li>
          </ol>
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <ol>
            <li>自分の作ったプレゼンテーションを開きます。</li>
            <li>右上の共有をクリックします。<br /><img src="canva_1.png" alt="Canva 1" className="w-1/2" /></li>
            <li>その中に、フォームに書かれているメールアドレスを入れてください。(812423から始まるやつです。)<br /><img src="canva_2.png" alt="canva 2" className="w-1/2" /></li>
            <li>その後、一個戻って、リンクをコピーをクリックします。<br /><img src="canva_3.png" alt="canva 2" className="w-1/2" /></li>
            <li>そのリンクをフォームの欄に貼り付けてください。(Ctrl + V) で貼り付けてることができます。</li>
          </ol>
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <p>申し訳ありませんが、運営に声をかけてください。</p>
        </div>
        <p>2. 発表形式について</p>
        <ol>
          <li>・発表はスライド発表・ポスター発表のいずれでも構いません</li>
          <li>・発表は、<span className="text-red-600 font-bold">5分以内</span>に収めてください</li>
          <li>・第三者の著作物の使用は控えてください。</li>
        </ol><br />
        <p>注意事項を読んでわからないことは、運営まで声をかけてください。</p>
      </div>

    </>
  );
};

export default Guidelines;
