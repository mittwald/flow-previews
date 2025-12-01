import{j as r}from"./iframe-B7t5ja2b.js";import{w as t,s as e,t as d,g as u}from"./TimeField-DU2gwGxd.js";import{L as i}from"./Label-Db92ClKs.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DYQFvX9W.js";import"./mergeRefs-CZ0PXAOw.js";import"./index-0JV4jXfB.js";import"./clsx-B-dksMZM.js";import"./Accordion-CTUgpZ-B.js";import"./dynamic-DFqFR_25.js";import"./Button-BoOZwgfJ.js";import"./IconWarning-DPxPg2Ca.js";import"./Text-CDnJtWF_.js";import"./browser-Dz7UytJe.js";import"./utils-DDfw_94E.js";import"./EmulatedBoldText-56hmy21w.js";import"./LoadingSpinner-CmbUgNIV.js";import"./Button-B-5trTj2.js";import"./ProgressBar-CHM1Xifb.js";import"./Hidden-BQUVCBE1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DT7PsWv1.js";import"./useFocusRing-6FEqbhUJ.js";import"./useFocusable-CX5magUq.js";import"./useLocalizedStringFormatter-BbtlMh8_.js";import"./Section-oj7pNCYW.js";import"./context-XJw--O2B.js";import"./RSPContexts-BRH8-qft.js";import"./Collection-DAazmHys.js";import"./CollectionBuilder-CJZxBA1k.js";import"./SelectionIndicator-BZI_ZwZN.js";import"./Separator-BYhTCqx2.js";import"./useStatic-BJbQzT7g.js";import"./ActionGroup-X0GeQX8f.js";import"./Alert-BcLBdkq5.js";import"./AlertIcon-Ccz2YQls.js";import"./AlertBadge-DzfN4yVX.js";import"./Align-CqoAJI6M.js";import"./Popover-BzzsvlUu.js";import"./OverlayTrigger-CQXiz3lB.js";import"./TableFooterRow-BlQ2sKAu.js";import"./SkeletonText-EnN-tyvd.js";import"./Avatar-BoT--Swq.js";import"./AvatarStack-D7dF8Abq.js";import"./Badge-BODqGCzs.js";import"./BigNumber-CaOlSiXS.js";import"./Breadcrumb-kRVQ0P47.js";import"./Link-Cz7JnS5t.js";import"./Heading-DEtNPCJN.js";import"./Legend-Cg9gjTEr.js";import"./FileCardList-CvtUHugH.js";import"./Image-C1Z_Jrqw.js";import"./Color-QRfHlKIC.js";import"./Content-B7myGA-g.js";import"./ContextualHelpTrigger-DvoCzQUP.js";import"./CounterBadge-i2riKAFy.js";import"./DonutChart-B74BzGpv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-_D41FmY-.js";import"./Header-DRQSlscy.js";import"./Initials-BLqXYT9A.js";import"./InlineCode-DpgdCcoV.js";import"./PopoverTrigger-BZs4Q1Hp.js";import"./Separator-Yorp4CJm.js";import"./Message-DM93Jn4g.js";import"./MessageSeparator--4DDPHgg.js";import"./NavigationGroup-k0vE3zib.js";import"./Notification-DFIYUGUC.js";import"./NotificationProvider-BYTR-0ZM.js";import"./ProgressBar-BO_vS1l4.js";import"./Rating-CikA--0V.js";import"./Skeleton-CRxBQiHe.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Pr={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},p={args:{isReadOnly:!0}},n={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",isDisabled:!0,children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},c={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(d,{value:"read",children:"Read"}),r.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>r.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"}),r.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>r.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...l.parameters?.docs?.source}}};const fr=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{c as CheckboxButtons,n as CheckboxDisabled,a as CheckboxGroupDisabled,l as ColumnLayout,s as Default,p as ReadOnly,m as WithFieldError,fr as __namedExportsOrder,Pr as default};
