param (
    [string]$CommitMessage
)

# Check if a commit message is provided
if ([string]::IsNullOrEmpty($CommitMessage)) {
    Write-Host "Error: Please provide a commit message."
    Exit 1
}

# Add all changes
git add .

# Commit with the provided commit message
git commit -m $CommitMessage

Write-Host "Changes committed with message: $CommitMessage"