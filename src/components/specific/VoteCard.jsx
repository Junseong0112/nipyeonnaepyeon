import { Button } from "antd";
import styled from "styled-components";
import { DATA } from "../../mock";

const Section = styled.section`
  margin: 3.125rem 0 0;
`;
const VoteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const VoteItem = styled.li`
  text-align: center;
  border: 1px solid #b7b7b7;
  border-radius: 15px;
  padding: 1.25rem 1.125rem;
`;

const Status = styled.h3`
  text-align: right;
  font-size: 1.375rem;
  color: ${(props) => (props.isActive ? "#fe4e1e" : "#b7b7b7")};
`;

const VoteTitle = styled.h2`
  margin: 0.625rem 0;
  font-size: 1.75rem;
`;

const VoteOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5625rem 0;
`;

const OptionFigure = styled.figure`
  width: 50%;
  text-align: center;

  figcaption {
    font-size: 1.375rem;
    margin-top: 0.9375rem;
    font-weight: bold;
  }
`;
const VoteCategory = styled.span`
  font-size: 0.875rem;
  display: inline-block;
  color: #fff;
  background-color: #ff7852;
  padding: 0.375rem 1.5rem;
  border-radius: 0.5rem;
`;

const StyledButton = styled(Button)`
  margin: 0.9375rem auto 0;
  display: block;
  width: 7.5rem;
`;

export default function VoteCard() {
  return (
    <Section>
      <VoteList>
        {DATA.map((item) => (
          <VoteItem key={item.id}>
            <Status isActive={item.status === "진행중"}>{item.status}</Status>
            <VoteTitle>{item.title}</VoteTitle>
            <VoteOptions>
              <OptionFigure>
                <img src={item.imgUrl[0]} alt={item.option[0]} />
                <figcaption>{item.option[0]}</figcaption>
              </OptionFigure>
              <OptionFigure>
                <img src={item.imgUrl[1]} alt={item.option[1]} />
                <figcaption>{item.option[1]}</figcaption>
              </OptionFigure>
            </VoteOptions>
            <VoteCategory>{item.category}</VoteCategory>
            <StyledButton>투표하기</StyledButton>
          </VoteItem>
        ))}
      </VoteList>
    </Section>
  );
}
