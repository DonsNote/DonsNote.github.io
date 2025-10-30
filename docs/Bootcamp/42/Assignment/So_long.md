---
layout: default
title: So Long
parent: 42
grand_parent: Bootcamp
permalink: /docs/Bootcamp/42/So_long/
nav_order: 6
---

# [Repository](https://github.com/DonsNote/Dons-42/tree/main/00_Circle/so_long)

# Mandatory

MinilibX를 사용하여 2D 게임을 만드는 프로젝트입니다.
플레이어가 맵에서 모든 수집품을 모으고 출구로 탈출하는 게임을 구현합니다.

## 과제 요구사항

**게임 규칙:**
- 플레이어는 맵에서 모든 수집품(C)을 모아야 합니다
- 모든 수집품을 모은 후에만 출구(E)로 탈출 가능
- 이동 횟수를 터미널에 출력해야 합니다
- W, A, S, D 키로 상하좌우 이동
- ESC 키 또는 창의 X 버튼으로 게임 종료

**맵 구성 요소:**
- `0`: 빈 공간 (Empty space)
- `1`: 벽 (Wall)
- `C`: 수집품 (Collectible)
- `E`: 출구 (Exit)
- `P`: 플레이어 시작 위치 (Player)

**맵 규칙:**
- 맵은 직사각형이어야 함
- 맵은 벽(1)로 완전히 둘러싸여야 함
- 유효한 경로가 존재해야 함 (수집품과 출구 모두 도달 가능)
- 플레이어(P) 1개, 출구(E) 최소 1개, 수집품(C) 최소 1개 필요
- `.ber` 확장자를 가진 파일로 맵 저장

## 맵 예시

```
1111111111111
10010000000C1
1000011111001
1P0011E000001
1111111111111
```

**설명:**
- `P`: 플레이어 시작 위치
- `C`: 수집해야 할 아이템
- `E`: 모든 수집품을 모은 후 탈출할 출구
- `1`: 벽 (지나갈 수 없음)
- `0`: 이동 가능한 빈 공간

## MinilibX 기초

### 초기화 및 윈도우 생성

```c
#include <mlx.h>

typedef struct s_game
{
    void    *mlx;       // MLX 인스턴스
    void    *win;       // 윈도우 포인터
    int     width;      // 윈도우 너비
    int     height;     // 윈도우 높이
}   t_game;

int main(void)
{
    t_game game;

    // MLX 초기화
    game.mlx = mlx_init();
    
    // 윈도우 생성
    game.width = 800;
    game.height = 600;
    game.win = mlx_new_window(game.mlx, game.width, game.height, "So Long");

    // 이벤트 루프 시작
    mlx_loop(game.mlx);
    return (0);
}
```

### 이미지 로드 및 출력

```c
typedef struct s_image
{
    void    *img;       // 이미지 포인터
    int     width;      // 이미지 너비
    int     height;     // 이미지 높이
}   t_image;

// 이미지 로드
t_image load_image(void *mlx, char *path)
{
    t_image img;

    img.img = mlx_xpm_file_to_image(mlx, path, &img.width, &img.height);
    if (!img.img)
    {
        printf("Error\n이미지 로드 실패: %s\n", path);
        exit(1);
    }
    return (img);
}

// 이미지 화면에 출력
void render_image(t_game *game, t_image img, int x, int y)
{
    mlx_put_image_to_window(game->mlx, game->win, img.img, x, y);
}
```

### 이벤트 처리

```c
// 키보드 이벤트
int key_press(int keycode, t_game *game)
{
    if (keycode == ESC_KEY)  // 53 (macOS)
    {
        mlx_destroy_window(game->mlx, game->win);
        exit(0);
    }
    else if (keycode == W_KEY)  // 13 (macOS)
        move_player(game, 0, -1);  // 위로 이동
    else if (keycode == A_KEY)  // 0
        move_player(game, -1, 0);  // 왼쪽
    else if (keycode == S_KEY)  // 1
        move_player(game, 0, 1);   // 아래
    else if (keycode == D_KEY)  // 2
        move_player(game, 1, 0);   // 오른쪽
    
    return (0);
}

// 윈도우 닫기 이벤트
int close_window(t_game *game)
{
    mlx_destroy_window(game->mlx, game->win);
    exit(0);
    return (0);
}

int main(void)
{
    t_game game;

    // ... 초기화 ...

    // 이벤트 핸들러 등록
    mlx_key_hook(game.win, key_press, &game);
    mlx_hook(game.win, 17, 0, close_window, &game);  // 17 = DestroyNotify

    mlx_loop(game.mlx);
    return (0);
}
```

## 게임 구조

### 맵 구조체

```c
typedef struct s_map
{
    char    **grid;         // 2D 맵 배열
    int     width;          // 맵 너비
    int     height;         // 맵 높이
    int     collectibles;   // 수집품 개수
    int     collected;      // 수집한 개수
    int     exit_count;     // 출구 개수
    int     player_count;   // 플레이어 개수
}   t_map;
```

### 플레이어 구조체

```c
typedef struct s_player
{
    int     x;          // X 좌표 (타일 단위)
    int     y;          // Y 좌표 (타일 단위)
    int     moves;      // 이동 횟수
}   t_player;
```

### 게임 전체 구조체

```c
typedef struct s_game
{
    void        *mlx;
    void        *win;
    t_map       map;
    t_player    player;
    t_image     img_wall;
    t_image     img_floor;
    t_image     img_collectible;
    t_image     img_exit;
    t_image     img_player;
    int         tile_size;  // 타일 크기 (예: 64픽셀)
}   t_game;
```

## 맵 파싱

### 맵 파일 읽기

```c
t_map read_map(char *filename)
{
    int     fd;
    char    *line;
    t_map   map;
    int     i;

    // 파일 확장자 검사
    if (!ft_strnstr(filename, ".ber", ft_strlen(filename)))
    {
        printf("Error\n잘못된 파일 확장자\n");
        exit(1);
    }

    fd = open(filename, O_RDONLY);
    if (fd < 0)
    {
        printf("Error\n파일을 열 수 없습니다\n");
        exit(1);
    }

    // 맵 높이 계산
    map.height = 0;
    while (get_next_line(fd, &line) > 0)
    {
        map.height++;
        free(line);
    }
    close(fd);

    // 맵 데이터 저장
    map.grid = malloc(sizeof(char *) * (map.height + 1));
    fd = open(filename, O_RDONLY);
    i = 0;
    while (get_next_line(fd, &line) > 0)
    {
        map.grid[i] = line;
        if (i == 0)
            map.width = ft_strlen(line);
        i++;
    }
    map.grid[i] = NULL;
    close(fd);

    return (map);
}
```

### 맵 유효성 검사

```c
int validate_map(t_map *map)
{
    // 1. 직사각형 검사
    for (int i = 0; i < map->height; i++)
    {
        if (ft_strlen(map->grid[i]) != map->width)
            return (0);
    }

    // 2. 벽으로 둘러싸여 있는지 검사
    for (int i = 0; i < map->width; i++)
    {
        if (map->grid[0][i] != '1' || map->grid[map->height - 1][i] != '1')
            return (0);
    }
    for (int i = 0; i < map->height; i++)
    {
        if (map->grid[i][0] != '1' || map->grid[i][map->width - 1] != '1')
            return (0);
    }

    // 3. 필수 요소 개수 검사
    map->collectibles = 0;
    map->exit_count = 0;
    map->player_count = 0;

    for (int y = 0; y < map->height; y++)
    {
        for (int x = 0; x < map->width; x++)
        {
            char c = map->grid[y][x];
            if (c == 'C')
                map->collectibles++;
            else if (c == 'E')
                map->exit_count++;
            else if (c == 'P')
                map->player_count++;
            else if (c != '0' && c != '1')
                return (0);  // 잘못된 문자
        }
    }

    if (map->player_count != 1 || map->exit_count < 1 || map->collectibles < 1)
        return (0);

    return (1);
}
```

### 경로 유효성 검사 (DFS/BFS)

모든 수집품과 출구에 도달 가능한지 확인합니다.

```c
void flood_fill(char **grid, int x, int y, int *collectibles, int *exits)
{
    if (grid[y][x] == '1' || grid[y][x] == 'V')  // 벽 또는 방문함
        return;

    if (grid[y][x] == 'C')
        (*collectibles)++;
    else if (grid[y][x] == 'E')
        (*exits)++;

    grid[y][x] = 'V';  // 방문 표시

    // 4방향 재귀 탐색
    flood_fill(grid, x + 1, y, collectibles, exits);
    flood_fill(grid, x - 1, y, collectibles, exits);
    flood_fill(grid, x, y + 1, collectibles, exits);
    flood_fill(grid, x, y - 1, collectibles, exits);
}

int check_path(t_map *map, t_player *player)
{
    char    **copy;
    int     found_collectibles = 0;
    int     found_exits = 0;

    // 맵 복사
    copy = copy_map(map->grid, map->height);

    // 플레이어 위치에서 flood fill
    flood_fill(copy, player->x, player->y, &found_collectibles, &found_exits);

    // 복사본 해제
    free_map(copy, map->height);

    return (found_collectibles == map->collectibles && found_exits >= 1);
}
```

## 게임 로직

### 플레이어 이동

```c
void move_player(t_game *game, int dx, int dy)
{
    int new_x = game->player.x + dx;
    int new_y = game->player.y + dy;

    // 벽 충돌 검사
    if (game->map.grid[new_y][new_x] == '1')
        return;

    // 수집품 수집
    if (game->map.grid[new_y][new_x] == 'C')
    {
        game->map.collected++;
        game->map.grid[new_y][new_x] = '0';  // 수집품 제거
    }

    // 출구 도달
    if (game->map.grid[new_y][new_x] == 'E')
    {
        if (game->map.collected == game->map.collectibles)
        {
            printf("축하합니다! %d번 만에 탈출했습니다!\n", game->player.moves + 1);
            close_window(game);
        }
        else
        {
            printf("모든 수집품을 모아야 합니다! (%d/%d)\n", 
                   game->map.collected, game->map.collectibles);
            return;
        }
    }

    // 이동 수행
    game->player.x = new_x;
    game->player.y = new_y;
    game->player.moves++;

    // 이동 횟수 출력
    printf("Moves: %d\n", game->player.moves);

    // 화면 다시 그리기
    render_game(game);
}
```

### 화면 렌더링

```c
void render_game(t_game *game)
{
    for (int y = 0; y < game->map.height; y++)
    {
        for (int x = 0; x < game->map.width; x++)
        {
            int pixel_x = x * game->tile_size;
            int pixel_y = y * game->tile_size;

            // 바닥 먼저 그리기
            render_image(game, game->img_floor, pixel_x, pixel_y);

            // 타일 타입에 따라 이미지 그리기
            char tile = game->map.grid[y][x];
            if (tile == '1')
                render_image(game, game->img_wall, pixel_x, pixel_y);
            else if (tile == 'C')
                render_image(game, game->img_collectible, pixel_x, pixel_y);
            else if (tile == 'E')
                render_image(game, game->img_exit, pixel_x, pixel_y);

            // 플레이어 그리기
            if (x == game->player.x && y == game->player.y)
                render_image(game, game->img_player, pixel_x, pixel_y);
        }
    }
}
```

## 보너스

**추가 기능:**
- 애니메이션 추가 (플레이어, 수집품 등)
- 적(Enemy) 추가 - 적과 닿으면 게임 오버
- 화면에 이동 횟수 표시 (터미널이 아닌 게임 창에)
- 스프라이트 애니메이션

```c
// 애니메이션 예시
int animate(t_game *game)
{
    static int frame = 0;
    
    frame++;
    if (frame % 10 == 0)  // 10프레임마다 업데이트
    {
        // 애니메이션 로직
        render_game(game);
    }
    
    return (0);
}

int main(void)
{
    t_game game;
    
    // ... 초기화 ...
    
    mlx_loop_hook(game.mlx, animate, &game);
    mlx_loop(game.mlx);
    return (0);
}
```

## 주의사항

1. **메모리 관리**
   - 모든 이미지는 `mlx_destroy_image()`로 해제
   - 맵 데이터 메모리 해제
   - 윈도우는 `mlx_destroy_window()`로 해제

2. **오류 처리**
   - 잘못된 맵 파일
   - 유효하지 않은 맵 구조
   - 이미지 로드 실패
   - 모든 오류는 "Error\n" 출력 후 종료

3. **키 코드 (macOS/Linux 차이)**
   - macOS와 Linux에서 키 코드가 다를 수 있음
   - 조건부 컴파일 사용 또는 `mlx_key_hook()` 대신 `mlx_hook()` 사용

## 컴파일 예시

```bash
# macOS
gcc -Wall -Wextra -Werror *.c -Lmlx -lmlx -framework OpenGL -framework AppKit -o so_long

# Linux
gcc -Wall -Wextra -Werror *.c -Lmlx_linux -lmlx -lXext -lX11 -lm -o so_long
```

## 실행 예시

```bash
./so_long maps/map.ber
```