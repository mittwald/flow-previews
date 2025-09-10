import{j as r,r as H}from"./iframe-B8noCUnE.js";import{M as t}from"./MarkdownEditor-DT4ENy7U.js";import{L as u}from"./Label-B1NlPlCA.js";import{F as K}from"./FieldError-wApA5Tvl.js";import{u as N,F as U,a as Y}from"./Form-D3yWSNdB.js";import{B as P}from"./Button-B3YMBdra.js";import{S as G}from"./Section-CK1SDxwD.js";import"./Markdown-CgD9UloF.js";import"./CodeBlock-D0THRzm6.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BqkSy3jH.js";import"./IconWarning-CGV_Yvrm.js";import"./PropsContextProvider-B9__2qg6.js";import"./mergeRefs-BTOy5cDw.js";import"./index-D9cNYuBB.js";import"./Tooltip-D6GO7eoS.js";import"./utils-DycHSEAg.js";import"./OverlayArrow-CUBciziX.js";import"./useFocus-DSdjnAxu.js";import"./ProgressBar-7N6gfaNO.js";import"./Label-DKLhlgli.js";import"./Hidden-CMD8PFZZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CluaPz9W.js";import"./context-Co6CbP9u.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dup9xG7O.js";import"./useFocusable-CKRftzjl.js";import"./useFocusRing-BLe8ZvF0.js";import"./react-children-utilities-OEd2OeQ1.js";import"./Action-BUJ71uGO.js";import"./context-BJExLDeV.js";import"./useStatic-D8Kg3g-R.js";import"./browser-91muAEwH.js";import"./getActionGroupSlot-CuZ7B-dR.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-D4YUkL9v.js";import"./Heading-DlJiFfLx.js";import"./Heading-V5-rm1Vl.js";import"./RSPContexts-CYAtt9lw.js";import"./InlineCode-BEJ968QI.js";import"./Link-tqSdyxhy.js";import"./usePress-CGDWDrJK.js";import"./Separator-D-t4hojZ.js";import"./Separator-BwYsz5vJ.js";import"./CollectionBuilder-DiBm4MiM.js";import"./Text-Da5wEoPX.js";import"./EmulatedBoldText-DHCsJE01.js";import"./Text-C0NfSVbg.js";import"./TextArea-DWVcPBXj.js";import"./TextFieldBase-B_dpC--q.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-D7-yAcu1.js";import"./TextField-IVl1Cmgq.js";import"./FieldError-DD6GhKc_.js";import"./Form-BoGb9d1y.js";import"./Group-B5h_0xpF.js";import"./useTextField-BKrTYTzq.js";import"./useFormReset-BTHbcpmM.js";import"./ReactAriaControlledValueFix-DQ3jXnMe.js";import"./LoadingSpinner-a5nWuss2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwMP1veT.js";import"./ContextMenuSection-C8rhXJgq.js";import"./Dialog-gc4bcspb.js";import"./Collection-B6gzk5_Q.js";import"./SearchField-gENajJ8Y.js";import"./useEvent-Y0Lkcg6v.js";import"./SelectionManager-D_SvmIZH.js";import"./useCollator-CP4AKmd0.js";import"./FocusScope-b3Inwx6M.js";import"./VisuallyHidden-Dp1jIams.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
