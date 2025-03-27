import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./NumberField-C8VA54FV.js";import"./index-CtQTiInQ.js";import{L as t}from"./Label-BJo4HJwf.js";import{a as O}from"./index-B-lxVbXh.js";import{F as v}from"./FieldDescription-GWF4eqaC.js";import{F as I}from"./FieldError-BrTRafpo.js";import{C as U,a as _}from"./ContextualHelpTrigger-nM_MYmNa.js";import{B as k}from"./Button-DixTcy-g.js";import{T as w}from"./Text-jYIFGcvn.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oN21CMYe.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./IconApp-DB6cOM9g.js";import"./IconWarning-kCzmC3X3.js";import"./Button-PaysjOmZ.js";import"./utils-DcjC1aig.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DPCVhyCF.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D57HKG0J.js";import"./useFocus-nbRcaiXq.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocusable-CZzsVVWR.js";import"./FieldError-CQDuJ0EJ.js";import"./Text-UNZxgqCx.js";import"./Form-B6mfikVx.js";import"./Group-CiuYKW1D.js";import"./Input-D73fD5bD.js";import"./useControlledState-BKUqB07S.js";import"./useFormValidation-DG4TqYaU.js";import"./useSpinButton-E3SfC0nO.js";import"./useFormReset-CGMiLjFo.js";import"./useEvent-KizPqgSt.js";import"./useTextField-DrsVPilB.js";import"./v4-CtRu48qb.js";import"./Popover-DoD_x-cK.js";import"./OverlayTrigger-Duo_Ybcj.js";import"./context-CetbvVVg.js";import"./useStatic-DHHoNh1z.js";import"./Dialog-DMNLsUVl.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-BupEJ213.js";import"./CollectionBuilder-92b9NEiR.js";import"./Separator-pz6eaBqf.js";import"./useOverlayTriggerState-DY-7iay5.js";import"./SelectionManager-B5yo36z-.js";import"./useCollator-Sm__dF4I.js";import"./FocusScope-71KNoUag.js";import"./VisuallyHidden-DdD-CBUj.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-CWwya1Ag.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BTj-lsSS.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";const ee={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:O("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(I,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(U,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(_,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,f,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var V,D,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var C,L,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var A,E,W;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=n.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,y,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(H=(y=l.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var R,T,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const oe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,n as WithFieldError,l as WithUnit,oe as __namedExportsOrder,ee as default};
