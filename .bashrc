function deploy {
    grunt build
    git commit
    HASH=`git rev-parse HEAD`
    HASH_SHORT=${HASH:0:8}
    git checkout gh-pages
    rm -rf index.html scripts styles
    cp -r dist/* .
    git add .
    git commit -m "bumb $HASH_SHORT"
    git push
}