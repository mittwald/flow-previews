import{j as r,r as H}from"./iframe-DkzCwCX4.js";import{M as t}from"./MarkdownEditor-BOkOiACH.js";import{L as l}from"./Label-BxAVz1UC.js";import{F as K}from"./FieldError-ZxrKxv-k.js";import{u as N,F as U,a as Y}from"./Form-Dq-LmidO.js";import{B as g}from"./Button-BnlekXC3.js";import{S as G}from"./Section-DmfqvBI5.js";import"./Markdown-BZesw2ul.js";import"./CodeBlock-OALu6zo8.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bfd8TK0n.js";import"./IconWarning-DW3eva0Y.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./Tooltip-BA0T6AIN.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./useFocus-ib9l0UKV.js";import"./ProgressBar-BPpVJdpP.js";import"./utils-CLIXtwVU.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BJPqeoy6.js";import"./context-R4HBJhIj.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BOJEDAaV.js";import"./useFocusable-DGleC9_O.js";import"./useFocusRing-D8oCWed-.js";import"./react-children-utilities-wnwBlo7x.js";import"./Action-waCXg2Hq.js";import"./context-C3VhVMcy.js";import"./useStatic-DPeMNtEl.js";import"./browser-Dj2wjmgz.js";import"./getActionGroupSlot-OrHKCra6.js";import"./dynamic-BbyFekY5.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./Heading-BRlbbFpw.js";import"./Heading-CMyU0Jt0.js";import"./RSPContexts-ypxcCxo7.js";import"./InlineCode-DoGg8HSa.js";import"./Link-C7q_dDkE.js";import"./usePress-Bo4yNuZG.js";import"./Separator-Bm-5PA3G.js";import"./Separator-uSA5LFxj.js";import"./CollectionBuilder-BePk8bko.js";import"./Text-nAHNspGp.js";import"./EmulatedBoldText-DFUvlzyn.js";import"./Text-lQk_ytCv.js";import"./TextArea-C7r8mR2Z.js";import"./TextFieldBase-DJQnyO3J.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CBKqvqxl.js";import"./TextField-DIeR-UPB.js";import"./FieldError-Jo1S5986.js";import"./Form-Bd46is8r.js";import"./Group-0pV7udqg.js";import"./useTextField-DDEFSut-.js";import"./useFormReset-Dtav30sm.js";import"./ReactAriaControlledValueFix-Bp1vPYDx.js";import"./useManagedValue-CeGpj0UL.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CQddXTjo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BmtE6ca-.js";import"./ContextMenuSection-DDW5roO_.js";import"./Popover-DLWa551b.js";import"./DialogTriggerView-C0Uk_5SJ.js";import"./FocusScope-DTdzqE55.js";import"./useCollator-CJfXA3qY.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./Collection-DoEHjGcH.js";import"./SearchField-Cdw14afw.js";import"./useEvent-D_rPsZtc.js";import"./SelectionManager-Dg3ay1FE.js";import"./Switch-CIZmIw2v.js";import"./useToggleState-BRwNVh6w.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
