import { SignInButton } from '@/components';

const Home = () => {
  return (
    <div class="flex flex-col justify-center items-center dark:text-white h-[calc(100vh-5.8rem)]">
      <h1 class="font-sans text-3xl mb-5">
        <span class="text-blue-500">Supercharge</span> your journey to a band player
      </h1>
      <p class="sm:max-w-2xl text-center text-gray-500">
        Create a chord chart in less than 2 minutes. Collaborate with other bandmates, shared music
        libraries and instant chord tranpose.
      </p>

      <div class="mt-5">
        <SignInButton />
      </div>
    </div>
  );
};

export default Home;
