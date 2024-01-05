import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 40px 30px 40px 30px;
  background-color: ${({theme}) => theme.colors.yellow_bright};

  @media (min-width: 600px) {
    padding: 40px 60px 40px 60px;
  }
  @media (min-width: 960px) {
    display: flex;
    align-items: flex-start;
  }
`;

const Paragraph = styled.div`
  padding: 0 2px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  h1 {
    color: #000;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 36px;
    margin-bottom: 10px;
  }

  p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22px;
  }

  @media (min-width: 600px) {
  }
  @media (min-width: 960px) {
    width: 50%;
    padding: 0;
    margin-right: 40px;
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Explanation = () => {
  return (
    <>
      <Container>
        <Paragraph>
          <h1>1949년부터, 스토리와 스타일, 스포츠를 이끌다</h1>
          <p>
            스포츠는 건강을 지키며, 내면을 밝혀주고, 우리를 하나로 이어줍니다. 아디다스는 스포츠를 통해 세상을 바꿀 수있다고 믿습니다. 세계무대를 빛내는 스포츠 선수에서, 평범한 사람들의 일상에 이르기까지, 우리는 최상의 테크놀로지로 최상의 퍼포먼스를 선사합니다. 러닝에서 바스켓볼, 축구, 피트니스까지. 아디다스와 함께 새로운 나의 모습을 만나보세요. 가끔은 도시를 벗어나 아웃도어를 즐기고, 요가를 통해공동체와 하나가 되어보세요. 3-스트라이프의 헤리티지는 문화로까지 이어집니다. 스포츠는 물론, 음악과 일상의 스트릿까지 말이죠. 휘슬이 울리기 직전의 출발선으로부터, 질주의 순간, 마지막 결승선까지. 아디다스는 모두를 위한 브랜드입니다. 스포츠와 당신의 삶, 그리고 세상을 바꿉니다.
            <br />
            <br />
            아디다스는 단순히 스포츠웨어와 운동복을 만드는 브랜드가 아닙니다. 우리는 업계를 선도하는 리더들과 파트너십을 맺고 세상에 없던 것들을 함께 창조합니다. 이를 통해 우리는 팬들이 원하는 스포츠 제품과 스타일을 제공하고 동시에 환경의 지속가능성을 지켜 나가고 있습니다. 아디다스는 크리에이터의 브랜드입니다. 게임의 판도를 바꾸고, 변화를 이끕니다. 그리고 우리는 우리가 지닌 영향력으로 세상을 어떻게 만들어 나갈지 고민합니다.
          </p>
        </Paragraph>
        <Paragraph>
          <h1>세상의 모든 스포츠를 포용하는 브랜드</h1>
          <p>
            아디다스는 모두의 스포츠 브랜드입니다. 새로움을 추구하는 크리에이터의 브랜드입니다. 관습에 도전하고, 새로운 룰을 만들며, 창조적인 파격을 거듭합니다. 우리는 단순한 스포츠 제품, 그 이상을 만듭니다. 결승선을 통과하는 그 순간까지 흔들림 없는 몰입과 의지, 승리의 정신을 추구합니다. 운동하는 여성들을 위해 브라와 타이츠를 만들며, 세상의 모든 스포츠와 모든 체형을 포용합니다. 새로움을 디자인하고, 혁신하고, 창조합니다. 그라운드에서 육상 트랙과 코트, 수영장에 이르기까지, 스포츠의 새로운 미래를 위한 실험을 반복합니다. NMD에서 파이어버드 트랙수트까지, 어제의 영감을 바탕으로 내일의 스트릿 트렌드를 생각해냅니다. 영원한 스트릿의 아이콘으로 자리 잡은 스탠 스미스와 슈퍼스타에서 볼 수 있듯이, 아디다스는 어제의 클래식에 오늘의 트렌드라는 새 생명을 불어넣는 브랜드입니다.
            <br />
            <br />
            아디다스가 내놓는 컬렉션은 하이 패션과 퍼포먼스의 경계를 자유롭게 넘나듭니다. 아디다스 by 스텔라 맥카트니의 애슬레틱 컬렉션이 증명하듯 스튜디오와 스트릿 룩의 구분은 의미가 없습니다. 오리지널스의 라이프스타일 어패럴도 필요할 때면 언제든 운동복이 될 수 있습니다. 우리의 삶은 끊임없이 변화하고 있습니다. 일상의 모습도 하루가 다르게 바뀝니다. 아디다스의 디자인 철학은 이 세상의 끝없는 진화를 담고 있습니다.
          </p>
        </Paragraph>
      </Container>
    </>
  );
}

export default Explanation;