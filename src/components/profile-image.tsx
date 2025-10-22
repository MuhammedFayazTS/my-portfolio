"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Moon } from "lucide-react";

const ProfileImage = () => {
    const [imgSrc, setImgSrc] = useState("/pfp/pfp1.webp");
    const [showSleepIcon, setShowSleepIcon] = useState(false);
    const iconRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const checkSleepTime = () => {
            const now = new Date();
            const kolkataTime = new Date(
                now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
            );
            const hours = kolkataTime.getHours();
            // Show sleep icon from 11 PM to 6 AM
            setShowSleepIcon(hours >= 23 || hours < 6);
        };

        checkSleepTime();
        const interval = setInterval(checkSleepTime, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
            opacity: 0,
            scale: 0.85,
            duration: 0.2,
            ease: "power1.out",
            onComplete: () => {
                setImgSrc("/pfp/pfp2.webp");
                gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.2, ease: "power1.out" });
            },
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
            opacity: 0,
            duration: 0.2,
            scale: 0.85,
            ease: "power1.out",
            onComplete: () => {
                setImgSrc("/pfp/pfp1.webp");
                gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.2, ease: "power1.out" });
            },
        });
    };

    const shakeIcon = () => {
        if (!iconRef.current) return;

        gsap.fromTo(
            iconRef.current,
            { rotation: -10, scale: 1.05 },
            {
                rotation: 10,
                scale: 1,
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                ease: "power1.inOut"
            }
        );
    };

    return (
        <div className="relative w-16 h-16">
            <Image
                ref={imageRef}
                src={imgSrc}
                alt="profile picture"
                width={60}
                height={60}
                className="rounded-full w-16 h-16 object-cover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {showSleepIcon && (
                <div
                    ref={iconRef}
                    onMouseEnter={shakeIcon}
                    onTouchStart={shakeIcon}
                    className="absolute bottom-0 right-0 bg-gradient-to-br from-blue-500 to-fuchsia-600 rounded-full p-1 shadow-md flex items-center justify-center"
                >
                    <Moon className="text-white w-4 h-4" />
                </div>
            )}
        </div>
    );
};

export default ProfileImage;
