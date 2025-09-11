import{j as r,r as H}from"./iframe-CCJYfocm.js";import{M as t}from"./MarkdownEditor-DXu3SgS0.js";import{L as u}from"./Label-BdPqFAfu.js";import{F as K}from"./FieldError-rHcTk1sA.js";import{u as N,F as U,a as Y}from"./Form-DM3Z68ea.js";import{B as P}from"./Button-hb7RSFxN.js";import{S as G}from"./Section-2oJrnn0s.js";import"./Markdown-Dlo9hIs6.js";import"./CodeBlock-1u9qQtLA.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Du1QfOsN.js";import"./IconWarning-zKFwDxee.js";import"./PropsContextProvider-B2Y3k6X1.js";import"./mergeRefs-A29wE7X8.js";import"./index-zIu0Aebb.js";import"./Tooltip-DxNJ-9tz.js";import"./utils-OhB6egAd.js";import"./OverlayArrow-BKYRJuLy.js";import"./useFocus-ByyEn-Pe.js";import"./ProgressBar-Bltfi6Tm.js";import"./Label-yb6vzwnx.js";import"./Hidden-D09nfSIf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DWLXZ_5I.js";import"./context-CpznRjhe.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CXb2Atq5.js";import"./useFocusable-C8TAEKG6.js";import"./useFocusRing-D9TEPTC8.js";import"./react-children-utilities-BwYMlwm2.js";import"./Action-1vXJU-5u.js";import"./context-BPkPSR0u.js";import"./useStatic-Bygmx728.js";import"./browser-B7o8lEj9.js";import"./getActionGroupSlot-AK7rMFD6.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-MhDzL5qd.js";import"./Heading-DPpg3tUR.js";import"./Heading-DjiA9CZu.js";import"./RSPContexts-DtIV_XWn.js";import"./InlineCode-BCPiLrrb.js";import"./Link-BeQWh_nD.js";import"./usePress-D-nD__UC.js";import"./Separator-C0hXxoHs.js";import"./Separator-Cu0Xy5nC.js";import"./CollectionBuilder-BSXaKqWH.js";import"./Text-oKQCGqUf.js";import"./EmulatedBoldText-CzNN3IMB.js";import"./Text-COyZC_d0.js";import"./TextArea-7S6_Glsr.js";import"./TextFieldBase-B_gl_E8y.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BHYoePko.js";import"./TextField-Cq8rv60r.js";import"./FieldError-BNB-0_Es.js";import"./Form-OfbaOX07.js";import"./Group-D22NaB6f.js";import"./useTextField-wND_NR3Q.js";import"./useFormReset-CzFRjtap.js";import"./ReactAriaControlledValueFix-C6DE_Ocy.js";import"./LoadingSpinner-Cz7ScZS_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dp1voZV2.js";import"./ContextMenuSection-BViJGCyS.js";import"./Dialog-1LpWSZns.js";import"./Collection-BUL5CBgy.js";import"./SearchField-DFDOPoEe.js";import"./useEvent-Dxdl7lNs.js";import"./SelectionManager-BWi45uf1.js";import"./useCollator-BUSEmk8n.js";import"./FocusScope-D-ZTlcmj.js";import"./VisuallyHidden-DyP1I_X7.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,F,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var j,R,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,k,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,D,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      </Form>;
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var I,z,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,q,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const ge=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,a as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,n as WithLabel,d as WithOnChange,l as WithRef,ge as __namedExportsOrder,he as default};
