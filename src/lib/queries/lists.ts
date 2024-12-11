export const topicListQuery = () => {
  return `
    query{
        page {
            containers {
                components {
                    ...on TopicRecord {
                        topicList {
                            label
                            id
                    }
                }
            }
        }
    }
}
`;
};
