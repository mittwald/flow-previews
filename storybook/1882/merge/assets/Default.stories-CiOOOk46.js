import{j as r}from"./iframe-ANbYZxYh.js";import{M as o}from"./MarkdownEditor-BxlmG-Z0.js";import{L as W}from"./Label-BNGIQ-CZ.js";import{F as B}from"./FieldError-CknxTZ0z.js";import{u as I,F as y,a as z}from"./Form-CUUGX5XA.js";import{B as V}from"./Button-BrOgS8k0.js";import"./Markdown-Dq_KZwDz.js";import"./CodeBlock-C6dFBXnc.js";import"./clsx-B-dksMZM.js";import"./CopyButton-i6HePIL_.js";import"./IconWarning-DS7IkYNL.js";import"./PropsContextProvider-Bh9sJwp9.js";import"./mergeRefs-C7E84bFC.js";import"./index-sj9Kgwl7.js";import"./Tooltip-BtxY0jn9.js";import"./utils-Cy_MvyB4.js";import"./OverlayArrow-DdhXoA2p.js";import"./useFocus-TkuOvp2H.js";import"./ProgressBar-D0pevNPv.js";import"./Label-DHVn08UY.js";import"./Hidden-CKPTgp3M.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BSgApQcW.js";import"./context-C29UMt2a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-qP1KlDsL.js";import"./useFocusable-Do5j3Niz.js";import"./useFocusRing-CdWhuOPm.js";import"./react-children-utilities-DTbVe1_M.js";import"./Action-BWJuvjrq.js";import"./context-XBkMChDn.js";import"./useStatic-C8P39Z3X.js";import"./browser-DiQDtMf4.js";import"./getActionGroupSlot-3JUuJVM4.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CwJnm8Gm.js";import"./onlyText-D3sE1ED2.js";import"./Heading-HyKLii1m.js";import"./Heading-wmOcPSW7.js";import"./RSPContexts-BF3izYoh.js";import"./InlineCode-DHYco53u.js";import"./Link-DLKz_OAZ.js";import"./usePress-YyV1OQc2.js";import"./Separator-B8zqKfyn.js";import"./Separator-C5R7VkmP.js";import"./CollectionBuilder-NhL74RvZ.js";import"./Text-M71Ue6Ol.js";import"./EmulatedBoldText-D7XMT75r.js";import"./Text-DtPhrSvp.js";import"./TextArea-IGD4P_Qt.js";import"./TextFieldBase-CC-A0Z4q.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BZEk77xv.js";import"./TextField-Cq94faz6.js";import"./FieldError-8FwQObi_.js";import"./Form-BzuKHEmj.js";import"./Group-BbZVKWqc.js";import"./useTextField-CrHHZhdf.js";import"./useFormReset-DK8My9j5.js";import"./ReactAriaControlledValueFix-Dcoh4pDk.js";import"./LoadingSpinner-BalYmqav.js";import"./Button-pW7XEr-A.js";import"./LiveAnnouncer-CeCcBDbP.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Qr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Qr as __namedExportsOrder,Jr as default};
