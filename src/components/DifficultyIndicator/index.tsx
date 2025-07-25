import React from 'react';
import { IconScissors } from '@tabler/icons-react';
import styles from './styles.module.css';

interface DifficultyIndicatorProps {
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const getDifficultyLevel = (difficulty: string): number => {
    switch (difficulty) {
        case 'beginner':
            return 1;
        case 'intermediate':
            return 2;
        case 'advanced':
            return 3;
        default:
            return 1;
    }
};

export default function DifficultyIndicator({ difficulty }: DifficultyIndicatorProps): React.JSX.Element {
    const level = getDifficultyLevel(difficulty);

    return (
        <div className={styles.difficultyContainer}>
            <div className={styles.iconsRow}>
                {[1, 2, 3].map((index) => (
                    <IconScissors
                        key={index}
                        size={28}
                        stroke={1.5}
                        className={index <= level ? styles.filled : styles.empty}
                    />
                ))}
            </div>
            <div className={styles.difficultyText}>
                Difficulty: {difficulty}
            </div>
        </div>
    );
}