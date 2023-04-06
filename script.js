let input = document.querySelector("#input");

let img = document.querySelector("#img");

let name = document.querySelector(".name");

let bio = document.querySelector(".bio");

let dateJoined = document.querySelector(".date-joined");

let githubData = document.querySelector(".githubData");

let userlocation = document.querySelector(".location");

let twitter = document.querySelector(".twitter");

let link = document.querySelector(".link");

let company = document.querySelector(".company");

let repos = document.querySelector(".repos");

let followers = document.querySelector(".followers");

let following = document.querySelector(".following");

const getUser = async () => {
  let user = input.value;

  if (user != "") {
    const response = await fetch(`https://api.github.com/users/${user}`);

    // console.log(response);

    if (response.ok) {
      let value = await response.json();

      console.log(value);

      await waitForImage(value);

      img.style.backgroundImage = `url(${value.avatar_url})`;

      name.innerHTML = value.name;

      name.nextElementSibling.innerHTML = `@${value.login}`;

      name.nextElementSibling.href = value.html_url;

      bio.innerHTML = value.bio ?? "This profile has no bio";

      dateJoined.innerHTML = `Joined ${value.created_at.slice(0, 10)}`;

      userlocation.innerHTML = `<i class="fa-solid fa-location-dot" style="color: #ffffff;"></i> ${
        value.location ?? "No location found"
      }`;

      twitter.innerHTML = `<i class="fa-brands fa-twitter" style="color: #ffffff;"></i> ${
        value.twitter_username ?? "No twitter account found"
      }`;

      link.innerHTML = `<i class="fa-solid fa-link" style="color: #ffffff;"></i> ${
        value.html_url ?? "No link found"
      }`;

      company.innerHTML = `<i class="fa-solid fa-link" style="color: #ffffff;"></i> ${
        value.company ?? "No company found"
      }`;
      repos.innerHTML = `Repos <div>${
        value.public_repos ?? "No company found"
      }<div/>`;
      followers.innerHTML = `Followers <div>${
        value.followers ?? "No company found"
      }<div/>`;
      following.innerHTML = `Following <div>${
        value.following ?? "No company found"
      }<div/>`;
    } else {
      alert("Error: Search not found");
    }
  } else {
    img.style.backgroundImage = ``;
  }
};

const waitForImage = async (value) => {
  let imgurl = await fetch(value.avatar_url);

  return imgurl.url;
};

const checkingtheEnterKey = (event) => {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click
    getUser();
  }
};

// getUser()
