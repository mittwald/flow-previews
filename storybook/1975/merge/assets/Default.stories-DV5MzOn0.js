import{j as r,r as H}from"./iframe-CyjdJwA_.js";import{M as t}from"./MarkdownEditor-CYO-iWCZ.js";import{L as u}from"./Label-C9WW8BSu.js";import{F as K}from"./FieldError-CxFSfXCR.js";import{u as N,F as U,a as Y}from"./Form-CCxB20fI.js";import{B as P}from"./Button-CWr2AVcL.js";import{S as G}from"./Section-DFcwGf3p.js";import"./Markdown-Beb2PkKC.js";import"./CodeBlock-B6Hz7-Z4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bi8UQ4sI.js";import"./IconWarning-BNd_xcWu.js";import"./PropsContextProvider-Blii8gH5.js";import"./mergeRefs-C5H4AiTO.js";import"./index-Do1c4p-v.js";import"./Tooltip-DUy_mpH3.js";import"./utils-BrA2SjLY.js";import"./OverlayArrow-DmbU7KN6.js";import"./useFocus-kh_9V4VQ.js";import"./ProgressBar-ClszfSN8.js";import"./Label-CzrgQa8v.js";import"./Hidden-CYpTJoxS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CugdBF8m.js";import"./context-U2uVXE2j.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BMmGZgaN.js";import"./useFocusable-Bd5Kcxc9.js";import"./useFocusRing-CIRJex-W.js";import"./react-children-utilities-CSMqrScv.js";import"./Action-pU0vZnxr.js";import"./context-D_hcNXze.js";import"./useStatic-Cvg4-ciK.js";import"./browser-COCGQLuR.js";import"./getActionGroupSlot-Dg5re8Hn.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Dqj-tDTI.js";import"./Heading-BlOPZbVl.js";import"./Heading-DUgzyzjX.js";import"./RSPContexts-CNBrQuIV.js";import"./InlineCode-BAVbrqdT.js";import"./Link-CwsSu8y8.js";import"./usePress-DeuQBFn_.js";import"./Separator-BFS4X1_Z.js";import"./Separator-CV-ezLmw.js";import"./CollectionBuilder-CmkEkI_W.js";import"./Text-usW35pyR.js";import"./EmulatedBoldText-Cm98uRnm.js";import"./Text-D5hkVXTt.js";import"./TextArea-DBjBWWng.js";import"./TextFieldBase-C_z0JUWc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CrXUGaN5.js";import"./TextField-CvU05O_G.js";import"./FieldError-FJXabK8a.js";import"./Form-CbzZ-2v4.js";import"./Group-fGbj7PxB.js";import"./useTextField-Ck4Yz0Jg.js";import"./useFormReset-DhmyIfWL.js";import"./ReactAriaControlledValueFix-BPGHylxl.js";import"./LoadingSpinner-Cs_zZqgK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DtnX1sXm.js";import"./ContextMenuSection-BlPAfXHe.js";import"./Dialog-CDIzoxMq.js";import"./Collection-BOX-2d7N.js";import"./SearchField-CcfmTUF_.js";import"./useEvent-CI_dmwlv.js";import"./SelectionManager-bu__7N-a.js";import"./useCollator-Bj1Rn4ie.js";import"./FocusScope-BgpQQFhh.js";import"./VisuallyHidden-DG_rebhq.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
