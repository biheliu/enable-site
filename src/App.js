import "./App.css";
import poster from "./assets/poster.png";
import search from "./assets/search.png";
import qrcode from "./assets/qrcode.png";
import { useEffect } from "react";

const TITLE = "ENABLE:";

function App() {
  useEffect(() => {
    document.title = TITLE;
  }, []);

  const spaces = (x) => {
    let content = [];
    for (let i = 0; i < x; i++) {
      content.push(<br />);
    }
    return content;
  };

  return (
    <div className="App">
      <header className="App-header">
        <body className="App-body">
          <div className="left-half">
            {/* Text Things */}
            <div className="left-half-content">
              <article className="desc">
                <div className="desc_title">
                  <p>ENABLE: ® NATURAL ARTISANAL INCENSE</p>
                </div>
                {spaces(1)}

                <div className="en_desc_text">
                  <p>
                    ENABLE:® is an artisanal incense brand based in Shanghai.
                    <br />
                    ENABLE:® incense are created with a foundation of
                    sandalwood, agar wood, or cedar that is delicately blended
                    with aromatic spices and herbal medicine. The ingredients
                    are finely ground and mixed with pure water and organic
                    honey, then handcrafted by experienced artisans to form its
                    shape.
                  </p>
                  <p>
                    We allow our incense sticks to repose and air-dry naturally
                    to preserve its aromas. When lit, the soft drift of smoke
                    creates sculptural movements that illuminate the room and
                    uplift a sense of peace.
                  </p>
                  <p>
                    We believe that burning incense can transcend time and
                    space, elevate one’s environment, and offer tranquility in
                    the midst of modern living. Beyond simply indulging in the
                    scent, ENABLE:® is intent on encouraging modern individuals
                    to take a moment to embrace the present and reconnect with
                    the inner self.
                  </p>
                </div>

                {spaces(1)}

                <div className="cn_desc_text">
                  <p>专注制造烟火气的焚香品牌。</p>
                  <p>
                    沉、檀、柏 —
                    木质调做底，沉稳厚重，药材、天然香料点缀，创造丰富平衡的嗅觉体验。
                    不添加香精、精油和染色剂，蜂蜜黏合，自然阴干。包装选择灰烬颜色的环保纸张，粗糙质朴，握感温柔。超越单纯对气味的迷恋，我们更希望探索焚香在感官之外的隐喻。透过一支香感知时间的流逝，除了缓慢燃烧的当下，没有什么是坚固和永恒的，这是只有焚香才有的醍醐灌顶的分量。
                  </p>
                </div>
              </article>

              {spaces(4)}

              <div className="desc_footer">
                <a
                  linkid="1"
                  href="https://item.taobao.com/item.htm?id=643703118742"
                >
                  <div en="">Vol.1 Sandalwood｜Honey</div>
                  <div ch="">檀香 | 蜂蜜</div>
                </a>

                <a
                  linkid="2"
                  href="https://item.taobao.com/item.htm?id=643370401052"
                >
                  <div en="">Vol.2 Agarwood ｜Camphor｜Clove｜Honey</div>
                  <div ch="">沉香| 当归 | 龙脑 | 丁香 | 蜂蜜</div>
                </a>

                <a
                  linkid="3"
                  href="https://item.taobao.com/item.htm?id=642988112914"
                >
                  <div en="">Vol.3 Cedar｜Mint｜Honey</div>
                  <div ch="">香柏| 薄荷 | 蜂蜜</div>
                </a>

                {spaces(4)}
                <div className="footer-images">
                  <a
                    id="search-container"
                    href="https://shop484135250.taobao.com/"
                  >
                    {/* <div className="footer-left"> */}
                    <img id="search-in-taobao" src={search} alt="search" />
                    {/* </div>*/}
                  </a>
                  <a id="qrcode-container">
                    {/*<div className="footer-right"> */}
                    <img id="qrcode-taobao" src={qrcode} alt="qrcode" />
                    {/* </div> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right-half">
            {/* Image things */}
            <img className="poster" src={poster} alt="poster" />
          </div>
        </body>
      </header>
    </div>
  );
}
export default App;
