import{S as o,O as t}from"./Option-CI3IAeYt.js";import{R as e}from"./index-uCp2LrAq.js";import{L as s}from"./Label-BfZsFn3a.js";import{F as Y}from"./FieldDescription-C_JyU3ZG.js";import{F as L}from"./FormField.module-B1Ek3pwS.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./IconApp-DZ6iFK1V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-D0hgC601.js";import"./index-BOkhicXD.js";import"./IconWarning-D5KLWx1O.js";import"./PopoverTrigger-C35F8xkT.js";import"./OverlayTrigger-6VtsQuLn.js";import"./utils-DsDc2z3f.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-C3Uw9j7L.js";import"./useFocusRing-DQ9q31uS.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-v15KrNwr.js";import"./FocusScope-tP5bytlL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-rZYQhwXt.js";import"./context-1gARON2y.js";import"./useSelector-CYhu1s7z.js";import"./Button-D3-i4KBG.js";import"./useFocusable-R-ZPDh0R.js";import"./Collection-CPOND5Y7.js";import"./Form-CP-B8ZEw.js";import"./useLabel-C-G_TB0Q.js";import"./Text-DAlZawmB.js";import"./Label-C3uTUzzd.js";import"./useSingleSelectListState-CigSESnd.js";import"./SelectionManager-BXcc41yp.js";import"./useEvent-YC2gB4eD.js";import"./Header-CFQsHu-x.js";import"./useFormReset-D51lDO-b.js";import"./useDragAndDrop-Ddpx_AkE.js";import"./Separator-DHXedzvY.js";import"./Text-EyCvEgnK.js";import"./EmulatedBoldText-DzNCZpDp.js";const be={title:"Form Controls/Select",component:o,render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},n={},a={args:{isDisabled:!0}},l={args:{isRequired:!0}},p={render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(Y,null,"Select an app"))},i={render:r=>e.createElement(o,{...r,defaultSelectedKey:"WordPress"},e.createElement(s,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},m={render:r=>e.createElement(o,{...r,isInvalid:!0,isRequired:!0},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(L,null,"Select an app to continue"))};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var O,E,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
