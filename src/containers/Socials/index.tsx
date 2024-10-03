import {
  MainWrapper,
  Container,
  Box,
  InnerBox,
  Title,
  QuestionMark,
  Subtitle,
} from "./styled";

const Socials = () => {
  const boxes = Array.from({ length: 9 }, (_, index) => index + 1);

  const links = [
    { id: 1, name: "Facebook", url: "https://facebook.com" },
    { id: 2, name: "Twitter", url: "https://twitter.com" },
    { id: 3, name: "Instagram", url: "https://instagram.com" },
    { id: 4, name: "LinkedIn", url: "https://linkedin.com" },
    { id: 5, name: "Snapchat", url: "https://snapchat.com" },
    { id: 6, name: "TikTok", url: "https://tiktok.com" },
    { id: 7, name: "YouTube", url: "https://youtube.com" },
    { id: 8, name: "Pinterest", url: "https://pinterest.com" },
    { id: 9, name: "Reddit", url: "https://reddit.com" },
  ];

  return (
    <MainWrapper id="social">
      <Title>Social</Title>
      <Subtitle>Find the social links hidden in the boxes</Subtitle>
      <Container>
        {boxes.map((box, index) => {
          const link = links[index];
          return (
            <Box key={box} questionMark={index % 2 !== 0}>
              <InnerBox>
                {link && index % 2 !== 0 ? (
                  <>
                    <QuestionMark>?</QuestionMark>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {link.name}
                    </a>
                  </>
                ) : null}
              </InnerBox>
            </Box>
          );
        })}
      </Container>
    </MainWrapper>
  );
};

export default Socials;
