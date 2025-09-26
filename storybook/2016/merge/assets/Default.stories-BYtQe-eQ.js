import{j as r}from"./iframe-QYa5fCvd.js";import{N as o}from"./NumberField-B5QjyIQj.js";import{L as t}from"./Label-REb55_aV.js";import{F as v}from"./FieldDescription-qfycfnRL.js";import{F as K}from"./FieldError-DIhpKsfz.js";import{C as M,a as Y}from"./ContextualHelpTrigger-KBGMBb1y.js";import{B as k}from"./Button-DtEggira.js";import{T as w}from"./Text-D98HT4db.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./IconWarning-DEqdDiS_.js";import"./ReactAriaControlledValueFix-C2f91eDD.js";import"./utils-lb8KrrIv.js";import"./Button-u3ZYuRRI.js";import"./ProgressBar-BeUyRfom.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DR9sPTrv.js";import"./context-BsMul4n4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BKI1i-pB.js";import"./useFocus-D2QZKYlR.js";import"./useFocusRing-sLc_Aawe.js";import"./useFocusable-DEca05gc.js";import"./FieldError-BGtuYqZa.js";import"./Text-BD3o8xQb.js";import"./Form-BOiG0M1T.js";import"./Group-BKMRBfUs.js";import"./useControlledState-Bu1M14oY.js";import"./useSpinButton-xGeIkt3y.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./useFormReset-DzIk_Opn.js";import"./useEvent-D3g7XMTk.js";import"./useTextField-gTkvMWQG.js";import"./Popover-BojVT5-a.js";import"./DialogTriggerView-DucWr1Mr.js";import"./context-NUuZzhZl.js";import"./useStatic-DIir9R4I.js";import"./RSPContexts-uNufUlk-.js";import"./ClearPropsContextView-DF7vfwc8.js";import"./FocusScope-ByQquqFt.js";import"./useCollator-EfErOZQE.js";import"./VisuallyHidden-B3sifiz6.js";import"./Collection-DAGhelkx.js";import"./CollectionBuilder-DNb6DOFN.js";import"./Separator-CsR4K24c.js";import"./SearchField-BY7ftgY4.js";import"./TextField-DYh5UApz.js";import"./SelectionManager-yhE4bEMZ.js";import"./LoadingSpinner-DKDkxF6a.js";import"./browser-BNaQCdYt.js";import"./EmulatedBoldText-BuggfMa1.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var j,f,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,N,V;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var C,L,y;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(y=(L=p.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var A,E,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,W,T;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(T=(W=l.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var q,H,_;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var B,I,U;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const Xr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Xr as __namedExportsOrder,Qr as default};
