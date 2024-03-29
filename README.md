# how to create a react ui library

npm install -g create-react-library
npx create-react-library [library name]

to test, start with:
npm start

# Components

## BarChart

not being used

## Button

`<Button [primary|ghost|link|text] size='large|small|medium' [reset|htmlType] id disabled icon loading onClick ></Button>`

## Chip

`<Chip selected styles onClick></Chip>`

## Comment

`<Comment createdBy actionDetails createdAt></Comment>`

## Form

`<Form loading onFinish alignLeft vertical></Form>`

## InfoTooltip

`<InfoTooltip color icon></InfoTooltip>`

## Input

`<Input type='text|currency|time|location|time_range'? label placeholder prefix suffix value width options onChange password? />`

## KeyValue

`<KeyValue key1 value1 multiline></KeyValue>`

## Table

`<Table dataSource columns empty_icon navigate prefix suffix={() => ''}></Table>`

## TextArea

`<TextArea rows placeholder label value onChange style span></TextArea>`

# Layouts

## DashboardLayout

`<DashboardLayout headerOptions LeftMenu Footer theme></DashboardLayout>`

## WebsiteLayout

`<WebsiteLayout menuItems={[{label,link},{label,link},...]} logo opened setOpened ><WebsiteLayout>`

# Helpers

## formatCurrency

`args: number`

## leftMenuLabel

`args: (icon, text, link)`

## openNotification

`args: {title, description, type}`

## Misc

`.grid { display: grid; grid-template-columns: 1fr 500px 1fr; grid-template-rows: 100px 200px; }`
