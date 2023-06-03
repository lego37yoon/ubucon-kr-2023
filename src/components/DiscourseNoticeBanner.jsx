
import { Button, Strip, Row, Col } from "@canonical/react-components";
import { useTranslations } from "../i18n/utils";
import { useState, useEffect } from "react";

export default function DiscourseNoticeBanner(props) {
    const [ topicList, setTopicList ] = useState([]);
    const [ moreTopic, setMoreTopic ] = useState([]);
    const t = useTranslations(props.language);

    useEffect(() => {
        fetch(`${props.baseUrl}${props.jsonFeedEndpoint}`)
            .then(res => res.json()).then(data => {
                console.log("data fetched")
                let topics = data["topic_list"]["topics"];
                let filteredTopics = topics
                    .filter(item => item["tags"].includes(props.topicTag))
                    .map(item => {
                        return {
                            title: item["title"],
                            date: new Date(item["last_posted_at"]).toLocaleString(),
                            url: `${props.baseUrl}/t/${item["slug"]}/${item["id"]}`,
                        };
                    }).slice(0, 3);
                setTopicList(filteredTopics);
                setMoreTopic(`${props.baseUrl}${data["topic_list"]["more_topics_url"]}`);
            })
    }, [])
    return (
        <Strip>
            <Row>
                {topicList && topicList.map(item => (
                    <Col size={4} className={"p-divider__block"}>
                        <a href={item.url}>
                            <h3>{item.title}</h3>
                        </a>
                        <b>{item.date}</b>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col size={2} emptyLarge={11} className={"u-align-text--right"}>
                    <Button
                        appearance=""
                        element={"a"}
                        href={moreTopic}
                    >
                        {t("noticeBanner.moreArticle")}
                    </Button>
                </Col>
            </Row>
        </Strip>
    )
}

