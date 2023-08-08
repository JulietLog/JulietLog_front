import { rest } from "msw";

export const handlers = [
  // Home
  rest.get("/api/search/trending", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(["test1", "test2", "test3"]));
  }),

  rest.get("/api/usercategories", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(["login1", "login2", "login3"]));
  }),

  rest.get("/api/posts/all", (req, res, ctx) => {
    const posts: posts = [
      {
        postId: 1,
        title: "title",
        content: "content",
        tags: ["tags", "tåg23"],
        like: 1,
        count: 1,
        nickname: "hi",
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1689750423556-b246f05cd301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
        isBookmarked: true,
        createdAt: new Date(),
      },
      {
        postId: 2,
        title: "title",
        content: "content",
        tags: ["tags"],
        like: 1,
        count: 1,
        nickname: "hi",
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1689750423556-b246f05cd301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
        isBookmarked: false,
        createdAt: new Date(),
      },
      {
        postId: 3,
        title: "title",
        content: "content",
        tags: ["tags"],
        like: 1,
        count: 1,
        nickname: "hi",
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1689750423556-b246f05cd301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
        isBookmarked: true,
        createdAt: new Date(),
      },
    ];
    return res(ctx.status(200), ctx.json(posts));
  }),

  rest.get("/api/detailcontents", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        `<h1>h1</h1><h2>h2태그</h2><h3>h3태그</h3><h4>h4태그</h4><p>p태그</p><p><strong>볼드</strong></p><p><span style="color:hsl(0, 75%, 60%);"><strong>색깔</strong></span></p><p><span style="background-color:hsl(90, 75%, 60%);color:hsl(0, 0%, 0%);">하이라이트색깔</span></p><p><span style="font-family:Arial, Helvetica, sans-serif;">글씨체 Arial</span></p><p><span style="font-family:'Courier New', Courier, monospace;">글씨체 Courier New</span></p><p><span style="font-family:Georgia, serif;">글씨체 Georgia</span></p><p><span style="font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif;">글씨체 글씨체Lucida Sans Unicode</span></p><p><span style="font-family:'Times New Roman', Times, serif;">글씨체 Tahoma</span></p><p><span style="font-family:'Times New Roman', Times, serif;">글씨체 Times New Roman</span></p><p><span style="font-family:'Trebuchet MS', Helvetica, sans-serif;">글씨체 Trebuchet MS</span></p><p><span style="font-family:Verdana, Geneva, sans-serif;">글씨체 Verdana</span></p><ul class="todo-list"><li><label class="todo-list__label"><input type="checkbox" disabled="disabled" checked="checked"><span class="todo-list__label__description">확인 목록</span></label></li></ul><ul><li>불릿 목록</li></ul><ol><li>번호 목록<ol><li>들여쓰기 늘리기</li></ol></li><li>들여쓰기 줄이기</li></ol><p>&nbsp;</p><h1>안녕</h1><h2 style="text-align:center;">안녕하세요</h2><h3>제목 아무개</h3><h4>ㅇㅇㅇㅇㅇ</h4><pre><code class="language-plaintext">호롤롤</code></pre><p>✅Git 명령어 활용하기<br><br>git init<br>git add &lt;파일명&gt; 혹은 git add .<br>git commit -m "커밋 메세지"<br>git log<br>git status<br>git branch<br>git switch &lt;브랜치명&gt; 혹은 git checkout &lt;브랜치명&gt;<br>git merge<br>git stash</p><p>&nbsp;</p><p>git init: 저장소 만들기<br>해당 경로에 .git이라는 폴더가 만들어진다.<br>개발 프로젝트 시작 시 딱 한 번만 입력하면 된다.<br><br>📌git add: 저장할 파일을 지정하기<br>git add &lt;파일명&gt; : 특정 파일만 저장<br>git add . : 현재 폴더에 있는 모든 파일을 저장<br><br>📌git commit: 실제로 저장하기<br>git commit -m “커밋 메세지”<br><br><br>📌git log: 커밋 내역 보기<br>git log에서 빠져나오고 싶다면 키보드에서 q를 입력한다.<br><br>📌git status: 작업 디렉터리 상태보기<br>master 브랜치에 있고, 아무런 커밋도 하지 않았음을 의미<br><br>📌git branch: 브랜치 나누기<br>git branch &lt;브랜치명&gt;<br>원본 파일을 변경하지 않고, 새로운 곳에 코드를 짤 수 있다.<br><br>📌git checkout: 해당 브랜치로 이동하기<br>git switch &lt;브랜치명&gt; 혹은 git checkout &lt;브랜치명&gt;<br><br>&nbsp;</p>`,
      ),
    );
  }),
  rest.get("/api/comments", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          commentId: "1",
          nickname: "1yoouoo",
          profileImage: "",
          contents: "정말 유익한 글이었습니다.",
          createdAt: "2023-08-05T14:00:00Z",
          isDeleted: false,
          childComments: [],
        },
        {
          commentId: "2",
          nickname: "cordelia273",
          profileImage: "",
          contents: "깔끔하게 잘 정해주셨네요.",
          createdAt: "2023-07-13T14:00:00Z",
          isDeleted: false,
          childComments: [
            {
              commentId: "3",
              nickname: "ice coffee2031",
              profileImage: "",
              contents: "저도 그렇게 생각합니다ㅋㅋ",
              createdAt: "2023-07-13T14:00:00Z",
              isDeleted: false,
              childComments: [
                {
                  commentId: "4",
                  nickname: "ice coffee2031",
                  profileImage: "",
                  contents: "ffff",
                  createdAt: "2023-07-13T14:00:00Z",
                  isDeleted: false,
                  childComments: [],
                },
                {
                  commentId: "5",
                  nickname: "ice coffee2031",
                  profileImage: "",
                  contents: "eeee",
                  createdAt: "2023-07-13T14:00:00Z",
                  isDeleted: false,
                  childComments: [],
                },
              ],
            },
            {
              commentId: "6",
              nickname: "ice coffee2031",
              profileImage: "",
              contents: "다시 생각해 보니 아닌 것 같네요ㅡㅡ",
              createdAt: "2023-07-13T14:00:00Z",
              isDeleted: false,
              childComments: [],
            },
          ],
        },
        {
          commentId: "7",
          nickname: "yeon",
          profileImage: "",
          contents: "한번에 알 수 있어서 너무 좋아요 :) 감사합니다.",
          createdAt: "2023-07-02T14:00:00Z",
          isDeleted: false,
          childComments: [
            {
              commentId: "8",
              nickname: "ice coffee2031",
              profileImage: "",
              contents: "ffff",
              createdAt: "2023-07-13T14:00:00Z",
              isDeleted: false,
              childComments: [],
            },
            {
              commentId: "9",
              nickname: "ice coffee2031",
              profileImage: "",
              contents: "eeee",
              createdAt: "2023-07-13T14:00:00Z",
              isDeleted: false,
              childComments: [],
            },
            {
              commentId: "10",
              nickname: "ice coffee2031",
              profileImage: "",
              contents: "2222",
              createdAt: "2023-07-13T14:00:00Z",
              isDeleted: false,
              childComments: [],
            },
          ],
        },
      ]),
    );
  }),

  rest.get("/api/userCategories", (req, res, ctx) => {
    // const VALID_TOKEN = "your-valid-token";
    // const token = req.headers.get("Authorization");
    // if (!token || token !== `Bearer ${VALID_TOKEN}`) {
    //   return res(ctx.status(401), ctx.json({ error: "Unauthorized" }));
    // }
    return res(
      ctx.status(200),
      ctx.json([
        "개발자",
        "깃헙사용법정리",
        "깃허브",
        "코딩용어",
        "알고리즘",
        "Pascal",
        "Object",
        "IMP",
        "Javascript",
      ]),
    );
  }),
  rest.delete("/api/usercategories/:categoryId", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get("/api/trendCategories", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        "Github",
        "Java",
        "Physon",
        "IMP",
        "Language",
        "ALGOL",
        "Javascript",
        "PEARL",
        "Object",
        "PL/SQL",
        "Pascal",
        "JASS",
      ]),
    );
  }),
  rest.get("/api/liveSearch", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        "리액트네이티브",
        "리액트네이티브 ios",
        "리액트네이티브 애니메이션",
        "리액트네이티브 플러터 차이",
        "리액트네이티브 튜토리얼",
      ]),
    );
  }),
];
