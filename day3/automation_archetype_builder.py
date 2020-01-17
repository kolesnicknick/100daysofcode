import os


def main():
    top_lvl_dir = ['project', 'resources']
    high_lvl_dirs = ['config', 'constants', 'enums', 'services', 'db', 'model', 'test', 'utils']
    config = ['annotation', 'client', 'properties']
    db = ['entities']

    resources = ['properties', 'suites', 'templates']

    for d in top_lvl_dir:
        try:
            os.mkdir(d)
            print("Top-LVL Directory ", d, " Created ")
        except FileExistsError:
            print("Top-LVL Directory ", d, " already exists")

    for d in resources:
        r = 'resources'
        end_path = f'{r}/{d}'
        try:
            os.mkdir(end_path)
            print("Directory ", end_path, " Created ")
        except FileExistsError:
            print("Directory ", end_path, " already exists")

    for d in high_lvl_dirs:
        r = 'project'
        end_path = f'{r}/{d}'
        try:
            os.mkdir(end_path)
            print("Directory ", end_path, " Created ")
        except FileExistsError:
            print("Directory ", end_path, " already exists")

    for d in config:
        r = 'project'
        m = 'config'
        end_path = f'{r}/{m}/{d}'
        try:
            os.mkdir(end_path)
            print("Directory ", end_path, " Created ")
        except FileExistsError:
            print("Directory ", end_path, " already exists")

    for d in db:
        r = 'project'
        m = 'db'
        end_path = f'{r}/{m}/{d}'
        try:
            os.mkdir(end_path)
            print("Directory ", end_path, " Created ")
        except FileExistsError:
            print("Directory ", end_path, " already exists")


if __name__ == '__main__':
    main()
