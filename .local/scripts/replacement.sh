SYNC_IGNORE=".git,.idea,.gitignore,LICENSE,.github/workflows/synchronization.yaml"

          IFS=',' read -r -a ignored_files <<< "$SYNC_IGNORE"

          exclude_conditions=""
          for ignored_file in "${ignored_files[@]}"; do
            exclude_conditions="$exclude_conditions ! -name \"$ignored_file\""
          done

          echo $exclude_conditions
