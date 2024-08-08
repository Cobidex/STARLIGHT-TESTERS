import Image from "next/image";

interface AvatarProps {
    avatars: {
        username: string;
        avatar: string;
        comment?: string;
        timer?: number;
    }[]
    dimension: { height: number; width: number };
    size: number
}


const Avatars = ({
    avatars = [],
    dimension,
    size,
}: AvatarProps) => {
    const { width, height } = dimension;

    const firstDivd = Math.round(avatars.length / 3);
    const nextDivd = avatars.length - firstDivd;
    const topLength = nextDivd - firstDivd;
    const spaceY = (height - size * firstDivd) / firstDivd + size;
    const xWidth = width - size * 2;
    const xMid = width / 2 - size / 2;
    const spaceX = (xWidth - size * topLength) / topLength + size;

    return (
        <div>
            {avatars.map((avatar, index) => {
                // Calculate the angle for current index

                const x =
                    index < firstDivd
                        ? 0
                        : index >= nextDivd
                            ? width - size
                            : topLength === 1
                                ? xMid
                                : xWidth - size - (index - firstDivd) * spaceX;


                const y =
                    index === 0 || index === avatars.length - 1
                        ? height - size
                        : index < firstDivd
                            ? height - size - spaceY * index
                            : index >= nextDivd
                                ? height - size - (index - nextDivd + 1) * spaceY
                                : 0;


                return (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: `${y}px`,
                            left: `${x}px`,
                            width: `${size}px`,
                            height: `${size}px`,

                        }}
                    >
                        {avatar.comment && index < firstDivd &&
                            <div className="absolute w-full text-center mx-2 -top-5 left-3/4 text-[12px] bg-[#FFFAD9] p-1 rounded-xl" >{avatar.comment}</div>
                        }

                        {avatar.comment && index > topLength && index < nextDivd &&
                            <div className="absolute w-full text-center mx-2 -bottom-2 text-[12px] bg-[#FFFAD9] p-1 rounded-xl" >{avatar.comment}</div>
                        }

                        {avatar.comment && index >= nextDivd &&
                            <div className="absolute w-full text-center mx-2 -top-5 right-3/4 text-[12px] bg-[#FFFAD9] p-1 rounded-xl" >{avatar.comment}</div>
                        }


                        <div className="flex flex-col items-center">
                            <div style={{ width: `${size * 3 / 5}px`, height: `${size * 3 / 5}px`, position: 'relative' }}>
                                <Image src={avatar.avatar} alt="avatar" layout="fill" objectFit="contain" className={`rounded-full`} />
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="bg-secondary-green w-2 h-2 rounded-full"></div>
                                <p className="text-primary-900">{avatar.username}</p>
                            </div>
                            <div className="w-2/4 bg-[#D9D9D9] rounded-full h-1.5 mt-1 dark:bg-gray-700">
                                <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{ width: `${avatar.timer}%` }}></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Avatars;
