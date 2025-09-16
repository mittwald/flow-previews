import{j as r,r as H}from"./iframe-DhBjVFTT.js";import{M as t}from"./MarkdownEditor-DFW03tVp.js";import{L as u}from"./Label-CYVPNsy_.js";import{F as K}from"./FieldError-B3yibmjV.js";import{u as N,F as U,a as Y}from"./Form-Bdiu5ga7.js";import{B as P}from"./Button-Dt7yciC3.js";import{S as G}from"./Section-Bi6d6L_y.js";import"./Markdown-BN2bwdun.js";import"./CodeBlock-gLPpo_hl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B2QUOIFK.js";import"./IconWarning-BnanZbEc.js";import"./PropsContextProvider-Ut4T4mCk.js";import"./mergeRefs-DgdJvSW3.js";import"./index-CE8kWNv6.js";import"./Tooltip-yRk8hui7.js";import"./utils-BiTM62RC.js";import"./OverlayArrow-CEwR5798.js";import"./useFocus-Boz126Wy.js";import"./ProgressBar-wpu_Jmey.js";import"./Label-9p36wJlw.js";import"./Hidden-CPEF8tx-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cy7W7M25.js";import"./context-BcZ3stI5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cf0EFMq_.js";import"./useFocusable-t-PCv4_E.js";import"./useFocusRing-CZOlFmxO.js";import"./react-children-utilities-2FB-J9TR.js";import"./Action-D5bbeFf7.js";import"./context-DD9eHGwL.js";import"./useStatic-b8Yzhzvr.js";import"./browser-C93HlYrv.js";import"./getActionGroupSlot-C52LfH-w.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Dqb82j34.js";import"./Heading-DqOHm_4A.js";import"./Heading-Dv-6vxEo.js";import"./RSPContexts-CwPCOUNA.js";import"./InlineCode-Zb1_ti7l.js";import"./Link-BeeoFTbr.js";import"./usePress-IeWuLCB9.js";import"./Separator-BpB9dAXh.js";import"./Separator-LVnLAfMb.js";import"./CollectionBuilder-C5ynp6as.js";import"./Text-DF-6yo40.js";import"./EmulatedBoldText-BWS0giPu.js";import"./Text-BCOK263g.js";import"./TextArea-AR3uOrR-.js";import"./TextFieldBase-2Xjpboio.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BYEOk6pt.js";import"./TextField-BjhwsOaA.js";import"./FieldError-NbMb9-3J.js";import"./Form-CStdbKj5.js";import"./Group-DbR3J14H.js";import"./useTextField-CmDnLbvp.js";import"./useFormReset-CLUGxJas.js";import"./ReactAriaControlledValueFix-v6pyw84W.js";import"./LoadingSpinner-HTsZz-Eh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClnqUudF.js";import"./ContextMenuSection-CT3iYxF3.js";import"./Dialog-BVFVztxJ.js";import"./Collection-BOa2gfjn.js";import"./SearchField-o8QMGYZs.js";import"./useEvent-CK4Bm0IT.js";import"./SelectionManager-TQlp0lcm.js";import"./useCollator-Ds09yMoF.js";import"./FocusScope-Cxsex6N2.js";import"./VisuallyHidden-BaY3Aahk.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,F,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var j,R,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,k,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,D,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      </Form>;
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var I,z,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,q,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const ge=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,a as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,n as WithLabel,d as WithOnChange,l as WithRef,ge as __namedExportsOrder,he as default};
