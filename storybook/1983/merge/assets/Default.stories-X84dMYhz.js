import{j as r,r as H}from"./iframe-DjIVRH0F.js";import{M as t}from"./MarkdownEditor-DNw9Buag.js";import{L as l}from"./Label-oyqcLq-C.js";import{F as K}from"./FieldError-BR6tEJBc.js";import{u as N,F as U,a as Y}from"./Form-CcZpKu0K.js";import{B as g}from"./Button-CKSxfzxQ.js";import{S as G}from"./Section-BO0o4b9e.js";import"./Markdown-XWoyNSDX.js";import"./CodeBlock-CmNzhEvq.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CrPOEErC.js";import"./IconWarning-uc5JkYTm.js";import"./PropsContextProvider-DXkyia6O.js";import"./mergeRefs-CZW2uA-H.js";import"./index-Bk9vRPW2.js";import"./Tooltip-B3TZt8De.js";import"./ClearPropsContextView-BhG_516u.js";import"./useFocus-diUUCuvP.js";import"./ProgressBar-BaoSLR_g.js";import"./utils-G1KHONaq.js";import"./Label-C0V31i8v.js";import"./Hidden-BYb4omOQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-sV0m1Yjo.js";import"./context-C7KKbhVC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cd9JFs6w.js";import"./useFocusable-DNULE2pv.js";import"./useFocusRing-CVljaIJQ.js";import"./react-children-utilities-EGEevDne.js";import"./Action-D8dMCYGJ.js";import"./context-DDhUpvCG.js";import"./useStatic-CHo6Lgk7.js";import"./browser-Ba6KZWy-.js";import"./getActionGroupSlot-vPbFTM92.js";import"./dynamic-BVw0yKPJ.js";import"./useLocalizedStringFormatter-DnbCLLYR.js";import"./Heading-C_7DG7tq.js";import"./Heading-ncY8Dy_7.js";import"./RSPContexts-yaPVYaSw.js";import"./InlineCode-DnxRbKyM.js";import"./Link-DbWi8dr0.js";import"./usePress-QkjqUEXJ.js";import"./Separator-REW0B9Rz.js";import"./Separator-BOn94nxb.js";import"./CollectionBuilder-CJ_fIWoO.js";import"./Text-B5KpGvlT.js";import"./EmulatedBoldText-BSrsAcTM.js";import"./Text-9ugGFdig.js";import"./TextArea-JEl0lPIJ.js";import"./TextFieldBase-Ctq2Gvfg.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-MCxveWnQ.js";import"./TextField-BtiUxXGx.js";import"./FieldError-NAgWSsRG.js";import"./Form-Dzmx2_fB.js";import"./Group-C6OJiXrI.js";import"./useTextField-CS3TmGDB.js";import"./useFormReset-BnKMoc5n.js";import"./ReactAriaControlledValueFix-BO_bl36T.js";import"./useManagedValue-F347-vBf.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BHwXHxWg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D_xR0uNa.js";import"./ContextMenuSection-CVHoYolo.js";import"./Popover-DlX03nO8.js";import"./DialogTriggerView-CgY0Mhwe.js";import"./FocusScope-CAKHANYN.js";import"./useCollator-CAX-XvSk.js";import"./VisuallyHidden-snqvTAFU.js";import"./Collection-CjltVSE8.js";import"./SearchField-CkG4r_An.js";import"./useEvent-DGXxwH7A.js";import"./SelectionManager-Btp5kxfY.js";import"./Switch-ByLZsw9C.js";import"./useToggleState-BPM3bXC_.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
