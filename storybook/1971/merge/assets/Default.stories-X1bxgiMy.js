import{j as r,r as H}from"./iframe-CIFTXvjr.js";import{M as t}from"./MarkdownEditor-B4-nN3KX.js";import{L as l}from"./Label-g6wSh2J1.js";import{F as K}from"./FieldError-Bs2voh_v.js";import{u as N,F as U,a as Y}from"./Form-CwxbAihU.js";import{B as g}from"./Button-mCzyv81-.js";import{S as G}from"./Section-BpDiE8n8.js";import"./Markdown-pxfio9XS.js";import"./CodeBlock-DuzVP1JP.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B_PqoMHe.js";import"./IconWarning-DOS6fKaS.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./Tooltip-ClLAenzT.js";import"./ClearPropsContextView-D1vlL0dH.js";import"./useFocus-D52c6dYL.js";import"./ProgressBar-CDKMY4TF.js";import"./utils-B5Zvs6iw.js";import"./Label-TO4TYfDU.js";import"./Hidden-e3oWxUP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cf99fLdV.js";import"./context-CJ6VsYI4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D08Ut7L5.js";import"./useFocusable-CisfjoMT.js";import"./useFocusRing-aMk3Od29.js";import"./react-children-utilities-DEbr_-8w.js";import"./Action-BVHKAxgY.js";import"./context-u0ncZylp.js";import"./useStatic-DkYuQJEv.js";import"./browser-DnisE1zj.js";import"./getActionGroupSlot-BxRP9D0M.js";import"./dynamic-CQYecVWB.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./Heading-U69dEP-U.js";import"./Heading-C7p3IIcE.js";import"./RSPContexts-BLper1Pa.js";import"./InlineCode-CpP3KL-X.js";import"./Link-Dxkzw8Tf.js";import"./usePress-8HeaTLIH.js";import"./Separator-CN3Z4vIK.js";import"./Separator-DlHAiOK1.js";import"./CollectionBuilder-DJxxsJVb.js";import"./Text-B8fPWk55.js";import"./EmulatedBoldText-DkBtsyA4.js";import"./Text-BPQdMqSt.js";import"./TextArea-dnMUm44R.js";import"./TextFieldBase-CbFS73Xl.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DpShME1e.js";import"./TextField-DRuiN1lA.js";import"./FieldError-CLAhwXWc.js";import"./Form-OgeH3cHd.js";import"./Group-Hjqv-RBg.js";import"./useTextField-B5q8s_6j.js";import"./useFormReset-Bo2I_rci.js";import"./ReactAriaControlledValueFix-Y0n0HC0f.js";import"./useManagedValue-CCYQy8ZV.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DoTPzDls.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4h-pZrvY.js";import"./ContextMenuSection-D6Q4SYG2.js";import"./Popover-D3VR88Of.js";import"./DialogTriggerView-DF7dHF7c.js";import"./FocusScope-CdIx8Nbp.js";import"./useCollator-BEuuda2G.js";import"./VisuallyHidden-DUQ-4ejS.js";import"./Collection-B0Ce4Su5.js";import"./SearchField-CS1y3jZ7.js";import"./useEvent-Kc6oznrN.js";import"./SelectionManager-B7qXDdFd.js";import"./Switch-B_ObCBU5.js";import"./useToggleState-DJGQb4DY.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
