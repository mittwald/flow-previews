import{j as r,r as H}from"./iframe-D1JKOwdq.js";import{M as t}from"./MarkdownEditor-dS_XbX50.js";import{L as l}from"./Label-Cf_c9vA3.js";import{F as K}from"./FieldError-DJpBvO0q.js";import{u as N,F as U,a as Y}from"./Form-DIybQHuX.js";import{B as g}from"./Button-DG818FIU.js";import{S as G}from"./Section-xjezlXwm.js";import"./Markdown-Dn0to5bG.js";import"./CodeBlock-CowqJSH4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BKinMaie.js";import"./IconWarning-DZISCuC-.js";import"./PropsContextProvider-CKqNcsdJ.js";import"./mergeRefs-CYbnUoq6.js";import"./index-DOZ5qla4.js";import"./Tooltip-BThkLkoh.js";import"./ClearPropsContextView-Be28GGXB.js";import"./useFocus-CYEgIwnz.js";import"./ProgressBar-4Tm_fzI6.js";import"./utils-BVsEXjGQ.js";import"./Label-CseS0v8E.js";import"./Hidden-Dr2BftiN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Uyswehsd.js";import"./context-Bzqo5E_q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CYjuzTtD.js";import"./useFocusable-wd6aWIaf.js";import"./useFocusRing-8cxgDEwk.js";import"./react-children-utilities-Bae4AvNk.js";import"./Action-CgsrqEHD.js";import"./context-Cusklrj0.js";import"./useStatic-D26xSXCN.js";import"./browser-BI97FZcU.js";import"./getActionGroupSlot-DpLzBOSg.js";import"./dynamic-ar8rpZDa.js";import"./useLocalizedStringFormatter-CIU1pqtk.js";import"./Heading-R_2RsziQ.js";import"./Heading-B9dYxPkj.js";import"./RSPContexts-CoUOlwWC.js";import"./InlineCode-BOhBiNYV.js";import"./Link-C-obq11P.js";import"./usePress-CwJM0Ele.js";import"./Separator-DvlST9YI.js";import"./Separator-BMEhDY-1.js";import"./CollectionBuilder-B5sifEeq.js";import"./Text-Cv35yGBC.js";import"./EmulatedBoldText-d9mRwZf5.js";import"./Text-BIeeVT6X.js";import"./TextArea-DttQKdjY.js";import"./TextFieldBase-D8dURz3_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DXguCw-8.js";import"./TextField-DfMFf88Q.js";import"./FieldError-BZfRYFbv.js";import"./Form-CftHRla7.js";import"./Group-B-JYoqhF.js";import"./useTextField-xidCibEs.js";import"./useFormReset-CG85pNSA.js";import"./ReactAriaControlledValueFix-B3m6RDpm.js";import"./useManagedValue-BP8W24iB.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-D-A5UE94.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DG6zvYi3.js";import"./ContextMenuSection-8CoHO1G8.js";import"./Popover-CJsB8pDc.js";import"./DialogTriggerView-BgJsodt7.js";import"./FocusScope-B4gQukNN.js";import"./useCollator-sKXsPUo5.js";import"./VisuallyHidden-DUuSn0Sw.js";import"./Collection-Zsa7miPe.js";import"./SearchField-BZI0oCti.js";import"./useEvent-DQOxTklk.js";import"./SelectionManager-DFpd0p6B.js";import"./Switch-Be2IZpQQ.js";import"./useToggleState-Dan021zf.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
