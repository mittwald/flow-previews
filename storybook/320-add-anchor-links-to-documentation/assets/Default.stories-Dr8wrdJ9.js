import{T as t}from"./index-Cdv_M-W6.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-CNAQugcr.js";import{a as M}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as C}from"./FieldDescription-tpaTwfov.js";import{$ as P}from"./Form-BGMe3SSh.js";import"./index-DzE_Eh0U.js";import{F as _}from"./FormField.module-CUA8W2mV.js";import{L as a}from"./Label-d-PIMz94.js";import{B as O}from"./Button-D7-eBhv0.js";import"./index-q3aafY8d.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3-LTTWn.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-D7InqjV7.js";import"./Input-D6Py-UK9.js";import"./useFocusable-Ddi47NB9.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-C6n9I88d.js";import"./useControlledState-C0C-dzuH.js";import"./Label-Ce3BVkqc.js";import"./Text-nCCH5eH7.js";import"./v4-CQkTLCs1.js";import"./index-C0kgWbNG.js";import"./Text-B0HvyfcO.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./useLabel-lOoP3iJB.js";import"./useLabels-DFbr5jK-.js";import"./IconApp-D-kcT16p.js";import"./IconWarning-Cw7drCLR.js";import"./useLocalizedStringFormatter-BaJnhnaM.js";import"./LoadingSpinner-D3fzZb_z.js";import"./Button-tv1ba3Dw.js";import"./usePress-BZaguEpt.js";const De={title:"Form Controls/TextField",component:t,render:r=>e.createElement(t,{onChange:M("onChange"),...r},e.createElement(a,null,"First name"))},o={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},l={render:r=>e.createElement(t,{...r},e.createElement(a,null,"URL"),e.createElement(C,null,'Start with "https://"'))},n={render:r=>e.createElement(t,{...r,defaultValue:"https://mittwald.de"},e.createElement(a,null,"URL"))},m={render:r=>e.createElement(t,{...r,placeholder:"https://"},e.createElement(a,null,"URL"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,defaultValue:"hello"},e.createElement(a,null,"URL"),e.createElement(_,null,"Invalid input"),e.createElement(C,null,'Start with "https://"'))},d={render:r=>e.createElement(P,{onSubmit:()=>{}},e.createElement(t,{...r,type:"email",inputMode:"email",isRequired:!0},e.createElement(a,null,"Email")),e.createElement("br",null),e.createElement(O,{type:"submit"},"Submit"))};var c,u,F;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(F=(u=o.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};var h,b,E;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var f,L,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(R=(L=s.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var S,x,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var g,T,W;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(W=(T=n.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var U,q,w;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var V,v,y;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,I,$;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <Form onSubmit={() => {}}>
      <TextField {...props} type="email" inputMode="email" isRequired>
        <Label>Email</Label>
      </TextField>
      <br />
      <Button type="submit">Submit</Button>
    </Form>
}`,...($=(I=d.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};const ge=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm"];export{o as Default,i as Disabled,s as Required,n as WithDefaultValue,l as WithFieldDescription,p as WithFieldError,d as WithForm,m as WithPlaceholder,ge as __namedExportsOrder,De as default};
