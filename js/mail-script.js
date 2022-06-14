$(document).ready(function () {
  var t = $("#myForm"),
    e = $(".submit-btn"),
    n = $(".alert-msg");
  t.on("submit", function (a) {
    a.preventDefault(),
      $.ajax({
        url: "mail.php",
        type: "POST",
        dataType: "html",
        data: t.serialize(),
        beforeSend: function () {
          n.fadeOut(), e.html("Sending....");
        },
        success: function (a) {
          n.html(a).fadeIn(),
            t.trigger("reset"),
            e.attr("style", "display: none !important");
        },
        error: function (t) {
          console.log(t);
        },
      });
  });
});
