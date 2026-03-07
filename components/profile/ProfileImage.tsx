"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Bed } from "lucide-react";
import { cn } from "@/lib/utils";

const ProfileImage = () => {
    const [imgSrc, setImgSrc] = useState("/pfp/pfp1.webp");
    const [showSleepIcon, setShowSleepIcon] = useState(false);

    const iconRef = useRef(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const checkSleepTime = () => {
            const now = new Date();
            const kolkataTime = new Date(
                now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
            );

            const hours = kolkataTime.getHours();
            setShowSleepIcon(hours >= 23 || hours < 7);
        };

        checkSleepTime();
        const interval = setInterval(checkSleepTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const dissolveTo = (src: string) => {
        if (!imageRef.current) return;

        const tl = gsap.timeline();

        tl.to(imageRef.current, {
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.25,
            ease: "power2.out",
            onComplete: () => setImgSrc(src),
        }).to(imageRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.35,
            ease: "power2.out",
        });
    };

    const handleMouseEnter = () => dissolveTo("/pfp/pfp2.webp");
    const handleMouseLeave = () => dissolveTo("/pfp/pfp1.webp");

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
            }
        );
    };

    return (
        <div className="profile-ring">
            {/* glow sweep */}
            <div className="ring-sweep"></div>

            {/* orbit particle */}
            <div className="ring-light">
                <div className="blob-light"></div>
            </div>

            {/* avatar */}
            <div className={cn("avatar-inner", showSleepIcon && "opacity-75")}>
                <Image
                    ref={imageRef}
                    src={imgSrc}
                    alt="profile picture"
                    width={72}
                    height={72}
                    className="avatar-img"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>

            {showSleepIcon && (
                <div
                    ref={iconRef}
                    onMouseEnter={shakeIcon}
                    onTouchStart={shakeIcon}
                    className="sleep-indicator"
                >
                    <Bed size={14} />

                    <span className="sleep-zzz z1">Z</span>
                    <span className="sleep-zzz z2">z</span>
                    <span className="sleep-zzz z3">z</span>
                </div>
            )}
        </div>
    );
};

export default ProfileImage;