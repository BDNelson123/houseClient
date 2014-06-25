house.directive('ngFooter', function() {
  return {
    template: '\
    <footer class="text-center">\
      <div class="footer-above">\
        <div class="container">\
          <div class="row">\
            <div class="footer-col col-md-4">\
              <h3>Company</h3>\
              <p>Careers</p>\
              <p>Terms of Service</p>\
              <p>Privacy Policy</p>\
              <p>Contact Us</p>\
            </div>\
            <div class="footer-col col-md-4">\
              <h3>Suport</h3>\
              <p>Support</p>\
              <p>ePerty Blog</p>\
              <p>ePerty Docs</p>\
            </div>\
            <div class="footer-col col-md-4">\
              <h3>Services & Features</h3>\
              <p>House Evaluation</p>\
              <p>Paperwork</p>\
              <p>Law Services</p>\
            </div>\
          </div>\
        </div>\
      </div>\
      <div class="footer-below">\
        <div class="container">\
          <div class="row">\
            <div class="col-lg-12">\
              Copyright &copy; 2014 - ePerty, Inc.\
            </div>\
          </div>\
        </div>\
      </div>\
    </footer>',
  }
});
