function fish_prompt 
    set full_current_dir $(pwd)
    set -l beautiful_current_dir $(string split -m3 / $full_current_dir -n -f 3)
    echo ""
    set_color brcyan
    echo -n "$beautiful_current_dir$(set_color green)❯ "
    
end


function fish_greeting
    set_color brgreen
    echo "Welcome to the monorepo of $(set_color brcyan)Sui Dictionary$(set_color brgreen)."
end

set fish_color_command brgreen

set fish_color_param brcyan

set fish_color_quote bryellow