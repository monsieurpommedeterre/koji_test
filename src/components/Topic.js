import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Topic(props) {
    // I get the topic id from the params in the url
    let topicId = props.match.params.topicId;
    const [topicTitle, setTopicTitle] = useState('');
    const [topicBody, setTopicBody] = useState('');
    useEffect(()=> {
        ( async () => {
            // I fetch the API only for the id of the concerned topic
            const rawResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${topicId}`)
            const response = await rawResponse.json();
            setTopicTitle(response.title);
            setTopicBody(response.body);
          } 
        )()
    });
  return (
    <Container>
        <Row>
            <Col>
                <h1>{topicTitle}</h1>
                <p>{topicBody}</p>
            </Col>
        </Row>
    </Container>
  );
}

export default Topic;