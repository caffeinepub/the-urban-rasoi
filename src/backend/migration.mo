import List "mo:core/List";

module {
  // Old type definitions for migration
  type OldContactData = {
    phoneNumber : Text;
    email : Text;
    northLocation : OldLocation;
    southLocation : OldLocation;
    daysOpen : [Text];
    northHours : [Text];
    southHours : [Text];
  };

  type OldLocation = {
    address : Text;
    latitude : Float;
    longitude : Float;
  };

  type OldActor = {
    inquiries : List.List<{ name : Text; email : Text; subject : Text; message : Text }>;
    contactData : OldContactData;
  };

  type NewContactData = {
    phoneNumber : Text;
    email : Text;
    location : NewLocation;
    daysOpen : [Text];
    hours : [Text];
  };

  type NewLocation = {
    address : Text;
    latitude : Float;
    longitude : Float;
  };

  type NewActor = {
    inquiries : List.List<{ name : Text; email : Text; subject : Text; message : Text }>;
    contactData : NewContactData;
  };

  // Migration function to transform old actor state to new actor state
  public func run(old : OldActor) : NewActor {
    let updatedContactData : NewContactData = {
      phoneNumber = old.contactData.phoneNumber;
      email = old.contactData.email;
      location = {
        address = "622, Ushanagar, Narendra Tiwari Marg, Annapurna Road, Indore";
        latitude = 22.7196;
        longitude = 75.8577;
      };
      daysOpen = old.contactData.daysOpen;
      hours = old.contactData.northHours;
    };

    {
      old with
      contactData = updatedContactData;
    };
  };
};
