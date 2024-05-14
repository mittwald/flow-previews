import{S as o,O as t}from"./index-DUo1TqJl.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-Bxd6nhvt.js";import{F as Y}from"./FormField.module-DxGAUAvA.js";import{L as s}from"./Label-wWG0xxvc.js";import{F as L}from"./FieldDescription-D7Nq_3tP.js";import"./index-CoJk2QQB.js";import"./clsx-B-dksMZM.js";import"./IconApp-RPV2UACM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-syVPRVDK.js";import"./index-B8XB3FuZ.js";import"./IconWarning-D1gyLIYa.js";import"./index-D5RbZ7pD.js";import"./SelectionManager-LFnrF7wv.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./FocusScope-B_JIBP49.js";import"./useFocusable-C08EbcBh.js";import"./utils-bTb4N6hy.js";import"./usePress-18_TO7Wj.js";import"./useEvent-CxA2gELr.js";import"./getScrollParent-CcmJp979.js";import"./useControlledState-C0C-dzuH.js";import"./Dialog-BDggyyJu.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-fvqKTS-v.js";import"./number-nHrFdSb-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DByniHrJ.js";import"./VisuallyHidden-Jq0fOfeV.js";import"./Collection-DLxRuvCx.js";import"./Popover-C3fkzfCP.js";import"./useDragAndDrop-1zf7j-vC.js";import"./Text-fvXBaVCt.js";import"./useSingleSelectListState-D1ACGwAI.js";import"./useLabel-CgqvziXr.js";import"./Button-D5gdTRso.js";import"./Form-UOu9ohy-.js";import"./Label-gkOQ74H0.js";import"./useFormReset-BqJg0Uge.js";import"./index-C0raSsgL.js";import"./Text-phIOO8u9.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";const Fe={title:"Form Controls/Select",component:o,render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},n={},a={args:{isDisabled:!0}},l={args:{isRequired:!0}},p={render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(L,null,"Select an app"))},i={render:r=>e.createElement(o,{...r,defaultSelectedKey:"WordPress"},e.createElement(s,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},m={render:r=>e.createElement(o,{...r,isInvalid:!0,isRequired:!0},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(Y,null,"Select an app to continue"))};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var O,E,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const fe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError"];export{n as Default,a as Disabled,l as Required,i as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,fe as __namedExportsOrder,Fe as default};
