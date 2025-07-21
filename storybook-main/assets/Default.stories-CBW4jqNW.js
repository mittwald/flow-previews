import{j as r}from"./iframe-tng_7MnI.js";import{N as o}from"./NumberField-uS-yHFaB.js";import{L as t}from"./Label-Dv5kr7I4.js";import{F as _}from"./FieldDescription-D_eJZryM.js";import{F as B}from"./FieldError-DfzpSzZW.js";import{C as I,a as U}from"./ContextualHelpTrigger-BzYwv0Hg.js";import{B as v}from"./Button-DU_QW8Rd.js";import{T as K}from"./Text-D_jDO6uI.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DYtDUrj3.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./IconWarning-BPmu7WCe.js";import"./ReactAriaControlledValueFix-BXQiwHMq.js";import"./utils-5hQd1GPy.js";import"./Button-BAFArKRX.js";import"./ProgressBar-BKGN512w.js";import"./Label-CUv_itT5.js";import"./Hidden-DtL8MOne.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Xo2bW3MF.js";import"./context-DF7MMgfI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-GMQejvE6.js";import"./useFocus-DB2yX2jm.js";import"./useFocusRing-DhOBCV_L.js";import"./useFocusable-DouN-Cym.js";import"./FieldError-DYaGdwvi.js";import"./Text-CW9rRGi5.js";import"./Form-DwsjCjtf.js";import"./Group-7jupwvb6.js";import"./Input-X3v1cPFB.js";import"./useControlledState-BUDKzFUA.js";import"./useSpinButton-CtaHWWg8.js";import"./useLocalizedStringFormatter-CgARc_YB.js";import"./useFormReset-xJzqPhqW.js";import"./useEvent-CP-X5b9K.js";import"./useTextField--Fxttb5L.js";import"./Popover-BJU7ttZm.js";import"./DialogTriggerView-CRs3bhJy.js";import"./context-t97AZKNB.js";import"./useStatic-Vj9I4teO.js";import"./Dialog-IOGvswXh.js";import"./RSPContexts-B53Ismbm.js";import"./OverlayArrow-D1J4V4Xu.js";import"./Collection-U6iOHpYg.js";import"./CollectionBuilder-Bvhqn8Ns.js";import"./Separator-mXU6o4ZK.js";import"./SearchField-BOUVMF0K.js";import"./TextField-iYZH2OXM.js";import"./SelectionManager-Ci6gTmLN.js";import"./useCollator-B2nuGa8V.js";import"./FocusScope-DGiBHAPP.js";import"./VisuallyHidden-_vEXP6Y8.js";import"./LoadingSpinner-DVPPG5kf.js";import"./browser-zPD-OImI.js";import"./EmulatedBoldText-d-Lx_bwT.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
