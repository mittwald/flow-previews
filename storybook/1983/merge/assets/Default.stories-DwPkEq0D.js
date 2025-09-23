import{j as r,r as H}from"./iframe-PPscN4tr.js";import{M as t}from"./MarkdownEditor-C7tqKW3u.js";import{L as l}from"./Label-Bf1duK2q.js";import{F as K}from"./FieldError-_wKjORAk.js";import{u as N,F as U,a as Y}from"./Form-BeMUT1Qa.js";import{B as g}from"./Button-DOt7fXGF.js";import{S as G}from"./Section-ByzE7qdy.js";import"./Markdown-BRvceeVX.js";import"./CodeBlock-B5kNnl8T.js";import"./clsx-B-dksMZM.js";import"./CopyButton-ZZJRNzkU.js";import"./IconWarning-DCjExedU.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./Tooltip-S5dN5skm.js";import"./ClearPropsContextView-CiAwXYC8.js";import"./useFocus-C4zNlByO.js";import"./ProgressBar-jJ6XsPfz.js";import"./utils-DsPiQVUE.js";import"./Label-CdjKXy54.js";import"./Hidden-BSzw0V8U.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BehMUX7z.js";import"./context-BC4DP49M.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bj7Ci1Bi.js";import"./useFocusable-BzFu29N-.js";import"./useFocusRing-gcrQa-4U.js";import"./react-children-utilities-BFJTfxZa.js";import"./Action-Cx_qZqiS.js";import"./context-DPnYEMwE.js";import"./useStatic-BImXXSW3.js";import"./browser-BBEx8dXu.js";import"./getActionGroupSlot-CEref5CZ.js";import"./dynamic-DLKBnFH6.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./Heading-BOw_RV8p.js";import"./Heading-__tDMM6f.js";import"./RSPContexts-CmKI408-.js";import"./InlineCode-9bfsziqg.js";import"./Link-CzUGCU7X.js";import"./usePress-BKGHEFGx.js";import"./Separator-CSRHOJlp.js";import"./Separator-CQECSlkM.js";import"./CollectionBuilder-BAD3bxW3.js";import"./Text-Cr4g403k.js";import"./EmulatedBoldText-2c05oBpj.js";import"./Text-DOZF1D9Q.js";import"./TextArea-C24x3SnY.js";import"./TextFieldBase-OfgjIVtZ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DF-WO_WU.js";import"./TextField-C9dqtDV6.js";import"./FieldError-Ccwwr1FD.js";import"./Form-D8YNg8fo.js";import"./Group-Bw_Vhw_L.js";import"./useTextField-DGdrajZE.js";import"./useFormReset-CpR4G9FH.js";import"./ReactAriaControlledValueFix-CKE4t8pW.js";import"./useManagedValue-BRv4Acjn.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BmIM-aij.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dq2iCs8C.js";import"./ContextMenuSection-CrLKntAn.js";import"./Popover-B4Thu_Ca.js";import"./DialogTriggerView-B2ubRe0W.js";import"./FocusScope-DT8YcIVm.js";import"./useCollator-DgDjDGmg.js";import"./VisuallyHidden-DdPky-fR.js";import"./Collection-C__y2sy-.js";import"./SearchField-BPbBm38f.js";import"./useEvent-Dso9VxuL.js";import"./SelectionManager-D_TAE1Vs.js";import"./Switch-CpzuIrtB.js";import"./useToggleState-BumZJUjk.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
