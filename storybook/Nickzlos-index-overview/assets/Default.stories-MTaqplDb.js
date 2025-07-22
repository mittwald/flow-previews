import{j as r}from"./iframe-B5D6Jy2e.js";import{N as o}from"./NumberField-Ba3CkNHP.js";import{L as t}from"./Label-C5afoFui.js";import{F as _}from"./FieldDescription--sEKc3Pw.js";import{F as B}from"./FieldError-BGY0RJ8v.js";import{C as I,a as U}from"./ContextualHelpTrigger-Cs1Q7GNy.js";import{B as v}from"./Button-D_cucc2Q.js";import{T as K}from"./Text-Fuh2Ogih.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./IconWarning-DjYRPplk.js";import"./ReactAriaControlledValueFix-C2FZayrm.js";import"./utils-Bs8Wqn-q.js";import"./Button-BIn7btPV.js";import"./ProgressBar-B93iLJrK.js";import"./Label-36rBC0g7.js";import"./Hidden-C8fkQIAB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DkjeIhDx.js";import"./context-Bj-w4NoV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CBvAjfyN.js";import"./useFocus-CkjZAdJ6.js";import"./useFocusRing-SK3yyEZg.js";import"./useFocusable-D_QF0Scb.js";import"./FieldError-DXJUVvju.js";import"./Text-Bv7a287p.js";import"./Form-DGtlbNAt.js";import"./Group-ClvX5TRg.js";import"./Input-ryFqDY2c.js";import"./useControlledState-Yj7M3RjN.js";import"./useSpinButton-Cp1Y9lXD.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./useFormReset-CFSg60RK.js";import"./useEvent-DdUUCx0h.js";import"./useTextField-4CgH3C31.js";import"./Popover-Bja_DHOi.js";import"./DialogTriggerView-iGbG-aRK.js";import"./context-IJ_Eymmu.js";import"./useStatic-DN3utWlK.js";import"./Dialog-CYkZaeYk.js";import"./RSPContexts-v362EzbA.js";import"./OverlayArrow-m6vw9un5.js";import"./Collection-Cl2OOjED.js";import"./CollectionBuilder-DuYXSFPS.js";import"./Separator-DAvj9ZN-.js";import"./SearchField-Bsl1v9iA.js";import"./TextField-PNGd04kr.js";import"./SelectionManager-Yyuo4m1t.js";import"./useCollator-BXMjrBT_.js";import"./FocusScope-BljfDlo2.js";import"./VisuallyHidden-1pt6eLog.js";import"./LoadingSpinner-Bd5Mqs7Q.js";import"./browser-C-lA9C9Q.js";import"./EmulatedBoldText-bgj99tWG.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Pr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Pr as __namedExportsOrder,Jr as default};
