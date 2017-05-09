ROUTERS='find *  -type d'
for router in `$ROUTERS`
do
  cp $router/front.jpg $router.jpg
  convert $router.jpg -resize 256 $router.jpg
done
