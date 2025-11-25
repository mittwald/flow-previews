import{j as r}from"./iframe-kjkHkmuG.js";import{N as t,x as c,F as g,C as x,c as b}from"./Modal-0bgB5MJd.js";import{L as o}from"./Label-Ca0botOM.js";import{B as h}from"./Button-B7VtDimI.js";import{T as F}from"./Text-D4QcDsPt.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-BmAGjafL.js";import"./flowComponent-CipIzjpW.js";import"./index-CkW5Yidx.js";import"./index-Ce5Nlxxb.js";import"./context-DelhS3-G.js";import"./Button-CPb8XJRj.js";import"./utils-uJ4-NNRC.js";import"./ProgressBar-SgmdiFAI.js";import"./Hidden-C9LFy0Lp.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DKZTM6pY.js";import"./useFocusRing-CunmVmWl.js";import"./useFocusable-DMxxipCc.js";import"./RSPContexts-1NZhJNvl.js";import"./Collection-BGAg5cVl.js";import"./CollectionBuilder-C24jMLh-.js";import"./SelectionIndicator-2ey5txuw.js";import"./Separator-_AMhP75A.js";import"./browser-i7jAx1Fh.js";import"./useLocalizedStringFormatter-CWdDsDMk.js";import"./useStatic-BQelcXwM.js";import"./FileCardList-ByOMDCHV.js";import"./IconWarning-CMakOX5C.js";import"./Avatar-C1lRJ6tW.js";import"./AlertIcon-CX0jvCdY.js";import"./Image-DvlLXzm2.js";import"./Link-DZXgz7Xp.js";import"./ControlledNotification-BqK55IK0.js";import"./LoadingSpinner-CCMWfn-z.js";import"./Flex-CV-Pkpn9.js";import"./Accordion-BfFjMQFD.js";import"./Section-Di6ereWQ.js";import"./ActionGroup-B72bwf7M.js";import"./Alert-LMEN0RsN.js";import"./AlertBadge-2LtFU-Ml.js";import"./Align-BH2-KQDB.js";import"./AvatarStack-TOOiI3ZS.js";import"./BigNumber-DN_nWYcY.js";import"./Breadcrumb-BoOjDcq4.js";import"./Heading-C6qiLJW3.js";import"./Legend-YpQaLltb.js";import"./Color-D_EMm2-c.js";import"./TableFooterRow-Dy9Hm7Fq.js";import"./SkeletonText-C_hFxFJ1.js";import"./Content-DOMtlypw.js";import"./CounterBadge-DpRVMejc.js";import"./DonutChart-OsMTrpsW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bso8HKFb.js";import"./Header-BMOLLcii.js";import"./Initials-IMjMZZM4.js";import"./InlineCode-DGV_Qs_a.js";import"./LayoutCard-BdOAhJjJ.js";import"./Separator-DpLhRQNb.js";import"./MessageSeparator-JWDNOqbY.js";import"./NavigationGroup-CNQzbtXt.js";import"./Notification-DusdwtWV.js";import"./NotificationProvider-D3VY9NtU.js";import"./ProgressBar-Dx3EHT7v.js";import"./Rating-hlP75Uf2.js";import"./Skeleton-C4RIhoE3.js";import"./EmulatedBoldText-CsxaKUEU.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
