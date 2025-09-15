import{j as r,r as H}from"./iframe-FeXPLmWJ.js";import{M as t}from"./MarkdownEditor-ChBHtkM5.js";import{L as u}from"./Label-DeaIyOHa.js";import{F as K}from"./FieldError-kve_n9nq.js";import{u as N,F as U,a as Y}from"./Form-CNjHs-j_.js";import{B as P}from"./Button-DtLhlb3k.js";import{S as G}from"./Section-B2xtFxKU.js";import"./Markdown-CVMUuFV4.js";import"./CodeBlock-CExEzzA1.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DwAx0HO6.js";import"./IconWarning-Bft-d4EJ.js";import"./PropsContextProvider-DOQJhc0c.js";import"./mergeRefs-DBXayCo7.js";import"./index-Dw1iNfwN.js";import"./Tooltip-_b9gnDPg.js";import"./utils-CXtn_DQA.js";import"./OverlayArrow-QfoTus34.js";import"./useFocus-utUwSX9z.js";import"./ProgressBar-Dp_oIg1b.js";import"./Label-DaJTJCE8.js";import"./Hidden-5GhHzgiK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DVVoN6WB.js";import"./context-CdDLZW_F.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bg7JB_7p.js";import"./useFocusable-DUk2eF1B.js";import"./useFocusRing-CtO3s9Jp.js";import"./react-children-utilities-C_hHthXA.js";import"./Action-BZKWIbfP.js";import"./context-BnjGRpmB.js";import"./useStatic-LuaoAJ0q.js";import"./browser-oak4xKwc.js";import"./getActionGroupSlot-BYx46ZMw.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-SRxq75M0.js";import"./Heading-DxIg8fA4.js";import"./Heading-DlbpOp12.js";import"./RSPContexts-l4hadVnr.js";import"./InlineCode-S-TPTkU3.js";import"./Link-yvPdgBop.js";import"./usePress-CiJ5VmDC.js";import"./Separator-6ucZq94c.js";import"./Separator-qHYMipPY.js";import"./CollectionBuilder-DjcZXz9H.js";import"./Text-Bk-26kZZ.js";import"./EmulatedBoldText-Dl2sTmnq.js";import"./Text-D-W6Oypd.js";import"./TextArea-DWfsy1uP.js";import"./TextFieldBase-B7mSxicB.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Cu45yjjx.js";import"./TextField-EiqUYwfM.js";import"./FieldError-C1vR0UXv.js";import"./Form-1I64UDUq.js";import"./Group-BYKu_D4V.js";import"./useTextField-DIQk2fEk.js";import"./useFormReset-Dq2F4z6p.js";import"./ReactAriaControlledValueFix-B-Uf8adH.js";import"./LoadingSpinner-C0aHJiGC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DC1Hivs6.js";import"./ContextMenuSection-IpD277NB.js";import"./Dialog-D0hlM8gs.js";import"./Collection-BSFTurc1.js";import"./SearchField-CExAiUx6.js";import"./useEvent-VX8xqKP_.js";import"./SelectionManager-DgeS2fE0.js";import"./useCollator-DCfokZLU.js";import"./FocusScope-D_yyKfql.js";import"./VisuallyHidden-BFgml7Em.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
