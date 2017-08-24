# Will expand $PATH variable
cat <<EOL
You Path is:
	${PATH}
EOL

# Will not expand $PATH variable
cat <<'EOL'
You Path is:
	${PATH}
EOL