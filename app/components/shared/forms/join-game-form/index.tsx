"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import AvatarSelector from "@/app/components/shared/forms/create-game-form/AvatarSelector";
import CustomButton from "../../button/custombutton";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  gameId: z.string().min(1, { message: "Game ID is required" }),
  userName: z.string().min(1, { message: "Username is required" }),
  avatar: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const JoinGameForm = ({
  avatars,
  className,
}: {
  avatars: string[];
  className?: string;
}) => {
  const router = useRouter();
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    avatars[0]
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: avatars[0] as unknown as string,
    },
  });

  const handleFormSubmit = (data: FormData) => {};

  const handleAvatarSelect = (avatar: string) => {
    setSelectedAvatar(avatar);
    form.setValue("avatar", avatar as unknown as string);
  };

  return (
    <section className="w-[95%] md:max-w-[39rem] ">
      <h3 className="font-[700] text-[50px] text-center mb-[37px] hidden md:block">
        Join Game
      </h3>
      <div className={cn("bg-primary-300 rounded-[12px]", className)}>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              router.push("/numbers");
              form.handleSubmit(handleFormSubmit)(e);
            }}
            className="bg-form-blue p-[0.9rem] sm:p-6 rounded-[0.45rem] sm:rounded-[0.75rem] flex flex-col gap-[0.9rem] sm:gap-6"
          >
            <FormField
              control={form.control}
              name="gameId"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel
                    htmlFor="gameId"
                    className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                  >
                    Game ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="gameId"
                      placeholder="Enter game ID"
                      {...field}
                      className="border border-primary-900 focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5"
                      required
                    />
                  </FormControl>
                  <FormMessage className="text-primary-900">
                    {form.formState.errors.gameId?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel
                    htmlFor="userName"
                    className="font-normal text-[0.6rem] max-sm:leading-3 sm:text-[1rem]"
                  >
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="userName"
                      placeholder="Enter username"
                      {...field}
                      className="border border-primary-900 focus:outline-none focus:ring-0 sm:h-14 text-[0.9rem] sm:text-[1.5rem] px-3 sm:px-5"
                      required
                    />
                  </FormControl>
                  <FormMessage className="text-primary-900">
                    {form.formState.errors.userName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <AvatarSelector
              avatars={avatars}
              selectedAvatar={selectedAvatar}
              onAvatarSelect={handleAvatarSelect}
            />
            <CustomButton variant="secondary" type="submit">
              Join Game
            </CustomButton>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default JoinGameForm;
