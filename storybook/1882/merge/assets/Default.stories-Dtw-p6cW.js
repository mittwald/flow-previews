import{j as r}from"./iframe-ChOLfm48.js";import{N as o}from"./NumberField-D_UK1Ml_.js";import{L as t}from"./Label-BjFpMJsX.js";import{F as _}from"./FieldDescription-Cz-rb68x.js";import{F as B}from"./FieldError-CTDQW1k7.js";import{C as I,a as U}from"./ContextualHelpTrigger-B5u23xKd.js";import{B as v}from"./Button-B4rVmYfF.js";import{T as K}from"./Text-C5EipuV_.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-bWieavHe.js";import"./mergeRefs-B21zPNPU.js";import"./index-GRCPXwug.js";import"./IconWarning-BSUZvRGT.js";import"./ReactAriaControlledValueFix-IRsm_-kd.js";import"./utils-YDvgcPpP.js";import"./Button-BHJ4uNPj.js";import"./ProgressBar-C09E4iv2.js";import"./Label-DXrtAbBw.js";import"./Hidden-DmBctQal.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CsHZNL1P.js";import"./context-DA6DtsVb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CNl9HBfO.js";import"./useFocus-DMe4XyoT.js";import"./useFocusRing-DPdWCN0f.js";import"./useFocusable-B1fc-Qnz.js";import"./FieldError-JlwACqz9.js";import"./Text-Sl4cdtSO.js";import"./Form-CA_oHzJs.js";import"./Group-DfdPT8Gy.js";import"./useControlledState-Dmz-xjYt.js";import"./useSpinButton-C-rjRMTL.js";import"./useLocalizedStringFormatter-k197sm3v.js";import"./useFormReset-2KspnF8x.js";import"./useEvent-BFXA3T9F.js";import"./useTextField-DWlRW7Y8.js";import"./Popover-C-SsS0OD.js";import"./DialogTriggerView-D5enS8PQ.js";import"./context-CLjENUX9.js";import"./useStatic-ZU4u6g9v.js";import"./Dialog-LDu6X4iJ.js";import"./RSPContexts-C8KeXTpg.js";import"./OverlayArrow-PXUzuxoY.js";import"./Collection-BYYSTjrH.js";import"./CollectionBuilder-BFso7U7_.js";import"./Separator-DEQT6UbO.js";import"./SearchField-CiSMqBGJ.js";import"./TextField-BNJiEHR6.js";import"./SelectionManager-CQRDuBDt.js";import"./useCollator-BSIYhoOJ.js";import"./FocusScope-DwqEaNE4.js";import"./VisuallyHidden-eytsr0lz.js";import"./LoadingSpinner-CVKVUr-K.js";import"./browser-DWi47IAH.js";import"./EmulatedBoldText-DdFIKcy_.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,j,f;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var D,N,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,C,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,E,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var T,q,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(y=(q=l.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var H,O,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Jr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Jr as __namedExportsOrder,Gr as default};
