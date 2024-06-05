import{S as o}from"./Select-DeSs4Onp.js";import{O as r}from"./Option-DQcOe9Zy.js";import{R as e}from"./index-uCp2LrAq.js";import{L as s}from"./Label-BbIZPVxU.js";import{F as Y}from"./FieldDescription-BpquTurE.js";import{F as L}from"./FormField.module-zpuapejh.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./IconApp-Bvp8_lYy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Cgwf_8Pz.js";import"./index-BOkhicXD.js";import"./IconWarning-B_x1GzbP.js";import"./Button-DEqt5BuM.js";import"./utils-VMHz66w6.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BnMUMntI.js";import"./usePress-BwUp6-ib.js";import"./Collection-RpYJwiSj.js";import"./Form-CiidE__u.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-CV99Jc8q.js";import"./Label-ByvKXg4M.js";import"./OverlayTrigger-Bw1ONM8y.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CzGgKwTX.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-CWd9kKtL.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-C35j07Di.js";import"./Action-BZHYLJuU.js";import"./Text-45YGqDyb.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-Cl5wlzc0.js";import"./SelectionManager-1UU5Js-l.js";import"./useEvent-BUAZZNDw.js";import"./Header-CyVwCXR-.js";import"./useFormReset-Bt7ImmB-.js";import"./PopoverTrigger-DfcoxKbn.js";import"./useDragAndDrop-Ddpx_AkE.js";import"./Separator-BfUCqNhO.js";const be={title:"Form Controls/Select",component:o,render:t=>e.createElement(o,{...t},e.createElement(s,null,"App"),e.createElement(r,null,"WordPress"),e.createElement(r,null,"TYPO3"),e.createElement(r,null,"Contao"),e.createElement(r,null,"Drupal"),e.createElement(r,null,"Joomla!"),e.createElement(r,null,"Matomo"))},n={},a={args:{isDisabled:!0}},l={args:{isRequired:!0}},p={render:t=>e.createElement(o,{...t},e.createElement(s,null,"App"),e.createElement(r,null,"WordPress"),e.createElement(r,null,"TYPO3"),e.createElement(r,null,"Contao"),e.createElement(r,null,"Drupal"),e.createElement(r,null,"Joomla!"),e.createElement(r,null,"Matomo"),e.createElement(Y,null,"Select an app"))},i={render:t=>e.createElement(o,{...t,defaultSelectedKey:"WordPress"},e.createElement(s,null,"App"),e.createElement(r,{value:"WordPress"},"WordPress"),e.createElement(r,{value:"TYPO3"},"TYPO3"),e.createElement(r,{value:"Contao"},"Contao"),e.createElement(r,{value:"Drupal"},"Drupal"),e.createElement(r,{value:"Joomla!"},"Joomla!"),e.createElement(r,{value:"Matomo"},"Matomo"))},m={render:t=>e.createElement(o,{...t,isInvalid:!0,isRequired:!0},e.createElement(s,null,"App"),e.createElement(r,null,"WordPress"),e.createElement(r,null,"TYPO3"),e.createElement(r,null,"Contao"),e.createElement(r,null,"Drupal"),e.createElement(r,null,"Joomla!"),e.createElement(r,null,"Matomo"),e.createElement(L,null,"Select an app to continue"))};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var O,E,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(D=(E=a.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var S,P,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var v,f,F;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(f=p.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var b,g,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
