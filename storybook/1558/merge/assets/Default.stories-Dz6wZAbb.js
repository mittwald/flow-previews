import{j as r,r as H}from"./iframe-BIwOddjN.js";import{M as t}from"./MarkdownEditor-BVseHAsh.js";import{L as l}from"./Label-B4Iiqc5w.js";import{F as K}from"./FieldError-B63dcrBv.js";import{u as N,F as U,a as Y}from"./Form-DjUL3FMV.js";import{B as g}from"./Button-DVKpBB_-.js";import{S as G}from"./Section-IxcUonDm.js";import"./index-Cun1SEai.js";import"./Markdown-mZ8eoJR7.js";import"./CodeBlock-N4oeZTGG.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CJPQo4II.js";import"./IconWarning-DNMJ1XNo.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./Tooltip-BtSbkLwf.js";import"./ClearPropsContextView-CLESuCpt.js";import"./useFocus-Cj2Pu7gn.js";import"./ProgressBar-CzA5dAYd.js";import"./utils-DPukZ4w7.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DBHdatlR.js";import"./context-CbJ8Tawl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B4IhsBlg.js";import"./useFocusable-CxKBVkW3.js";import"./useFocusRing-Dx0gNijd.js";import"./react-children-utilities-PJ-tckMe.js";import"./Action-DaT8fcnF.js";import"./context-CorlgKQy.js";import"./useStatic-CAHKYPS0.js";import"./browser-6nVKIs6I.js";import"./getActionGroupSlot-CgWgqcfK.js";import"./dynamic-copMXHk7.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./Heading-Bnq9f_Vp.js";import"./Heading-CXpceP0M.js";import"./RSPContexts-CSo-c8h2.js";import"./InlineCode-DPRJSv7d.js";import"./Link-AePDBOUr.js";import"./usePress-4QX-FuAL.js";import"./Separator-sEpg30ju.js";import"./Separator-DroliD3e.js";import"./CollectionBuilder-DWtnsQIQ.js";import"./Text-3VIHsAGv.js";import"./EmulatedBoldText-C5hkPB09.js";import"./Text-D1MRO4dn.js";import"./TextArea-BQ6Yk7Jj.js";import"./TextFieldBase-CZqnrCXJ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CuTbHSSK.js";import"./TextField-CK3Fd1lq.js";import"./FieldError-BSmtWAN4.js";import"./context-Cplzyq73.js";import"./Form-DjKVzcCs.js";import"./Group-D1uUUTSd.js";import"./Input-BEzcl50g.js";import"./useTextField-CdGi1PVy.js";import"./useFormReset-FXsWoN_h.js";import"./useFormValidation-DXfcJvC1.js";import"./ReactAriaControlledValueFix-3bxT__-Q.js";import"./useManagedValue-DasR4cU_.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CG5b-Kig.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DDY6r886.js";import"./ContextMenuSection-BB_BekT5.js";import"./Popover-BYGuuW82.js";import"./DialogTriggerView-D6nKQ5a7.js";import"./FocusScope-CDSFipnx.js";import"./useCollator-vh40vrkm.js";import"./VisuallyHidden-En5QTDR8.js";import"./Collection-YqThax3x.js";import"./SelectionManager-CuYmYu-p.js";import"./useEvent-BngoJEfX.js";import"./Switch-Cz6oMetu.js";import"./useToggleState-Bpv2J7zI.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const je=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,je as __namedExportsOrder,Fe as default};
