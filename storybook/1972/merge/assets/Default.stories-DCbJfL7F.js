import{j as r,r as H}from"./iframe-8yS0DUKY.js";import{M as t}from"./MarkdownEditor-BtlEDwXx.js";import{L as u}from"./Label-H7IJ38Py.js";import{F as K}from"./FieldError-RhHTJGub.js";import{u as N,F as U,a as Y}from"./Form-9753uJXW.js";import{B as P}from"./Button-BPrvhQ-0.js";import{S as G}from"./Section-BljP8Oup.js";import"./Markdown-CKkIatAr.js";import"./CodeBlock-R3PV9R51.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DoZZt1jZ.js";import"./IconWarning-DjS1wRAW.js";import"./PropsContextProvider-DEUWN1aw.js";import"./mergeRefs-CG3eH_pd.js";import"./index-ClxjEeHU.js";import"./Tooltip-BimDW-w2.js";import"./utils-B2ScHvO6.js";import"./OverlayArrow-670b0n0p.js";import"./useFocus-DkhmHBNs.js";import"./ProgressBar-BOZ4g-uB.js";import"./Label-B_LbA8zB.js";import"./Hidden-zRhskqHJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvyXk9vA.js";import"./context-CFYUiK-W.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DCsd5L_b.js";import"./useFocusable-iysSxGPp.js";import"./useFocusRing-TjtiHe12.js";import"./react-children-utilities-B6gMkMNE.js";import"./Action-DXjXZDHo.js";import"./context-DZ5-b8vG.js";import"./useStatic-gPbisNQz.js";import"./browser-Bz8-Zkx-.js";import"./getActionGroupSlot-Ci8nJPI3.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-tHdZCuzA.js";import"./Heading-DPyBWor6.js";import"./Heading-pr27gevH.js";import"./RSPContexts-n0reoNci.js";import"./InlineCode-Bf-dLbog.js";import"./Link-WrhoEjra.js";import"./usePress-CDvWikHH.js";import"./Separator-BqiPwfPS.js";import"./Separator-DXkAdAs1.js";import"./CollectionBuilder-B8IFPRX1.js";import"./Text-DehAcE3E.js";import"./EmulatedBoldText-BYAGMbeq.js";import"./Text-BPTsGAku.js";import"./TextArea-CeikXzqG.js";import"./TextFieldBase-BmhMC8uD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CoOCqsSm.js";import"./TextField-CYgkVBJp.js";import"./FieldError-BJ2z3tqj.js";import"./Form-DKGWyNm8.js";import"./Group-AwCp0aP_.js";import"./useTextField-dhPJvLGy.js";import"./useFormReset-DkK4PY3M.js";import"./ReactAriaControlledValueFix-DJoFc73A.js";import"./LoadingSpinner-S-O73py5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dg4_y2zD.js";import"./ContextMenuSection-tU7Dg9xe.js";import"./Dialog-DJwy3CjE.js";import"./Collection-BzYqn6pP.js";import"./SearchField-Brer819R.js";import"./useEvent-yDY_iqnF.js";import"./SelectionManager-DhO3MBuF.js";import"./useCollator-CxnDgU4L.js";import"./FocusScope-Dlq64eOc.js";import"./VisuallyHidden-DQSGeqJd.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
