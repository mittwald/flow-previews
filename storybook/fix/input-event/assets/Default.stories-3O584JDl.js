import{j as r}from"./iframe-D5sJq8Pp.js";import{N as o}from"./NumberField-BnDQQT5i.js";import{L as t}from"./Label-C9pkE3_l.js";import{F as _}from"./FieldDescription-C5ZBHu1g.js";import{F as B}from"./FieldError-C_BRxZGF.js";import{C as I,a as U}from"./ContextualHelpTrigger-QgoJF9Jk.js";import{B as v}from"./Button-6TUR0Zrk.js";import{T as K}from"./Text-DSs6zbpd.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./IconWarning-DOhF27zV.js";import"./ReactAriaControlledValueFix-2d0sGep5.js";import"./utils-9AX_qn18.js";import"./Button-B2KXtDin.js";import"./ProgressBar-B1EDvacE.js";import"./Label-CqbD1Z1V.js";import"./Hidden-DQQQbJzb.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ch8Q4uqY.js";import"./context-C2iapZe2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DXXMSHM3.js";import"./useFocus-RhB9nR94.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocusable-DeL6Y164.js";import"./FieldError-DPBRE9in.js";import"./Text-DkuK7F_5.js";import"./Form-B6p3srko.js";import"./Group-DaTscDKv.js";import"./useControlledState-BiqnvFAK.js";import"./useSpinButton-CsDWmOJh.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./useFormReset-BYD-PEh4.js";import"./useEvent-Nf0LSw3x.js";import"./useTextField-BQF8DS2o.js";import"./Popover-BrRw5WAn.js";import"./DialogTriggerView-BkTJ82k3.js";import"./context-Bqz1H1Fh.js";import"./useStatic-C2JikVB-.js";import"./Dialog-D26-Wb54.js";import"./RSPContexts-DjLkZjo9.js";import"./OverlayArrow-DbUVmUBM.js";import"./Collection-CrQdosmw.js";import"./CollectionBuilder-BhFH6yJo.js";import"./Separator-BLR5bueI.js";import"./SearchField-D8zXD-s8.js";import"./TextField-Ce9H6aw_.js";import"./SelectionManager-B8zwja7I.js";import"./useCollator-i6ItQplZ.js";import"./FocusScope-Rm6rMrw2.js";import"./VisuallyHidden-BeWBbeMu.js";import"./LoadingSpinner-ai3Tl6wI.js";import"./browser-Um_OLCfa.js";import"./EmulatedBoldText-DJswokg6.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
