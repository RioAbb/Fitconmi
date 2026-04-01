export type AlternativeExercise = {
  name: string;
  setsReps: string;
  muscles: string;
  benefit: string;
  instructions: string[];
  imageUrl: string;
};

export type Exercise = AlternativeExercise & {
  alternatives: AlternativeExercise[];
};

export type Program = {
  slug: string;
  name: string;
  goal: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  scientificDescription: string;
  whoItsFor: string;
  benefits: string[];
  avoidIf: string;
  weeklySchedule: { day: string; focus: string }[];
  dayPlans: { day: string; exercises: Exercise[] }[];
};

const alt = (
  name: string,
  setsReps: string,
  muscles: string,
  benefit: string,
  imageUrl: string
): AlternativeExercise => ({
  name,
  setsReps,
  muscles,
  benefit,
  imageUrl,
  instructions: [
    "Set your starting position with control.",
    "Perform each rep through full, pain-free range.",
    "Maintain stable posture and controlled tempo.",
    "Finish each set 1-2 reps before form breakdown.",
  ],
});

const exercise = (
  name: string,
  setsReps: string,
  muscles: string,
  benefit: string,
  imageUrl: string,
  alternatives: AlternativeExercise[]
): Exercise => ({
  name,
  setsReps,
  muscles,
  benefit,
  imageUrl,
  alternatives,
  instructions: [
    "Brace your core and align your posture before each set.",
    "Move through the target range with a controlled eccentric phase.",
    "Drive through the concentric phase while keeping joint alignment.",
    "Rest 60-120 seconds based on intensity and repeat prescribed reps.",
  ],
});

const withDayPlans = (weeklySchedule: { day: string; focus: string }[], exercises: Exercise[]) =>
  weeklySchedule.map((day) => ({ day: day.day, exercises }));

export const programs: Program[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss",
    goal: "Reduce body fat while preserving lean mass",
    difficulty: "Beginner",
    duration: "12-16 weeks",
    scientificDescription:
      "Combines progressive resistance training with moderate cardio and a sustainable calorie deficit to maximize fat loss while retaining muscle.",
    whoItsFor: "People starting a fat-loss journey or returning after a long break.",
    benefits: ["Improved body composition", "Better metabolic health", "Higher energy levels"],
    avoidIf: "You are underweight or currently recovering from severe energy deficiency.",
    weeklySchedule: [
      { day: "Monday", focus: "Full Body Strength + 20 min incline walk" },
      { day: "Tuesday", focus: "Low-impact cardio + mobility" },
      { day: "Wednesday", focus: "Lower Body Strength + core" },
      { day: "Thursday", focus: "Active recovery" },
      { day: "Friday", focus: "Upper Body Strength + intervals" },
      { day: "Saturday", focus: "Steady-state cardio" },
      { day: "Sunday", focus: "Rest" },
    ],
    dayPlans: withDayPlans(
      [
        { day: "Monday", focus: "Full Body Strength + 20 min incline walk" },
        { day: "Tuesday", focus: "Low-impact cardio + mobility" },
        { day: "Wednesday", focus: "Lower Body Strength + core" },
        { day: "Thursday", focus: "Active recovery" },
        { day: "Friday", focus: "Upper Body Strength + intervals" },
        { day: "Saturday", focus: "Steady-state cardio" },
        { day: "Sunday", focus: "Rest" },
      ],
      [
        exercise(
          "Goblet Squat",
          "4 x 10",
          "Quads, glutes, core",
          "Improves leg strength and increases total work output for fat loss.",
          "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80",
          [
            alt("Leg Press", "4 x 12", "Quads, glutes", "Allows stable lower-body hypertrophy work.", "https://images.unsplash.com/photo-1584863231364-2edc166de576?w=800&q=80"),
            alt("Split Squat", "3 x 10/leg", "Quads, glutes", "Adds unilateral control and mobility.", "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80"),
          ]
        ),
        exercise("Romanian Deadlift", "4 x 8", "Hamstrings, glutes", "Targets posterior chain to preserve muscle while dieting.", "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&q=80", [alt("Cable Pull-Through", "3 x 12", "Glutes, hamstrings", "Hip hinge pattern with lower spinal load.", "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"), alt("Good Morning", "3 x 10", "Posterior chain", "Improves hip hinge mechanics.", "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80")]),
        exercise("Incline Walk", "25 minutes", "Cardiovascular system", "Raises energy expenditure with low joint stress.", "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80", [alt("Bike Ride", "30 minutes", "Cardio", "Sustainable aerobic work.", "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"), alt("Row Erg", "20 minutes", "Full body cardio", "High calorie expenditure.", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80")]),
        exercise("Lat Pulldown", "3 x 12", "Lats, biceps", "Maintains upper-body muscle mass during a deficit.", "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80", [alt("Assisted Pull-Up", "3 x 8", "Lats, biceps", "Develops vertical pulling strength.", "https://images.unsplash.com/photo-1598971639058-a69a2d0f7af1?w=800&q=80"), alt("Single-arm Row", "3 x 10", "Mid back, lats", "Unilateral back volume.", "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80")]),
        exercise("Plank", "3 x 45s", "Core", "Improves trunk stiffness and exercise transfer.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", [alt("Dead Bug", "3 x 10", "Deep core", "Improves spinal control.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"), alt("Pallof Press", "3 x 12", "Anti-rotation core", "Enhances core stability.", "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80")]),
        exercise("Intervals", "8 x 30s / 90s", "Cardio, legs", "Increases metabolic demand and VO2 adaptation.", "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80", [alt("Sled Push", "10 rounds", "Legs, conditioning", "High-intensity conditioning.", "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80"), alt("Air Bike", "10 rounds", "Full body cardio", "Low impact interval option.", "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80")]),
      ]
    ),
  },
  {
    slug: "muscle-building",
    name: "Muscle Building",
    goal: "Increase muscle size and shape",
    difficulty: "Intermediate",
    duration: "16-20 weeks",
    scientificDescription:
      "Uses hypertrophy-focused volume, progressive overload, and adequate recovery windows to stimulate muscle protein synthesis.",
    whoItsFor: "Lifters with basic movement experience wanting visible muscle growth.",
    benefits: ["Greater lean mass", "Improved physique symmetry", "Higher resting metabolism"],
    avoidIf: "You cannot currently recover from 4-5 training sessions per week.",
    weeklySchedule: [
      { day: "Monday", focus: "Push (chest, shoulders, triceps)" },
      { day: "Tuesday", focus: "Pull (back, biceps)" },
      { day: "Wednesday", focus: "Lower body hypertrophy" },
      { day: "Thursday", focus: "Rest / mobility" },
      { day: "Friday", focus: "Upper hypertrophy" },
      { day: "Saturday", focus: "Lower body + accessories" },
      { day: "Sunday", focus: "Rest" },
    ],
    dayPlans: withDayPlans(
      [
        { day: "Monday", focus: "Push (chest, shoulders, triceps)" },
        { day: "Tuesday", focus: "Pull (back, biceps)" },
        { day: "Wednesday", focus: "Lower body hypertrophy" },
        { day: "Thursday", focus: "Rest / mobility" },
        { day: "Friday", focus: "Upper hypertrophy" },
        { day: "Saturday", focus: "Lower body + accessories" },
        { day: "Sunday", focus: "Rest" },
      ],
      [
        exercise("Barbell Bench Press", "4 x 8", "Chest, triceps", "Primary horizontal press for hypertrophy tension.", "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=800&q=80", [alt("Dumbbell Bench Press", "4 x 10", "Chest, triceps", "Greater ROM for chest growth.", "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"), alt("Machine Chest Press", "4 x 12", "Chest", "Stable high-volume pressing.", "https://images.unsplash.com/photo-1596357395104-55b50339b2d8?w=800&q=80")]),
        exercise("Lat Pulldown", "4 x 10", "Lats, biceps", "Improves back width and pulling volume.", "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80", [alt("Pull-Up", "4 x AMRAP", "Lats, biceps", "Bodyweight vertical pull strength.", "https://images.unsplash.com/photo-1598971639058-a69a2d0f7af1?w=800&q=80"), alt("Seated Row", "4 x 12", "Mid-back", "Adds horizontal pull volume.", "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80")]),
        exercise("Leg Press", "4 x 12", "Quads, glutes", "High quad stimulus with low technical demand.", "https://images.unsplash.com/photo-1584863231364-2edc166de576?w=800&q=80", [alt("Hack Squat", "4 x 10", "Quads, glutes", "Great hypertrophy loading pattern.", "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"), alt("Split Squat", "3 x 12", "Quads, glutes", "Unilateral hypertrophy work.", "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80")]),
        exercise("Lateral Raise", "4 x 15", "Lateral deltoids", "Increases shoulder width and symmetry.", "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80", [alt("Cable Lateral Raise", "3 x 15", "Deltoids", "Constant tension for shoulders.", "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=800&q=80"), alt("Machine Lateral Raise", "3 x 12", "Deltoids", "Stable isolation work.", "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?w=800&q=80")]),
        exercise("Romanian Deadlift", "4 x 10", "Hamstrings, glutes", "Drives posterior chain hypertrophy.", "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&q=80", [alt("Good Morning", "3 x 10", "Posterior chain", "Hip hinge hypertrophy variant.", "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80"), alt("Hip Thrust", "4 x 12", "Glutes", "High glute loading.", "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=800&q=80")]),
        exercise("Cable Curl", "3 x 12", "Biceps", "Adds arm volume for complete physique development.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", [alt("Dumbbell Curl", "3 x 12", "Biceps", "Simple free-weight biceps work.", "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80"), alt("Preacher Curl", "3 x 10", "Biceps", "Improves elbow flexor isolation.", "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80")]),
      ]
    ),
  },
  {
    slug: "strength-training",
    name: "Strength Training",
    goal: "Increase maximal force production",
    difficulty: "Advanced",
    duration: "12-16 weeks",
    scientificDescription:
      "Applies low-to-moderate rep ranges, higher intensity loads, and structured periodization to optimize neural adaptations and force output.",
    whoItsFor: "Athletes and experienced trainees targeting performance milestones.",
    benefits: ["Higher 1RM potential", "Improved neural efficiency", "More resilient movement patterns"],
    avoidIf: "You have unresolved joint pain under heavy loading.",
    weeklySchedule: [
      { day: "Monday", focus: "Heavy squat + accessory" },
      { day: "Tuesday", focus: "Heavy press + upper back" },
      { day: "Wednesday", focus: "Recovery + mobility" },
      { day: "Thursday", focus: "Heavy deadlift + posterior chain" },
      { day: "Friday", focus: "Volume bench + pull variations" },
      { day: "Saturday", focus: "Conditioning / weak-point work" },
      { day: "Sunday", focus: "Rest" },
    ],
    dayPlans: withDayPlans(
      [
        { day: "Monday", focus: "Heavy squat + accessory" },
        { day: "Tuesday", focus: "Heavy press + upper back" },
        { day: "Wednesday", focus: "Recovery + mobility" },
        { day: "Thursday", focus: "Heavy deadlift + posterior chain" },
        { day: "Friday", focus: "Volume bench + pull variations" },
        { day: "Saturday", focus: "Conditioning / weak-point work" },
        { day: "Sunday", focus: "Rest" },
      ],
      [
        exercise("Back Squat", "5 x 5", "Quads, glutes, core", "Core lift for maximal lower-body strength.", "https://images.unsplash.com/photo-1594737625785-c7f12f6f89e8?w=800&q=80", [alt("Front Squat", "5 x 4", "Quads, core", "Improves upright squat mechanics.", "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"), alt("Safety Bar Squat", "5 x 5", "Quads, posterior chain", "Reduces shoulder stress under load.", "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80")]),
        exercise("Deadlift", "4 x 4", "Posterior chain, grip", "Builds global force output and posterior resilience.", "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80", [alt("Trap Bar Deadlift", "4 x 4", "Legs, back", "More upright heavy pull option.", "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&q=80"), alt("Rack Pull", "4 x 5", "Back, hips", "Overload lockout strength.", "https://images.unsplash.com/photo-1584863231364-2edc166de576?w=800&q=80")]),
        exercise("Bench Press", "5 x 5", "Chest, triceps", "Drives upper-body pressing strength.", "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=800&q=80", [alt("Close-Grip Bench", "4 x 6", "Triceps, chest", "Improves triceps lockout.", "https://images.unsplash.com/photo-1596357395104-55b50339b2d8?w=800&q=80"), alt("Paused Bench", "4 x 4", "Chest, triceps", "Builds start strength.", "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80")]),
        exercise("Barbell Row", "4 x 6", "Lats, upper back", "Improves pulling strength and bracing control.", "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80", [alt("Chest-Supported Row", "4 x 8", "Mid-back", "Stable heavy row option.", "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"), alt("Pendlay Row", "4 x 5", "Back, posterior chain", "Power-focused horizontal pull.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80")]),
        exercise("Overhead Press", "4 x 5", "Shoulders, triceps", "Increases vertical pressing capacity.", "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80", [alt("Push Press", "4 x 3", "Shoulders, triceps", "Power-oriented overhead pattern.", "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80"), alt("Seated DB Press", "4 x 8", "Deltoids", "Stability-focused press variation.", "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80")]),
        exercise("Farmer Carry", "4 x 30m", "Grip, core, traps", "Builds whole-body stability under load.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", [alt("Suitcase Carry", "4 x 25m", "Obliques, grip", "Unilateral stability challenge.", "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80"), alt("Sled Drag", "6 x 20m", "Legs, conditioning", "Strength and work capacity combo.", "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80")]),
      ]
    ),
  },
  {
    slug: "endurance",
    name: "Endurance",
    goal: "Improve cardiovascular capacity and fatigue resistance",
    difficulty: "Intermediate",
    duration: "10-14 weeks",
    scientificDescription:
      "Combines aerobic base work with threshold intervals to improve oxygen utilization and sustained work output.",
    whoItsFor: "Runners, cyclists, and general trainees who want better stamina.",
    benefits: ["Better VO2 efficiency", "Lower resting heart rate", "Improved recovery between efforts"],
    avoidIf: "You are currently overtrained or have unresolved cardiac concerns.",
    weeklySchedule: [
      { day: "Monday", focus: "Zone 2 base cardio" },
      { day: "Tuesday", focus: "Lower body strength maintenance" },
      { day: "Wednesday", focus: "Tempo intervals" },
      { day: "Thursday", focus: "Mobility and breathing work" },
      { day: "Friday", focus: "Long easy session" },
      { day: "Saturday", focus: "Upper body + core" },
      { day: "Sunday", focus: "Rest" },
    ],
    dayPlans: withDayPlans(
      [
        { day: "Monday", focus: "Zone 2 base cardio" },
        { day: "Tuesday", focus: "Lower body strength maintenance" },
        { day: "Wednesday", focus: "Tempo intervals" },
        { day: "Thursday", focus: "Mobility and breathing work" },
        { day: "Friday", focus: "Long easy session" },
        { day: "Saturday", focus: "Upper body + core" },
        { day: "Sunday", focus: "Rest" },
      ],
      [
        exercise("Tempo Run", "25 minutes", "Lower body, cardio", "Improves lactate threshold and pace durability.", "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80", [alt("Bike Tempo", "30 minutes", "Cardio", "Joint-friendly threshold work.", "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"), alt("Row Tempo", "20 minutes", "Cardio, back", "Full-body aerobic stimulus.", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80")]),
        exercise("Assault Bike Intervals", "10 x 20s/100s", "Cardio, legs", "Improves high-intensity repeatability.", "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80", [alt("Hill Sprints", "8 rounds", "Cardio, legs", "Builds speed-endurance capacity.", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"), alt("Sled Push", "10 rounds", "Legs, cardio", "Power-endurance stimulus.", "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80")]),
        exercise("Step-Up", "3 x 12/leg", "Quads, glutes", "Single-leg strength to improve running economy.", "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80", [alt("Reverse Lunge", "3 x 12/leg", "Legs", "Low-impact unilateral work.", "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"), alt("Split Squat", "3 x 10/leg", "Legs", "Strength-endurance hybrid.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80")]),
        exercise("Core Circuit", "3 rounds", "Core, trunk", "Improves running posture and transfer of force.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", [alt("Plank Series", "3 rounds", "Core", "Builds anti-extension endurance.", "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80"), alt("Dead Bug", "3 x 12", "Core", "Improves trunk control.", "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=800&q=80")]),
        exercise("Long Ride", "45-60 minutes", "Cardio", "Expands aerobic base and recovery efficiency.", "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80", [alt("Long Run", "40-50 minutes", "Cardio", "Specific endurance progression.", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"), alt("Elliptical", "50 minutes", "Cardio", "Low-impact endurance option.", "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80")]),
        exercise("Breathing Mobility Flow", "15 minutes", "Diaphragm, hips, thoracic", "Improves recovery and movement economy.", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", [alt("Yoga Flow", "20 minutes", "Mobility", "Enhances tissue quality.", "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80"), alt("Stretch Circuit", "15 minutes", "Mobility", "Maintains range of motion.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80")]),
      ]
    ),
  },
  {
    slug: "flexibility-mobility",
    name: "Flexibility & Mobility",
    goal: "Improve joint range of motion and movement quality",
    difficulty: "Beginner",
    duration: "8-12 weeks",
    scientificDescription:
      "Targets mobility restrictions through controlled end-range work, active flexibility drills, and tissue tolerance progressions.",
    whoItsFor: "People with stiffness, desk-heavy lifestyle, or movement limitations.",
    benefits: ["Reduced stiffness", "Better technique in lifts", "Lower injury risk over time"],
    avoidIf: "You are in acute pain and need medical clearance first.",
    weeklySchedule: [
      { day: "Monday", focus: "Hips + ankles mobility flow" },
      { day: "Tuesday", focus: "Upper body mobility + breathing" },
      { day: "Wednesday", focus: "Full-body movement circuit" },
      { day: "Thursday", focus: "Recovery walk + stretch" },
      { day: "Friday", focus: "Thoracic spine + shoulders" },
      { day: "Saturday", focus: "Active flexibility session" },
      { day: "Sunday", focus: "Rest" },
    ],
    dayPlans: withDayPlans(
      [
        { day: "Monday", focus: "Hips + ankles mobility flow" },
        { day: "Tuesday", focus: "Upper body mobility + breathing" },
        { day: "Wednesday", focus: "Full-body movement circuit" },
        { day: "Thursday", focus: "Recovery walk + stretch" },
        { day: "Friday", focus: "Thoracic spine + shoulders" },
        { day: "Saturday", focus: "Active flexibility session" },
        { day: "Sunday", focus: "Rest" },
      ],
      [
        exercise("World's Greatest Stretch", "3 rounds", "Hips, thoracic", "Improves multi-plane mobility in one sequence.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", [alt("Spiderman Stretch", "3 rounds", "Hips, thoracic", "Dynamic mobility prep.", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"), alt("Lunge Rotation", "3 x 8/side", "Hips, spine", "Improves rotational control.", "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80")]),
        exercise("90/90 Hip Switch", "3 x 10", "Hip rotators", "Builds active hip internal and external rotation.", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", [alt("Pigeon Stretch", "3 x 30s", "Glutes, hips", "Improves posterior hip flexibility.", "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"), alt("Cossack Squat", "3 x 8", "Adductors, hips", "Dynamic frontal-plane mobility.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80")]),
        exercise("Thoracic Rotation", "3 x 8/side", "Thoracic spine", "Improves overhead and pressing mechanics.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", [alt("Open Book", "3 x 10/side", "Thoracic spine", "Gentle rotational mobility.", "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80"), alt("Wall Reach", "3 x 12", "Upper back", "Improves scapular movement.", "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80")]),
        exercise("Ankle Dorsiflexion Drill", "3 x 12/side", "Ankles, calves", "Enhances squat depth and gait mechanics.", "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80", [alt("Calf Stretch", "3 x 30s", "Calves", "Improves ankle range.", "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=800&q=80"), alt("Heel Elevated Squat", "3 x 12", "Ankles, quads", "Improves loaded mobility.", "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80")]),
        exercise("Shoulder CARs", "3 x 5/arm", "Shoulder capsule", "Improves controlled shoulder range.", "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80", [alt("Band Dislocates", "3 x 12", "Shoulders", "Improves overhead mobility.", "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?w=800&q=80"), alt("Wall Slides", "3 x 10", "Shoulders, upper back", "Scapular control and range.", "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80")]),
        exercise("Breathing Reset", "5 minutes", "Diaphragm, core", "Improves parasympathetic recovery and posture.", "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80", [alt("Box Breathing", "5 minutes", "Respiratory system", "Down-regulates stress response.", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"), alt("Crocodile Breathing", "5 minutes", "Diaphragm", "Improves rib-cage mechanics.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80")]),
      ]
    ),
  },
  {
    slug: "body-recomposition",
    name: "Body Recomposition",
    goal: "Lose fat while gaining/maintaining muscle",
    difficulty: "Intermediate",
    duration: "16-24 weeks",
    scientificDescription:
      "Integrates strength progression, high-protein nutrition, and energy balance cycling to improve lean-to-fat mass ratio.",
    whoItsFor: "People who want visible shape changes without aggressive bulking/cutting.",
    benefits: ["Simultaneous fat loss and muscle gain potential", "Sustainable nutrition habits", "Better long-term adherence"],
    avoidIf: "You need rapid short-term weight changes for competition.",
    weeklySchedule: [
      { day: "Monday", focus: "Upper strength + steps target" },
      { day: "Tuesday", focus: "Lower hypertrophy + core" },
      { day: "Wednesday", focus: "Low-intensity cardio + mobility" },
      { day: "Thursday", focus: "Upper hypertrophy" },
      { day: "Friday", focus: "Lower strength + intervals" },
      { day: "Saturday", focus: "Active recovery" },
      { day: "Sunday", focus: "Rest" },
    ],
    dayPlans: withDayPlans(
      [
        { day: "Monday", focus: "Upper strength + steps target" },
        { day: "Tuesday", focus: "Lower hypertrophy + core" },
        { day: "Wednesday", focus: "Low-intensity cardio + mobility" },
        { day: "Thursday", focus: "Upper hypertrophy" },
        { day: "Friday", focus: "Lower strength + intervals" },
        { day: "Saturday", focus: "Active recovery" },
        { day: "Sunday", focus: "Rest" },
      ],
      [
        exercise("Incline Dumbbell Press", "4 x 10", "Upper chest, delts", "Supports upper-body hypertrophy while retaining strength.", "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80", [alt("Machine Incline Press", "4 x 12", "Chest", "Stable hypertrophy pressing.", "https://images.unsplash.com/photo-1596357395104-55b50339b2d8?w=800&q=80"), alt("Push-Up", "4 x AMRAP", "Chest, triceps", "Simple scalable pressing.", "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80")]),
        exercise("Walking Lunge", "3 x 12/leg", "Quads, glutes", "High unilateral stimulus for recomposition goals.", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", [alt("Reverse Lunge", "3 x 10/leg", "Legs", "Lower knee stress option.", "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"), alt("Step-Up", "3 x 10/leg", "Legs", "Improves unilateral force.", "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80")]),
        exercise("Chest-Supported Row", "4 x 10", "Mid-back, lats", "Balances pressing volume and posture.", "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80", [alt("One-arm Row", "4 x 10", "Lats", "Unilateral pulling control.", "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80"), alt("Cable Row", "4 x 12", "Back", "Constant tension row.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80")]),
        exercise("Hip Thrust", "4 x 8", "Glutes, hamstrings", "Improves posterior-chain development for recomposition.", "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=800&q=80", [alt("Glute Bridge", "4 x 12", "Glutes", "Lower load glute option.", "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80"), alt("RDL", "4 x 8", "Hamstrings, glutes", "Hinge-based posterior work.", "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&q=80")]),
        exercise("Assault Bike", "10 x 20s/100s", "Cardio, legs", "Adds conditioning without compromising resistance training.", "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80", [alt("Row Intervals", "8 x 30s/90s", "Cardio", "Low-impact interval option.", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"), alt("Incline Walk", "25 min", "Cardio", "Steady fat-loss support.", "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80")]),
        exercise("Pallof Press", "3 x 12/side", "Core, obliques", "Builds anti-rotation stability for lifting efficiency.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", [alt("Side Plank", "3 x 30s", "Obliques", "Simple anti-lateral flexion core.", "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=800&q=80"), alt("Dead Bug", "3 x 12", "Deep core", "Spinal control under breathing load.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80")]),
      ]
    ),
  },
];

export const programBySlug = (slug: string) =>
  programs.find((program) => program.slug === slug);
