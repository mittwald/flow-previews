import{j as r}from"./iframe-BJ0F67WV.js";import{N as o}from"./NumberField-D3M2_xIq.js";import{L as t}from"./Label-DdDrAhKV.js";import{F as v}from"./FieldDescription-COCDalyM.js";import{F as K}from"./FieldError-B5pU0GHC.js";import{C as M,a as Y}from"./ContextualHelpTrigger-C0Fdabga.js";import{B as k}from"./Button-CnQZL08m.js";import{T as w}from"./Text-DvcA_djt.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./IconWarning-D8lhACCL.js";import"./ReactAriaControlledValueFix-CXV4MYur.js";import"./utils-CfdyWDg2.js";import"./Button-CJVv4977.js";import"./ProgressBar-BZfTjKSF.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CE1zHuYM.js";import"./context-DDk-RgEI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C0-WYOlY.js";import"./useFocus-N8Qk0gvU.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocusable-k7wU8KZy.js";import"./FieldError-zuZgMzEa.js";import"./Text-DUTh34WN.js";import"./Form-aW46NXWl.js";import"./Group-CRkQVq-1.js";import"./useControlledState-g4NJV7ij.js";import"./useSpinButton-Dna2nr7d.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./useFormReset-5M8XX6CH.js";import"./useEvent-BEGbzF0p.js";import"./useTextField-DGpbu28C.js";import"./Popover-Dgu6lEcA.js";import"./DialogTriggerView-NFgxLp1f.js";import"./context-DqfxRtzM.js";import"./useStatic-BcjnPkg-.js";import"./Dialog-CcAHYHw-.js";import"./RSPContexts-BTU5SObx.js";import"./OverlayArrow--hlAjm0f.js";import"./Collection-B8sxr2FE.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Separator-CMNt12Nc.js";import"./SearchField-K6WJ8JUX.js";import"./TextField-CsP4pSiS.js";import"./SelectionManager-aRuCxMGp.js";import"./useCollator-ueFTVoBb.js";import"./FocusScope-own16ieq.js";import"./VisuallyHidden-CST8zJDR.js";import"./ControlledNotification-DPl-ua4c.js";import"./LoadingSpinner-s7oSeT27.js";import"./browser-ENr42WFT.js";import"./EmulatedBoldText-CK3yk5uQ.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:z("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(K,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(M,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(Y,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const $r=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,$r as __namedExportsOrder,Zr as default};
