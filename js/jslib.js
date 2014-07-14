
// Gets the browser prefix
var browserPrefix;
navigator.sayswho= (function(){
  var N = navigator.appName, ua = navigator.userAgent, tem;
  var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem = ua.match(/version\/([\.\d]+)/i))!= null) M[2] = tem[1];
  M = M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
  M = M[0];
  if(M == "Chrome") { browserPrefix = "webkit"; }
  if(M == "Firefox") { browserPrefix = "moz"; }
  if(M == "Safari") { browserPrefix = "webkit"; }
  if(M == "MSIE") { browserPrefix = "ms"; }
})();

function switch_language(language)
{
  switch(language)
  {
    case 'german':
      elm = document.getElementById('about_link');
      elm.innerHTML = german_link_about;
      elm = document.getElementById('calendar_link');
      elm.innerHTML = german_link_calendar;
      elm = document.getElementById('repertoire_link');
      elm.innerHTML = german_link_repertoire;
      elm = document.getElementById('multimedia_link');
      elm.innerHTML = german_link_multimedia;
      elm = document.getElementById('gallery_link');
      elm.innerHTML = german_link_gallery;
      elm = document.getElementById('contact_link');
      elm.innerHTML = german_link_contact;
      elm = document.getElementById('info');
      elm.innerHTML = german_frontpage;
      elm = document.getElementById('about_link');
      elm.innerHTML = german_link_about;
      elm = document.getElementById('about-text');
      elm.innerHTML = german_about;
      elm = document.getElementById('calendar-text');
      elm.innerHTML = german_calendar;
      elm = document.getElementById('repertoire-text');
      elm.innerHTML = german_repertoire;
      // elm = document.getElementById('gallery-text');
      // elm.innerHTML = german_gallery;
      elm = document.getElementById('contact-text');
      elm.innerHTML = german_contact;
      break;

    case 'english':
      elm = document.getElementById('about_link');
      elm.innerHTML = english_link_about;
      elm = document.getElementById('calendar_link');
      elm.innerHTML = english_link_calendar;
      elm = document.getElementById('repertoire_link');
      elm.innerHTML = english_link_repertoire;
      elm = document.getElementById('multimedia_link');
      elm.innerHTML = english_link_multimedia;
      elm = document.getElementById('gallery_link');
      elm.innerHTML = english_link_gallery;
      elm = document.getElementById('contact_link');
      elm.innerHTML = english_link_contact;
      elm = document.getElementById('info');
      elm.innerHTML = english_frontpage;
      elm = document.getElementById('about_link');
      elm.innerHTML = english_link_about;
      elm = document.getElementById('about-text');
      elm.innerHTML = english_about;
      elm = document.getElementById('calendar-text');
      elm.innerHTML = english_calendar;
      elm = document.getElementById('repertoire-text');
      elm.innerHTML = english_repertoire;
      // elm = document.getElementById('gallery-text');
      // elm.innerHTML = english_gallery;
      elm = document.getElementById('contact-text');
      elm.innerHTML = english_contact;
      break;

    case 'polish':
      elm = document.getElementById('about_link');
      elm.innerHTML = polish_link_about;
      elm = document.getElementById('calendar_link');
      elm.innerHTML = polish_link_calendar;
      elm = document.getElementById('repertoire_link');
      elm.innerHTML = polish_link_repertoire;
      elm = document.getElementById('multimedia_link');
      elm.innerHTML = polish_link_multimedia;
      elm = document.getElementById('gallery_link');
      elm.innerHTML = polish_link_gallery;
      elm = document.getElementById('contact_link');
      elm.innerHTML = polish_link_contact;
      elm = document.getElementById('info');
      elm.innerHTML = polish_frontpage;
      elm = document.getElementById('about_link');
      elm.innerHTML = polish_link_about;
      elm = document.getElementById('about-text');
      elm.innerHTML = polish_about;
      elm = document.getElementById('calendar-text');
      elm.innerHTML = polish_calendar;
      elm = document.getElementById('repertoire-text');
      elm.innerHTML = polish_repertoire;
      // elm = document.getElementById('gallery-text');
      // elm.innerHTML = polish_gallery;
      elm = document.getElementById('contact-text');
      elm.innerHTML = polish_contact;
      break;
    default:

  }
}

// JQuery functions
$(window).load(function() {

  // $('#main-container').css('margin-left','-' + String(screen.width/2) + 'px');
  $('#main-container').css('margin-left','-640px');


  $('.container,.container-opac').fadeOut(1);
  $('#loader').fadeOut(2500);

  $('#home_link').click(function(){
    $('.container,.container-opac').fadeOut('slow');
  });

  $('#about_link').click(function(){
    $('.container,.container-opac').fadeOut('slow');
    setTimeout(function(){
      // $('#about-text').scrollTop(0);
      $('#about-content').fadeIn('slow');
    }, 250);
  });

  $('#calendar_link').click(function(){
    $('.container,.container-opac').fadeOut('slow');
    setTimeout(function(){
      $('#calendar-content').fadeIn('slow');
    }, 250);
  });

  $('#repertoire_link').click(function(){
    $('.container,.container-opac').fadeOut('slow');
    setTimeout(function(){
      $('#repertoire-content').fadeIn('slow');
    }, 250);
  });

  $('#multimedia_link').click(function(){
    $('.container,.container-opac').fadeOut('slow');
    setTimeout(function(){
      $('#multimedia-content').fadeIn('slow');
    }, 250);
  });

  $('#gallery_link').click(function(){
    $('.container,.container-opac').fadeOut('slow');
    setTimeout(function(){
      $('#gallery-content').fadeIn('slow');
    }, 250);
  });

  $('#contact_link').click(function(){
    $('.container,.container-opac').fadeOut('slow');
    setTimeout(function(){
      $('#contact-content').fadeIn('slow');
    }, 250);
  });

  //
  // Gallery code
  //

  $('#left-arrow').fadeOut();

  imgarray = new Array();
  i = 0;

  $('.picviewer').each(function(){
    if (i != 0)
    {
      $(this).fadeOut();
    }
    else
    {
      $(this).fadeIn();
    }

    i++;
    imgarray.push($(this));
    pic_height = ($(this)[0].naturalHeight);
    pic_width = ($(this)[0].naturalWidth);

    if ( (pic_height > 450)  || (pic_width > 740) )
    {
      // transform
      if ( pic_width > pic_height )
      {
        factor = pic_width/pic_height;
        final_width = 740;
        while ( (final_width/factor) > 430 )
        {
          final_width = final_width - 1;
        }
        final_height = final_width/factor;
        $(this).css('width',String(final_width) + 'px');
        $(this).css('heigth', String(final_height) + 'px');
      }
      else
      {
        factor = pic_height/pic_width;
        final_height = 450;
        while ( (final_height/factor) > 700 )
        {
          final_height = final_height - 1;
        }
        final_width = final_height/factor;
        $(this).css('heigth',String(final_height) + 'px');
        $(this).css('width', String(final_width) + 'px');
      }

    }

    // locate with padding-left and top, calculate center point
    position_x = 366 - ($(this)[0].width)/2;
    $(this).css('padding-left',String(position_x) + 'px');
    position_y = 225 - ($(this)[0].height)/2;
    $(this).css('padding-top',String(position_y) + 'px');
  });

  showing_pic = 0;

  $('#gallery-counter').html(String(showing_pic + 1) + '/' + String(imgarray.length));

  $('#left-arrow').click(function(){
    if (showing_pic == imgarray.length-1)
    {
      $('#right-arrow').fadeIn('slow');
    }
    if (showing_pic == 1)
    {
      $('#left-arrow').fadeOut();
    }
    if (showing_pic > 0)
    {
      $('.picviewer:visible').fadeOut('slow');
      showing_pic = showing_pic - 1;
      // setTimeout(function(){
        imgarray[showing_pic].fadeIn('slow');
      // }, 600);
    }
    else
    {
      $('#left-arrow').fadeOut();
    }
    $('#gallery-counter').html(String(showing_pic + 1) + '/' + String(imgarray.length))
  });

  $('#right-arrow').click(function(){
    if (showing_pic == 0)
    {
      $('#left-arrow').fadeIn('slow');
    }
    if (showing_pic == imgarray.length-2)
    {
      $('#right-arrow').fadeOut('slow');
    }
    if (showing_pic < imgarray.length-1)
    {
      $('.picviewer:visible').fadeOut('slow');
      showing_pic = showing_pic + 1;
      // setTimeout(function(){
        imgarray[showing_pic].fadeIn('slow');
      // }, 600);
    }
    else
    {
      $('#right-arrow').fadeOut();
    }
    $('#gallery-counter').html(String(showing_pic + 1) + '/' + String(imgarray.length))
  });

  $('.up-arrow:visible').click(function(){
    $(this).parent().children().scrollTop($(this).parent().children().scrollTop() - 40);
  });

  $('.down-arrow:visible').click(function(){
    $(this).parent().children().scrollTop($(this).parent().children().scrollTop() + 40);
  });


  //
  // Audio code
  //

  // Load track urls in an array (manually)
  // TO DO: check browser and load ogg for other browsers
  if (browserPrefix == 'moz')
  {
    audio_type = 'ogg';
  }
  else
  {
    audio_type = 'mp3';
  }
  audioarray = new Array();
  item = new Array();
  item[0] = 'resources/audio/chopin.' + audio_type;
  item[1] = 'Chopin - Sonata op. 65';
  audioarray.push(item);
  item = new Array();
  item[0] = 'resources/audio/chopin.' + audio_type;
  item[1] = 'Chopin - Sonata op. 65';
  audioarray.push(item);
  // item[0] = 'resources/audio/goforit.mp3';
  // item[1] = 'Tapiador - Go For It';
  // audioarray.push(item);
  // item = new Array();
  // item[0] = 'resources/audio/krakow.mp3';
  // item[1] = 'Tapiador - Krakow';
  // audioarray.push(item);

  // Select next song randomly
  next_track = Math.floor((Math.random() * audioarray.length) + 1);
  $("#audio-control").attr('src',audioarray[next_track-1][0]);
  $("#audio-control").trigger('play');
  $("#roll").html(audioarray[next_track-1][1]);
  $('#roll').bind('marquee', function() {
    var ob = $(this);
    var tw = ob.width();
    var ww = ob.parent().width();
    ob.css({ right: -tw });
    ob.animate({ right: ww }, 12000, 'linear', function() {
        ob.trigger('marquee');
    });
  }).trigger('marquee');

  $("#audio-control").bind("ended", function(){
    prev_track = next_track;
    while (next_track == prev_track)
    {
      next_track = Math.floor((Math.random() * audioarray.length) + 1);
    }
    $("#audio-control").attr('src',audioarray[next_track-1][0]);
    $("#audio-control").trigger('play');
    $("#roll").html(audioarray[next_track-1][1]);
  });

  $('#audio-control').click(function(){
    audio_elem = document.getElementById('audio-control');
    if (audio_elem.muted == false)
    {
      $('#track-test').fadeOut();
    }
  });

});