"use client";

import { useEffect, useState } from "react";
import { Gear } from "@phosphor-icons/react";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Composer } from "@/components/composer";
import { FeedUser } from "@/components/feeds";
import { Separator } from "@/components/separator";

import { ChangeAvatar } from "../settings/change-avatar";
import { FollowButton } from "./follow-button";
import { FollowersModal, FollowingModal } from "./profile-modals";

export interface Profile {
  id: bigint;
  username: string;
  display_name: string;
  occupation?: string;
  location?: string;
  avatar_url?: string;
  pronouns?: string;
  website?: string;
  super_admin?: boolean;
  suspended?: boolean;
  created_at: Date;
  updated_at: Date;
  count: {
    following?: number;
    followers?: number;
  };
}

export default function Profile({
  profile,
  user,
  isUser
}: {
  profile: Profile;
  user: any;
  isUser: boolean;
}) {
  const [followingModal, setFollowingModal] = useState(false);
  const [followersModal, setFollowersModal] = useState(false);

  return (
    <>
      {user && isUser && <Composer />}
      <div className="mx-auto w-full max-w-3xl flex-1">
        <div className="flex flex-col gap-2 py-2">
          <div className="flex flex-row justify-between">
            <div className="pb-2">
              {isUser ? (
                <ChangeAvatar user={user} />
              ) : (
                <Avatar className="size-[80px]">
                  <AvatarImage src={profile.avatar_url} />
                  <AvatarFallback className="text-3xl">
                    {profile.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>

            {isUser && (
              <Link
                href="/settings"
                className="group mt-3 h-fit w-fit"
                title="Edit Profile"
              >
                <Gear
                  size="28px"
                  weight="light"
                  className="opacity-50 transition-all group-hover:rotate-[24deg] group-hover:opacity-80"
                />
              </Link>
            )}
          </div>

          <div className="flex flex-row justify-between gap-4">
            <h1 className="font-black">{profile.display_name}</h1>

            {!isUser && <FollowButton target_id={profile.id.toString()} />}
          </div>

          <p>
            @{profile.username} (#{profile.id})
          </p>

          <p className="mb-0">
            {profile.occupation && `${profile.occupation}`}
            {profile.location && `, ${profile.location}`}
            {profile.pronouns && `, ${profile.pronouns}`}
          </p>

          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              className="inline w-fit cursor-pointer text-sky-600 hover:underline"
            >
              <div className="inline">
                {profile.website.replace("https://", "")}{" "}
                <ExternalLinkIcon className="mt-[-2px] inline size-3" />
              </div>
            </a>
          )}

          {isUser && (
            <div className="flex gap-4 pt-2 text-sm">
              <button
                onClick={() => setFollowingModal(true)}
                className="dark:border-black-300 dark:text-black-300 border-black-700 text-black-700 rounded-2xl border px-5 py-1"
              >
                {profile.count.following} following
              </button>

              <button
                onClick={() => setFollowersModal(true)}
                className="dark:border-black-300 dark:text-black-300 border-black-700 text-black-700 rounded-2xl border px-5 py-1"
              >
                {profile.count.followers} followers
              </button>
            </div>
          )}
        </div>

        <div className="pb-8">
          <Separator />
        </div>

        <FeedUser author_id={profile.id.toString()} user={user} />

        <FollowersModal
          open={followersModal}
          onClose={() => {
            setFollowersModal(false);
            setFollowingModal(false);
          }}
        />
        <FollowingModal
          open={followingModal}
          onClose={() => {
            setFollowersModal(false);
            setFollowingModal(false);
          }}
        />
      </div>
    </>
  );
}
