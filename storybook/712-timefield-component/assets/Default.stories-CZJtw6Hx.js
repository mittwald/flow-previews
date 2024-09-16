import{S as o,O as t}from"./Option-BEF12SpQ.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as s}from"./Label-H6f0-JrX.js";import{F as Y}from"./FieldDescription-BbBgdTsH.js";import{F as L}from"./FormField.module-jgORCpta.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./IconApp-Cw6LIZ6L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-C5nr8jLZ.js";import"./index-BU4L-DQy.js";import"./IconWarning-CYODic7s.js";import"./PopoverTrigger-CMWz8wiC.js";import"./OverlayTrigger-uZ2IyM3m.js";import"./utils-CSHM5tWr.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-B3YixoJg.js";import"./useFocusRing-CRCkdtud.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Do5SRlXR.js";import"./FocusScope-CGKzeA_Y.js";import"./Hidden-BsXGu--s.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-D4oQIDY4.js";import"./context-SbXjCjP8.js";import"./useSelector-r0W13MRO.js";import"./ListBox-BunI12Y_.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./DragAndDrop-Bssnb-st.js";import"./Header-DCsdZpIF.js";import"./Separator-N-TP_FuT.js";import"./Text-BNegcRvf.js";import"./useMenuTrigger-CdsZGpjS.js";import"./SelectionManager-D744F3FE.js";import"./useEvent-Be9f7BQw.js";import"./useCollator-BmGy_8lF.js";import"./useLabel-D8UVq-XF.js";import"./useListState-D5D4zpK-.js";import"./Button-CkDWo4mt.js";import"./useFocusable-Dtk_6mL9.js";import"./Form-DTFy3O7Q.js";import"./Label-CaZe8gQk.js";import"./useSingleSelectListState-BotoawwL.js";import"./useFormReset-DlrFI1sj.js";import"./Text-BeE63-Dr.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";const Le={title:"Form Controls/Select",component:o,render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},n={},a={args:{isDisabled:!0}},l={args:{isRequired:!0}},p={render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(Y,null,"Select an app"))},i={render:r=>e.createElement(o,{...r,defaultSelectedKey:"WordPress"},e.createElement(s,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},m={render:r=>e.createElement(o,{...r,isInvalid:!0,isRequired:!0},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(L,null,"Select an app to continue"))};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var O,E,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const Re=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError"];export{n as Default,a as Disabled,l as Required,i as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,Re as __namedExportsOrder,Le as default};
