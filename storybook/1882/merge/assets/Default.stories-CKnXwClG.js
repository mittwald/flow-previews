import{j as r}from"./iframe-BAtUELBR.js";import{M as o}from"./MarkdownEditor-CvYQULeN.js";import{L as W}from"./Label-QEHCu_aF.js";import{F as B}from"./FieldError-C6NpbvhG.js";import{u as I,F as y,a as z}from"./Form-fruY6vLK.js";import{B as V}from"./Button-BEq1XaV7.js";import"./Markdown-ln_0k-2u.js";import"./CodeBlock-DJgG-zRj.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D0ZTKBJk.js";import"./IconWarning-h84dHhem.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./Tooltip-DpU8YWKj.js";import"./utils-UbQMFgd1.js";import"./OverlayArrow-CGwoImC3.js";import"./useFocus-DJUZ2En4.js";import"./ProgressBar-BZ7qWBUr.js";import"./Label-DhaMlcU0.js";import"./Hidden-CDb1KA3j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DmioRyAZ.js";import"./context-DbLHYHiQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cdm8pC1T.js";import"./useFocusable-BuN38nX6.js";import"./useFocusRing-BdUFZX00.js";import"./react-children-utilities-Be0S__k0.js";import"./Action-DFFHrQF0.js";import"./context-B7yiaX0P.js";import"./useStatic-D26yqcd1.js";import"./browser-BVtPTxgw.js";import"./getActionGroupSlot-BPPCyVYO.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./Heading-WI-2mpz5.js";import"./Heading-ByYwZp8f.js";import"./RSPContexts-DQlzARDq.js";import"./InlineCode-A3Z0lBdi.js";import"./Link-3PDTsx4r.js";import"./usePress-B88qu-VD.js";import"./Separator-MvT4GHhb.js";import"./Separator-BOj5W9de.js";import"./CollectionBuilder-DOOg8umD.js";import"./Text-DzMLmIhZ.js";import"./EmulatedBoldText-CosrpHXB.js";import"./Text-j2Uyll_5.js";import"./TextArea-Bh6sTOGA.js";import"./TextFieldBase-oLX-pl8w.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DGonepcX.js";import"./TextField-CA7eDuBl.js";import"./FieldError-D0SFQKR_.js";import"./Form-D4YUCIIk.js";import"./Group-BnQz7s-E.js";import"./useTextField-BD89Nm0g.js";import"./useFormReset-Cu48O1XS.js";import"./ReactAriaControlledValueFix-DYRdjwls.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJPJvF0.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,S,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,C,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,_,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: "Hello!"
      }
    });
    return <Form form={form} onSubmit={async v => action(v.message)}>
        <Field name="message" rules={{
        required: "Please enter a message"
      }}>
          <MarkdownEditor {...props}>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Gr as default};
