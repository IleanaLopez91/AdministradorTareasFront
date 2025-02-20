import { useMutation } from "@tanstack/react-query";
import { TeamMember } from "@/types/index";
import { addUserToProject } from "@/api/TeamAPI";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type SearchResultProps = {
  user: TeamMember;
  reset: () => void;
};

function SearchResult({ user, reset }: SearchResultProps) {
  const navigate = useNavigate();

  const params = useParams();

  const projectId = params.projectId!;

  const { mutate } = useMutation({
    mutationFn: addUserToProject,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
      navigate(location.pathname, { replace: true });
    },
  });

  const handleAddUserToProject = () => {
    const data = {
      projectId,
      id: user._id,
    };
    mutate(data);
  };

  return (
    <>
      <p className=" mt-10 text-center font-bold">Resultado: </p>
      <div className=" flex justify-between items-center">
        <p>{user.name}</p>
        <button
          onClick={handleAddUserToProject}
          className=" text-purple-600 hover:bg-purple-100 px-10 py-3 font-bold cursor-pointer"
        >
          Agregar al Proyecto
        </button>
      </div>
    </>
  );
}

export default SearchResult;
