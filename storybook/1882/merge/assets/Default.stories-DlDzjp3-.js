import{j as r}from"./iframe-ChOLfm48.js";import{M as o}from"./MarkdownEditor-DeT2VXCj.js";import{L as W}from"./Label-BjFpMJsX.js";import{F as B}from"./FieldError-CTDQW1k7.js";import{u as I,F as y,a as z}from"./Form-llde_5mB.js";import{B as V}from"./Button-B4rVmYfF.js";import"./Markdown-CFNUM2zN.js";import"./CodeBlock-vB1N8qyl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D2NfJSQ5.js";import"./IconWarning-BSUZvRGT.js";import"./PropsContextProvider-bWieavHe.js";import"./mergeRefs-B21zPNPU.js";import"./index-GRCPXwug.js";import"./Tooltip-DngnhKJQ.js";import"./utils-YDvgcPpP.js";import"./OverlayArrow-PXUzuxoY.js";import"./useFocus-DMe4XyoT.js";import"./ProgressBar-C09E4iv2.js";import"./Label-DXrtAbBw.js";import"./Hidden-DmBctQal.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CsHZNL1P.js";import"./context-DA6DtsVb.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dmz-xjYt.js";import"./useFocusable-B1fc-Qnz.js";import"./useFocusRing-DPdWCN0f.js";import"./react-children-utilities-DT0VPfiG.js";import"./Action-mjOEx1pm.js";import"./context-CLjENUX9.js";import"./useStatic-ZU4u6g9v.js";import"./browser-DWi47IAH.js";import"./getActionGroupSlot-BFZbab6X.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-k197sm3v.js";import"./onlyText-DN62k4Pk.js";import"./Heading-BOvfWU_Z.js";import"./Heading-GN5MY3Gv.js";import"./RSPContexts-C8KeXTpg.js";import"./InlineCode-D5XhmhiO.js";import"./Link-BLboc8Or.js";import"./usePress-CNl9HBfO.js";import"./Separator-UwOiOQFu.js";import"./Separator-DEQT6UbO.js";import"./CollectionBuilder-BFso7U7_.js";import"./Text-C5EipuV_.js";import"./EmulatedBoldText-DdFIKcy_.js";import"./Text-Sl4cdtSO.js";import"./TextArea-Cf3ecT2P.js";import"./TextFieldBase-RJ7AZyaN.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Cz-rb68x.js";import"./TextField-BNJiEHR6.js";import"./FieldError-JlwACqz9.js";import"./Form-CA_oHzJs.js";import"./Group-DfdPT8Gy.js";import"./useTextField-DWlRW7Y8.js";import"./useFormReset-2KspnF8x.js";import"./ReactAriaControlledValueFix-IRsm_-kd.js";import"./LoadingSpinner-CVKVUr-K.js";import"./Button-BHJ4uNPj.js";import"./LiveAnnouncer-CeCcBDbP.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
