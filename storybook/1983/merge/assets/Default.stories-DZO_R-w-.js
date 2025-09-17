import{j as r,r as H}from"./iframe-Fj9rH4cM.js";import{M as t}from"./MarkdownEditor-ci5DPuZL.js";import{L as l}from"./Label-gqfIXoZt.js";import{F as K}from"./FieldError-DmxLphhJ.js";import{u as N,F as U,a as Y}from"./Form-Chz4h9P4.js";import{B as g}from"./Button-CRDs1G82.js";import{S as G}from"./Section-DbIgaUR1.js";import"./Markdown-_lbwK_cB.js";import"./CodeBlock-DQUCLCtu.js";import"./clsx-B-dksMZM.js";import"./CopyButton-wTgOGcsB.js";import"./IconWarning-BqHcxRer.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./Tooltip-CE9g652n.js";import"./utils-1iPQLSxY.js";import"./OverlayArrow-DopxGRGn.js";import"./useFocus-7HBUp4O0.js";import"./ProgressBar-BwsJFvfU.js";import"./Label-BqD1zatE.js";import"./Hidden-Duc9NbhT.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C-3cKpbA.js";import"./context-qP4IgOj6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DkD4o1Gz.js";import"./useFocusable-DA60a4RB.js";import"./useFocusRing-CKWUlu0I.js";import"./react-children-utilities-BIiGcz4O.js";import"./Action-TpguNNPB.js";import"./context-qzo6W5cX.js";import"./useStatic-g6Dny9ho.js";import"./browser-VEiFSO1p.js";import"./getActionGroupSlot-DSTuqm6f.js";import"./dynamic-BaCFTb0P.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./Heading-B7USTBmU.js";import"./Heading-DqU28Gla.js";import"./RSPContexts-CZftLSNz.js";import"./InlineCode-CdXqU9b-.js";import"./Link-C3OrqR7q.js";import"./usePress-CXUdxwPb.js";import"./Separator-YqJKRmGV.js";import"./Separator-B_gkWTuC.js";import"./CollectionBuilder-82bN8UBR.js";import"./Text-CY4-u4so.js";import"./EmulatedBoldText-Ctpzt0x1.js";import"./Text-DCFUXQ-H.js";import"./TextArea-SWJVfZGh.js";import"./TextFieldBase-ChOVeN79.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-4rZoU9rT.js";import"./TextField-HFN8OYQm.js";import"./FieldError-Dx-XJATE.js";import"./Form-OtjI-dAW.js";import"./Group-DdYjb3kh.js";import"./useTextField-CyljbYW8.js";import"./useFormReset-D9GIYNIc.js";import"./ReactAriaControlledValueFix-IKWlnMi1.js";import"./useManagedValue-D0W28-hE.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CK8GFOt2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClJ-El1M.js";import"./ContextMenuSection-5NRem_tB.js";import"./Popover-BFsrpBdt.js";import"./DialogTriggerView-cCV2n8WK.js";import"./FocusScope-ComN1xIG.js";import"./useCollator-Cv7Z6Bqm.js";import"./VisuallyHidden-6EX0wPu2.js";import"./Collection-DVpJlKDB.js";import"./SearchField-DV7b6fGA.js";import"./useEvent-UTIdhTs4.js";import"./SelectionManager-Cy5yrTgT.js";import"./Switch-DNXGLBBh.js";import"./useToggleState-Dv36yU8m.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
