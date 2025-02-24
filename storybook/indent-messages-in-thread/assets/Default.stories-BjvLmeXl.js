import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./TextField-ZFdMhVXL.js";import"./index-BZISi7jw.js";import{L as o}from"./Label-CM1pKO9k.js";import{a as _}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{F as O}from"./FieldDescription-DD00N-Oy.js";import{a as k}from"./Form-D162gIjQ.js";import{B as z}from"./Button-aN8KAKdX.js";import{F as A}from"./FieldError-I-sa-iNk.js";import"./TextFieldBase-Bvrvndcg.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C6QfuWaX.js";import"./index-IBhSrjl6.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./utils-CzVyYWZn.js";import"./FieldError-DoW3KOQ8.js";import"./useFocusRing-DzGSygZM.js";import"./Text-PTaPc_Ci.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-DaA3cxmW.js";import"./Hidden-DBxI3g91.js";import"./Label-RYyxMwZH.js";import"./useTextField-uM6U_XJE.js";import"./useFormReset-CilIRCFg.js";import"./useControlledState-4nfZ-XMX.js";import"./useFocusable-CdO2YIL_.js";import"./v4-CtRu48qb.js";import"./Text-BTGzpv9i.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./useLabel-Hju3pN3c.js";import"./LoadingSpinner-D3OOfFZU.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DZCrAIzv.js";const Ve={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:_("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},i={args:{isDisabled:!0}},a={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(O,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(A,{children:"Invalid input"}),e.jsx(O,{children:'Start with "https://"'})]})},l={render:r=>e.jsxs(k,{onSubmit:()=>{},children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(z,{type:"submit",children:"Submit"})]})},c={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:_("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,b,g;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var L,f,j;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var U,W,E;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,V,v;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(v=(V=m.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var y,B,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Form onSubmit={() => {
    // do nothing
  }}>
      <TextField {...props} type="email" inputMode="email" isRequired>
        <Label>Email</Label>
      </TextField>
      <br />
      <Button type="submit">Submit</Button>
    </Form>
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var $,M,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ve=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,i as Disabled,a as Required,c as ShowCharacterCount,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithForm,d as WithPlaceholder,ve as __namedExportsOrder,Ve as default};
