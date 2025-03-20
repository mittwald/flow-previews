import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./TextField-D3otY94u.js";import"./index-BZISi7jw.js";import{L as o}from"./Label-Awo8DmgK.js";import{a as _}from"./index-B-lxVbXh.js";import{F as O}from"./FieldDescription-DtEGO0XD.js";import{B as z}from"./Button-wBfRci_n.js";import{F as G}from"./FieldError-CbHf54AP.js";import{s as H}from"./Action-DdkAMDFz.js";import{u as J,F as K}from"./Form-BDW7wiMZ.js";import{A as N}from"./Align-BrW_juzT.js";import"./TextFieldBase-CMM9jdlj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./utils-BAtcVSHo.js";import"./FieldError-DhbXwyXA.js";import"./useFocus-B7LXpZ-i.js";import"./Text-CxIdO6ok.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-qm5cnMB7.js";import"./useLabel-Bh1EGhcd.js";import"./Input-CxXkjS8B.js";import"./Hidden-kqRI_mPI.js";import"./useFocusRing-CYqHz5Aw.js";import"./Label--FbMCZJS.js";import"./useTextField-Cu3zxanp.js";import"./useFormReset-4n_yD9ws.js";import"./useControlledState-4nfZ-XMX.js";import"./useFocusable-XxrpiuTs.js";import"./v4-CtRu48qb.js";import"./Text-BPAvSiAh.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./IconApp-DZf0STiH.js";import"./IconWarning-BqX4qer7.js";import"./LoadingSpinner-_BP_ZOWb.js";import"./Button-DAivm4ks.js";import"./ProgressBar-B6tGqqoL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChNHSMR7.js";import"./context-BWt75kQX.js";import"./useStatic-CZ_o1reA.js";import"./getActionGroupSlot-CeuQjEkT.js";import"./dynamic-DKDa4OpU.js";const Jr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:_("onChange"),...e,children:r.jsx(o,{children:"First name"})})},i={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(O,{children:'Start with "https://"'})]})},p={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(G,{children:"Invalid input"}),r.jsx(O,{children:'Start with "https://"'})]})},d={render:e=>{const k=J();return r.jsx(K,{form:k,onSubmit:async()=>await H(2e3),children:r.jsxs(N,{children:[r.jsx(t,{...e,type:"email",inputMode:"email",isRequired:!0,children:r.jsx(o,{children:"Email"})}),r.jsx(z,{type:"submit",children:"Submit"})]})})}},c={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:_("onChange"),...e,children:r.jsx(o,{children:"User name"})})};var u,h,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,g,L;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(L=(g=s.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var b,f,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,C,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,T,w;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var U,W,E;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(E=(W=m.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,y,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(V=(y=l.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var v,A,B;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Align>
          <TextField {...props} type="email" inputMode="email" isRequired>
            <Label>Email</Label>
          </TextField>
          <Button type="submit">Submit</Button>
        </Align>
      </Form>;
  }
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,M,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Kr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{i as Default,s as Disabled,a as Required,c as ShowCharacterCount,p as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithForm,m as WithPlaceholder,Kr as __namedExportsOrder,Jr as default};
