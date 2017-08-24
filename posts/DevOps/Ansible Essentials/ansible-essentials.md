Configurations
================================================================================

ansible.cfg
--------------------------------------------------------------------------------

hosts configuration
--------------------------------------------------------------------------------

Variables
================================================================================

Built-in Variables
--------------------------------------------------------------------------------

Host Variables
--------------------------------------------------------------------------------

Modules 
================================================================================

Plugins 
================================================================================

- Action Plugins
- Cache Plugins
- Callback Plugins
- Connection Plugins
- Filters Plugins
- Lookup Plugins
- Strategy Plugins
- Shell Plugins
- Test Plugins
- Vars Plugins

See all existing plugins at: [https://github.com/ansible/ansible/tree/devel/lib/ansible/plugins]()

File
--------------------------------------------------------------------------------

- file
- assemble
- template
- copy
- lineinfile
- blockfile

Execution
--------------------------------------------------------------------------------

- shell
- command

Lookups
================================================================================

- file
- csvfile
- dnstxt
- password
- ini
- template
- redis_kv
- etcd

Conditionals
================================================================================

- when

Loops
================================================================================

- with_items
- with_lines
  One of the most useful built-in lookup in Ansible, it runs any shell command you give it, then split the output of the shell command into lines, then loop over these lines, so if you want to loop over all lines inside a file, just use `with_lines: cat file.txt`.
- with_fileglob
- with_first_found
- with_dict
- with_flattened
- with_indexed_items
- with_nested
- with_random_choice
- with_sequence
- with_subelements
- with_together
- with_inventory_hostname

Roles
================================================================================

- ansible-galaxy

Tags
================================================================================

Inventory Host Groups
================================================================================

SSH
================================================================================
- pipeling
- know_hosts
- AgentFrowarding

Debug
================================================================================

- debug
- register
- `ansible -m setup`

Optimization
================================================================================

- gather_facts: skip fact gathering
- ssh multiplexing
- ssh pipeling
