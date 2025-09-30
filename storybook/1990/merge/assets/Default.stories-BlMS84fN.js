import{j as r,r as H}from"./iframe-k0i0tSJI.js";import{M as t}from"./MarkdownEditor-DR98a1bN.js";import{L as l}from"./Label-qKeJblmJ.js";import{F as K}from"./FieldError-DmBkReI5.js";import{u as N,F as U,a as Y}from"./Form-ulMUJonf.js";import{B as g}from"./Button-oL_0-1Fa.js";import{S as G}from"./Section-Hr4HvyZZ.js";import"./index-Cun1SEai.js";import"./Markdown-EZueJ9Xj.js";import"./CodeBlock-DaJp0tFV.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CrCAwgcf.js";import"./IconWarning-Dg2SDivU.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./Tooltip-Du-pwOCc.js";import"./ClearPropsContextView-Br7mo-KY.js";import"./useFocus-rEgPF8zF.js";import"./ProgressBar-BxBVznBa.js";import"./utils-BgzpsI0V.js";import"./Label-CrL1n18B.js";import"./Hidden-B4FAVo4g.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-r92EfUV9.js";import"./context-C6mYXPQf.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ydeueESl.js";import"./useFocusable-B3ABF-8R.js";import"./useFocusRing-CO9MadZb.js";import"./react-children-utilities-Bw4-gwkX.js";import"./Action-rR3xN66w.js";import"./context-Cc3HDEYK.js";import"./useStatic-6jrFBcb4.js";import"./browser-4UXY86st.js";import"./getActionGroupSlot-CCMGQIVd.js";import"./dynamic-BLAyWru4.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./Heading-CnN6g1-i.js";import"./Heading-CjvbCWNJ.js";import"./RSPContexts-DMQIQMHx.js";import"./InlineCode-CaDCIAVT.js";import"./Link-BeuT36KM.js";import"./usePress-BmNwYdlA.js";import"./Separator-CvoOMsSs.js";import"./Separator-BiKptde_.js";import"./CollectionBuilder-8mCwZtNW.js";import"./Text-Cgxvqary.js";import"./EmulatedBoldText-DDmG2Q6m.js";import"./Text-BxPl3Uwa.js";import"./TextArea-BPqfSwqg.js";import"./TextFieldBase-CpOW1b2A.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-95JlyvjO.js";import"./TextField-B9iRNtfV.js";import"./FieldError-9szde7-f.js";import"./context-CLpMNAUD.js";import"./Form-Dqp5q8Rw.js";import"./Group-DaB8Aw8e.js";import"./Input-DArPZQ3a.js";import"./useTextField-BhPReeNg.js";import"./useFormReset-DpoZWz7L.js";import"./useFormValidation-CoaqJdcD.js";import"./ReactAriaControlledValueFix-DdfAVWxh.js";import"./useManagedValue-D8MRF5vn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DmRdTw1-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-S7ehKHFA.js";import"./ContextMenuSection-IOVcwMb-.js";import"./Popover-CS1cgM-c.js";import"./DialogTriggerView-B91ZJb8_.js";import"./FocusScope-CCUvRh1k.js";import"./useCollator-CWffamPy.js";import"./VisuallyHidden-DWX3G_l5.js";import"./Collection-BePmPaDd.js";import"./SelectionManager-BsMwmSFL.js";import"./useEvent-BKfze8FD.js";import"./Switch-B3sHBAbd.js";import"./useToggleState-BCbr7zxa.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
