import{j as r,r as H}from"./iframe-MfQSddZq.js";import{M as t}from"./MarkdownEditor-DaD4qiWt.js";import{L as l}from"./Label-B0eem2YN.js";import{F as K}from"./FieldError-ByuGkvm6.js";import{u as N,F as U,a as Y}from"./Form-CW5P6p7s.js";import{B as g}from"./Button-CXZWinZX.js";import{S as G}from"./Section-BX_0tU7b.js";import"./Markdown-hQTERqwT.js";import"./CodeBlock-CS-pfEwp.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CXguU_0G.js";import"./IconWarning-CP6VaQZL.js";import"./PropsContextProvider-YGAsF_lo.js";import"./mergeRefs-D31Pk4Ta.js";import"./index-0BR1sey0.js";import"./Tooltip-P-r5jA4G.js";import"./utils-CF_tf6Cs.js";import"./OverlayArrow-CjYCja9D.js";import"./useFocus-CxcaXJfN.js";import"./ProgressBar-zSuzGCCN.js";import"./Label-DLpcVX-r.js";import"./Hidden-DKR3rgXU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BGyOt14X.js";import"./context-sxseT2gC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C4XOt-mm.js";import"./useFocusable-DPxyYzAu.js";import"./useFocusRing-DF4UiXkf.js";import"./react-children-utilities-BiapuPXt.js";import"./Action-CY1G2yFR.js";import"./context-6MsjwYoY.js";import"./useStatic-BZhX7pn2.js";import"./browser-BU-cRKf1.js";import"./getActionGroupSlot-Db9GcvAo.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DuRjiXAD.js";import"./Heading-De15SUL4.js";import"./Heading-CP270fwA.js";import"./RSPContexts-XbeDUJEH.js";import"./InlineCode-B4RAXi1B.js";import"./Link-DpvvvaIV.js";import"./usePress-Bu3yAehE.js";import"./Separator-CIuw-j0j.js";import"./Separator-CUz3MRZ1.js";import"./CollectionBuilder-DTZJMA-R.js";import"./Text-UwmO1_LL.js";import"./EmulatedBoldText-B3c3-PLP.js";import"./Text-CWf2hLST.js";import"./TextArea-CCr4v9pV.js";import"./TextFieldBase-Di0eiufP.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-4qMRsNvb.js";import"./TextField-D1Wfh07Y.js";import"./FieldError-DZKq6jul.js";import"./Form-DVtgW9Vh.js";import"./Group-BQ9WJhL1.js";import"./useTextField-B4Sx1pdV.js";import"./useFormReset-DZNBd5mO.js";import"./ReactAriaControlledValueFix-CBDYRwHU.js";import"./useManagedValue-CAhz1Ly9.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BBIckw2_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Br-9CQSd.js";import"./ContextMenuSection-B-AL25Gs.js";import"./Dialog-BeFP_b5_.js";import"./Collection-DIan0_PG.js";import"./SearchField-D_EUMNnm.js";import"./useEvent-yqplpnvs.js";import"./SelectionManager-CN4BV5dR.js";import"./useCollator-DRmYCL8E.js";import"./FocusScope-CMbYg7QE.js";import"./VisuallyHidden-Civfar1x.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
