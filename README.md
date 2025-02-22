<div align=center>

# sake-repo2 (sake-report/repository)

ざっくり自身の飲んだ酒情報を残しておくためのデータシステム

</div>

## Env

- Docker

## Directory

- docs/: ドキュメント置き場
- client/: Web アプリケーション(SSG 生成機構)
- api/: API(DB 接続・データ整形など)
- db/: DB 定義・関連設定など
  - migration/: DB マイグレーション用スクリプトなど
- data/: 永続化データ置き場

## Commands

```sh
# boot services
docker compose up
```

### URLs

|  name  |          url          |
| :----: | :-------------------: |
| client | http://localhost:3000 |
|  api   | http://localhost:3001 |

```sh
# migrate
docker compose run --rm db-migration yarn migrate
```
