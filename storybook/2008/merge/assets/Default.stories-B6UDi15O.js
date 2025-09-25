import{j as r,r as H}from"./iframe-CQa7qTJa.js";import{M as t}from"./MarkdownEditor-neRJCsbv.js";import{L as l}from"./Label-DFElwRl3.js";import{F as K}from"./FieldError-j63R-YGj.js";import{u as N,F as U,a as Y}from"./Form-vko5YiGv.js";import{B as g}from"./Button-CHgvO37v.js";import{S as G}from"./Section-zVqh_66u.js";import"./Markdown-C84xM2yw.js";import"./CodeBlock-CQ3cNse4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-zOPL_lor.js";import"./IconWarning-CeyZIf1V.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./Tooltip-DRAQ8FN6.js";import"./ClearPropsContextView-CMBXwDsP.js";import"./useFocus-C9JxIGDi.js";import"./ProgressBar-FMaJOq3V.js";import"./utils-cYx4gHhD.js";import"./Label-DUJFwkpM.js";import"./Hidden-Xar3rui2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGKdhdH_.js";import"./context-BU9KDZsm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CFUYHrzm.js";import"./useFocusable-FCuKz-qE.js";import"./useFocusRing-DJ1LjUwE.js";import"./react-children-utilities-KzZOWO9u.js";import"./Action-D-hl0RaT.js";import"./context-D_sCsAkv.js";import"./useStatic-ByirIl9X.js";import"./browser-BhSl0yCb.js";import"./getActionGroupSlot-gbKAHcV0.js";import"./dynamic-RkS6HP3_.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./Heading-BXYPAFki.js";import"./Heading-BffAmQNL.js";import"./RSPContexts-C2Phcdxj.js";import"./InlineCode-BGenRpZs.js";import"./Link-DC83l1Jv.js";import"./usePress-D-jgt3FH.js";import"./Separator-BkLmmdon.js";import"./Separator-D9m_TYOZ.js";import"./CollectionBuilder-BuoP7Qv-.js";import"./Text-CH2mDEXN.js";import"./EmulatedBoldText-Ce7b_D_t.js";import"./Text-BRoIiTz6.js";import"./TextArea-BnkNYGB5.js";import"./TextFieldBase-BZGfMSri.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-B9BKUdu7.js";import"./TextField-BNBlfRPu.js";import"./FieldError-D5-jV0S5.js";import"./Form-CF3ngYGn.js";import"./Group-D-4ygLJZ.js";import"./useTextField-DOzcbfzW.js";import"./useFormReset-DY9tf8Hl.js";import"./ReactAriaControlledValueFix-D6LEN4ep.js";import"./useManagedValue-Cher_khU.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DVFRCiEF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DeHwua8T.js";import"./ContextMenuSection-D5Nv21jf.js";import"./Popover-DDG0vMkE.js";import"./DialogTriggerView-Cf-mCLAZ.js";import"./FocusScope-C4mxiVmq.js";import"./useCollator-BHsFeSET.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./Collection-CLijKRGN.js";import"./SearchField-DroG_a10.js";import"./useEvent-CyQldz3u.js";import"./SelectionManager-CZ4deCBD.js";import"./Switch-aLrDiBEZ.js";import"./useToggleState-DhCV0ASY.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
