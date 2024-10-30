import{S as o,O as t}from"./Option-DNBJM_V3.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as n}from"./Label-hUuz2MFm.js";import{F as A}from"./FieldDescription-BpusDlac.js";import{F as q}from"./FormField.module-D7B8ulKH.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./IconApp-C0pIffFx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-ogV7N3uI.js";import"./index-Cf-03bMR.js";import"./IconWarning-B6tvdphn.js";import"./Popover-BOLD7Too.js";import"./OverlayTrigger-D3sElAxa.js";import"./utils-Cd8r7pc9.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-Bm5GlnqX.js";import"./useFocusRing-DdBFev_0.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-BiUpVy3m.js";import"./FocusScope-DMuRQrVO.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BVqa5uLw.js";import"./context-BbrW1g4K.js";import"./useSelector-D1Axzu-V.js";import"./ListBox-BX5_kcBP.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./DragAndDrop-Bssnb-st.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./Text-Bnjm0IRl.js";import"./useMenuTrigger-CGeU9Nb8.js";import"./SelectionManager-CstbXOPk.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useListState-_MSxqlzF.js";import"./Button-CROQF3YN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-GQF4xS8_.js";import"./Form-CDVAwZBo.js";import"./useSingleSelectListState-CMWjPCF8.js";import"./useFormReset-BmVKDtZT.js";import"./Text-D6T4gxda.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";const Ne={title:"Form Controls/Select",component:o,render:r=>e.createElement(o,{...r},e.createElement(n,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},a={},l={args:{isDisabled:!0}},p={args:{isRequired:!0}},i={render:r=>e.createElement(o,{...r},e.createElement(n,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(A,null,"Select an app"))},m={render:r=>e.createElement(o,{...r,defaultSelectedKey:"WordPress"},e.createElement(n,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},s={render:r=>e.createElement(o,{...r,isInvalid:!0,isRequired:!0},e.createElement(n,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(q,null,"Select an app to continue"))},c={render:r=>e.createElement(o,{...r},e.createElement(n,null,"Number"),e.createElement(t,{value:1},"1"),e.createElement(t,{value:2},"2"),e.createElement(t,{value:3},"3"),e.createElement(t,{value:4},"4"))};var u,d,O;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(O=(d=a.parameters)==null?void 0:d.docs)==null?void 0:O.source}}};var E,S,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var D,P,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var b,F,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var g,C,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Select {...props} defaultSelectedKey="WordPress">
      <Label>App</Label>
      <Option value="WordPress">WordPress</Option>
      <Option value="TYPO3">TYPO3</Option>
      <Option value="Contao">Contao</Option>
      <Option value="Drupal">Drupal</Option>
      <Option value="Joomla!">Joomla!</Option>
      <Option value="Matomo">Matomo</Option>
    </Select>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var J,M,T;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(T=(M=s.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var Y,h,R;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: props => <Select {...props}>
      <Label>Number</Label>
      <Option value={1}>1</Option>
      <Option value={2}>2</Option>
      <Option value={3}>3</Option>
      <Option value={4}>4</Option>
    </Select>
}`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};const xe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithNumbers"];export{a as Default,l as Disabled,p as Required,m as WithDefaultValue,i as WithFieldDescription,s as WithFieldError,c as WithNumbers,xe as __namedExportsOrder,Ne as default};
