import{j as r}from"./iframe-BtRqkaoN.js";import{N as t,x as c,F as g,C as x,c as b}from"./Modal-CDGfx8xL.js";import{L as o}from"./Label-DEA5QNgM.js";import{B as h}from"./Button-BPlXfnB_.js";import{T as F}from"./Text-C82-Opvq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-s-bN7sg4.js";import"./flowComponent-lL_ayKQ8.js";import"./index-Bq7uci9y.js";import"./index-m38LNed9.js";import"./context-BSa97aaI.js";import"./Button-DBAfHwZW.js";import"./utils-DZ-gBwlH.js";import"./ProgressBar-BPiJZ4Qy.js";import"./Hidden-DEfsXDrb.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BjeDPPzV.js";import"./useFocusRing-Cuw_RoAO.js";import"./useFocusable-Djt3CoWV.js";import"./RSPContexts-Dy3XJREj.js";import"./Collection-BjDSumuQ.js";import"./CollectionBuilder-CvHEghsW.js";import"./SelectionIndicator-lBISxJoi.js";import"./Separator-B_m33Nu6.js";import"./browser-BLYjcYaj.js";import"./useLocalizedStringFormatter-CW_rKmRX.js";import"./useStatic-Cx2ReuRe.js";import"./FileCardList-DW1fCD53.js";import"./IconWarning-DkmpBTGx.js";import"./Avatar-CF69g3k0.js";import"./AlertIcon-CEzMYdZY.js";import"./Image-lNfhH4MA.js";import"./Link-DsBhuJ5I.js";import"./ControlledNotification-XJl_dB2W.js";import"./LoadingSpinner-jhQv_W0v.js";import"./Flex-C6QDHQJ0.js";import"./Accordion-D844NWAq.js";import"./Section-DxORUvzC.js";import"./ActionGroup-D0a1TuEY.js";import"./Alert-CkEZZy6i.js";import"./AlertBadge-D62r_RrJ.js";import"./Align-Ce3rIU_V.js";import"./AvatarStack-CYO7RyGK.js";import"./BigNumber-CsIC2_Nn.js";import"./Breadcrumb-h4t0mPs2.js";import"./Heading-Do1d9f-o.js";import"./Legend-BIz0nErH.js";import"./Color-BQLSKmwj.js";import"./TableFooterRow-B7bMzDHU.js";import"./SkeletonText-YNIzcCkm.js";import"./Content-CY14UYyB.js";import"./CounterBadge-CGv0vaW8.js";import"./DonutChart-BSRtiAXh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D0PZlEH1.js";import"./Header-BRGfOg7r.js";import"./Initials-Dm2Il5IW.js";import"./InlineCode-CAALbjrA.js";import"./LayoutCard-BcMz8A0K.js";import"./Separator-QBAhEahF.js";import"./MessageSeparator-BfV-UWPl.js";import"./NavigationGroup-YJbzS_dd.js";import"./Notification-dUzHJ4Jf.js";import"./NotificationProvider-IMF5MrhA.js";import"./ProgressBar-BLfa9fLl.js";import"./Rating-BQYV4n93.js";import"./Skeleton-BHFnD8fZ.js";import"./EmulatedBoldText-DEqPiTPW.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const _r=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,_r as __namedExportsOrder,Hr as default};
