# 🎨 PR Labeler 

Automatically apply a label to new pull requests to streamline your workflow. This GitHub Action helps you categorize and prioritize pull requests effortlessly.

## Features

- Automatically applies a specified label to new pull requests.
- Simple and easy to integrate into your GitHub workflows.

## Usage

To use this action in your GitHub repository, you'll need to create or update a GitHub Actions workflow file in your repository.

### Inputs

The action requires the following inputs:

- `gh-token` (required): The GitHub token for authentication. Ensure it has the required permissions to access and modify pull requests.
- `label` (required): The label to be applied to the pull request. This helps categorize or prioritize PRs.

### Outputs

This action does not produce any outputs.

## Example Workflow

Here's an example of how to use this action in a GitHub Actions workflow file:

```yaml
name: "Label New Pull Requests"

on:
  pull_request:
    types: [opened, reopened]

jobs:
  label:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Apply label to PR
        uses: ./
        with:
          gh-token: ${{ secrets.GITHUB_TOKEN }}
          label: 'needs-review'
```
