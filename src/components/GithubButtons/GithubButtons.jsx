import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
    <>
        <GitHubButton
            className="github-button"
            href="https://github.com/adam-mcdaniel/oakc/fork"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count="true"
            aria-label="Fork adam-mcdaniel/oakc on GitHub"
        >
            Fork
        </GitHubButton>
        <GitHubButton
            className="github-button"
            href="https://github.com/adam-mcdaniel/oakc"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star adam-mcdaniel/oakc on GitHub"
        >
            Star
        </GitHubButton>
    </>
);

export default GithubButton;
