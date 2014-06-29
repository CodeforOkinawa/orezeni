require 'uri'
require 'net/http'
require "csv"
require 'json'

task :default => [:preview]

# Usage: rake preveiw
desc "Launch preview environment"
task :preview do
	sh "jekyll --server --auto"
end

desc "deploy GitHub:Pages"
task :deploy do
	sh "git checkout master"
	sh "git push -f git@github.com:orezeni/orezeni.github.com.git master"
end

desc "update js/local-gov-year.js data from openspendings"
task :update_localgov do
  govs = CSV.table("local-govs.csv",  headers:true,  header_converters: :symbol)

  local_gov_years = []
  govs.each do |gov|
    uri = URI.parse("https://openspending.org/api/2/aggregate?dataset=#{gov[:dataset]}&drilldown=time.year")
    result = JSON.parse(Net::HTTP.get(uri))
    years = result["drilldown"].map { |year| year["time"]["year"].to_i}
    local_gov_years.push({"name" => gov[:localgov], "ds" => gov[:dataset], "years" => years.sort.reverse})
    print "."
  end

  File.write('js/local-gov-year.js', local_gov_years.to_json)
end
