import { NextApiHandler } from "next";
import { Person } from "@/utils/common/person";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type User = {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  metrics: {
    followers: number;
    following: number;
  };
};

const mockUsers: { [key in Person]: User | null } = {
  [Person.PersonA]: {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    profilePictureUrl:
      "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
    name: Person.PersonA,
    title: "Backend Developer",
    metrics: {
      followers: 15000,
      following: 500,
    },
  },
  [Person.PersonB]: {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    profilePictureUrl:
      "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
    name: Person.PersonB,
    title: "Full Stack Developer",
    metrics: {
      followers: 20000,
      following: 1000,
    },
  },
  [Person.PersonC]: null, // Always fails
};

const getPerson: NextApiHandler = async (req, res) => {
  const person = req.query.person as Person;

  switch (person) {
    case Person.PersonA:
      await sleep(1000);
      break;
    case Person.PersonB:
      await sleep(3000);
      break;
    case Person.PersonC:
      res.status(500).send("Error: Request failed for Person C");
      return;
    default:
      res.status(404).send("Error: Person not found");
      return;
  }

  const user = mockUsers[person];

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

export default getPerson;
