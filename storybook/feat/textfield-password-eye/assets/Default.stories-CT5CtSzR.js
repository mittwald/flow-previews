import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as $}from"./Button-BrpqzZtJ.js";import{F as Q}from"./FieldDescription-C7Caatep.js";import{F as ee}from"./FieldError-p9OtmAbf.js";import{L as o}from"./Label-BpxKAsED.js";import{u as re,F as te}from"./Form-dGdd4pma.js";import{s as oe}from"./Action-DcQWreUT.js";import{a as X}from"./index-B-lxVbXh.js";import{r as se}from"./index-BdpSHsi2.js";import{T as t}from"./TextField-DlDgEziv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-QL8lp-R5.js";import"./mergeRefs-f9wmNE8z.js";import"./iframe-CuobWX2G.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./IconWarning-CsKlJMFW.js";import"./Text--tHOM-sH.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-BJ9sUP_l.js";import"./utils-CNUJJGcD.js";import"./LoadingSpinner-2H0odtYX.js";import"./useLocalizedStringFormatter-De8CUlme.js";import"./context-B2NjtFkN.js";import"./Button-BTfgqu_0.js";import"./ProgressBar-BDeVoaCo.js";import"./Label-DsLtIi5U.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-XC8v3O7U.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DWaDT6O_.js";import"./useFocus-Ck8e1iB7.js";import"./useFocusRing-BmK03SYd.js";import"./useFocusable-CxpMFfxV.js";import"./FieldError-Dhym38A1.js";import"./dynamic-DKDa4OpU.js";import"./context-ZLXyepN8.js";import"./useStatic-Dr1FFjt3.js";import"./getActionGroupSlot-ByP_kzFP.js";import"./v4-CtRu48qb.js";import"./index-BAMY2Nnw.js";import"./TextFieldBase-DYWApxOR.js";import"./FormField.module-B9AzUSUD.js";import"./TextField-DnxvqTg5.js";import"./Form-CXVBffIi.js";import"./Input--iZvazXr.js";import"./useTextField-fBojglfp.js";import"./useFormReset-Tdit5Ane.js";import"./useControlledState-rjpdN6qd.js";import"./TogglePasswordVisibilityButton-tIRd50KW.js";import"./Tooltip-C_AFRBBt.js";import"./OverlayArrow-D1_DfAqv.js";import"./ReactAriaControlledValueFix-BLJm2WOQ.js";import"./Group-ryYih4mY.js";const lr={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:X("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(Q,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},l={render:r=>{const[x,Y]=se.useState("");return e.jsx(t,{...r,value:x,onChange:Z=>Y(Z.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(ee,{children:"Invalid input"}),e.jsx(Q,{children:'Start with "https://"'})]})},c={render:r=>e.jsx(t,{...r,type:"password",defaultValue:"secretPassword",children:e.jsx(o,{children:"Password"})})},u={render:r=>{const x=re();return e.jsxs(te,{form:x,onSubmit:async()=>await oe(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx($,{type:"submit",children:"Submit"})]})}},h={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:X("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var F,L,b;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(b=(L=s.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var g,j,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var S,C,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var w,R,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var U,W,V;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var v,y,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var P,q,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var I,M,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var O,k,z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <TextField {...props} type="password" defaultValue="secretPassword">
      <Label>Password</Label>
    </TextField>
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,G,H;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,N;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(N=(K=h.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithTypePassword","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as Required,h as ShowCharacterCount,l as WithControlledValue,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,u as WithForm,m as WithPlaceholder,c as WithTypePassword,mr as __namedExportsOrder,lr as default};
