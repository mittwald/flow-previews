import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./NumberField-CGYMw8l-.js";import"./index-BZISi7jw.js";import{L as t}from"./Label-vcyG9Kja.js";import{a as O}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{F as v}from"./FieldDescription-C5C32NLJ.js";import{F as I}from"./FieldError-CQ9RqGuN.js";import{C as U,a as _}from"./ContextualHelpTrigger-CzVBY9JW.js";import{B as k}from"./Button-6wFsZZeU.js";import{T as w}from"./Text-0kfk3I9S.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-ghCXY_.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./IconApp-vAs-LrT2.js";import"./IconWarning-DIwIHW1V.js";import"./Button-CNfiUnPd.js";import"./utils-CoJ4Pv5P.js";import"./ProgressBar-DVTCW4l9.js";import"./Label-CogRznyR.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BAuzoEaO.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-BZLMvQVL.js";import"./Form-CFR8hFHG.js";import"./Text-CZDyhmV-.js";import"./Group-B--aSUI3.js";import"./Input-CQEr2Ble.js";import"./useControlledState-4nfZ-XMX.js";import"./useSpinButton-CwytBMT2.js";import"./useFormReset-CilIRCFg.js";import"./useEvent-CPQp9FCP.js";import"./useTextField-Ky_TF6kW.js";import"./v4-CtRu48qb.js";import"./Popover-BCw_JhSW.js";import"./MenuTrigger-BuIzu3H_.js";import"./context-CYJytrr2.js";import"./useStatic-CJjI45yZ.js";import"./Dialog-Dv5UhFoB.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-r6uz-b7H.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-BSANup6i.js";import"./SearchField-ClNjenZO.js";import"./TextField-C3MHW-0G.js";import"./SelectionManager-CPBFXyQE.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./DialogTriggerView-BknCs3BK.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D9XbF_eS.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";const Yr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:O("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(I,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(U,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(_,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var C,L,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var A,E,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,y,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const Zr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,n as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,l as WithUnit,Zr as __namedExportsOrder,Yr as default};
