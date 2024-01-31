import { useRouter } from "next/router";
import React from "react";

const SomeIdPage: React.FC = () => {
    const { query } = useRouter();
    return <div>hello page {query.someId}</div>;
};

export default SomeIdPage;
