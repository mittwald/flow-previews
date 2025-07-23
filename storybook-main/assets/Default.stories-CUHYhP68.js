import{j as e,r as J}from"./iframe-Dg6UnhUn.js";import{B as Q}from"./Button-B-eL7j03.js";import{F as k}from"./FieldDescription--Vv-bNd2.js";import{F as X}from"./FieldError-DgATZJMg.js";import{L as o}from"./Label-CHnnbTob.js";import{u as Z,F as $}from"./Form-CT-gnejl.js";import{s as ee}from"./Action-dC4eDzAP.js";import{T as t}from"./TextField-Bz0Et4WJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmLe5W9r.js";import"./mergeRefs-C_sTBRSK.js";import"./index-Bnuwx5Sl.js";import"./IconWarning-CALSlVTn.js";import"./Text-Da0TnBkn.js";import"./browser-BdsZB4yy.js";import"./EmulatedBoldText-BNa7EikO.js";import"./Text-5OPT84ek.js";import"./utils-CHKT5qD6.js";import"./LoadingSpinner-BkZqXqCL.js";import"./useLocalizedStringFormatter-CYRoP_gw.js";import"./context-Ddln_640.js";import"./Button-D1qjIKes.js";import"./ProgressBar-B038sK4e.js";import"./Label-CLbvuqlx.js";import"./Hidden-D5q0FBhK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CSavvckB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRsXmFdU.js";import"./useFocus-DIqzHvRL.js";import"./useFocusRing-CS-ydpKu.js";import"./useFocusable-ByYZ8WRR.js";import"./FieldError-CQt-JA7i.js";import"./dynamic-DKDa4OpU.js";import"./context--SRER2Sj.js";import"./useStatic-VLWdu29U.js";import"./getActionGroupSlot-DqWqADF-.js";import"./TextFieldBase-DiE8p8Gy.js";import"./FormField.module-B9AzUSUD.js";import"./TextField-nXryNZh-.js";import"./Form-Dab95gIe.js";import"./Input-BLPNs6ud.js";import"./useTextField-D74XjgWw.js";import"./useFormReset-B8_ofs8-.js";import"./useControlledState-BEdG5TcY.js";import"./ReactAriaControlledValueFix-C4EOfDg3.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,He={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(k,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},l={render:r=>{const[h,G]=J.useState("");return e.jsx(t,{...r,value:h,onChange:H=>G(H.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(X,{children:"Invalid input"}),e.jsx(k,{children:'Start with "https://"'})]})},c={render:r=>{const h=Z();return e.jsxs($,{form:h,onSubmit:async()=>await ee(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(Q,{type:"submit",children:"Submit"})]})}},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var x,F,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var b,g,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
