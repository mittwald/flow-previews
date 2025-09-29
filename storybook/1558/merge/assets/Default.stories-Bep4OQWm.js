import{j as r,r as H}from"./iframe-QjFTiyQe.js";import{M as t}from"./MarkdownEditor-DtIFbwQA.js";import{L as l}from"./Label-poB2Yhtj.js";import{F as K}from"./FieldError-UwL51K-0.js";import{u as N,F as U,a as Y}from"./Form-BYecuvpb.js";import{B as g}from"./Button-DswPXoPV.js";import{S as G}from"./Section-dZwQFsPG.js";import"./index-Cun1SEai.js";import"./Markdown-BK1_5JI5.js";import"./CodeBlock-BqDvtgDp.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C5fbZW1V.js";import"./IconWarning-I1gVfg4d.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./Tooltip-BxA-SKnE.js";import"./ClearPropsContextView-BPsPBjo2.js";import"./useFocus-CRsfU1Oq.js";import"./ProgressBar-gZUBqeyg.js";import"./utils-r8e_N1jc.js";import"./Label-5Cz2mi-i.js";import"./Hidden-DTf8hiFE.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BzcwXIx3.js";import"./context-CTF16ofK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dx1OInf3.js";import"./useFocusable-D3z6GPZp.js";import"./useFocusRing-xi6RBNRG.js";import"./react-children-utilities-CRBk4m16.js";import"./Action-qyNGi_Md.js";import"./context-Be1upz9q.js";import"./useStatic-Dq12R2u8.js";import"./browser-CetGLHjc.js";import"./getActionGroupSlot-BezXTqeU.js";import"./dynamic-BXiQW-1E.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./Heading-B7tG6tmq.js";import"./Heading-CKgYV3oq.js";import"./RSPContexts-D-dV82T_.js";import"./InlineCode-Z46plQh5.js";import"./Link-D-LDFCDO.js";import"./usePress-CnoQHIlJ.js";import"./Separator-JYmTm_uI.js";import"./Separator-C2SfW9_n.js";import"./CollectionBuilder-D_prnUUR.js";import"./Text-BZfLsL9o.js";import"./EmulatedBoldText-B1qs5w8y.js";import"./Text-C66hVS57.js";import"./TextArea-BaLq3b3U.js";import"./TextFieldBase-B7f3kgwh.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BJGpgINQ.js";import"./TextField-BXpWkB4d.js";import"./FieldError-BdyL5myA.js";import"./context-BV634MuB.js";import"./Form-OD9buFY7.js";import"./Group-P53PcQ1w.js";import"./Input-BiYwJspv.js";import"./useTextField-Bfk55IMV.js";import"./useFormReset-BGTclNvs.js";import"./useFormValidation-0HUXiHYd.js";import"./ReactAriaControlledValueFix-y3RmcjqW.js";import"./useManagedValue-Vuh7UfGS.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DWbOqfQP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Czs8nreM.js";import"./ContextMenuSection-JoLTQJFC.js";import"./Popover-B3H4bpbb.js";import"./DialogTriggerView-nOYLeOX3.js";import"./FocusScope-zGp-W5qB.js";import"./useCollator-CVr4ya_1.js";import"./VisuallyHidden-YhvwkWEW.js";import"./Collection-CqUJc8bm.js";import"./SelectionManager-Da7BobSD.js";import"./useEvent-C1lgvXKS.js";import"./Switch-DhT8Adyz.js";import"./useToggleState-DlGoB95j.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
