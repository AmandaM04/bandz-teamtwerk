var twitter =[
  {name:"Barack Obama", handle:"@barack_obama",tweet: "MAKEN is the best drummer of all time",timestamp:"08:17 - 14 oct 2017", pic:"<img src='/img/rickjames.jpg' class='profile'>",likes:"<img src='/img/likes1.png' class='likes'>"},
  {name:"Beyonce Knowles", handle:"@beyonce", tweet:"I love AMANDA",timestamp:"11:17 - 21 sep 2017", pic:"<img src='/img/beyonce.jpg' class='profile'>",likes:"<img src='/img/likes2.png' class='likes'>"},
  {name:"Macaulay Culkin", handle:"@IncredibleCulk", tweet:"JEFF writes loops the way he shreds",timestamp:"04:17 - 14 sep 2017", pic:"<img src='/img/macaulayculkin.jpeg' class='profile'>",likes:"<img src='/img/likes3.png' class='likes'>"}
];
function printToDom(string, divID){
    var myDiv = document.getElementById(divID);
    if ( myDiv != null){
     myDiv.innerHTML = string;
    }
};
function twittercardbuilder(twitter){
  var tweetarray=[];
for (var i = 0; i < twitter.length; i++) {
  tweetarray.push("<div class='tweet'>" + "<div class='tlogo line'>" + "</div>" + "<div class='line'>" + twitter[i].pic+ "</div>" +"<h1 class='text line name'>" + twitter[i].name + "</h1>" +"<img src='/img/twitter-logo-7249D46199-seeklogo.com.png' class='line'>" +"<br>"+ "<h2 class='text two'>" + twitter[i].handle + "</h2>" +"<br>"+ "<pclass='text'>" + twitter[i].tweet + "</p>" +"<pclass='text'>" + twitter[i].timestamp + "</p>" + twitter[i].likes +"</div>");
  console.log(tweetarray);
}
printToDom(tweetarray, "tcard");

function redirect()
    {
    var url = "https://www.ticketmaster.com/";
    window.location.href= url;
    }

var tours = [
    {
        image: "img/BarclaysCenter.jpg",
        date: "June 12, 2018",
        time: "5:00 pm",
        location: "Brooklyn, NY",
        venue: "Barclays Center",

    },
    {
        image: "img/OracleArena.jpg",
        date: "August 8, 2018",
        time: "6:00 pm",
        location: "Oakland, CA",
        venue: "Oracle Arena",

    },
    {
        image: "img/ToyotaCenter.jpg",
        date: "October 31, 2018",
        time: "7:00 pm",
        location: "Houston, TX",
        venue: "Toyota Center",

    },
    {
        image: "img/CotaiArena.jpg",
        date: "January 5, 2018",
        time: "7:00 pm",
        location: "Macau, China",
        venue: "Cotai Arena",

    },
    {
        image: "img/MercedesArena.jpeg",
        date: "March 3, 2018",
        time: "5:00 pm",
        location: "Berlin, Germany",
        venue: "Mercedes-Benz Arena",

    },
    {
        image: "img/SaitamaSuperArena.jpg",
        date: "May 23, 2018",
        time: "5:00 pm",
        location: "Saitama, Japan",
        venue: "Saitama Super Arena",

    }
];

    function printToDom(domString,id){
        if(document.getElementById(id) !== null){
            document.getElementById(id).innerHTML = domString; 
        }    
    }

  function tourStringBuilder(tourArray){
    var strang = "";
    for(var i = 0; i < tourArray.length; i++)
    {
      strang += "<img class='tourImage' src='"+ tourArray[i].image +"'>";
      strang += "<div class='tour'>";
      strang += "<div> <span class='tourDate'>" 
      + tourArray[i].date + " </span><span class='tourTime'> " 
      + " @ " + tourArray[i].time +"</span></div>";
      strang += "<h2>" + tourArray[i].location + "</h2>";
      strang += "<h3>" + tourArray[i].venue + "</h3>";
      strang += "<input type='button' class='btn' value='Buy Tickets' onClick='redirect()'>",
      strang += "</div>";
    }
    printToDom(strang, 'tour-holder');
  }
   
  tourStringBuilder(tours);
};
twittercardbuilder(twitter);


var members = [
    { 
        name: "Brian Wright",
        nickname: "Bushwick Brian",
        picture: "img/babe-slayer.jpg",
        bio: "Bushwick Brian is the all in one package front man for this Irish hip hop Folk Jazz Death Country Band. Born in the hill tops of the Andes Mountains, Bushwick Brian, having no access to musical instruments, has trained his vocal chords so well that even the hearing impaired could hear his sweet, sweet melodies and sense of pitch. He knew that there was some sort of divine calling for him to move to America to share his ability to vibrate his voice box so well that it could calm even the most vicious stampede of wildebeests. Upon arriving in America, he heard a sound of holy riffs echoing in the heavens. Bushwick Brian couldn't resist the urge to follow this holy song. As he came closer, a silhouette of man playing the guitar appeared on the horizon. This man later became the guitarist for the band later to be name Team Twerk."
    },
    {
        name: "Jeff Chen",
        nickname: "Jeffro the Hulkstein",
        picture: "img/jeffro.jpg",
        bio: "Jeffro was created in a high security, top-secret laboratory, as a part of an experiment thats goal was to put the beast of all knowledge of all things into the body of a Frankenstein/Hulk. Knowing everything there is to know about the world caused Jeffro many emotions and the only thing to bring these emotions into a calm state was playing the guitar. By doing this so often he became the most fantastical 6 string plucker. Tales were told of him so far west of the Mississippi people on the east bank heard them. Shortly after the uniting of Bushwick Brian and Jeffro they started looking for a third member of the band. They needed to fill the most important spot...Cowbell! There were rumors of a cowbell player that could cure common colds and indigestion with her bell of healing."
    },
    {
        name: "Amanda Mitchell",
        nickname: "Bell No",
        picture: "img/bell-no.jpg",
        bio: "Bell No was born in an abandoned church south north of the west eastern region of somewhere. As a little girl she would like to scare the pigeons in the bell towers of the church to past the time. One mid afternoon, she was stalking this real girthy pigeon, like a cat about to pounce on its prey. When she got close enough to attack she didn't hesitate. She scared this pigeon so bad it shot up into the air to take flight and ran into one of the bells breaking its neck and killing it. The combination of shattered bird spine and bell ringing resonated within her heart creating this passion of playing bells. She would play bell shows for anyone who would listen. One day on her way to buy the brand new cow-beller 2500 she ran into Bushwick Brian and Jeffro the Hulkstein. That day the band grew one more member and was missing only one piece to their puzzle....a drummer."
    },
    {
        name: "Maken Hubbard",
        nickname: "Pepto Biz Markie",
        picture: "img/pepto.jpg",
        bio:"Bushwick Brian and Jeffro mentioned to Bell No that all that they lacked in having the worlds most supreme rag tag group of musicians was a drummer. Bell No told them that there was this drunk homeless man that would air drum all day long for tips in front of the abandon music store where she would get her bells. She told them that since he would air drum she didn't know if he had the chops to make the cut into the band but she told them that it looked as if there were drums in front of him he probably would be decent. So they continued through the abandoned town to the abandon music store to find this man. Sure enough, the homeless man was air drumming, what looked to be like this wicked funk-tastic beat, and Bushwick Brian approached him and asked his name. His name was Pepto Biz Markie and he was abandoned there, left with nothing but booze and air to beat on. The members of Team Twerk found some old paint buckets and slid them in front of him. The technicality of his beats were so technical he technically had the skills of a technician, a beat technician. Thus, forming the mightiest, most bestest Irish Hip Hop Folk Jazz Death Country band ever to have been in the history of being."
    }    
];

function printToDom(string,id){
    if(document.getElementById(id) !== null){
        document.getElementById(id).innerHTML = string;
    }
}

function dismember(members){
    var who = '';
    var aka = '';
    var about = '';
    var image = '';
    var result = '';
    for (var i = 0; i < members.length; i++) {
        who = members[i].name;
        aka = members[i].nickname;
        image = members[i].picture;
        about = members[i].bio;
        result += "<div><h2 class='heads'>" + who + ": " + "'" + aka + "'" + "</h2>" + "<p class='para'><img class='members-pic' src='" + image + "'>" + about + "</p></div>";
        
    }
    printToDom(result,"bio");
}
dismember(members);

var albums = [
    {
        name: 'Booty Clans',
        'release date': '2007',
        'cover img': './img/album1.jpeg',
        'total songs': '5',
        songs:['Ninja Glutes','Fun Buns And Bread Crumbs','Slap Fast, Beat Ass','Curves Preserves','Cheeks And Freaks']
    },
    {
        name: 'No-Handed Clap',
        'release date': '2008',
        'cover img': './img/album2.jpeg',
        'total songs': '4',
        songs:['Cheek Clap Slap','Crack Gap Slap','Butt Smack Snack','Booty Freaking And Creaking']
    },
    {
        name: 'High-Rise Thighs',
        'release date': '2009',
        'cover img': './img/album3.jpeg',
        'total songs': '4',
        songs:['Cheeks And Freaks','Butt Smack Snack','Ninja Glutes','Booty Freaking And Creaking']
    },
    {
        name: "Must Be Jelly, Jam Don't Shake Like That",
        'release date': '2010',
        'cover img': './img/album4.jpeg',
        'total songs': '24',
        songs:['Fun Buns And Bread Crumbs','Cheek Clap Slap','Butt Smack Snack','Surprise Thighs And Cherry Pies']
    }
];

function displayAlbums(albums){
    var result = '';
    for(var i = 0; i < albums.length; i++){
        result += '<div class="flip">';
        result +=   '<div class="front">';
        result +=       '<div class="album">';
        result +=           '<img src="' + albums[i]['cover img'] + '">';
        result +=       '</div>';
        result +=   '</div>';
        result +=   '<div class="back">';
        result +=       '<div class="album">';
        result +=           '<h2>' + albums[i].name + '</h2>';
        result +=           '<ul>';
        for(var j = 0; j < albums[i].songs.length; j++){
            result += '<li>' + albums[i].songs[j] + '</li>';
        }                  
        result +=           '</ul>'
        result +=       '</div>'
        result +=   '</div>'
        result += '</div>';
    }
    printToDom(result,"album-wrapper");
}

displayAlbums(albums);

