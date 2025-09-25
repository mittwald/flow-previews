import{j as r,r as H}from"./iframe-RErHS549.js";import{M as t}from"./MarkdownEditor-DlJvyBFk.js";import{L as l}from"./Label-COqzxAxq.js";import{F as K}from"./FieldError-Da2hJYUR.js";import{u as N,F as U,a as Y}from"./Form-CSyr9Zsq.js";import{B as g}from"./Button-ICc2foaw.js";import{S as G}from"./Section-Cl0dcoy8.js";import"./Markdown-YLsYtWrZ.js";import"./CodeBlock-Bv6mpCOY.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D4xzHjPc.js";import"./IconWarning-BaoYyhFJ.js";import"./PropsContextProvider-U9W9I2uQ.js";import"./mergeRefs-tFWMCLRY.js";import"./index-CKO7ssoe.js";import"./Tooltip-DvJddYni.js";import"./ClearPropsContextView-0a_DlM-r.js";import"./useFocus-JMpVLlR6.js";import"./ProgressBar-BrVHyxaL.js";import"./utils-CdmgfGZ7.js";import"./Label-BxIDS5PE.js";import"./Hidden-BOL9WLXj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-ky1cKMBf.js";import"./context-BoCUnuIe.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D306zaQt.js";import"./useFocusable-D3_285Zs.js";import"./useFocusRing-DWSWsOVe.js";import"./react-children-utilities-DOB-2EVA.js";import"./Action-CZMuRmTa.js";import"./context-BXN4gM-G.js";import"./useStatic-BxcMFVdb.js";import"./browser-32b-cNga.js";import"./getActionGroupSlot-Bne6ZDFO.js";import"./dynamic-CQ7OwhYg.js";import"./useLocalizedStringFormatter-Cy6BSIiI.js";import"./Heading-Du-PhBCO.js";import"./Heading-BFUjbCrr.js";import"./RSPContexts-B8Y67nNQ.js";import"./InlineCode-CCoDqj15.js";import"./Link-B1GXIr35.js";import"./usePress-Qq9By8Rc.js";import"./Separator-BHjt3N-u.js";import"./Separator-Bss8HbVG.js";import"./CollectionBuilder-CejpnVI0.js";import"./Text-CPoMhumh.js";import"./EmulatedBoldText-JQA-sSfV.js";import"./Text-CT26T-mx.js";import"./TextArea-jY7v4MsS.js";import"./TextFieldBase-Rg3wSJAL.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Bsl63wIT.js";import"./TextField-BRNj-bGL.js";import"./FieldError-CXwIJwJV.js";import"./Form-CN0G9X2_.js";import"./Group-Co5LQX_Y.js";import"./useTextField-CpUnEOqT.js";import"./useFormReset-8mkS99ko.js";import"./ReactAriaControlledValueFix-uOOxR7qX.js";import"./useManagedValue-CjQLzUp_.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BMdPihtW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CLgYLV7x.js";import"./ContextMenuSection-Cha7hVMS.js";import"./Popover-D5R_X3qF.js";import"./DialogTriggerView-DWnrIBjB.js";import"./FocusScope-CM6IwZZ2.js";import"./useCollator-BIKtW1yK.js";import"./VisuallyHidden-L1E0nJWV.js";import"./Collection-C5b3lBlU.js";import"./SearchField-tD8L5lUZ.js";import"./useEvent-CfCGwGWG.js";import"./SelectionManager-Bhum3Vdb.js";import"./Switch-BRjYwsyW.js";import"./useToggleState-DNy1hOAg.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
