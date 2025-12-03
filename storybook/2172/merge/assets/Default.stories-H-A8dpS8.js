import{j as r}from"./iframe-HbHx0dbr.js";import{w as t,s as e,t as d,g as u}from"./TimeField-BLEhWuna.js";import{L as i}from"./Label-VVCD1n3I.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-qzVrzUzc.js";import"./mergeRefs-D-Oz7bso.js";import"./index-CFmzddZU.js";import"./clsx-B-dksMZM.js";import"./Accordion-Cwt2fJuI.js";import"./dynamic-CRi6gEUI.js";import"./Button-CJvGBAVv.js";import"./IconWarning-DPh3xjyu.js";import"./Text-CkAqcx4z.js";import"./browser-CXwhmTUt.js";import"./utils-CsDSVDn1.js";import"./EmulatedBoldText-Bfs6I3BJ.js";import"./LoadingSpinner-I5GkEDRC.js";import"./Button-CId--e-F.js";import"./ProgressBar-DgngiXRE.js";import"./Hidden-DneGUX_i.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B1asaoMu.js";import"./useFocusRing-ChjTo6T2.js";import"./useFocusable-DI6pzLi-.js";import"./useLocalizedStringFormatter-D03WI-to.js";import"./Section-qE36af1s.js";import"./context-CWzv3puv.js";import"./RSPContexts-B_V-VNLp.js";import"./Collection-fVAw7-GX.js";import"./CollectionBuilder-9ah2FshN.js";import"./SelectionIndicator-CFpgfv2c.js";import"./Separator-BKx97MTe.js";import"./useStatic-BpR7MYw1.js";import"./ActionGroup-CSmxA-fN.js";import"./Alert-CbU_YA_s.js";import"./AlertIcon-C6IAHzWi.js";import"./AlertBadge-fEpk4vNR.js";import"./Align-BAwYX1Nz.js";import"./Popover-CJs7Vohs.js";import"./OverlayTrigger-CSEkhglm.js";import"./TableFooterRow-Dxi7XPrZ.js";import"./SkeletonText-S65PrCT7.js";import"./Avatar-JTrpRsew.js";import"./AvatarStack-CSJDeeUe.js";import"./Badge-CX4hh3lM.js";import"./BigNumber-BJXYLVAq.js";import"./Breadcrumb---Gml5SM.js";import"./Link-COwhy3J8.js";import"./Heading-DMPTZuUQ.js";import"./Legend-BwAXmxEK.js";import"./FileCardList-BbAMywa1.js";import"./Image-BUcGulw7.js";import"./Color-ByIQXf4O.js";import"./Content-C349RzEO.js";import"./ContextualHelpTrigger-BipkOUK_.js";import"./CounterBadge-N87a1HO-.js";import"./DonutChart-BGqYnoyK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-bUnPZbIJ.js";import"./Header-DefiEy2z.js";import"./Initials-Du-nuxgE.js";import"./InlineCode-DJLgs5TT.js";import"./PopoverTrigger-CHVTJqWF.js";import"./Separator-BhsBp5gG.js";import"./Message-C6tvgpf9.js";import"./MessageSeparator-DbNKZGcR.js";import"./NavigationGroup-DC8ViXMv.js";import"./Notification-DEJbziLS.js";import"./NotificationProvider-BOVzW3FW.js";import"./ProgressBar-cZpj8lZD.js";import"./Rating-EYgTbQvW.js";import"./Skeleton-Bn8XpxuJ.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Pr={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},p={args:{isReadOnly:!0}},n={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",isDisabled:!0,children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},c={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(d,{value:"read",children:"Read"}),r.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>r.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"}),r.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>r.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
