help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  install-front           Install dependency to front, example make install-front package=react option='--dev'"
	@echo "  uninstall-front         Uninstall dependency to front, example make uninstall-front package=react"
	@echo "  install-back           Install dependency to back, example make install-back package=react option='--dev'"
	@echo "  uninstall-back         Uninstall dependency to back, example make uninstall-back package=react"

install-front:
	@docker-compose exec -T front yarn add ${package} ${option}

uninstall-front:
	@docker-compose exec -T front yarn remove ${package}

install-back:
	@docker-compose exec -T back yarn add ${package} ${option}

uninstall-back:
	@docker-compose exec -T back yarn remove ${package}
