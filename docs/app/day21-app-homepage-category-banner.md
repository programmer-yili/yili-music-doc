---
prev: /mp/day20-mp-homepage-category-banner.md
next: /service/day22-springboot-role-permission.md
---

# Day21：Flutter首页分类列表

## 重点内容

### Header


```dart
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:yili_music_app/pages/home/category_banner.dart';

import '../../theme.dart';

class Header extends StatelessWidget {
  const Header({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;
    return Container(
      width: screenSize.width,
      height: 357,
      child: Stack(children: <Widget>[
        NotificationHeader(screenSize: screenSize),
        Column(
          children: <Widget>[
            SizedBox(
              height: 137,
            ),
            CategoryBanner()
          ],
        )
      ]),
    );
  }
}

class NotificationHeader extends StatelessWidget {
  const NotificationHeader({
    Key? key,
    required this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Container(
            padding: const EdgeInsets.only(top: 44),
            width: screenSize.width,
            height: 240,
            decoration: const BoxDecoration(
                color: primary,
                borderRadius:
                    BorderRadius.only(bottomRight: Radius.circular(100))),
            child: Container(
                padding: const EdgeInsets.only(
                    top: 19, bottom: 19, right: 25, left: 25),
                child: SizedBox(
                    width: screenSize.width,
                    height: 80,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(
                              "晚上好, ",
                              style: TextStyle(
                                color: Colors.white.withOpacity(0.5),
                                fontSize: 16,
                              ),
                            ),
                            const SizedBox(
                              height: 5,
                            ),
                            const Text(
                              "依力",
                              style: TextStyle(
                                  fontSize: 20,
                                  color: Colors.white,
                                  fontWeight: FontWeight.w500),
                            )
                          ],
                        ),
                        const Spacer(),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: <Widget>[
                            IconButton(
                                onPressed: () {},
                                icon:
                                    SvgPicture.asset('assets/icons/bell.svg')),
                            const SizedBox(
                              width: 18,
                            ),
                            Container(
                                width: 38,
                                height: 38,
                                decoration: BoxDecoration(
                                    color: Colors.white,
                                    borderRadius: BorderRadius.circular(19)),
                                child: Image.asset('assets/images/avatar.png')),
                          ],
                        )
                      ],
                    )))),
        Positioned(top: 0, left: 0, child: Image.asset('assets/images/bg.png')),
      ],
    );
  }
}


```


### CategoryBanner


```dart

import 'package:flutter/cupertino.dart';

import 'category_card.dart';

class CategoryBanner extends StatelessWidget {
  const CategoryBanner({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      padding: EdgeInsets.only(left: 25),
      child: Row(children: <Widget>[
        CategoryCard(
          title: "嘻哈音乐",
          description: "1.4万播放量",
          image: 'assets/images/banner.png',
          onPress: () {
            print("sdfsd");
          },
        ),
        CategoryCard(
          title: "嘻哈音乐",
          description: "1.4万播放量",
          image: 'assets/images/banner.png',
          onPress: () {
            print("sdfsd");
          },
        ),
        CategoryCard(
          title: "嘻哈音乐",
          description: "1.4万播放量",
          image: 'assets/images/banner.png',
          onPress: () {
            print("sdfsd");
          },
        ),
      ]),
    );
  }
}

```


### CategoryCard

```dart

import 'package:flutter/material.dart';

class CategoryCard extends StatelessWidget {
  const CategoryCard(
      {Key? key,
      required this.title,
      required this.description,
      required this.image,
      required this.onPress})
      : super(key: key);

  final String title, description, image;

  final VoidCallback onPress;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(right: 25),
      width: 140,
      height: 220,
      child: GestureDetector(
        onTap: onPress,
        child: Stack(
          children: <Widget>[
            Image.asset(image),
            Positioned(
                top: 20,
                left: 15,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      title,
                      style: TextStyle(fontSize: 18, color: Colors.white),
                    ),
                    Text(
                      description,
                      style: TextStyle(
                          fontSize: 14, color: Colors.white.withOpacity(0.8)),
                    ),
                  ],
                )),
          ],
        ),
      ),
    );
  }
}


```



## 录播视频

::: tip
录播视频预计1月28日更新
:::
