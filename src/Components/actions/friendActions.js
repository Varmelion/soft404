export const FIND_FRIENDS = "FIND_FRIENDS";
export const GET_FRIENDS_POSTS = "GET_FRIENDS_POSTS";
export const REMOVE_FROM_FRIENDS = "REMOVE_FROM_FRIENDS";

export function findFriendsMiddleware(name) {
  return dispatch => {
    if (name) {
      fetch(`https://delfinkitrainingapi.azurewebsites.net/api/user/${name}`, {
        method: "GET",
        headers: {
          "X-ZUMO-AUTH": sessionStorage.getItem("azure_access_token")
        }
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }

          return response;
        })
        .then(response => response.json())
        .then(r => dispatch(findFriends(r)));
    } else {
      dispatch(findFriends([]));
    }
  };
}
export function findFriends(name) {
  return {
    type: FIND_FRIENDS,
    payload: name
  };
}

export function getFriendsPostsMiddleware() {
  return dispatch => {
    return fetch(
      "https://delfinkitrainingapi.azurewebsites.net/api/post/friend/",
      {
        method: "GET",
        headers: {
          "X-ZUMO-AUTH": sessionStorage.getItem("azure_access_token")
        }
      }
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(r => dispatch(getFriendsPosts(r)));
  };
}
export function getFriendsPosts(friendsPosts) {
  return {
    type: GET_FRIENDS_POSTS,
    payload: friendsPosts.sort((a, b) =>
      a.PublishDate > b.PublishDate ? -1 : 1
    )
  };
}

export const addToFriendsMiddleware = id => {
  return dispatch => {
    return fetch("https://delfinkitrainingapi.azurewebsites.net/api/friend", {
      method: "POST",
      headers: {
        "X-ZUMO-AUTH": sessionStorage.getItem("azure_access_token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FriendId: id,
        Show: true
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(() => dispatch(getFriendsPostsMiddleware()));
  };
};

export const removeFromFriendsMiddleware = id => {
  return dispatch => {
    fetch(`https://delfinkitrainingapi.azurewebsites.net/api/friend/${id}`, {
      method: "DELETE",
      headers: {
        "X-ZUMO-AUTH": sessionStorage.getItem("azure_access_token")
      }
    }).then(() => dispatch(removeFromFriends(id)));
  };
};
export const removeFromFriends = id => ({
  type: REMOVE_FROM_FRIENDS,
  payload: id
});
