import{j as r}from"./iframe-Dykv-siI.js";import{N as o}from"./NumberField-SvdYIZFm.js";import{L as t}from"./Label-BoJDi_AO.js";import{F as _}from"./FieldDescription-1_-HcwJ2.js";import{F as B}from"./FieldError-SIkWpDB2.js";import{C as I,a as U}from"./ContextualHelpTrigger-C-Dkzpze.js";import{B as v}from"./Button-BwJxl8P2.js";import{T as K}from"./Text-D7_Ckqho.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bor3EKSO.js";import"./mergeRefs-D4l15LMa.js";import"./index-CUyX81Vk.js";import"./IconWarning-Dqgt16D-.js";import"./ReactAriaControlledValueFix-CvPk5rFK.js";import"./utils-B-ceMMh2.js";import"./Button-BG4LaOh8.js";import"./ProgressBar-D9jVrFgv.js";import"./Label-DDTleg66.js";import"./Hidden-B1Iw_O48.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cl2tFDz1.js";import"./context-5SGg1gn7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JMB6_eRB.js";import"./useFocus-DT_Sim8A.js";import"./useFocusRing-BLIO3-Um.js";import"./useFocusable-DsypMLKX.js";import"./FieldError-HMu3Fq7J.js";import"./Text-CLEeB9ax.js";import"./Form-CjGGxOiW.js";import"./Group-CHnOtxCU.js";import"./useControlledState-C0gMHLaR.js";import"./useSpinButton-CL37DIlC.js";import"./useLocalizedStringFormatter-CQJsBQBp.js";import"./useFormReset-ceBz3BPo.js";import"./useEvent-qRsXeNBQ.js";import"./useTextField-DP0W3nYG.js";import"./Popover-BQ0foQBP.js";import"./DialogTriggerView-C3VJcWUc.js";import"./context-BIjwWtGw.js";import"./useStatic-DesXMpPQ.js";import"./Dialog-fv_y1U4K.js";import"./RSPContexts-D030pJdB.js";import"./OverlayArrow-NgM1lQd-.js";import"./Collection-DswZtzwx.js";import"./CollectionBuilder-BVax36LH.js";import"./Separator-CubwYYam.js";import"./SearchField-ZKNym0UI.js";import"./TextField-Cfy1I-0m.js";import"./SelectionManager--KDKW3lV.js";import"./useCollator-BbJwwBb8.js";import"./FocusScope-BSi0CMVM.js";import"./VisuallyHidden-BglhDB6t.js";import"./LoadingSpinner-C6ucKsq_.js";import"./browser-C-YjMasC.js";import"./EmulatedBoldText-CBoWsrrJ.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
