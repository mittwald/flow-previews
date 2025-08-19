import{j as r}from"./iframe-TjmQ4-hc.js";import{N as o}from"./NumberField-DPDPOzMc.js";import{L as t}from"./Label-_xLVsaVJ.js";import{F as _}from"./FieldDescription-Cp16D2cG.js";import{F as B}from"./FieldError-DnzwKCtL.js";import{C as I,a as U}from"./ContextualHelpTrigger-kSHyesOp.js";import{B as v}from"./Button-CjK60Gy6.js";import{T as K}from"./Text-B1ccA9_H.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./IconWarning-1inC7auC.js";import"./ReactAriaControlledValueFix-DdZDRweO.js";import"./utils-DD1RW9f4.js";import"./Button-ZmvxJ__-.js";import"./ProgressBar-BJaRqoq-.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-d8aoteAS.js";import"./context-R7iXnnvL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BK59oRjy.js";import"./useFocus-Bp-EL3Xp.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocusable-BjM2CItA.js";import"./FieldError-Bn62nal0.js";import"./Text-C2aObJTh.js";import"./Form-Bwnncz0S.js";import"./Group-9f-8oWvR.js";import"./useControlledState-Cdf0eZg6.js";import"./useSpinButton-DIHtqbcK.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./useFormReset-CwwzwEJM.js";import"./useEvent-lWEWCECp.js";import"./useTextField-FvWzbSPw.js";import"./Popover-Gm7nYTUR.js";import"./DialogTriggerView-CaZEWSSp.js";import"./context-Brmjsdqe.js";import"./useStatic-r5kIO8BX.js";import"./Dialog-BYQB8QOB.js";import"./RSPContexts-DCrZu0Mf.js";import"./OverlayArrow-Dfaoqrsw.js";import"./Collection-CamF85rx.js";import"./CollectionBuilder-JPu6hEsl.js";import"./Separator-CcxH-z50.js";import"./SearchField-DwL5wZDS.js";import"./TextField-BMUXjdB8.js";import"./SelectionManager-uQED9UcT.js";import"./useCollator-mmVXCJGc.js";import"./FocusScope-DiLIjyrf.js";import"./VisuallyHidden-EAsiRlUn.js";import"./LoadingSpinner-NnONiqHm.js";import"./browser-CuXK39lt.js";import"./EmulatedBoldText-CMH1yXpY.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
