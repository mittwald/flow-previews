import{j as r,r as H}from"./iframe-BXWHolr7.js";import{M as t}from"./MarkdownEditor-B57IjCAm.js";import{L as l}from"./Label-CRWIqmlk.js";import{F as K}from"./FieldError-Dg8tiTi9.js";import{u as N,F as U,a as Y}from"./Form-ZscHQela.js";import{B as g}from"./Button-CnhqfASw.js";import{S as G}from"./Section-CJvU0Ysi.js";import"./Markdown-lgsl1Fk8.js";import"./CodeBlock-BMUmGxg_.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cjrdn0fJ.js";import"./IconWarning-C9wAMmE4.js";import"./PropsContextProvider-Aeosf-s6.js";import"./mergeRefs-D5kad6xW.js";import"./index-BO_Ze_Is.js";import"./Tooltip-CuAGZklf.js";import"./utils-B2TamtWx.js";import"./OverlayArrow-ttgUUjRL.js";import"./useFocus-BHj76f0r.js";import"./ProgressBar-CBzNVdsU.js";import"./Label-BCj8S481.js";import"./Hidden-BM-MvoWz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CPYM8v3M.js";import"./context-Dja7lVng.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dr1QSdOx.js";import"./useFocusable-CA3YRohc.js";import"./useFocusRing-C9RrD32J.js";import"./react-children-utilities-D4nFlAty.js";import"./Action-CuEh1pD2.js";import"./context-Cnp30bgj.js";import"./useStatic-C8CrPjkp.js";import"./browser-tTf4FW93.js";import"./getActionGroupSlot-CpZVtoBZ.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-7zHp9kQ3.js";import"./Heading-DCH3YBy1.js";import"./Heading-B5OGAapG.js";import"./RSPContexts-804iL0FW.js";import"./InlineCode-DTqhkl6E.js";import"./Link-CPvI_Y8_.js";import"./usePress-C1TcPoWb.js";import"./Separator-Cme_YZTa.js";import"./Separator-1cY_KjOn.js";import"./CollectionBuilder-d4B1PmIH.js";import"./Text-cublDBL7.js";import"./EmulatedBoldText-C4nbdyGF.js";import"./Text-CshnnIVL.js";import"./TextArea-BPgnhKXp.js";import"./TextFieldBase-IG9Tx_bB.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-uhd6Mbtt.js";import"./TextField-vF4BsGOY.js";import"./FieldError-kOzNSTVH.js";import"./Form-C40WvtQf.js";import"./Group-DKRCTPap.js";import"./useTextField-CHuCSPiE.js";import"./useFormReset-D3PYmlJ_.js";import"./ReactAriaControlledValueFix-4_aywS1Z.js";import"./useManagedValue-BoQCSISW.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CMZ7XUGA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-YX5RGg2w.js";import"./ContextMenuSection-DOruUyk9.js";import"./Dialog-C_udrGIm.js";import"./Collection-C0Q6vASR.js";import"./SearchField-CrZc0iss.js";import"./useEvent-DVY60GN0.js";import"./SelectionManager-C8B9SdRc.js";import"./useCollator-DktWPlR1.js";import"./FocusScope-Bq5J7cyD.js";import"./VisuallyHidden-BHe7S0lR.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const xe=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,xe as __namedExportsOrder,fe as default};
