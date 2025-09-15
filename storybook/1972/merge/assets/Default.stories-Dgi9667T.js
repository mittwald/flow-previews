import{j as r,r as H}from"./iframe-DSkJqBaJ.js";import{M as t}from"./MarkdownEditor-DT3_7efO.js";import{L as u}from"./Label-C19pMB8k.js";import{F as K}from"./FieldError-BRJrB4yt.js";import{u as N,F as U,a as Y}from"./Form-DL2mQqTy.js";import{B as P}from"./Button-CDKKJ9Lp.js";import{S as G}from"./Section-CtOFRU4c.js";import"./Markdown-BwcEY5nU.js";import"./CodeBlock-9nVSkGY7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BOOqo5wF.js";import"./IconWarning-CVH07XBs.js";import"./PropsContextProvider-DjRPgLoo.js";import"./mergeRefs-Z8wKoPrZ.js";import"./index-CL0qA5Bh.js";import"./Tooltip-C4bTDnP3.js";import"./utils-1-N0d2c9.js";import"./OverlayArrow-Bs3dimZg.js";import"./useFocus-G_FCb5od.js";import"./ProgressBar-CSEftjVr.js";import"./Label-C14Bap2a.js";import"./Hidden-4KMmbp7C.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-IHONIae1.js";import"./context-BGjjWy4a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BYdmrjiu.js";import"./useFocusable-DnFOFct-.js";import"./useFocusRing-CxQcEY3i.js";import"./react-children-utilities-DWi7dDnN.js";import"./Action-BQB4Vs5h.js";import"./context-C-BSE4mB.js";import"./useStatic-B7cHRXbC.js";import"./browser-D8d4HdJF.js";import"./getActionGroupSlot-I0QCsr-6.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-D8TjtXwl.js";import"./Heading-C3BqIrHn.js";import"./Heading-1Ap11lE6.js";import"./RSPContexts-DQKO52xl.js";import"./InlineCode-D4rvtrPy.js";import"./Link-BHQ0bz3X.js";import"./usePress-D7WkZjMs.js";import"./Separator-BdQ5jaXF.js";import"./Separator-CM2q7_wH.js";import"./CollectionBuilder-BxVvMuh2.js";import"./Text-DEYyJHCZ.js";import"./EmulatedBoldText-CY4h7UZj.js";import"./Text-BLRpFskM.js";import"./TextArea-BleGXI1J.js";import"./TextFieldBase-DN8mTcm5.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Bn1Apy-f.js";import"./TextField-MvldIgrc.js";import"./FieldError-VY00PX4H.js";import"./Form--wHsDFUK.js";import"./Group-3xm6Vzmn.js";import"./useTextField-D7V5JJBm.js";import"./useFormReset-Dcdsxz2S.js";import"./ReactAriaControlledValueFix-BPCvH6P0.js";import"./LoadingSpinner-Cpke26nP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D_WSnJ-T.js";import"./ContextMenuSection-_Bs9Wxdx.js";import"./Dialog-DxHA7eu_.js";import"./Collection-DAtUHX6x.js";import"./SearchField-COlgHc0W.js";import"./useEvent-cDDpRPoS.js";import"./SelectionManager-B8u4m53M.js";import"./useCollator-DnEaXEjZ.js";import"./FocusScope-CsPDgYW_.js";import"./VisuallyHidden-BCoHKLFo.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
