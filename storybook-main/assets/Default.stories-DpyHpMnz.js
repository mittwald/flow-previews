import{j as r}from"./iframe-DaY0X55-.js";import{N as o}from"./NumberField-DDhDI6DC.js";import{L as t}from"./Label-DBJBtDhT.js";import{F as v}from"./FieldDescription-CtMWmXTu.js";import{F as K}from"./FieldError-B-BsJ3J5.js";import{C as M,a as Y}from"./ContextualHelpTrigger-Dv-yDWJE.js";import{B as k}from"./Button-DR2yamsk.js";import{T as w}from"./Text-ClBV1PzQ.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BZ-4M9Xw.js";import"./mergeRefs-BGErXhtl.js";import"./index-BnzNbbtM.js";import"./IconWarning-DpKTVHID.js";import"./ReactAriaControlledValueFix-t0msjNL2.js";import"./utils-BNq2bbe-.js";import"./Button-BFtXZvnQ.js";import"./ProgressBar-feyz4V57.js";import"./Label-Y108Eoku.js";import"./Hidden-BWevpR0h.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-5zgngJXY.js";import"./context-C83_ciAo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C0_kEahO.js";import"./useFocus-Bx9r-om_.js";import"./useFocusRing-vJ8fdZaU.js";import"./useFocusable-DsZq_5Zr.js";import"./FieldError-B2eDKzT7.js";import"./Text-CmOgQYod.js";import"./Form-C_YqGgE4.js";import"./Group-BRma_Z3w.js";import"./useControlledState-ChlOye-e.js";import"./useSpinButton-C9AsNKYh.js";import"./useLocalizedStringFormatter-D4QinFaA.js";import"./useFormReset-Cfy0Tx0G.js";import"./useEvent-CVZyjoEr.js";import"./useTextField-ChCqJFCV.js";import"./Popover-CX1cowkX.js";import"./DialogTriggerView-Bf1Z1A17.js";import"./context-By-CGifB.js";import"./useStatic-uS-e-hBF.js";import"./RSPContexts-DzPn71fZ.js";import"./ClearPropsContextView-ubuzjFUL.js";import"./FocusScope-BkSA93dQ.js";import"./useCollator-0HaIqY_5.js";import"./VisuallyHidden-BYSFBZbq.js";import"./Collection-BNCGMhbn.js";import"./CollectionBuilder-r4GPnu41.js";import"./Separator-B-P32e-W.js";import"./SearchField-BRBjfrRR.js";import"./TextField-CrD7kLQK.js";import"./SelectionManager-22HKkmij.js";import"./LoadingSpinner-L8q-c8wY.js";import"./browser-DCXXMZF1.js";import"./EmulatedBoldText-NGGT27hA.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
