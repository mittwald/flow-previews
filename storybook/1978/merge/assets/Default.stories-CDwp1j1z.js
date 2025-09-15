import{j as r,r as H}from"./iframe-Ddl3oy7j.js";import{M as t}from"./MarkdownEditor-DV7PglgH.js";import{L as u}from"./Label-CPFqIdaY.js";import{F as K}from"./FieldError-D1LH8qMf.js";import{u as N,F as U,a as Y}from"./Form-DhHChfyG.js";import{B as P}from"./Button-DqaKYKf3.js";import{S as G}from"./Section-CJNww9Gn.js";import"./Markdown-Bne8inte.js";import"./CodeBlock-C7QvtNGb.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D--jUyLR.js";import"./IconWarning-c_EtJYHN.js";import"./PropsContextProvider-CnW5HdO8.js";import"./mergeRefs-C9z6gsFG.js";import"./index-C1skfeMg.js";import"./Tooltip-BeiYGpji.js";import"./utils-Ci_tygJf.js";import"./OverlayArrow-BcGuja2I.js";import"./useFocus-DmoZ0prk.js";import"./ProgressBar-DxjBV5HR.js";import"./Label-3HbXpuHu.js";import"./Hidden-ywj4FOpy.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DcZpZe32.js";import"./context-DO4TRSlT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CmfVHeBq.js";import"./useFocusable-Czgc212e.js";import"./useFocusRing-BmS0Hu73.js";import"./react-children-utilities-DUO3mpW1.js";import"./Action-DUd3tSxu.js";import"./context-CodLc8vz.js";import"./useStatic-CuoXAQeJ.js";import"./browser-bNZZs8J3.js";import"./getActionGroupSlot-Ceebw4du.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CALAZrAH.js";import"./Heading-CIxDrxL5.js";import"./Heading-C93AsN8G.js";import"./RSPContexts-DkASzfG8.js";import"./InlineCode-DuJ23bSG.js";import"./Link-DxuNuccD.js";import"./usePress-CocvpA_Y.js";import"./Separator-CUGTrl9B.js";import"./Separator-C6XPVHs3.js";import"./CollectionBuilder-B4jSBOCT.js";import"./Text-QWoB1dLM.js";import"./EmulatedBoldText-CxwJM-M1.js";import"./Text-sFlu2MbQ.js";import"./TextArea-R2BjYLP-.js";import"./TextFieldBase-BHNQYBwX.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CeyOZW-A.js";import"./TextField-WM0IMQR5.js";import"./FieldError-DKHffRep.js";import"./Form-BuMmY0ok.js";import"./Group-DIPAAm7c.js";import"./useTextField-FYLvyiMg.js";import"./useFormReset-DqrIwWOQ.js";import"./ReactAriaControlledValueFix-QpyB1Smh.js";import"./LoadingSpinner-CMgBxs5g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DtXFMSeo.js";import"./ContextMenuSection-wvBBY48w.js";import"./Dialog-BWiPBE7M.js";import"./Collection-CvGKQDYH.js";import"./SearchField-DspYPOuY.js";import"./useEvent-DmjLh1yy.js";import"./SelectionManager-Dg6K_iw1.js";import"./useCollator-B4sklduu.js";import"./FocusScope-xkAre9m0.js";import"./VisuallyHidden-D1ge_fMG.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
