import{j as r,r as H}from"./iframe-upPjViUi.js";import{M as t}from"./MarkdownEditor-BBUkp2eo.js";import{L as l}from"./Label-RDx-2swG.js";import{F as K}from"./FieldError-Cn-v5KPW.js";import{u as N,F as U,a as Y}from"./Form-BA8KN0Ra.js";import{B as g}from"./Button-BdUtk4-2.js";import{S as G}from"./Section-6RmnC13-.js";import"./Markdown-JeWcR-nd.js";import"./CodeBlock-C8GAhi9F.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CJnJSm2l.js";import"./IconWarning-CwNATdER.js";import"./PropsContextProvider-yJMP1aPs.js";import"./mergeRefs-q2W69vto.js";import"./index-RP-73gJI.js";import"./Tooltip-BUTc9Sqk.js";import"./ClearPropsContextView-CWLdfkB7.js";import"./useFocus-CKR8Kfvk.js";import"./ProgressBar-B2varhWC.js";import"./utils-D7Ud1rY1.js";import"./Label-VDo2pjQH.js";import"./Hidden-DUPaGITp.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Bv0sV64n.js";import"./context-DUCBVekV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DJQ8YErb.js";import"./useFocusable-D-QSeIiW.js";import"./useFocusRing-DBg1NGxh.js";import"./react-children-utilities-R5AjajeZ.js";import"./Action-Cb9jSIVt.js";import"./context-DSTBS2xh.js";import"./useStatic-BNGbJ6l6.js";import"./browser-BQR41_Xo.js";import"./getActionGroupSlot-Dx3eCL3t.js";import"./dynamic-Cvppd2SX.js";import"./useLocalizedStringFormatter-BrLv4P2q.js";import"./Heading-BedWGYuH.js";import"./Heading-Cw_qLrj_.js";import"./RSPContexts-CDfzDcm_.js";import"./InlineCode-Y60UCkei.js";import"./Link-DQmq8o69.js";import"./usePress-nNimJg5a.js";import"./Separator-CrYnvrLU.js";import"./Separator-NH6jHWUN.js";import"./CollectionBuilder-CvJppZRn.js";import"./Text-DrOfxU9W.js";import"./EmulatedBoldText-gAgggVs5.js";import"./Text-CPJx-aex.js";import"./TextArea-dLb6sc1I.js";import"./TextFieldBase-BTWu8aSX.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Cq9VHaF_.js";import"./TextField-DM_RTlmg.js";import"./FieldError-Dxc2xglq.js";import"./Form-CCPP_JFl.js";import"./Group-ClmTbc4u.js";import"./useTextField-BoNbQLwS.js";import"./useFormReset-BGI-E8mB.js";import"./ReactAriaControlledValueFix-rQlV-Lbr.js";import"./useManagedValue-DdxFf2Md.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CzeOX1VK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CWtnBlrz.js";import"./ContextMenuSection-3Je0aaRW.js";import"./Popover-CM6Xbo5y.js";import"./DialogTriggerView-CYID30AX.js";import"./FocusScope-cBvdiCGC.js";import"./useCollator-C5XQM9l2.js";import"./VisuallyHidden-svNoe17i.js";import"./Collection-C7hZcg-r.js";import"./SearchField-DoTA-SfC.js";import"./useEvent-DEpz7Cvb.js";import"./SelectionManager-CyC5TvbY.js";import"./Switch-BhwnwwjS.js";import"./useToggleState-BeIkbzV7.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
