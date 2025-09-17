import{j as r,r as H}from"./iframe-BKOyO0tU.js";import{M as t}from"./MarkdownEditor-DrJHGaXj.js";import{L as l}from"./Label-DvNp2qob.js";import{F as K}from"./FieldError-Da4EtItW.js";import{u as N,F as U,a as Y}from"./Form-DlZgNljl.js";import{B as g}from"./Button-BRmnXyIg.js";import{S as G}from"./Section-DcBOfrzF.js";import"./Markdown-WViFxrV8.js";import"./CodeBlock-ZgAijwJP.js";import"./clsx-B-dksMZM.js";import"./CopyButton-6ii_Sbij.js";import"./IconWarning-WHLX57m9.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./Tooltip-rzLYDDb0.js";import"./utils-B2BekvYW.js";import"./OverlayArrow-CigCDiMF.js";import"./useFocus-dHggTvNn.js";import"./ProgressBar-w7N8Fjyu.js";import"./Label-Vv3VD8Wn.js";import"./Hidden-DB9d8bX3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kfVNblq3.js";import"./context-wvutwpZE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B16HJi6R.js";import"./useFocusable-C3wI1ws-.js";import"./useFocusRing-D97-YwB6.js";import"./react-children-utilities-8hyVjSjL.js";import"./Action-C_4EL_0e.js";import"./context-rPjQ9i-i.js";import"./useStatic-DBBw__yr.js";import"./browser-8Kbc9Tso.js";import"./getActionGroupSlot-mCG5t0cx.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./Heading-D4sbKPQv.js";import"./Heading-CmuzmpL9.js";import"./RSPContexts-BmPvawj4.js";import"./InlineCode-BQpNznS8.js";import"./Link-p6dzj-zf.js";import"./usePress-CfgifMFV.js";import"./Separator-DQS6j-gh.js";import"./Separator-D6PmSFnu.js";import"./CollectionBuilder-We_6F8vb.js";import"./Text-ExzQZ1Qc.js";import"./EmulatedBoldText-BBGOeiRU.js";import"./Text-ACnzImZy.js";import"./TextArea-C6i64ba5.js";import"./TextFieldBase-BftAr_eF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-hDtyIPHR.js";import"./TextField-tmvkgR0S.js";import"./FieldError-D2kmkBqC.js";import"./Form-D-YH0smr.js";import"./Group-iIjIB8eM.js";import"./useTextField-BsmA_XUC.js";import"./useFormReset-ONA6akXl.js";import"./ReactAriaControlledValueFix-BdQg6gA1.js";import"./useManagedValue-BgvmrikQ.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-B8cx3qaz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DqwKzt0W.js";import"./ContextMenuSection-DnHutdVr.js";import"./Dialog-BbUqm1un.js";import"./Collection-B9hkeg3n.js";import"./SearchField-BqOdnuK_.js";import"./useEvent-DwmS6HpG.js";import"./SelectionManager-CLkO3KW8.js";import"./useCollator-CK3XalJA.js";import"./FocusScope-Sz51FCf6.js";import"./VisuallyHidden-hdWyDAKj.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const xe=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,xe as __namedExportsOrder,fe as default};
