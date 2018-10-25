Test App for Khufu SSO script.

Installing this app will add extra ways to authenticate using Bookngbug SSO endpoints.
Using two kinds of scripts

+ SSO - member_login: takes a token as parameter

  The response of the script should be a JSON containing at least one of:
  'email', 'ref' or 'member_id'

  extra_data can also be passed to create a new member
  see Services::Creation::Login::NewMember for details for now

+ SSO - admin_login: takes a token as parameter
  The response of the script should be a JSON containing:
  'email', 'company_id'
  and at least on of:
  'first_name' or 'last_name'

  extra_data can also be passed to create a new member
  see Services::Creation::Login::Admin for details for now
