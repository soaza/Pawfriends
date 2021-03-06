interface IDog {
  dog_id: number;
  dog_name: string;
  dog_gender: string;
  dog_age: number;
}

interface IDogImages {
  dog: string;
  id: number;
  src: string;
  description: string;
}
interface IDogData {
  dog_id: number;
  dog_age: number;
  dog_gender: string;
  dog_name: string;
  dog_characteristics: string;
  [key: string]: any;
}

interface IDogImageEndpoint {
  image_id: number;
  dog_id: number;
  image_url: string;
  gallery_position: number;
}

interface IExcoData {
  exco_id: number;
  exco_name: string;
  exco_year_of_study: number;
  exco_hobbies: string;
  exco_favourite_dog: string;
  exco_role: string;
  [key: string]: any;
}

interface IActivityPosts {
  post_id: number;
  date_posted: Date;
  activity_description: string;
}
