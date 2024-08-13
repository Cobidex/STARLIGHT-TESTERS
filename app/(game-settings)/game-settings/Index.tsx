"use client"

import { useState } from 'react';
import { ToggleControlSettings } from '@/app/components/ToggleControl/ToggleControlSettings';
import RadioButton from '@/app/components/shared/radio-button/radio-button';
import CustomButton from '@/app/components/shared/button/custombutton';
import Modal from '@/app/components/modal/modal';
import LocaleSwitcher from './switcher';
import { useTranslations } from 'next-intl';

const Index: React.FC = () => {
    const t = useTranslations('gameSettings');
    const [difficulty, setDifficulty] = useState<string>('easy');
    const [notifications, setNotifications] = useState<boolean>(true);
    const [soundEffects, setSoundEffects] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleDifficultyChange = (value: string) => {
        setDifficulty(value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsModalOpen(true)
    };

    return (
        <div className="px-6 pt-16 bg-[#F7EEE7]">
            <div className="max-w-[411px]">
                <h1 className="text-4xl text-primary-700">{t('title')}</h1>

                <form onSubmit={handleFormSubmit} className="mt-16">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-medium text-primary-700">{t('notificationsLabel')}</p>
                        <ToggleControlSettings
                            className="data-[state=checked]:bg-primary-200 h-9"
                            thumbClassName="data-[state=checked]:bg-[#fff] h-8"
                            checked={notifications}
                            onCheckedChange={(checked) => setNotifications(checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between my-6">
                        <p className="text-xl font-medium text-primary-700">{t('soundEffectsLabel')}</p>
                        <ToggleControlSettings
                            className="data-[state=checked]:bg-primary-200 h-9"
                            thumbClassName="data-[state=checked]:bg-[#fff] h-8"
                            checked={soundEffects}
                            onCheckedChange={(checked) => setSoundEffects(checked)}
                        />
                    </div>

                    <div className="">
                        <p className="text-xl font-medium text-neutral-600">{t('setDifficultyLevelLabel')}</p>
                        <div className="flex gap-4 mt-3">
                            <RadioButton
                                id="difficulty-easy"
                                value="easy"
                                selectedValue={difficulty}
                                onSelect={handleDifficultyChange}
                                label={t('difficultyEasyLabel')}
                            />
                            <RadioButton
                                id="difficulty-medium"
                                value="medium"
                                selectedValue={difficulty}
                                onSelect={handleDifficultyChange}
                                label={t('difficultyMediumLabel')}
                            />
                            <RadioButton
                                id="difficulty-hard"
                                value="hard"
                                selectedValue={difficulty}
                                onSelect={handleDifficultyChange}
                                label={t('difficultyHardLabel')}
                            />
                        </div>
                    </div>
                    <div className="gap-4">
                        <p className="text-xl font-medium text-neutral-600 mt-6 mb-3">Select your default language</p>
                        <LocaleSwitcher/>
                    </div>
                    

                    <CustomButton
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-36 h-14 mt-12 text-base font-normal text-primary-B900"
                        isLoading={false}
                        ariaLabel="Save changes"
                    >
                         {t('saveChangesButton')}
                    </CustomButton>
                </form>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Index;
