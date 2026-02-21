import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Migration "migration"; // Add migration import

(with migration = Migration.run)
actor {
  type ContactData = {
    phoneNumber : Text;
    email : Text;
    location : Location;
    daysOpen : [Text];
    hours : [Text];
  };

  type Location = {
    address : Text;
    latitude : Float;
    longitude : Float;
  };

  type Inquiry = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();

  let contactData : ContactData = {
    phoneNumber = "123-456-7890";
    email = "hello@breakout-brewing.com";
    location = {
      address = "622, Ushanagar, Narendra Tiwari Marg, Annapurna Road, Indore";
      latitude = 22.7196;
      longitude = 75.8577;
    };
    daysOpen = [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    hours = [
      "Wednesday: 3pm - 11pm",
      "Thursday: 3pm - 11pm",
      "Friday: 3pm - 11pm",
      "Saturday: 3pm - 11pm",
      "Sunday: 12pm - 9pm",
    ];
  };

  public query func getContactData() : async ContactData {
    contactData;
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, subject : Text, message : Text) : async () {
    if (name.trim(#char ' ').size() == 0 or email.trim(#char ' ').size() == 0 or message.trim(#char ' ').size() == 0) {
      Runtime.trap("Name, email, and message are required fields");
    };

    if (not email.contains(#char '@')) {
      Runtime.trap("Valid email address required");
    };

    let inquiry : Inquiry = {
      name;
      email;
      subject;
      message;
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
