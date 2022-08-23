import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <div>
        <Link to="/yurucamp">ゆるキャン△の公式サイト</Link>
      </div>
      <div>
        <Link to="/music">音楽サイト</Link>
      </div>
    </>
  )
}