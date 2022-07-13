import { ListItem, List } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import log from "../../img/common/logo_v.png"

const Header = () => {
  return (
    <div className="header__inner">
      <div className="header__inner--block">
        <h1>
          <Link to="home">
            <span className="hd">映画『ゆるキャン△』公式サイト</span>
          </Link>
        </h1>
        <ul className="header__menuBtns">
          <li className="header__menuBtn--portal">
            <Link to="/" target="_blank">
              <span>ポータルサイトへ</span>
            </Link>
          </li>
          <li className="header__menuBtn--cinema">
            <Link to="/">
              <span>映画メニュー</span>
            </Link>
          </li>
        </ul>
        <div className="header__shares">
          <ul className="shareLists">
            <li className="shareList">
              {/* &ampは&という記号を使うための特殊文字 */}
              {/* href="http://twitter.com/share?~~~" でTwitterに投稿できる */}
              {/* window.openメソッド(URL, ウィンドウ名[, オプション])  */}
              {/* <a href="http://twitter.com/share?url=https://yurucamp.jp/cinema/&amp;text=映画『ゆるキャン△』公式サイト&amp;hashtags=ゆるキャン" onclick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;" rel="nofollow" class="shareList__twitter"> */}
              <Link className="shareList__twitter" rel="nofollow" to="" onClick={() => window.open(encodeURI(decodeURI("http://twitter.com/share?url=https://yurucamp.jp/cinema/&amp;text=映画『ゆるキャン△』公式サイト&amp;hashtags=ゆるキャン")), 'tweetwindow', 'width=650, height=470, scrollbars=yes')}>
                <span className="hd">Twitter share</span>
              </Link>
            </li>
            <li className="shareList">
              {/* <a href="https://www.facebook.com/share.php?u=https://yurucamp.jp/cinema/" onclick="window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="shareList__facebook"> */}
              <a href="https://www.facebook.com/share.php?u=https://yurucamp.jp/cinema/">
                <span className="hd">Facebook share</span>
              </a>
            </li>
            <li className="shareList">
              {/* <a href="https://line.me/R/msg/text/?映画『ゆるキャン△』公式サイト https://yurucamp.jp/cinema/" onclick="window.open(encodeURI(decodeURI(this.href)), 'linewindow', 'width=550, height=520,personalbar=0,toolbar=0,scrollbars=1,resizable=1'); return false;" target="_blank" class="shareList__line"> */}
              <a href="https://line.me/R/msg/text/?映画『ゆるキャン△』公式サイト https://yurucamp.jp/cinema/">
                <span className="hd">LINE share</span>
              </a>
            </li>
          </ul>
          <p className="copyright">
            <a href="https://www.furyu.jp/privacy.html" target="_blank">プライバシーポリシー</a>
            <br />
            <br />
            © あfろ・芳文社／野外活動委員会
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header

const Logo = styled.div`
  background: url(${log})
`