import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./NumberField-oaN7Ku5S.js";import"./index-CgfFrydU.js";import{L as t}from"./Label-DNGkpAab.js";import{a as O}from"./index-B-lxVbXh.js";import{F as v}from"./FieldDescription-CgVPFufB.js";import{F as I}from"./FieldError-BcUarTjp.js";import{C as U,a as _}from"./ContextualHelpTrigger-CtPD8YSo.js";import{B as k}from"./Button-C5D3ZbLG.js";import{T as w}from"./Text-CZf9tped.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ijz6GgOq.js";import"./mergeRefs-78-678FT.js";import"./index-sY8i7rw0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./IconWarning-C_dXgkkz.js";import"./ReactAriaControlledValueFix-DrXiRobm.js";import"./utils-CEW6KzsL.js";import"./Button-DbeMfWvm.js";import"./ProgressBar-BwuCIevz.js";import"./Label-i46snhnj.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bwhd-XGR.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CcZGRUOg.js";import"./useFocus-DQVi-kHM.js";import"./useFocusRing-B_JVXUf7.js";import"./useFocusable-D2JRVW0s.js";import"./FieldError-CSoyHznZ.js";import"./Text-H2FrnJWx.js";import"./Form-Ce06eXuO.js";import"./Group-CyiZpzVf.js";import"./Input-CDnAdcih.js";import"./useControlledState-DjePt-lg.js";import"./useFormValidation-Ck8Kc0sM.js";import"./useSpinButton-B6cV2G6J.js";import"./useFormReset-Cri5RZCQ.js";import"./useEvent-DKzf63YQ.js";import"./useTextField-DOdnF9jK.js";import"./v4-CtRu48qb.js";import"./Popover--vXpabo7.js";import"./OverlayTrigger-B1WAFURF.js";import"./context-Ci9m7_Nm.js";import"./useStatic-Dvh5S8aV.js";import"./Dialog-CUX3Lpsb.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-Di3CJEzN.js";import"./Collection-1W2nMlzD.js";import"./CollectionBuilder-BA6UKfGt.js";import"./Separator-CS3AZFDu.js";import"./SelectionManager-DyB3dcXv.js";import"./useCollator-Dka9gyz6.js";import"./FocusScope-C3Hgy8Ha.js";import"./VisuallyHidden-Drr3U20F.js";import"./DialogTriggerView-B7GZOzmp.js";import"./LoadingSpinner-BoRooXD5.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";const Zr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:O("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(v,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(I,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(U,{children:[r.jsx(k,{ariaSlot:null}),r.jsx(_,{children:r.jsx(w,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const $r=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,n as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,l as WithUnit,$r as __namedExportsOrder,Zr as default};
