import{j as r}from"./iframe-BZ309vyP.js";import{w as t,s as e,t as d,g as u}from"./TimeField-XG7fVuks.js";import{L as i}from"./Label-DaB9u04W.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-P_wGPXL3.js";import"./mergeRefs-DOKtgXIl.js";import"./index-D_qUUaJn.js";import"./clsx-B-dksMZM.js";import"./Accordion-DBJYoG6f.js";import"./dynamic-BlbD8p9A.js";import"./Button-D_IowAzf.js";import"./IconWarning-DvQ_83sT.js";import"./Text-C4LG1QU9.js";import"./browser-6QOIIU7n.js";import"./utils-JyFk5TTa.js";import"./EmulatedBoldText-BN5KbGVs.js";import"./LoadingSpinner-CP4vAouS.js";import"./Button-CF0FSAUf.js";import"./ProgressBar-BUFkxRcJ.js";import"./Hidden-Dy-Kvk-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B2ssQm4M.js";import"./useFocusRing-BtfZpnq2.js";import"./useFocusable-CnzH4q2c.js";import"./useLocalizedStringFormatter-D2Npicej.js";import"./Section-8HxUyc4l.js";import"./context-DqVMPo4j.js";import"./RSPContexts-CvJVTBp5.js";import"./Collection-Jfb5Oz2B.js";import"./CollectionBuilder-BxUVDWC-.js";import"./SelectionIndicator-B3TjwCoM.js";import"./Separator-Dgou7g2f.js";import"./useStatic-5dWEA-L1.js";import"./ActionGroup-DcCFpoHe.js";import"./Alert-DPsJkmhp.js";import"./AlertIcon-B-mY0RH1.js";import"./AlertBadge-R-mVKmEC.js";import"./Align-DS4_04QJ.js";import"./Popover-X1T8rxjL.js";import"./OverlayTrigger-D_yTwUd7.js";import"./TableFooterRow-CiOqHLtA.js";import"./SkeletonText-DFDkwTxU.js";import"./Avatar-B3lmaioZ.js";import"./AvatarStack-BG3RCwzr.js";import"./Badge--3MWN732.js";import"./BigNumber-BkKE9hXG.js";import"./Breadcrumb-B7PRg9RF.js";import"./Link-m-wa_u5M.js";import"./Heading-BsbQC_AI.js";import"./Legend-C53VbU31.js";import"./FileCardList-Uss-bJOP.js";import"./Image-K3vcbe26.js";import"./Color-DAFsRmWC.js";import"./Content-BkJWB-QG.js";import"./ContextualHelpTrigger-CvFvqIHG.js";import"./CounterBadge-FgsOg61J.js";import"./DonutChart-Cgkf9wPz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQqFYPly.js";import"./Header-_hwWlC9P.js";import"./Initials-CtNkodNC.js";import"./InlineCode-Dinyx0TJ.js";import"./PopoverTrigger-fvbDiyfk.js";import"./Separator-n_z7rKib.js";import"./Message-D2YQcln4.js";import"./MessageSeparator-DajKPYBq.js";import"./NavigationGroup-DO1RxFBf.js";import"./Notification-B0QimcaP.js";import"./NotificationProvider-CEg6afiq.js";import"./ProgressBar-DGfkaPcD.js";import"./Rating-BTXRmieV.js";import"./Skeleton-WCVj9B_-.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Pr={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},p={args:{isReadOnly:!0}},n={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",isDisabled:!0,children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},c={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(d,{value:"read",children:"Read"}),r.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>r.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"}),r.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>r.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
