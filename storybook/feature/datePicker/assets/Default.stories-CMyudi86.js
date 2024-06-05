import{S as o,O as t}from"./Option-3SH4anlJ.js";import{R as e}from"./index-uCp2LrAq.js";import{L as s}from"./Label-XTfJKiv1.js";import{F as Y}from"./FieldDescription-DDkbsc6q.js";import{F as L}from"./FormField.module-CpCFPza4.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./IconApp-Cxjf7gPB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-wUaQYyEI.js";import"./index-BOkhicXD.js";import"./IconWarning-2GqJK2gc.js";import"./PopoverTrigger-CJjKvP3U.js";import"./Action-Benk5eLT.js";import"./Text-CkBcFDZm.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-PvbfzXMy.js";import"./utils-CblGkSXh.js";import"./OverlayTrigger-CZl3hatG.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DFzBEdBA.js";import"./useFocusable-SxMTR87z.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CELuk77o.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BPPmAJfG.js";import"./FocusScope-Be1QW02A.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CQbC_8pq.js";import"./Button-EGpG9HXG.js";import"./Collection-B_ssJImm.js";import"./Form-B3U8TWeK.js";import"./useLabel-D9TuMkUI.js";import"./Label-Dyr5o6sY.js";import"./useSingleSelectListState-hzPqJTtO.js";import"./SelectionManager-Ca2csQpH.js";import"./useEvent-BUAZZNDw.js";import"./useCollator-fUoTTx-r.js";import"./Header-BW0XyIS8.js";import"./useFormReset-Bt7ImmB-.js";import"./useDragAndDrop-Ddpx_AkE.js";import"./Separator-DNy1xdqg.js";const be={title:"Form Controls/Select",component:o,render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},n={},a={args:{isDisabled:!0}},l={args:{isRequired:!0}},p={render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(Y,null,"Select an app"))},i={render:r=>e.createElement(o,{...r,defaultSelectedKey:"WordPress"},e.createElement(s,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},m={render:r=>e.createElement(o,{...r,isInvalid:!0,isRequired:!0},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(L,null,"Select an app to continue"))};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var O,E,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(D=(E=a.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var S,P,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var v,F,f;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <Select {...props}>
      <Label>App</Label>
      <Option>WordPress</Option>
      <Option>TYPO3</Option>
      <Option>Contao</Option>
      <Option>Drupal</Option>
      <Option>Joomla!</Option>
      <Option>Matomo</Option>
      <FieldDescription>Select an app</FieldDescription>
    </Select>
}`,...(f=(F=p.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var b,g,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Select {...props} defaultSelectedKey="WordPress">
      <Label>App</Label>
      <Option value="WordPress">WordPress</Option>
      <Option value="TYPO3">TYPO3</Option>
      <Option value="Contao">Contao</Option>
      <Option value="Drupal">Drupal</Option>
      <Option value="Joomla!">Joomla!</Option>
      <Option value="Matomo">Matomo</Option>
    </Select>
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var J,M,T;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: props => <Select {...props} isInvalid isRequired>
      <Label>App</Label>
      <Option>WordPress</Option>
      <Option>TYPO3</Option>
      <Option>Contao</Option>
      <Option>Drupal</Option>
      <Option>Joomla!</Option>
      <Option>Matomo</Option>
      <FieldError>Select an app to continue</FieldError>
    </Select>
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const ge=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError"];export{n as Default,a as Disabled,l as Required,i as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,ge as __namedExportsOrder,be as default};
