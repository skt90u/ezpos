git ls-files | grep '\.swp$' | xargs git rm
git ls-files | grep '\.swo$' | xargs git rm
git ls-files | grep '\.DS_Store$' | xargs git rm

# ezpos
a easy point of sale system written in nodejs
