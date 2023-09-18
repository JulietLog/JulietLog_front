import { rest } from "msw";

export const commentsHandler = [
  rest.get(`/comments`, (req, res, ctx) => {
    const postId = req.url.searchParams.get("postId");
    const page = req.url.searchParams.get("page");
    if (postId == "37" && page === "1") {
      return res(
        ctx.status(200),
        ctx.json({
          totalResults: 1,
          totalPages: 1,
          comment: [
            {
              commentId: 1,
              nickname: "닉네임",
              profileImg:
                "https://plus.unsplash.com/premium_photo-1689750423556-b246f05cd301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
              content: "내용",
              createdAt: "2023-08-28 17:08:22",
              isDeleted: false,
              isBlocked: false,
              child: [
                {
                  commentId: 2,
                  nickname: "닉네임2",
                  profileImg:
                    "https://plus.unsplash.com/premium_photo-1689750423556-b246f05cd301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",

                  content: "내용2",
                  createdAt: "2023-08-28 17:08:22",
                  isDeleted: false,
                  isBlocked: false,
                },
              ],
            },
          ],
        }),
      );
    } else {
      return res(ctx.status(404));
    }
  }),
];