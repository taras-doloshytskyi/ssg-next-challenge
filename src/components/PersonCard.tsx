type PersonCardProps = {
  data: {
    backgroundImageUrl: string;
    profilePictureUrl: string;
    name: string;
    title: string;
    metrics: {
      followers: number;
      following: number;
    };
  };
};

export const PersonCard: React.FC<PersonCardProps> = ({ data }) => {
  const {
    backgroundImageUrl,
    profilePictureUrl,
    name,
    title,
    metrics: { followers, following },
  } = data;

  const backgroundImageStyle: Record<string, string> = {
    "background-image": `url(${backgroundImageUrl})`,
  };

  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={backgroundImageStyle}
    >
      <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
          src={profilePictureUrl}
          alt={name}
        />
        <div className="flex flex-col items-center p-6 rounded-lg bg-slate-400">
          <h5 className="mb-1 text-xl font-medium text-black">{name}</h5>
          <span className="text-sm text-black">{title}</span>
          <span className="text-sm text-black">Followers: {followers}</span>
          <span className="text-sm text-black">Following: {following}</span>
        </div>
      </div>
    </div>
  );
};
