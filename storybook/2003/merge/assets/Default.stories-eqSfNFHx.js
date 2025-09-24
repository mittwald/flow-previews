import{j as r,r as H}from"./iframe-nPsKv9M3.js";import{M as t}from"./MarkdownEditor-qtdUQYmO.js";import{L as l}from"./Label-C7MkaMDD.js";import{F as K}from"./FieldError-DLcc93Kg.js";import{u as N,F as U,a as Y}from"./Form-L2pz2FU0.js";import{B as g}from"./Button-Cwt3YooV.js";import{S as G}from"./Section-DpSzYka8.js";import"./Markdown-C8RmfRMm.js";import"./CodeBlock-CF8o2cWb.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CchrCEJT.js";import"./IconWarning-D7ef3xYO.js";import"./PropsContextProvider-BR7735qm.js";import"./mergeRefs-DGqX8NnL.js";import"./index-BHi6sGsK.js";import"./Tooltip-DVG26oge.js";import"./ClearPropsContextView-R1wYtvDX.js";import"./useFocus-D6fxwPDF.js";import"./ProgressBar-Bh2LZauY.js";import"./utils-8bL4GcU7.js";import"./Label-BrXjgpUy.js";import"./Hidden-BiSDldQr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-VKnQkuTS.js";import"./context-mwZCjolN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CsXjitNs.js";import"./useFocusable-QTkHwuSk.js";import"./useFocusRing-caiKUn6t.js";import"./react-children-utilities-CIxvbVz-.js";import"./Action-aMmcK7s7.js";import"./context-CC3ykTmh.js";import"./useStatic-CwmIPWCn.js";import"./browser-BzcSKw7f.js";import"./getActionGroupSlot-D41EShs_.js";import"./dynamic-wM-X8Xms.js";import"./useLocalizedStringFormatter-DSEYfllN.js";import"./Heading-O_CeYAYv.js";import"./Heading-MJ33d7ah.js";import"./RSPContexts-4Iqr_AQa.js";import"./InlineCode-L9l4_Eob.js";import"./Link-ByafqF-B.js";import"./usePress-CD1xEu4S.js";import"./Separator-D13zDz8N.js";import"./Separator-Cl85CK-5.js";import"./CollectionBuilder-BsO6Q-Ae.js";import"./Text-XZwmfgbx.js";import"./EmulatedBoldText-B79vZW6N.js";import"./Text-BIdL4sNQ.js";import"./TextArea--B8kTdbx.js";import"./TextFieldBase-CvO8K1QK.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BTsShlT9.js";import"./TextField-Bthj1NJK.js";import"./FieldError-BeWVHHOP.js";import"./Form-C8Y-x06x.js";import"./Group-N7Se0mQR.js";import"./useTextField-5p-5mVZt.js";import"./useFormReset-JMfDIv5v.js";import"./ReactAriaControlledValueFix-CPDUr6dR.js";import"./useManagedValue-wdLQtqMn.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-C1ZMRQIb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-_y3k4Es0.js";import"./ContextMenuSection-BLlKS18x.js";import"./Popover-DBvyH1F8.js";import"./DialogTriggerView-Cm1t_yF_.js";import"./FocusScope-Bk-s4YOY.js";import"./useCollator-Dm05pnhO.js";import"./VisuallyHidden-DzuuU_mQ.js";import"./Collection-BH5fUWZT.js";import"./SearchField-DpvPGqnX.js";import"./useEvent-Lgym_IyA.js";import"./SelectionManager-_SjxoMvT.js";import"./Switch-hwfAc8Jc.js";import"./useToggleState-B70h6BiI.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(E=(S=n.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var F,j,w;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,C,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,W,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var D,y,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: ""
      }
    });
    return <Form form={form} onSubmit={async v => {
      action(v.message);
      form.reset();
    }}>
        <Field name="message" rules={{
        required: "Please enter a message"
      }}>
          <MarkdownEditor {...props}>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
        <Button onPress={() => form.reset()}>Reset</Button>
      </Form>;
  }
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var z,P,T;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var V,q,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Se=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,Se as __namedExportsOrder,Me as default};
