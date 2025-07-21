import{j as e,r as J}from"./iframe-p6Bp2Ow-.js";import{B as Q}from"./Button-BLeGlv8j.js";import{F as k}from"./FieldDescription-a6PsZscf.js";import{F as X}from"./FieldError-CUHeG-Uy.js";import{L as o}from"./Label-BhgKcmWm.js";import{u as Z,F as $}from"./Form-rEKVmEEP.js";import{s as ee}from"./Action-A5AfYnIu.js";import{T as t}from"./TextField-DwFPs3Wi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./IconWarning-_xRihr7t.js";import"./Text-BtmxEKoY.js";import"./browser-B4AtpSGe.js";import"./EmulatedBoldText-DJP3uLZJ.js";import"./Text-Cx3sBrCD.js";import"./utils-CnAbB5du.js";import"./LoadingSpinner-Aq6Gq52o.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./context-BreHr6W7.js";import"./Button-DuvBnjq7.js";import"./ProgressBar-NAttgbiM.js";import"./Label-zTn1BqTc.js";import"./Hidden-Bh_0QKLq.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Db1j6kak.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dx_e9Euk.js";import"./useFocus-DgSV50G0.js";import"./useFocusRing-BMw7ZmRN.js";import"./useFocusable-B_o37Ayh.js";import"./FieldError-Drz17t_W.js";import"./dynamic-DKDa4OpU.js";import"./context-B70X11Ud.js";import"./useStatic-3gyrNX_Q.js";import"./getActionGroupSlot-BY1hyZob.js";import"./TextFieldBase-CStm2Qnu.js";import"./FormField.module-B9AzUSUD.js";import"./TextField-D4rInykg.js";import"./Form-JnaaWtcr.js";import"./Input-CreDFhOd.js";import"./useTextField-B_B9v3Ja.js";import"./useFormReset-BpxJN7m8.js";import"./useControlledState-rcKaJ30A.js";import"./ReactAriaControlledValueFix-Bp0gUIy8.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,He={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(k,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},l={render:r=>{const[h,G]=J.useState("");return e.jsx(t,{...r,value:h,onChange:H=>G(H.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(X,{children:"Invalid input"}),e.jsx(k,{children:'Start with "https://"'})]})},c={render:r=>{const h=Z();return e.jsxs($,{form:h,onSubmit:async()=>await ee(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(Q,{type:"submit",children:"Submit"})]})}},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var x,F,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var b,g,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var S,C,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var T,R,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var U,w,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(W=(w=p.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var E,V,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(v=(V=l.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var _,q,y;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(y=(q=m.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var O,B,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,P,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var K,N,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(Y=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};const Je=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as Required,u as ShowCharacterCount,l as WithControlledValue,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,c as WithForm,m as WithPlaceholder,Je as __namedExportsOrder,He as default};
