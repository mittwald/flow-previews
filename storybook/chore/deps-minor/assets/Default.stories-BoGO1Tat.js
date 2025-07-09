import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as Q}from"./Button-CF5yMAwC.js";import{F as H}from"./FieldDescription-BEzKZp6a.js";import{F as X}from"./FieldError-pheyNBSX.js";import{L as o}from"./Label-Bw7FtOMT.js";import{u as Y,F as Z}from"./Form-VUW6Ozpy.js";import{s as $}from"./Action-CDKwMbaH.js";import{a as J}from"./index-B-lxVbXh.js";import{r as ee}from"./index-BdpSHsi2.js";import{T as t}from"./TextField-DiP6wdDT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CUxZLznR.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-B4S5kvNg.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./IconWarning-DxsN5E99.js";import"./Text-D9yiRIBM.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./utils-q_Aud5Js.js";import"./LoadingSpinner-DrSNtTGA.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./context-C-2WHVw-.js";import"./Button-znSegCUf.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DC6xi8Xc.js";import"./useFocus-BK-u4cdi.js";import"./useFocusRing-DHXckIXO.js";import"./useFocusable-BeYVpnFb.js";import"./FieldError-rzQ5ghoP.js";import"./dynamic-DKDa4OpU.js";import"./context-B_aosvru.js";import"./useStatic-DxIzh9fY.js";import"./getActionGroupSlot-DtaKxkK0.js";import"./v4-CtRu48qb.js";import"./index-BAMY2Nnw.js";import"./TextFieldBase-DUkAvQaz.js";import"./FormField.module-B9AzUSUD.js";import"./TextField-C3T3nKGe.js";import"./Form-Ckmgkmz_.js";import"./Input-DKshHGKQ.js";import"./useTextField-CNVbrZkS.js";import"./useFormReset-B9LhY6oC.js";import"./useControlledState-rjpdN6qd.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";const rr={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:J("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(H,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},m={render:r=>{const[h,K]=ee.useState("");return e.jsx(t,{...r,value:h,onChange:N=>K(N.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},l={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(X,{children:"Invalid input"}),e.jsx(H,{children:'Start with "https://"'})]})},c={render:r=>{const h=Y();return e.jsxs(Z,{form:h,onSubmit:async()=>await $(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(Q,{type:"submit",children:"Submit"})]})}},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:J("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var x,F,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var b,g,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,S,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var R,T,D;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var U,w,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(W=(w=p.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var V,v,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var q,y,B;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var I,M,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,O,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <TextField {...props} type="email" inputMode="email" isRequired>
          <Label>Email</Label>
        </TextField>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var z,A,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(G=(A=u.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as Required,u as ShowCharacterCount,m as WithControlledValue,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,c as WithForm,l as WithPlaceholder,tr as __namedExportsOrder,rr as default};
