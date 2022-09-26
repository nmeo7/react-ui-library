# how to create a react ui library

npm install -g create-react-library
npx create-react-library [library name]

to test, start with:
npm start



# Components

## BarChart

not being used

## Button

<Button [ghost|link|text]? size='small|large|medium' reset? id={id} disabled={disabled} icon={icon} loading={loading} onClick={onClick} ></Button>

## Input
<Input type='text|currency|time|location|time_range'? label={?} placeholder={?} onChange={onChange} password? />

## Table
## RadioButton
## Form
## KeyValue
## Comment
## TextArea


# Layouts

## WebsiteLayout
## DashboardLayout


# Helpers

## openNotification
## leftMenuLabel
## leftMenuStyle
## formatCurrency


## Misc

.grid { display: grid; grid-template-columns: 1fr 500px 1fr; grid-template-rows: 100px 200px; }