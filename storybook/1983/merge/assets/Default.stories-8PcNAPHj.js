import{j as r,r as H}from"./iframe-DUtcAVii.js";import{M as t}from"./MarkdownEditor-D2QH5R5d.js";import{L as l}from"./Label-D2FAkV6T.js";import{F as K}from"./FieldError-CldLJigO.js";import{u as N,F as U,a as Y}from"./Form-BhbXo5cm.js";import{B as g}from"./Button-DULuqu_l.js";import{S as G}from"./Section-O2Vc0Edx.js";import"./Markdown-BEXS0adT.js";import"./CodeBlock-Dh8-RuFG.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DtdIQ4hb.js";import"./IconWarning-BDc9REUs.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./Tooltip-CgZvEmjl.js";import"./ClearPropsContextView-CAu383Hu.js";import"./useFocus-BBGclxaJ.js";import"./ProgressBar-DzueJvvV.js";import"./utils-BJK0bMVs.js";import"./Label-Cx6s_AVf.js";import"./Hidden-nF8inpoX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DY6IDqCz.js";import"./context-DAjKPHt4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-G4tJUSCb.js";import"./useFocusable-B2RmLQJm.js";import"./useFocusRing-4VM8yV9h.js";import"./react-children-utilities-DTc8dbtj.js";import"./Action-DkcWlbm8.js";import"./context-DAzA1DTj.js";import"./useStatic-BRK6B1ib.js";import"./browser-TyqKNGpG.js";import"./getActionGroupSlot-CSj3Q-Jf.js";import"./dynamic-BPQY4zlZ.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./Heading-C0ULUb4N.js";import"./Heading-B2YReqBz.js";import"./RSPContexts-DD7I-zbI.js";import"./InlineCode-B29ogwCg.js";import"./Link-1hy0AqTX.js";import"./usePress-DbIX1hOn.js";import"./Separator-DxnY-EWA.js";import"./Separator-DNulUYCD.js";import"./CollectionBuilder-ByXQf4MT.js";import"./Text-CIiZgPf0.js";import"./EmulatedBoldText-DtNQdD50.js";import"./Text-DD2-gbIJ.js";import"./TextArea-kKKmI8fH.js";import"./TextFieldBase-CCq1KYqZ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CgOqQd8T.js";import"./TextField-w7amMjDR.js";import"./FieldError-B_KU3Njk.js";import"./Form-pelauJUP.js";import"./Group-QAGn5nhU.js";import"./useTextField-rIWZAcfs.js";import"./useFormReset-CnZg8poR.js";import"./ReactAriaControlledValueFix-CNNoItwk.js";import"./useManagedValue-rY3vKTud.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-3c39ELf0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-2XgEXCNC.js";import"./ContextMenuSection-BbIodJXW.js";import"./Popover-Bm-rwUXe.js";import"./DialogTriggerView-D0BwiIeE.js";import"./FocusScope-Bx_BpPkG.js";import"./useCollator-BJahqQL5.js";import"./VisuallyHidden-CsqdnZMW.js";import"./Collection-YnS658O_.js";import"./SearchField-6u-M9e2f.js";import"./useEvent-BWtfFYs6.js";import"./SelectionManager-DxFegUxo.js";import"./Switch-Dw1iDizI.js";import"./useToggleState-fIj2JyOG.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
