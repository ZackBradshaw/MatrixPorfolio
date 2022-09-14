import React, { forwardRef, useCallback, useMemo } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadBubblesPreset } from 'tsparticles-preset-bubbles';

interface IParticlesProps {
  className?: string;
}

export const ParticlesComp = (({className}: IParticlesProps) => {
    const options : any = useMemo(() => {
        return {
            fullScreen: {
                enable: false,
                zIndex: -2,
            },
            
            tsparticles: {
                height: 60
            },

            background: {
                opacity: {
                    value: 1
                },
            },

            particles: {

                shape: {
                    options: {
                        polygon: {
                            nb_sides: 4,
                            particles: {
                                size: {
                                    value: 100
                                    },
                                },
                            },
                        },
                    type : "polygon"
                },

                move: {
                    enable: true,
                    random: false,
                    speed: 3,
                },

                color: {
                    value: ['#9BD1FF', '#D5EBFF', '#005898', '#0094FF'],
                    animation: {
                        h: {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                        s: {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                        l: {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                    },
                },

                destroy: {
                    mode: 'none',
                    split: {
                        count: 1,
                        factor: {
                            random: {
                                enable: true,
                                minimumValue: 0,
                            },
                            value: 3,
                        },
                        rate: {
                            random: {
                                enable: true,
                                minimumValue: 0,
                            },
                            value: {
                                min: 4,
                                max: 9,
                            },
                        },
                        sizeOffset: true,
                    },
                },

                size: {
                    random: {
                        enable: false,
                        minimumValue: 1,
                    },
                    value: {
                        min: 0.1,
                        max: 30,
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 9,
                        decay: 0,
                        sync: true,
                        destroy: 'max',
                        startValue: 'min',
                        minimumValue: 0.1,
                    },
                },
            },

            emitters: {
                autoPlay: true,
                fill: true,
                life: {
                    wait: false,
                },
                rate: {
                    quantity: 2,
                    delay: 0.1,
                    shape: 'square',
                    startCount: 0,
                },
                size: {
                    mode: 'percent',
                    height: 0,
                    width: 10,
                },
                direction: 'bottom',

                position: {
                    x: 50,
                    y: 30,
                },
            },

            preset: 'bubbles',
        };
    }, []);

    const particlesInit = useCallback((engine: Engine): any => {
        loadBubblesPreset(engine);
    }, []);

    return <Particles id="tsparticles" className={className} init={particlesInit} options={options} />; });