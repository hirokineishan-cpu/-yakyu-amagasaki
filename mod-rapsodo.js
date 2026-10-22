/* Rapsodo タブ（準備中）
   Rapsodo のデータ形式が決まるまでの置き場所。読み込むだけで、サーバーには何も聞かない。
   形式が決まったら、このファイルを Rapsodo 用の取り込み・解析に置き換える。 */
export function mount(ROOT, CORE) {
  const CFG = CORE.cfg;
  const st = document.createElement('style');
  st.id = 'css-rapsodo';
  st.textContent = `
#tab-trackman .rp-wrap{ max-width:760px; margin:0 auto; padding:28px 16px 60px }
#tab-trackman .rp-card{ background:var(--paper); border:1px solid var(--line); border-radius:12px; padding:22px 24px; box-shadow:0 1px 2px rgba(0,0,0,.06) }
#tab-trackman .rp-card h2{ margin:0 0 6px; font-size:19px; letter-spacing:.04em }
#tab-trackman .rp-card .tag{ display:inline-block; font-size:11px; font-weight:700; color:var(--accentInk); background:var(--accent); border-radius:999px; padding:3px 10px; margin-left:8px; vertical-align:middle }
#tab-trackman .rp-card p{ margin:10px 0 0; font-size:14px; line-height:1.7; color:var(--ink2) }
#tab-trackman .rp-card ul{ margin:8px 0 0; padding-left:1.3em; font-size:13.5px; line-height:1.7; color:var(--ink2) }
`;
  document.head.appendChild(st);
  ROOT.innerHTML = `<div class="rp-wrap"><div class="rp-card">
    <h2>Rapsodo<span class="tag">準備中</span></h2>
    <p>${CFG.TEAM_NAME} の Rapsodo（投球計測）の画面です。計測データの形式が決まり次第、ここに取り込みと解析が入ります。</p>
    <ul>
      <li>データは、このチーム専用のスプレッドシートにだけ保存されます（ほかのチームとは共有されません）。</li>
      <li>見られるのは「管理」「強化」のスタッフと、ログインした選手本人の分だけです。</li>
      <li>Rapsodo から書き出した CSV を1つ、担当者に送ってもらえれば、その形式に合わせて作ります。</li>
    </ul>
  </div></div>`;
}
