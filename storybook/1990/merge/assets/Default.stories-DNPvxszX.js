import{j as r,r as H}from"./iframe-D_4x6qMj.js";import{M as t}from"./MarkdownEditor-BpcOiU9j.js";import{L as u}from"./Label-DYejL5eD.js";import{F as K}from"./FieldError-B9c3ag_Q.js";import{u as N,F as U,a as Y}from"./Form-D6PyxozE.js";import{B as P}from"./Button-CEOuDC8N.js";import{S as G}from"./Section-D4gOspAt.js";import"./Markdown-CTjEFVTm.js";import"./CodeBlock-C3rXTGCl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BGM3QfLs.js";import"./IconWarning-Dzi10vRl.js";import"./PropsContextProvider-CALK_gXH.js";import"./mergeRefs-D11WPw_n.js";import"./index-D_JTLils.js";import"./Tooltip-ocfZLzDU.js";import"./utils-xe5YSam6.js";import"./OverlayArrow-CvQNm9iK.js";import"./useFocus-Drnb5e9K.js";import"./ProgressBar-CJC6Hhu1.js";import"./Label-CCRaVzEI.js";import"./Hidden-B0gkrfj6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CiC867Ap.js";import"./context-DM98rbVc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CYhMOmxg.js";import"./useFocusable-B8Ri4aea.js";import"./useFocusRing-TvNskxef.js";import"./react-children-utilities-1cy4y3-z.js";import"./Action-B-FwCqpK.js";import"./context-BMDWm5Qc.js";import"./useStatic-BjYYLPCu.js";import"./browser-CZBg7HNp.js";import"./getActionGroupSlot-NuufWXWm.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BlYhncvt.js";import"./Heading-Vf-7-D82.js";import"./Heading-Dnp79pld.js";import"./RSPContexts-bNEpgRFQ.js";import"./InlineCode-BmD9U3Kt.js";import"./Link-BbtC5HYQ.js";import"./usePress-C9nt0YbM.js";import"./Separator-C2PzFiJ0.js";import"./Separator-DqWrBJRs.js";import"./CollectionBuilder-NsEnfSHY.js";import"./Text-CweuBtPf.js";import"./EmulatedBoldText-B9kAgGNC.js";import"./Text-Cu7PdI7W.js";import"./TextArea-DpGVsOHO.js";import"./TextFieldBase-8Iyer9w-.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CeF2d92u.js";import"./TextField-DSJ_5HB7.js";import"./FieldError-DwM-vJJl.js";import"./Form-D0g69-ep.js";import"./Group-DiVNF80n.js";import"./useTextField-U9hEKPZN.js";import"./useFormReset-Bck6lqok.js";import"./ReactAriaControlledValueFix-Co9Cp--Q.js";import"./LoadingSpinner-YiUTGVQG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CpmoBq4h.js";import"./ContextMenuSection-C8JEahQ3.js";import"./Dialog-DPQkTFHJ.js";import"./Collection-CnzW5hBw.js";import"./SearchField-FNUBcSFK.js";import"./useEvent-CxdF7c9o.js";import"./SelectionManager-Dt4Zb6ag.js";import"./useCollator-Bn9eJ8f5.js";import"./FocusScope-CncZTdzF.js";import"./VisuallyHidden-tZR9lL9G.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
