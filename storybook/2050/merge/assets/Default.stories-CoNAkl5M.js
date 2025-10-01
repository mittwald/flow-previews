import{j as e,r as J}from"./iframe-DRU2mvvl.js";import{F as Y}from"./FieldDescription-DM9XG9SC.js";import{F as Q}from"./FieldError-DvrKLXyD.js";import{L as a}from"./Label-BMa7ap8T.js";import{T as t}from"./TextField-CaXn-uuY.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./Text-CEDtxg_Y.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./index-BV-9eFwZ.js";import"./browser-DycDZ9Cy.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./Text-Qj1KdidL.js";import"./utils-CFpcVBbf.js";import"./IconWarning-Ns7aLDcg.js";import"./FieldError-C8YHk-IR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./TextFieldBase-Djl98XLc.js";import"./FormField.module-CqWyJNQI.js";import"./TextField-CIr7bTxf.js";import"./context-ZJx-WxTz.js";import"./Form-BR3m4Qab.js";import"./Group-C-0gJbtA.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocus-WX08leiR.js";import"./Input-Hz2jOfAo.js";import"./useTextField-DxM40D_X.js";import"./useFormReset-BYiU13z5.js";import"./useControlledState-B4CekZuY.js";import"./useFocusable-Bm6appxO.js";import"./useFormValidation-BPBMmZYe.js";import"./ReactAriaControlledValueFix-BIonxPfd.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,_e={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:k("onChange"),...r,children:e.jsx(a,{children:"First name"})})},s={},o={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(Y,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[z,G]=J.useState("");return e.jsx(t,{...r,value:z,onChange:H=>G(H.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(Q,{children:"Invalid input"}),e.jsx(Y,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:k("onChange"),...r,children:e.jsx(a,{children:"User name"})})};var h,x,F;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var g,L,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var R,S,j;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,T,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var U,f,V;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(V=(f=p.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var v,w,O;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(O=(w=l.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var W,E,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(_=(E=d.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var I,q,y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(y=(q=c.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var P,A,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var K,M,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Ie=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{s as Default,o as Disabled,i as ReadOnly,n as Required,u as ShowCharacterCount,d as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,Ie as __namedExportsOrder,_e as default};
