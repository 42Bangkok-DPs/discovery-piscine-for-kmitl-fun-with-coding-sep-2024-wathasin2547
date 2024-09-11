if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else
	for arg in "$@"; do
		mkdir "ex$arg" 2>/dev/null
	done
fi
