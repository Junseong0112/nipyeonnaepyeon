import { Button } from "antd";
import style from "./VoteCard.module.css";
import { DATA } from "../../mock";

export default function VoteCard() {
  return (
    <section className={style.section}>
      <ul className={style.vote}>
        {DATA.map((item) => (
          <li key={item.id} className={style.votelist}>
            <h3
              className={`${
                item.status === "진행중" ? style.statusIng : style.statusDone
              } ${style.status}`}
            >
              {item.status}
            </h3>
            <h2 className={style.voteTitle}>{item.title}</h2>
            <div className={style.voteOptions}>
              <figure>
                <img src={item.imgUrl[0]} alt={item.option[0]} />
                <figcaption>{item.option[0]}</figcaption>
              </figure>
              <figure>
                <img src={item.imgUrl[1]} alt={item.option[1]} />
                <figcaption>{item.option[1]}</figcaption>
              </figure>
            </div>
            <span className={style.voteCategory}>{item.category}</span>
            <Button className={style.voteButton}>투표하기</Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
