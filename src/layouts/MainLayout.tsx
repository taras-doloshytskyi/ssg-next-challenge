import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PersonCard } from "@/components/PersonCard";
import { Loader } from "@/components/Loader";
import { ErrorBar } from "@/components/ErrorBar";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

const fetchPersonData = async (person: Person, signal: AbortSignal) => {
  const response = await fetch(`./api/person?person=${person}`, { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch person data");
  }
  return response.json();
};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const queryClient = useQueryClient();
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["personData", { person: selectedPerson }],
    queryFn: ({ signal }) => fetchPersonData(selectedPerson!, signal),
    enabled: !!selectedPerson,
  });

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col items-center mt-40",
      )}
    >
      <div className={classNames("flex gap-2 mb-10")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            disabled={selectedPerson === person}
            onClick={() => {
              queryClient.cancelQueries({ queryKey: ["personData"] });
              setSelectedPerson(person);
            }}
          >
            {person}
          </Button>
        ))}
        <button />
      </div>

      {isLoading && <Loader />}

      {isError && <ErrorBar />}

      {data && <PersonCard data={data} />}
    </main>
  );
};
