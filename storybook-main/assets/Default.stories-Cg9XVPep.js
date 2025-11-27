import{j as r}from"./iframe-B_xU1nn7.js";import{w as t,s as e,t as d,g as u}from"./TimeField-DAIEB6Mx.js";import{L as i}from"./Label-z6gInSF0.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-Cqc_GEqv.js";import"./mergeRefs-DDgKR_H-.js";import"./index-BJJzNH44.js";import"./clsx-B-dksMZM.js";import"./Accordion-B-nnSuLg.js";import"./dynamic-DkcCZ1Pm.js";import"./Button-CJjTOiYK.js";import"./IconWarning-BbWnQxtz.js";import"./Text-IdcKzQUN.js";import"./browser-B5ILUykA.js";import"./utils-DWRw1wg7.js";import"./EmulatedBoldText-BzzsilYU.js";import"./LoadingSpinner-D6qMiqks.js";import"./Button-C_B3ah-f.js";import"./ProgressBar-1v-zrZjX.js";import"./Hidden-AstmD5FI.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DGbiAMEx.js";import"./useFocusRing-B-eR60lx.js";import"./useFocusable-Ddd5SUsS.js";import"./useLocalizedStringFormatter-BxIEt52a.js";import"./Section-aN2a1IPE.js";import"./context-CNJB9XcB.js";import"./RSPContexts-CkMxE85k.js";import"./Collection-SdZ6Sup7.js";import"./CollectionBuilder-CL7Y9BKh.js";import"./SelectionIndicator-DZ8T-aZ-.js";import"./Separator-D6B_DVDR.js";import"./useStatic-DEsZhXHA.js";import"./ActionGroup-BIwOZff1.js";import"./Alert-XE653P4e.js";import"./AlertIcon-DBKF5K6s.js";import"./AlertBadge-DBA4NYlx.js";import"./Align-CR6J15sP.js";import"./Popover-f3I7stco.js";import"./OverlayTrigger-DCVkiacf.js";import"./TableFooterRow-C5siyAmN.js";import"./SkeletonText-Cetdbyan.js";import"./Avatar-BzK22LxN.js";import"./AvatarStack-BnAvP6O1.js";import"./Badge-Tnmd4leD.js";import"./BigNumber-D-zAlzRm.js";import"./Breadcrumb-C6H4OLtJ.js";import"./Link-hOwnT9DM.js";import"./Heading-B_4jd62B.js";import"./Legend-Kau7Ns-4.js";import"./FileCardList-Bbwcsc6X.js";import"./Image-DAesSSML.js";import"./Color-CdDRB0UO.js";import"./Content-BAHraf_V.js";import"./ContextualHelpTrigger-CYt3J7rd.js";import"./CounterBadge-CSSR6Q3s.js";import"./DonutChart-YSL2XDiM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D98EXX3l.js";import"./Header-CnyOwhZl.js";import"./Initials-6ZzTyiuj.js";import"./InlineCode-aXE1rdVe.js";import"./PopoverTrigger-DGqbki2P.js";import"./Separator--zbsA2fy.js";import"./Message-DSf1Tyid.js";import"./MessageSeparator-C5oRnvo_.js";import"./NavigationGroup-DpAuqwQ9.js";import"./Notification-CbEe_kr1.js";import"./NotificationProvider-B2l9Eoa8.js";import"./ProgressBar-CFs3xVsw.js";import"./Rating-hR635hxg.js";import"./Skeleton-DsuDYoQm.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Pr={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},p={args:{isReadOnly:!0}},n={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",isDisabled:!0,children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},c={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(d,{value:"read",children:"Read"}),r.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>r.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"}),r.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>r.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
