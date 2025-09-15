import{j as r,r as H}from"./iframe-BEG7G6KF.js";import{M as t}from"./MarkdownEditor-D_c9cgLd.js";import{L as u}from"./Label-BWItg-fg.js";import{F as K}from"./FieldError-wC63IlUB.js";import{u as N,F as U,a as Y}from"./Form-B44GHEDz.js";import{B as P}from"./Button-C8pjFnNt.js";import{S as G}from"./Section-BQ8A7HK_.js";import"./Markdown-xqX9AhzX.js";import"./CodeBlock-CW7cyXDO.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D6sJk5cz.js";import"./IconWarning-a2LhFy5L.js";import"./PropsContextProvider-BB1dsjx4.js";import"./mergeRefs-CMO5wbBQ.js";import"./index-i7zmZRe4.js";import"./Tooltip-BzY8EIeK.js";import"./utils-LUgpLpbe.js";import"./OverlayArrow-DQ1DVDYI.js";import"./useFocus-C-WlMmOQ.js";import"./ProgressBar-ZHT95b40.js";import"./Label-14uT22y-.js";import"./Hidden-CoHG5x6F.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Bw-P6Vd2.js";import"./context-PcVqvq8B.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D4nWDDQs.js";import"./useFocusable-CiBlyEkt.js";import"./useFocusRing-COhl_nbF.js";import"./react-children-utilities-ktrY2hXD.js";import"./Action-DW9QNbuj.js";import"./context-C9GFjuXq.js";import"./useStatic-HcSwkvD9.js";import"./browser-hhGcWijl.js";import"./getActionGroupSlot-P9UQ3z6q.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Bxu3MgFF.js";import"./Heading-CqHSbf_u.js";import"./Heading-BWqSnswS.js";import"./RSPContexts-BS1UUkSC.js";import"./InlineCode-CWQsfIA2.js";import"./Link-BcrJI-Cd.js";import"./usePress-CNi18aVS.js";import"./Separator-DuUo7eGc.js";import"./Separator-CEaf2o7P.js";import"./CollectionBuilder-BfQ_bfa9.js";import"./Text-CsmURpVi.js";import"./EmulatedBoldText-BEr1TBhP.js";import"./Text-CjtFlosk.js";import"./TextArea-BpvTsegT.js";import"./TextFieldBase-Bfac5SxX.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DD32srnx.js";import"./TextField-BtimxscU.js";import"./FieldError-Ce2Todsu.js";import"./Form-CRnDK1No.js";import"./Group-Bu8ViuOf.js";import"./useTextField-DYB1JFCS.js";import"./useFormReset-D7bUq-wz.js";import"./ReactAriaControlledValueFix-BPvVbRNR.js";import"./LoadingSpinner-SGV_yUHE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DTQhGa04.js";import"./ContextMenuSection-CZDyQTp9.js";import"./Dialog-B1wekzMl.js";import"./Collection-Q6_7RVnG.js";import"./SearchField-DCAIqxcw.js";import"./useEvent-CaCnB0bX.js";import"./SelectionManager-CXVNswVM.js";import"./useCollator-CTD1PftI.js";import"./FocusScope-CVsbtSBN.js";import"./VisuallyHidden-DBx6majZ.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
