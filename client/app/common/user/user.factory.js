let UserFactory = function ($http) {
  const user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn; 
  };

  let hello = () => {
    $http.get("http://localhost:8080/harmonie-gst-services-rest/rest/hello/keuss").then(r => {
      console.log("UserFactory", r.data);
    });
  };

  return { getUser, isSignedIn, hello };
};

UserFactory.$inject = ['$http'];

export default UserFactory;
