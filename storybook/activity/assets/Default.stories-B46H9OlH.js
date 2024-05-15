import{S as o,O as t}from"./index-3XsZdHpx.js";import{R as e}from"./index-uCp2LrAq.js";import"./index-CSewQKTb.js";import{F as Y}from"./FormField.module-Des02XVA.js";import{L as s}from"./Label-CfDHK9n-.js";import{F as L}from"./FieldDescription-BZEnKRek.js";import"./flowComponent-CvYijzQN.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconApp-BMlMz8UD.js";import"./IconWarning-BWQh0yHy.js";import"./index-yGv1oPtN.js";import"./useFocusable-DdMdjPK0.js";import"./utils-DWaAzItp.js";import"./usePress-GzZvjGFA.js";import"./FocusScope-DsV13NlO.js";import"./useEvent-JfVSFEa6.js";import"./Dialog-CUn0EhxI.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CblaC-Mh.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-LW5SiPO7.js";import"./VisuallyHidden-ORZgQdGI.js";import"./Collection-BDIHGFnI.js";import"./Popover-IRcdiENY.js";import"./Text-5ecqfi7M.js";import"./useSingleSelectListState-B9sYd4aE.js";import"./useLabel-C6gbbzAU.js";import"./Button-r8qbaGYD.js";import"./Form-DzhzTTqI.js";import"./Label-CTTMUmjq.js";import"./useFormReset-CgH7zaje.js";import"./index-ZGtVZsDz.js";import"./Text-CRgtz34V.js";import"./index-DePfloUh.js";import"./Wrap-DQq6jo70.js";const Se={title:"Form Controls/Select",component:o,render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},n={},a={args:{isDisabled:!0}},l={args:{isRequired:!0}},p={render:r=>e.createElement(o,{...r},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(L,null,"Select an app"))},i={render:r=>e.createElement(o,{...r,defaultSelectedKey:"WordPress"},e.createElement(s,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},m={render:r=>e.createElement(o,{...r,isInvalid:!0,isRequired:!0},e.createElement(s,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(Y,null,"Select an app to continue"))};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var O,E,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const Pe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError"];export{n as Default,a as Disabled,l as Required,i as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,Pe as __namedExportsOrder,Se as default};
