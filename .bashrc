function deploy {
    grunt build
    git add .
    git commit
    HASH=`git rev-parse HEAD`
    HASH_SHORT=${HASH:0:8}
    git checkout gh-pages
    git rm -r index.html scripts styles
    cp -r dist/* .
    git add .
    git commit -m "bump $HASH_SHORT"
    git push
    git checkout master
    echo 'deploy finished'
}