import { Select, Button, Input, Segmented } from "antd";
import VoteCard from "../components/specific/VoteCard";
import styled from "styled-components";

const TopMenu = styled.article`
  display: flex;
  justify-content: space-between;
`;

const TopMenuRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const { Search } = Input;

export default function HomePage() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <main>
      <TopMenu>
        <div>
          <Search
            placeholder="검색으로 찾아보세요!"
            allowClear
            onSearch={onSearch}
            style={{
              width: 400,
            }}
          />
        </div>
        <TopMenuRightBox>
          <Segmented
            options={["음식", "영화", "스포츠", "연애", "기타"]}
            onChange={(value) => {
              console.log(value);
            }}
          />
          <Select
            defaultValue="최신순"
            options={[
              { value: "최신순", label: "최신순" },
              { value: "인기순", label: "인기순" },
            ]}
          />
          <Button>투표 생성</Button>
        </TopMenuRightBox>
      </TopMenu>
      <VoteCard />
    </main>
  );
}
