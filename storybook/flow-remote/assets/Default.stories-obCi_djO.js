import{S as o,O as t}from"./Option-CXDcBK-_.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as n}from"./Label-BtWZg8ae.js";import{F as A}from"./FieldDescription-CTfLp2Pq.js";import{F as q}from"./FormField.module-BslP3nb7.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./IconApp-DUZeHGmy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-B1Fj-awS.js";import"./index-DolzVqEf.js";import"./IconWarning-DX-MxN6U.js";import"./Popover-BoZg9cA-.js";import"./OverlayTrigger-0gNMSFLB.js";import"./Button-DpaYcQnV.js";import"./utils-CCebJm36.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./Separator-BAc0WD8W.js";import"./Text-CByKVUtS.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./context-DrrNXb0U.js";import"./useSelector-CG6WqQ-3.js";import"./ListBox-C9NDTcnX.js";import"./DragAndDrop-1_tMLeAb.js";import"./useListState-DEKbwa90.js";import"./FieldError-CjNivrvv.js";import"./Form-B_VAMaUE.js";import"./useSingleSelectListState-DL4uThJu.js";import"./useFormReset-DMREOE0P.js";import"./Text-DvGTF8ok.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";const qe={title:"Form Controls/Select",component:o,render:r=>e.createElement(o,{...r},e.createElement(n,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},a={},l={args:{isDisabled:!0}},p={args:{isRequired:!0}},i={render:r=>e.createElement(o,{...r},e.createElement(n,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(A,null,"Select an app"))},m={render:r=>e.createElement(o,{...r,defaultSelectedKey:"WordPress"},e.createElement(n,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},s={render:r=>e.createElement(o,{...r,isInvalid:!0,isRequired:!0},e.createElement(n,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(q,null,"Select an app to continue"))},c={render:r=>e.createElement(o,{...r},e.createElement(n,null,"Number"),e.createElement(t,{value:1},"1"),e.createElement(t,{value:2},"2"),e.createElement(t,{value:3},"3"),e.createElement(t,{value:4},"4"))};var u,d,O;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(O=(d=a.parameters)==null?void 0:d.docs)==null?void 0:O.source}}};var E,S,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};const Ne=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithNumbers"];export{a as Default,l as Disabled,p as Required,m as WithDefaultValue,i as WithFieldDescription,s as WithFieldError,c as WithNumbers,Ne as __namedExportsOrder,qe as default};
