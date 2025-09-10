import{j as r,r as H}from"./iframe-DcFGg16D.js";import{M as t}from"./MarkdownEditor-DoQzRsHS.js";import{L as u}from"./Label-DUWIrMUF.js";import{F as K}from"./FieldError-CkYOPuvt.js";import{u as N,F as U,a as Y}from"./Form-BsijhcD9.js";import{B as P}from"./Button-DJ4LLcBR.js";import{S as G}from"./Section-Ip9PcGMQ.js";import"./Markdown-gQIjxIPK.js";import"./CodeBlock-Dg9BWZxo.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D1LNH7uD.js";import"./IconWarning-CHPRxwlr.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./Tooltip-CpVCFjr9.js";import"./utils-MGL4-aZB.js";import"./OverlayArrow-D67G4pFu.js";import"./useFocus-U4AMFjB6.js";import"./ProgressBar-B1oFmI6J.js";import"./Label-DA_WgLUG.js";import"./Hidden-Cmuw7QWn.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BWfTCaKH.js";import"./context-2JOSlQoN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ecFtZ1Px.js";import"./useFocusable-CBHGItg9.js";import"./useFocusRing-C2kFO1mh.js";import"./react-children-utilities-BlU-ltQy.js";import"./Action-BHkIIo1y.js";import"./context-DiGr7rSI.js";import"./useStatic-DiqMOEo2.js";import"./browser-CVxrqIOh.js";import"./getActionGroupSlot-CBzmOk9k.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./Heading-n_TZDmqA.js";import"./Heading-B3gs3td_.js";import"./RSPContexts-BGgHSZk2.js";import"./InlineCode-Yyh0yc1a.js";import"./Link-DQW6N6eW.js";import"./usePress-Dxku2mh7.js";import"./Separator-Djh8x6hP.js";import"./Separator-RxFnsY_N.js";import"./CollectionBuilder-C1fftWwC.js";import"./Text-DMVvzt3E.js";import"./EmulatedBoldText-BLYaA1Bn.js";import"./Text-Bo-pyWRw.js";import"./TextArea-CxZhqYmV.js";import"./TextFieldBase-DyrsQMnY.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BjLPvxW4.js";import"./TextField-DxEII3el.js";import"./FieldError-Dg2s55Gd.js";import"./Form-67TyawWi.js";import"./Group-Cfinkx-g.js";import"./useTextField-DnoqRTqc.js";import"./useFormReset-CHCY757v.js";import"./ReactAriaControlledValueFix-C1sZs9Tb.js";import"./LoadingSpinner-B2KP9AW1.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-eLaBErzq.js";import"./ContextMenuSection-D_jMxJT1.js";import"./Dialog-BjymA24M.js";import"./Collection-DSC_s3_U.js";import"./SearchField-DOOJGDQj.js";import"./useEvent-Ca5y4KLG.js";import"./SelectionManager-Cc_FCoHE.js";import"./useCollator-IqIPfKpf.js";import"./FocusScope-Csa5zz-0.js";import"./VisuallyHidden-MvD6uM4h.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
