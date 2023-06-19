class Cat {
  constructor(
    id,
    image,
    name,
    description,
    mainColor,
    latitude,
    longitude,
    country
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.mainColor = mainColor;
    this.latitude = latitude;
    this.longitude = longitude;
    this.country = country;
  }
}

export default Cat;
